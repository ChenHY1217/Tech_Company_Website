export default function Header() {
  return (
    <header className="p-6 flex justify-between items-center shadow-md sticky top-0 bg-slate-900 text-white z-50 border-b border-slate-700 w-full overflow-hidden">
      <h1 className="text-xl font-bold">NovaTech</h1>
      <nav className="space-x-4">
        <a href="#about" className="hover:text-blue-300">About</a>
        <a href="#services" className="hover:text-blue-300">Services</a>
        <a href="#contact" className="hover:text-blue-300">Contact</a>
      </nav>
    </header>
  )
}