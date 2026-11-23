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

export default function Home() {
  return (
    // home page
    <div>
      <Nav />
      <Hero />
      <Vlogs />
      <Products />
      <Why />
      <Process />
      <Projects />
      <TrustedBy />
      <Testimonials />
      <Footer />
    </div>
  );
}
