import { Mail, Phone } from "lucide-react";
import QuoteForm from "@/components/site/QuoteForm";
import { DisplayHeading, Eyebrow, shell } from "@/components/site/primitives";
import { CONTACT } from "@/lib/siteFacts";

/*
 * Contact details and enquiry form (brief, section 20). There is one office;
 * the dummy branch office, phone numbers and emails were removed.
 *
 * TODO(Texo): add a "WhatsApp us →" link here once the WhatsApp number is supplied.
 */
const office = {
  label: "Office",
  city: "Jeedimetla, Hyderabad",
  address: CONTACT.address,
  hours: "Mon – Sat · 9:00 AM – 6:30 PM",
};

const phones = [
  { kind: "Sales", ...CONTACT.sales },
  { kind: "General", ...CONTACT.general },
];
const emails = [CONTACT.infoEmail, CONTACT.salesEmail];

export default function Contact() {
  return (
    <section id="enquiry" className="scroll-mt-[68px] bg-white">
      <div className={`${shell} py-24 md:py-36`}>
        <div className="mb-16 md:mb-20">
          <Eyebrow className="mb-8">Get In Touch</Eyebrow>
          <DisplayHeading as="h1" lines={["We'd love to", "hear", "from you."]} />
        </div>

        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          {/* ── Details ── */}
          <div className="min-w-0">
            <div className="grid grid-cols-[minmax(3rem,0.3fr)_minmax(0,1.7fr)] border-t border-black/70 pt-5">
              <span className="text-[0.85rem]">01</span>
              <div className="border-l border-black/70 pl-5">
                <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#886c46]">{office.label}</p>
                <h3 className="mt-3 text-[clamp(1.7rem,2.4vw,2.6rem)] uppercase leading-[0.88] tracking-[-0.035em]">{office.city}</h3>
                <address className="mt-4 text-[0.85rem] not-italic leading-[1.7] text-black/65">{office.address}</address>
                <p className="mt-3 text-[0.58rem] uppercase tracking-[0.2em] text-black/50">{office.hours}</p>
              </div>
            </div>

            <div className="mt-10 border-t border-black/15 pt-6">
              <p className="text-[0.58rem] uppercase tracking-[0.22em] text-black/50">Contact Details</p>
              <ul className="mt-5 grid gap-4 text-[0.95rem]">
                {phones.map((phone) => (
                  <li key={phone.href}>
                    <a href={phone.href} className="group inline-flex items-center gap-3 transition-colors hover:text-[#886c46]">
                      <Phone className="h-4 w-4 shrink-0 text-[#886c46]" strokeWidth={1.5} aria-hidden="true" />
                      <span className="w-[4.5rem] text-[0.58rem] uppercase tracking-[0.2em] text-black/50">{phone.kind}</span>
                      {phone.label}
                    </a>
                  </li>
                ))}
                {emails.map((email) => (
                  <li key={email.href}>
                    <a href={email.href} className="group inline-flex items-center gap-3 transition-colors hover:text-[#886c46]">
                      <Mail className="h-4 w-4 shrink-0 text-[#886c46]" strokeWidth={1.5} aria-hidden="true" />
                      {email.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Form (the same enquiry form as the homepage) ── */}
          <div className="min-w-0 border border-black/15 bg-[#f3ede3] p-6 sm:p-10">
            <QuoteForm tone="light" idPrefix="contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
