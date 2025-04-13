export default function Contact() {
    return (
      <section id="contact" className="py-16 px-6 max-w-xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full border p-3 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-3 rounded" />
          <textarea placeholder="Message" className="w-full border p-3 rounded h-32" />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition">Send</button>
        </form>
      </section>
    )
  }
  