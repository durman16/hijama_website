import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-green-100 min-h-screen text-gray-800">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
