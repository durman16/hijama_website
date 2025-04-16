import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="bg-green-50 text-gray-800">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Services />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}
