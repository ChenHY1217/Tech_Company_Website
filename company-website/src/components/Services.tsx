const services = [
    { title: 'Web Development', desc: 'Responsive, modern websites and web apps.' },
    { title: 'Cloud Integration', desc: 'Scalable backend infrastructure in the cloud.' },
    { title: 'UI/UX Design', desc: 'Clean, intuitive user interfaces that convert.' }
  ]
  
  export default function Services() {
    return (
      <section id="services" className="py-16 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white shadow-md p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  