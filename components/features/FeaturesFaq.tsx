import Accordion from '@/components/site/Accordion'
import { DisplayHeading, Eyebrow, OutlineLink, shell } from '@/components/site/primitives'

const faqs = [
  {
    question: 'What is prefab construction and how is it different from traditional building?',
    answer:
      'Prefab construction involves building structures offsite in controlled factory conditions, then assembling them on location. This allows for faster delivery, better quality control, and minimized environmental impact, unlike traditional construction, which is time-consuming and weather-dependent.',
  },
  {
    question: 'How long does it take to deliver and install a Texo prefab structure?',
    answer:
      // TODO(Texo): add the typical installation range at the end (brief, section 18).
      'You get drawings and a quote within 48 hours. Once you approve, factory production typically takes about 10 days, depending on our schedule. Installation depends on size and site.',
  },
  {
    question: 'Can I customize the design of my prefab unit?',
    answer:
      'Yes, we offer fully customizable prefab solutions tailored to your space, purpose, and style, from interiors and layouts to material finishes.',
  },
  {
    question: 'Are Texo prefab structures durable and weatherproof?',
    answer:
      'Absolutely. Our structures are built with European-grade materials and tested to withstand extreme Indian climates, from monsoons to high heat.',
  },
  {
    question: 'What is the lifespan of a Texo prefab building?',
    answer:
      'With proper maintenance, our prefab buildings can last 30+ years. The use of high-strength steel frames and premium finishes ensures long-term durability.',
  },
  {
    question: 'Are Texo prefab structures environmentally friendly?',
    // The question was reworded (brief, section 18), so the answer now opens with "Yes" to keep its meaning.
    answer: 'Yes. Our process generates less onsite waste, uses recyclable materials, and promotes sustainable building practices.',
  },
  {
    question: 'Can I relocate or expand my prefab structure later?',
    answer: 'Yes! Our modular designs are mobility-ready & Scable, perfect for businesses or individuals who may move or expand.',
  },
  {
    question: 'What kind of applications or industries can use Texo prefab structures?',
    answer:
      'We serve a wide range of sectors, including residential, hospitality, offices, healthcare, retail, and educational institutions.',
  },
  {
    question: 'Do you provide installation and after-sales support?',
    answer:
      'Yes. Our Logistics & Installation team ensures professional setup, and we offer ongoing support and maintenance when needed.',
  },
  {
    question: 'Are Texo prefab homes legal and approved by local authorities?',
    answer: 'Yes. All our units comply with local building codes, safety norms, and are approved where required.',
  },
]

export default function FeaturesFaq() {
  return (
    <section className="border-t border-black/15 bg-[#f5f2ec]">
      <div className={`${shell} grid gap-14 py-24 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-36`}>
        <div className="md:sticky md:top-[calc(68px+4rem)] md:self-start">
          <Eyebrow className="mb-8">FAQ / 05</Eyebrow>
          <DisplayHeading lines={['Questions', 'we hear', 'most.']} className="text-[clamp(2.6rem,5vw,6.2rem)]" />
          <p className="mb-8 mt-10 max-w-[21rem] text-[0.82rem] leading-[1.8] text-black/60">
            {/* TODO(Texo): add "within [response time]" once confirmed (brief, section 18). */}
            Can&apos;t find your answer below? Our team responds to all enquiries with a real answer, not a template.
          </p>
          <OutlineLink href="/contact-us">Contact our experts</OutlineLink>
        </div>

        <Accordion items={faqs} />
      </div>
    </section>
  )
}
