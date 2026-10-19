import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Why from "@/components/Why";
import Products from "@/components/Products";
import Projects from "@/components/Projects";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Vlogs from "@/components/Vlogs";
import OurProcess from "@/components/OurProcess";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Vlogs />
      <Products />
      <Why />
      <OurProcess />
      <Projects />
      <TrustedBy />
      <Testimonials />
      <Footer />
    </div>
  );
}
