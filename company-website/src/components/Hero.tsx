import { AuroraBackground } from "./ui/aurora-background"

export default function Hero() {
    return (
      <section className="min-h-screen flex items-center justify-center text-white text-center px-0 relative overflow-hidden">
        <AuroraBackground className="absolute inset-0 z-0 bg-slate-800 text-white">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Building the Future with Tech</h2>
            <p className="text-lg md:text-xl mb-6">Innovative solutions for modern problems</p>
            <a href="#contact" className="text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition bg-white">Get in Touch</a>
          </div>
        </AuroraBackground>
      </section>
    )
  }
