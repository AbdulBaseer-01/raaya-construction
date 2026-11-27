import Contact from "@/components/contact/Contact"
import Hero from "@/components/contact/Hero"
import Map from "@/components/contact/Map"

export default function ContactUsPage() {
  return (
    <>
      {/* Enquiry block first, then "Our footprint" (brief, section 20). */}
      <Contact />
      <Hero />
      <Map />
    </>
  )
}
