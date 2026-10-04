import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Why from "@/components/Why";
import Products from "@/components/Products";
import Projects from "@/components/Projects";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import FromTheField from "@/components/FromTheField";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Why />
      <Products />
      <Projects />
      <TrustedBy />
      <Testimonials />
      <FromTheField />
      <Contact />
      <Footer />
    </div>
  );
}
