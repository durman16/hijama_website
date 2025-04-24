'use client';
import { useState} from 'react';
import CalendarButton from './CalendarButton';
import emailjs from 'emailjs-com';

export default function Contact() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    emailjs.sendForm(
      'service_4ola18j',     // EmailJS servis ID
      'template_h9vrkd8',    // EmailJS şablon ID
      e.currentTarget,       // form verisi
      'RPBSKMewac3d2Pqnt'      // EmailJS public key
    ).then(
      (result) => {
        console.log("Email sent!", result.text);
        setSubmitted(true);
      },
      (error) => {
        console.error("Email failed...", error.text);
      }
    );
  };
  
  
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 font-medium mb-3 tracking-widest text-sm uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Hijama Session</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Reach out for appointments, questions, or to learn more about our healing services
          </p>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-6"></div>
        </div>

        {/* Contact Information - Now displayed above */}
        <div className="mb-12">
          <div className="bg-emerald-50 p-8 rounded-xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3M16 7V3M4 11h16M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <CalendarButton/>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                  <a href="https://wa.me/16138780458?text=Hi!%2C%20I%20want%20to%20book%20a%20therapy%20session." className="text-emerald-600 hover:text-emerald-700 hover:underline">Chat with us on WhatsApp</a>
                </div>
              </div>

              <a
                  href="https://www.google.com/maps?q=622+Moorpark+Avenue,+Kanata,+ON"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start no-underline hover:opacity-80 transition-opacity"
                >
                  <div className="bg-emerald-100 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Our Location</h4>
                    <p className="text-gray-600">622 Moorpark Avenue, Kanata, ON</p>
                  </div>
                </a>


              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone Number</h4>
                  <a href="tel:+16138780458" className="text-emerald-600 hover:text-emerald-700 hover:underline">+1 (613) 878-0458</a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Contact Form - Now displayed below */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 p-8 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {submitted ? "Thank You!" : "Send Us a Message"}
            </h3>

            {submitted ? (
              <p className="py-20 px-6 text-center text-lg text-gray-700">
                Thank you for contacting us! We will get back to you shortly.
              </p>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      placeholder="Your name" 
                      className="bg-white w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      placeholder="your@email.com" 
                      className="bg-white w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      placeholder="+1 (___) ___-____" 
                      className="bg-white w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                    <select 
                      id="service" 
                      name="service"
                      className="bg-white w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    >
                      <option value="">Select a service</option>
                      <option value="wet-cupping">Wet Cupping (Hijama)</option>
                      <option value="dry-cupping">Dry Cupping</option>
                      <option value="head-neck">Head & Neck Therapy</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    placeholder="How can we help you?" 
                    className="bg-white w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}