export default function Header() {
    return (
      <header className="p-6 flex justify-between items-center shadow-md sticky top-0 bg-white z-50">
        <h1 className="text-xl font-bold">NovaTech</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>
    )
  }
  