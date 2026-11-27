import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

async function appendLeadToSheet({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;

  const privateKey =
    process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!spreadsheetId || !clientEmail || !privateKey) {
    throw new Error("Google Sheets environment variables are not configured");
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({
    version: "v4",
    auth,
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: process.env.GOOGLE_SHEETS_RANGE || "Sheet1!A:E",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [[
        new Date().toISOString(),
        name,
        email,
        phone,
        message,
      ]],
    },
  });
}

/** Escapes user input before it is placed in the notification email's HTML. */
const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

const isValidMobile = (value: string) => /^(?:\+?91|0)?[6-9]\d{9}$/.test(value.replace(/[\s-]/g, ""));

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const str = (value: unknown) => (typeof value === "string" ? value.trim() : "");
    const name = str(body.name);
    const email = str(body.email);
    const phone = str(body.phone);
    const buildType = str(body.buildType);
    const location = str(body.location);
    const size = str(body.size);
    const notes = str(body.message);

    // Required: name, a valid mobile number, what they want to build and where (brief, section 11).
    if (!name || !isValidMobile(phone) || !buildType || !location) {
      return NextResponse.json(
        { error: "Name, a valid mobile number, what you want to build and the project location are required." },
        { status: 400 }
      );
    }

    // The sheet keeps its five columns (time, name, email, phone, message); the new
    // enquiry details are written into the message column.
    const message = [
      `What they want to build: ${buildType}`,
      `Project location: ${location}`,
      size ? `Approx. size: ${size} sq.ft` : "",
      notes ? `Anything else: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    await appendLeadToSheet({ name, email, phone, message });

    // Send email notification after the sheet append succeeds.

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Enquiries" <${process.env.SMTP_USER}>`,
      to: process.env.CLIENT_EMAIL,
      ...(email ? { replyTo: email } : {}),
      subject: `New Website Enquiry — ${name}`,

      text: `
New website enquiry

CONTACT DETAILS
----------------
Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}

ENQUIRY
----------------
${message}
      `,

      html: `
        <div style="margin:0;padding:40px 20px;background:#f4f4f4;font-family:Arial,sans-serif;">
          <div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e5e5e5;">

            <div style="padding:28px 32px;border-bottom:1px solid #e5e5e5;">
              <h1 style="margin:0;font-size:24px;color:#111111;">
                New Website Enquiry
              </h1>
              <p style="margin:8px 0 0;color:#666666;font-size:14px;">
                A new enquiry has been submitted through your website.
              </p>
            </div>

            <div style="padding:28px 32px;">

              <h2 style="margin:0 0 18px;font-size:16px;color:#111111;">
                Contact Details
              </h2>

              <table style="width:100%;border-collapse:collapse;font-size:14px;">
                <tr>
                  <td style="padding:10px 0;color:#777777;width:100px;">Name</td>
                  <td style="padding:10px 0;color:#111111;font-weight:600;">
                    ${escapeHtml(name)}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#777777;">Email</td>
                  <td style="padding:10px 0;">
                    ${email ? `<a href="mailto:${escapeHtml(email)}" style="color:#111111;">${escapeHtml(email)}</a>` : "Not provided"}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#777777;">Phone</td>
                  <td style="padding:10px 0;color:#111111;">
                    ${escapeHtml(phone)}
                  </td>
                </tr>
              </table>

              <div style="margin-top:28px;">
                <h2 style="margin:0 0 12px;font-size:16px;color:#111111;">
                  Enquiry
                </h2>

                <div style="padding:18px;background:#f7f7f7;border-left:3px solid #111111;color:#333333;font-size:14px;line-height:1.6;">
                  ${escapeHtml(message).replace(/\n/g, "<br />")}
                </div>
              </div>

              <div style="margin-top:28px;">
                <a
                  href="${email ? `mailto:${escapeHtml(email)}` : `tel:${escapeHtml(phone.replace(/[\s-]/g, ""))}`}"
                  style="display:inline-block;padding:12px 20px;background:#111111;color:#ffffff;text-decoration:none;font-size:14px;"
                >
                  ${email ? "Reply to Enquiry" : "Call back"}
                </a>
              </div>

            </div>

            <div style="padding:18px 32px;border-top:1px solid #e5e5e5;color:#999999;font-size:12px;">
              This enquiry was submitted through the website.
            </div>

          </div>
        </div>
      `,
    });

    // ─────────────────────────────────────────
    // 4. Everything succeeded
    // ─────────────────────────────────────────

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Lead submission error:", error);

    return NextResponse.json(
      { error: "Unable to process your request." },
      { status: 500 }
    );
  }
}