import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Therapist from "@/components/Therapist";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="bg-green-50 text-gray-800">
      <Header />
      <Hero />
      <About />
      <Therapist />
      <Benefits />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}
