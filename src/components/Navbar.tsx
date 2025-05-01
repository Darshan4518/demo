
import { Button } from "../components/ui/button"
import { motion } from "framer-motion"

export const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/20"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-600">
            Lamp Media Tech
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-300 hover:text-white transition-colors">
            Services
          </a>
          <a href="#why-us" className="text-gray-300 hover:text-white transition-colors">
            Why Us
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-700 hover:to-purple-700 text-white border-none">
          Speak to an expert
        </Button>
      </div>
    </motion.header>
  )
}
