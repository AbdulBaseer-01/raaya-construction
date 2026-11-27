import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Why from "@/components/Why";
import Products from "@/components/Products";
import Projects from "@/components/Projects";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Vlogs from "@/components/Vlogs";
import Process from "@/components/Process";
import MobileActionBar from "@/components/site/MobileActionBar";
import { QUOTE_ANCHOR } from "@/lib/siteFacts";

export default function Home() {
  return (
    // home page; bottom padding on phones clears the fixed call / quote bar
    <div className="max-md:portrait:pb-[calc(3.5rem+env(safe-area-inset-bottom))]">
      {/* The header is shown on the first screen (brief, section 2). */}
      <Nav alwaysVisible />
      <Hero />
      <Vlogs />
      <Products />
      <Why />
      <Process />
      <Projects />
      <TrustedBy />
      <Testimonials />
      <Footer />
      <MobileActionBar quoteHref={QUOTE_ANCHOR} />
    </div>
  );
}
