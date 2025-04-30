import { Menu, X } from "lucide-react";
import { useState } from "react";

 const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Lamp Media Tech</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
          <a href="#why" className="text-gray-700 hover:text-blue-600">Why Us</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <a href="#services" className="block text-gray-700 hover:text-blue-600">Services</a>
          <a href="#why" className="block text-gray-700 hover:text-blue-600">Why Us</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      )}
    </header>
    );
  };
  export default Navbar;