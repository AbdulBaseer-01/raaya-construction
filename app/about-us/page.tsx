import AboutHero from '@/components/about/AboutHero'
import History from '@/components/about/History'
import Promise from '@/components/about/Promise'
import Founders from '@/components/about/Founder'
// import CertiCarousel from '@/components/about/CertiCarousel'
import OurTeam from '@/components/about/OurTeam'
import Carousel from '@/components/about/Carousel'

export default function About() {
  return (
    <>
      <AboutHero />
      <History />
      <Promise />
      <Founders />
      {/*
        TODO(Texo): Certifications are hidden until confirmed (brief, section 17).
        List only certificates Texo can show a copy of, formatted
        "[Standard] — [Scope] — [Certifying body · year]", in components/about/CertiCarousel.tsx,
        then re-enable: <CertiCarousel />
      */}
      <OurTeam />
      <Carousel />
    </>
  )
}
