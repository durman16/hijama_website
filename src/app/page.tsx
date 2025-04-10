import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-green-50 text-gray-800">
      <Header />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Contact />
      <Footer />
    </main>
  );
}
