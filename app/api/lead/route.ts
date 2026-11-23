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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    await appendLeadToSheet({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "",
      message: message.trim(),
    });

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
      replyTo: email.trim(),
      subject: `New Website Enquiry — ${name.trim()}`,

      text: `
New website enquiry

CONTACT DETAILS
----------------
Name: ${name.trim()}
Email: ${email.trim()}
Phone: ${phone?.trim() || "Not provided"}

MESSAGE
----------------
${message.trim()}
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
                    ${name.trim()}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#777777;">Email</td>
                  <td style="padding:10px 0;">
                    <a
                      href="mailto:${email.trim()}"
                      style="color:#111111;"
                    >
                      ${email.trim()}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#777777;">Phone</td>
                  <td style="padding:10px 0;color:#111111;">
                    ${phone?.trim() || "Not provided"}
                  </td>
                </tr>
              </table>

              <div style="margin-top:28px;">
                <h2 style="margin:0 0 12px;font-size:16px;color:#111111;">
                  Message
                </h2>

                <div style="padding:18px;background:#f7f7f7;border-left:3px solid #111111;color:#333333;font-size:14px;line-height:1.6;">
                  ${message.trim().replace(/\n/g, "<br />")}
                </div>
              </div>

              <div style="margin-top:28px;">
                <a
                  href="mailto:${email.trim()}"
                  style="display:inline-block;padding:12px 20px;background:#111111;color:#ffffff;text-decoration:none;font-size:14px;"
                >
                  Reply to Enquiry
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