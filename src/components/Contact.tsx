export default function Contact() {
    return (
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-800 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-6">For appointments and questions, feel free to contact us:</p>
          <div className="space-y-3">
            <p className="text-emerald-700 font-medium">📍 Ottawa, ON</p>
            <p className="text-emerald-700">📞 <a href="tel:+11234567890" className="underline">+1 123 456 7890</a></p>
            <p className="text-emerald-700">💬 <a href="https://wa.me/11234567890" className="underline">WhatsApp us</a></p>
            <form className="mt-6 grid gap-4">
              <input type="text" placeholder="Your Name" className="border p-2 rounded w-full" />
              <input type="email" placeholder="Your Email" className="border p-2 rounded w-full" />
              <textarea placeholder="Your Message" className="border p-2 rounded w-full"></textarea>
              <button type="submit" className="bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  