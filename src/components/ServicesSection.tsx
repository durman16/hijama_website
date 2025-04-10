import { Droplet, CalendarCheck, Phone } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const services = [
    {
      icon: <Droplet className="h-10 w-10 text-green-600" />,
      title: "What is Hijama?",
      description: "Hijama is a traditional therapy that removes harmful blood for better health and balance.",
    },
    {
      icon: <CalendarCheck className="h-10 w-10 text-green-600" />,
      title: "Appointments",
      description: "Flexible scheduling. Book your personalized session and start your healing journey.",
    },
    {
      icon: <Phone className="h-10 w-10 text-green-600" />,
      title: "Contact Us",
      description: "Reach out by phone, email, or WhatsApp. We’re here to help!",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 max-w-5xl mx-auto px-4">
      {services.map((service, i) => (
        <ServiceCard key={i} {...service} />
      ))}
    </section>
  );
}
