"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is hijama painful?",
    a: "Most clients feel little to no pain — only a mild suction sensation. The skin may feel slightly tender for 1–2 days afterward, similar to a deep tissue massage. Our therapist takes care to ensure your comfort throughout the session."
  },
  {
    q: "How long does a session take?",
    a: "A typical session lasts 45–75 minutes depending on the treatment plan. Mini Renewal (5 cups) takes around 45 minutes, while Extended Renewal (16 cups) may take up to 75 minutes. You are welcome to ask about timing when booking."
  },
  {
    q: "What is the difference between wet and dry cupping?",
    a: "Dry cupping uses suction cups only to stimulate circulation and ease muscle tension — no incisions are made. Wet cupping (Hijama) involves a small, sterile lancet to make superficial incisions after suction, allowing a small amount of blood to be drawn out. Both are safe when performed by a trained professional."
  },
  {
    q: "How often should I do hijama?",
    a: "For general wellness, once every 1–3 months is common. For specific conditions such as chronic pain, migraines, or fatigue, a therapist may recommend more frequent sessions initially. We will advise you based on your individual health goals during your first visit."
  },
  {
    q: "Who should NOT do hijama?",
    a: "Hijama is not recommended for pregnant women, people on blood thinners, those with active skin conditions at the cupping sites, or individuals with certain medical conditions such as haemophilia. If you have any health concerns, please consult your doctor before booking and inform our therapist during the intake process."
  },
  {
    q: "How should I prepare for my session?",
    a: "Come on an empty stomach. Stop eating at least 5 hours before your appointment — up to 1 hour before you may drink water only. Avoiding animal products (meat, dairy) for at least 1 full day before your session will significantly increase the effectiveness of the treatment. Wear loose, comfortable clothing and avoid applying lotions or oils to the treatment area on the day of your session."
  },
  {
    q: "Is it safe? What hygiene standards do you follow?",
    a: "Yes. We use single-use, disposable cups and lancets that are opened fresh for every client. All surfaces are sanitised between appointments and our therapist follows strict hygiene protocols. Your safety and comfort are our top priority."
  },
  {
    q: "Do you accept walk-ins?",
    a: "We operate by appointment only to ensure every client receives dedicated, personalised care. Please book in advance via Google Calendar, WhatsApp, or our contact form. Same-day appointments may be available — just reach out to check."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="FAQ" className="py-16 px-6 bg-gradient-to-b from-white to-emerald-50/80">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-emerald-600 font-medium mb-3 tracking-widest text-sm uppercase">
            Common Questions
          </span>
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left px-6 py-5 font-semibold text-gray-800 hover:text-emerald-700 transition-colors"
              >
                <span>{item.q}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 flex-shrink-0 ml-4 text-emerald-600 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">Still have questions? We are happy to help.</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all shadow"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
