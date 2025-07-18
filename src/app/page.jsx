import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
