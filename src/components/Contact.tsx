'use client';
import { useState } from 'react';
import CalendarButton from './CalendarButton';
import emailjs from 'emailjs-com';

const trustBadges = [
  { icon: '🏅', label: 'Licensed & Certified Practitioner' },
  { icon: '🧼', label: 'Single-use, sterile equipment' },
  { icon: '🌿', label: 'Sunnah-based approach' },
  { icon: '⭐', label: '5+ Years of Experience' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_4ola18j',
      'template_h9vrkd8',
      e.currentTarget,
      'RPBSKMewac3d2Pqnt'
    ).then(
      (result) => { console.log('Email sent!', result.text); setSubmitted(true); },
      (error) => { console.error('Email failed...', error.text); }
    );
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-white to-emerald-50/60">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 font-medium mb-3 tracking-widest text-sm uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Session</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Appointments only — reach out via any channel below and we will confirm your slot promptly.
          </p>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-6"></div>
        </div>

        {/* Top row: Contact panel + Price list */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">

          {/* Left: Dark emerald contact panel */}
          <div className="lg:col-span-3 bg-emerald-800 text-white rounded-2xl shadow-xl overflow-hidden flex flex-col">

            {/* Header strip */}
            <div className="bg-emerald-900 px-8 py-6">
              <h3 className="text-xl font-bold tracking-wide">Contact Information</h3>
              <p className="text-emerald-300 text-sm mt-1">By appointment only</p>
            </div>

            {/* Contact items */}
            <div className="px-8 py-8 space-y-6 flex-1">

              {/* Calendar */}
              <div className="flex items-start gap-4">
                <div className="bg-emerald-700 p-3 rounded-xl flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3M16 7V3M4 11h16M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-emerald-300 text-xs uppercase tracking-widest mb-1">Online Booking</p>
                  <CalendarButton />
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="bg-emerald-700 p-3 rounded-xl flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-emerald-300 text-xs uppercase tracking-widest mb-1">WhatsApp</p>
                  <a href="https://wa.me/16138780458?text=Hi!%2C%20I%20want%20to%20book%20a%20therapy%20session."
                    className="text-white font-medium hover:text-emerald-300 transition">
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-emerald-700 p-3 rounded-xl flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-emerald-300 text-xs uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+16138780458" className="text-white font-medium hover:text-emerald-300 transition">
                    +1 (613) 878-0458
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-emerald-700 p-3 rounded-xl flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-emerald-300 text-xs uppercase tracking-widest mb-1">Location</p>
                  <a href="https://www.google.com/maps?q=2047+Carp+Road,+Ottawa,+ON"
                    target="_blank" rel="noopener noreferrer"
                    className="text-white font-medium hover:text-emerald-300 transition">
                    2047 Carp Road, Ottawa, ON
                  </a>
                </div>
              </div>
            </div>

            {/* Trust badges strip at bottom */}
            <div className="border-t border-emerald-700 px-8 py-6 grid grid-cols-2 gap-3">
              {trustBadges.map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-lg">{b.icon}</span>
                  <span className="text-emerald-200 text-xs">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Price list */}
          <div className="lg:col-span-2 bg-white border border-emerald-100 rounded-2xl shadow-xl overflow-hidden flex flex-col">

            <div className="bg-emerald-600 px-6 py-6 text-white text-center">
              <h3 className="text-xl font-bold">Therapy Prices</h3>
              <p className="text-emerald-200 text-sm mt-1">Transparent & fair pricing</p>
            </div>

            <div className="px-6 py-6 flex-1 space-y-1">
              {[
                { name: 'Mini Detox', sub: '3 Cups', price: '$45' },
                { name: 'Core Detox', sub: '5 Cups', price: '$60' },
                { name: 'Full Back Detox', sub: '10 Cups', price: '$100' },
                { name: 'Total Reset', sub: '18 Cups', price: '$160' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.sub} Therapy</p>
                  </div>
                  <span className="text-emerald-600 font-bold text-lg">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 px-6 py-5 space-y-3 border-t border-emerald-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Full Back Fire Cupping</p>
                  <p className="text-xs text-gray-400">Alternative for non-Hijama clients</p>
                </div>
                <span className="text-emerald-600 font-bold text-lg">$60</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Head & Neck Therapy</p>
                  <p className="text-xs text-gray-400">Specialized placement</p>
                </div>
                <span className="text-emerald-600 font-semibold text-sm">Contact us</span>
              </div>
            </div>

            <div className="px-6 pb-6 pt-4">
              <a href="#contact"
                className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition shadow">
                Book Now
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-700 to-emerald-500 px-8 py-6 text-white text-center">
            <h3 className="text-2xl font-bold">{submitted ? 'Thank You!' : 'Send Us a Message'}</h3>
            {!submitted && <p className="text-emerald-200 mt-1 text-sm">We usually reply within a few hours</p>}
          </div>

          <div className="p-8">
            {submitted ? (
              <p className="py-16 text-center text-lg text-gray-700">
                Thank you for reaching out! We will get back to you shortly.
              </p>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition bg-gray-50"
                      required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition bg-gray-50"
                      required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="+1 (___) ___-____"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition bg-gray-50" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                    <select id="service" name="service"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition bg-gray-50">
                      <option value="">Select a service</option>
                      <option value="mini-detox">Mini Detox (3 Cups) — $45</option>
                      <option value="core-detox">Core Detox (5 Cups) — $60</option>
                      <option value="full-back-detox">Full Back Detox (10 Cups) — $100</option>
                      <option value="total-reset">Total Reset (18 Cups) — $160</option>
                      <option value="fire-cupping">Full Back Fire Cupping — $60</option>
                      <option value="head-neck">Head & Neck Therapy</option>
                      <option value="massage">Non-Therapeutic Massage</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea id="message" name="message" rows={4} placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition bg-gray-50"
                    required />
                </div>

                <button type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-xl transition duration-300 shadow-lg hover:shadow-emerald-200 text-lg">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
