import FeaturesHero from '@/components/features/FeaturesHero'
import Vision from '@/components/features/Vision'
import KeyFeatures from '@/components/features/KeyFeatures'
import PlugnPlay from '@/components/features/PlugnPlay'
import Advantages from '@/components/features/Advantage'
import TrustStrip from '@/components/features/TrustStrip'
import HowItWorks from '@/components/features/HowItWorks'
import FeaturesFaq from '@/components/features/FeaturesFaq'
// import FeaturesCta from '@/components/features/FeaturesCta'

/*
 * The Container layers block and the AddOns gallery were already switched off
 * on this page. Their content is kept in lib/featuresAddons.ts so they can be
 * re-enabled with <Container {...containerLayers} /> and
 * <AddOns heroImage={addOnsHeroImage} externalItems={externalItems} internalItems={internalItems} />.
 */
export default function Features() {
  return (
    <>
      <FeaturesHero />
      <Vision />
      <KeyFeatures />
      <PlugnPlay />
      <Advantages />
      <TrustStrip />
      <HowItWorks />
      <FeaturesFaq />
      {/* <FeaturesCta /> */}
    </>
  )
}
