import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar(){
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#010100] text-white sticky top-0 z-40 border-b border-gray-700/50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-sky-400">XAVY</Link>

        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={({isActive}) => isActive ? "text-sky-400 font-semibold" : "hover:text-sky-400"}>Home</NavLink>
          <div className="relative group">
            <NavLink to="/gaming" className={({isActive}) => isActive ? "text-sky-400 font-semibold" : "hover:text-sky-400"}>Gaming</NavLink>
            <div className="absolute left-0 mt-8 hidden group-hover:block bg-[#0b0b0b] p-3 rounded shadow-lg">
              <Link to="/gaming" className="block px-3 py-1 hover:text-sky-400">xavy.my (Gaming site)</Link>
              <Link to="/services" className="block px-3 py-1 hover:text-sky-400">Services</Link>
            </div>
          </div>
          <NavLink to="/services" className={({isActive}) => isActive ? "text-sky-400 font-semibold" : "hover:text-sky-400"}>Services</NavLink>
          <NavLink to="/portfolio" className={({isActive}) => isActive ? "text-sky-400 font-semibold" : "hover:text-sky-400"}>Portfolio</NavLink>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(v => !v)}>
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#070707] border-t border-gray-800">
          <div className="px-4 py-3 flex flex-col gap-2">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/gaming" onClick={() => setOpen(false)}>Gaming</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
          </div>
        </div>
      )}
    </header>
  );
}
