import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shifasana.ca"),
  title: "ShifaSana | Holistic Hijama & Wellness — Ottawa",
  description: "Professional Hijama (cupping therapy) in Ottawa. Sunnah-based, evidence-backed, hygienic sessions. Book online today.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ShifaSana | Holistic Hijama & Wellness — Ottawa",
    description: "Professional Hijama (cupping therapy) in Ottawa. Sunnah-based, evidence-backed, hygienic sessions. Book online today.",
    url: "https://www.shifasana.ca",
    siteName: "ShifaSana",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/hijama01.jpg",
        width: 1200,
        height: 630,
        alt: "ShifaSana Hijama & Wellness Ottawa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShifaSana | Holistic Hijama & Wellness — Ottawa",
    description: "Professional Hijama (cupping therapy) in Ottawa. Sunnah-based, evidence-backed, hygienic sessions. Book online today.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "ShifaSana",
    url: "https://www.shifasana.ca",
    telephone: "+16138780458",
    image: "https://www.shifasana.ca/images/hijama01.jpg",
    description: "Professional Hijama (cupping therapy) in Ottawa. Sunnah-based, evidence-backed, hygienic sessions.",
    priceRange: "$45–$160",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2047 Carp Road",
      addressLocality: "Ottawa",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hijama & Wellness Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wet Cupping (Hijama)", description: "Traditional prophetic therapy using controlled suction and minor incisions to extract toxins and promote deep healing.", price: "45", priceCurrency: "CAD" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dry Cupping Therapy", description: "Non-invasive suction technique to relieve muscle tension, improve circulation, and reduce pain without incisions.", price: "45", priceCurrency: "CAD" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Back Fire Cupping", description: "Traditional alternative to Hijama using heated cups for deep muscle relief and circulation.", price: "60", priceCurrency: "CAD" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Non-Therapeutic Massage", description: "Full-body relaxation massage to ease muscle tension, reduce stress, and promote calm." } },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is hijama painful?", acceptedAnswer: { "@type": "Answer", text: "Most clients feel little to no pain — only a mild suction sensation. The skin may feel slightly tender for 1–2 days afterward, similar to a deep tissue massage." } },
      { "@type": "Question", name: "How long does a session take?", acceptedAnswer: { "@type": "Answer", text: "A typical session lasts 45–75 minutes depending on the treatment plan." } },
      { "@type": "Question", name: "What is the difference between wet and dry cupping?", acceptedAnswer: { "@type": "Answer", text: "Dry cupping uses suction cups only. Wet cupping (Hijama) involves a small, sterile lancet to make superficial incisions after suction, allowing a small amount of blood to be drawn out." } },
      { "@type": "Question", name: "How often should I do hijama?", acceptedAnswer: { "@type": "Answer", text: "For general wellness, once every 1–3 months is common. For specific conditions such as chronic pain, migraines, or fatigue, more frequent sessions may be recommended." } },
      { "@type": "Question", name: "Is it safe? What hygiene standards do you follow?", acceptedAnswer: { "@type": "Answer", text: "Yes. We use single-use, disposable cups and lancets that are opened fresh for every client. All surfaces are sanitised between appointments." } },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
      </body>
      <GoogleAnalytics gaId="G-7HPBFYRP8F" />
    </html>
  );
}
