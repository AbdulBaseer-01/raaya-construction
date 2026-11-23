import AboutHero from '@/components/about/AboutHero'
import History from '@/components/about/History'
import Promise from '@/components/about/Promise'
import Founders from '@/components/about/Founder'
import CertiCarousel from '@/components/about/CertiCarousel'
import OurTeam from '@/components/about/OurTeam'
import Carousel from '@/components/about/Carousel'

export default function About() {
  return (
    <>
      <AboutHero />
      <History />
      <Promise />
      <Founders />
      <CertiCarousel />
      <OurTeam />
      <Carousel />
    </>
  )
}
