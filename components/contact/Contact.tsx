"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { DisplayHeading, Eyebrow, outlineButton, pad, shell } from "@/components/site/primitives";

const offices = [
  {
    label: "Head Office",
    city: "Hyderabad",
    address: ["1-2-3/69, xyz street,", "Hyderabad, Telangana — 100 001"],
    hours: "Mon – Sat · 9:00 AM – 6:30 PM",
  },
  {
    label: "Branch Office",
    city: "Hyderabad",
    address: ["xyz complex, omg street,", "Hyderabad — 100 001"],
    hours: "Mon – Sat · 9:30 AM – 6:00 PM",
  },
];

const phones = ["+91 987654321", "+91 123456789"];
const emails = ["texomain.in", "texoman.in"];

const emptyForm = { name: "", email: "", phone: "", message: "" };

const fieldClass =
  "block w-full min-w-0 border-0 border-b border-black/20 bg-transparent px-0 py-3 text-[0.95rem] text-black outline-none transition-colors placeholder:text-black/30 hover:border-black/35 focus:border-[#886c46]";
const labelClass =
  "text-[0.58rem] uppercase tracking-[0.22em] text-black/55 transition-colors group-focus-within:text-[#886c46]";

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Same request as before (POST /api/lead with name, email, phone, message).
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(payload.error ?? "Unable to send your message");
      }

      setSubmitted(true);
      setForm(emptyForm);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send your message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="enquiry" className="bg-white">
      <div className={`${shell} py-24 md:py-36`}>
        <div className="mb-16 md:mb-20">
          <Eyebrow className="mb-8">Get In Touch</Eyebrow>
          <DisplayHeading lines={["We'd love to", "hear", "from you."]} />
        </div>

        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          {/* ── Details ── */}
          <div className="min-w-0">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
              {offices.map((office, i) => (
                <div key={office.label} className="grid grid-cols-[minmax(3rem,0.3fr)_minmax(0,1.7fr)] border-t border-black/70 pt-5">
                  <span className="text-[0.85rem]">{pad(i + 1)}</span>
                  <div className="border-l border-black/70 pl-5">
                    <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#886c46]">{office.label}</p>
                    <h3 className="mt-3 text-[clamp(1.7rem,2.4vw,2.6rem)] uppercase leading-[0.88] tracking-[-0.065em]">{office.city}</h3>
                    <address className="mt-4 text-[0.85rem] not-italic leading-[1.7] text-black/65">
                      {office.address[0]}
                      <br />
                      {office.address[1]}
                    </address>
                    <p className="mt-3 text-[0.58rem] uppercase tracking-[0.2em] text-black/50">{office.hours}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-black/15 pt-6">
              <p className="text-[0.58rem] uppercase tracking-[0.22em] text-black/50">Contact Details</p>
              <ul className="mt-5 grid gap-4 text-[0.95rem]">
                {phones.map((num) => (
                  <li key={num}>
                    <a href={`tel:${num.replace(/\s/g, "")}`} className="group inline-flex items-center gap-3 transition-colors hover:text-[#886c46]">
                      <Phone className="h-4 w-4 shrink-0 text-[#886c46]" strokeWidth={1.5} aria-hidden="true" />
                      {num}
                    </a>
                  </li>
                ))}
                {emails.map((email) => (
                  <li key={email}>
                    <a href={`mailto:${email}`} className="group inline-flex items-center gap-3 transition-colors hover:text-[#886c46]">
                      <Mail className="h-4 w-4 shrink-0 text-[#886c46]" strokeWidth={1.5} aria-hidden="true" />
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Form ── */}
          <div className="min-w-0 border border-black/15 bg-[#f3ede3] p-6 sm:p-10">
            {submitted ? (
              <div className="flex min-h-[24rem] flex-col justify-center" role="status" aria-live="polite">
                <span aria-hidden="true" className="block h-px w-12 bg-[#886c46]" />
                <p className="mt-8 text-[clamp(2.2rem,4vw,3.6rem)] uppercase leading-[0.85] tracking-[-0.07em]">Message sent.</p>
                <p className="mt-5 max-w-[22rem] text-[0.85rem] leading-[1.7] text-black/60">
                  Thank you for reaching out. We&apos;ll get back to you within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(emptyForm);
                  }}
                  className="mt-8 w-fit text-[0.62rem] uppercase tracking-[0.2em] text-[#886c46] underline underline-offset-4 transition-colors hover:text-black"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div>
                  <p className="text-[clamp(1.6rem,2.2vw,2.2rem)] uppercase leading-[0.9] tracking-[-0.06em] text-[#886c46]">Say hello.</p>
                  <p className="mt-3 text-[0.85rem] leading-[1.7] text-black/55">
                    Fill in the form and our team will get back to you shortly.
                  </p>
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  <div className="group min-w-0">
                    <label htmlFor="contact-name" className={labelClass}>
                      Full Name <span className="text-[#886c46]">*</span>
                    </label>
                    <input id="contact-name" type="text" name="name" required autoComplete="name" value={form.name} onChange={handleChange} placeholder="Arjun Sharma" className={fieldClass} />
                  </div>
                  <div className="group min-w-0">
                    <label htmlFor="contact-phone" className={labelClass}>
                      Phone
                    </label>
                    <input id="contact-phone" type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={handleChange} placeholder="+91 98200 XXXXX" className={fieldClass} />
                  </div>
                  <div className="group min-w-0 sm:col-span-2">
                    <label htmlFor="contact-email" className={labelClass}>
                      Email Address <span className="text-[#886c46]">*</span>
                    </label>
                    <input id="contact-email" type="email" name="email" required autoComplete="email" value={form.email} onChange={handleChange} placeholder="arjun@example.com" className={fieldClass} />
                  </div>
                  <div className="group min-w-0 sm:col-span-2">
                    <label htmlFor="contact-message" className={labelClass}>
                      Message <span className="text-[#886c46]">*</span>
                    </label>
                    <textarea id="contact-message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us how we can help you…" className={`${fieldClass} resize-none`} />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-5 border-t border-black/15 pt-6">
                  <p className="text-[0.58rem] uppercase tracking-[0.2em] text-black/45">
                    <span className="text-[#886c46]">*</span> Required fields
                  </p>
                  <button type="submit" disabled={loading} className={`${outlineButton} bg-white disabled:cursor-wait disabled:opacity-70`}>
                    {loading ? "Sending..." : "Send Message"}
                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </button>
                </div>

                {error ? (
                  <p role="alert" className="border-l-2 border-red-700 pl-4 text-[0.85rem] text-red-700">
                    {error}
                  </p>
                ) : null}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
