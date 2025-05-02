import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "../components/ui/button"
import { useState } from "react"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-violet-900/90 via-fuchsia-900/90 to-pink-900/90 backdrop-blur-md border-b border-pink-500/20"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="/" className="flex items-center mx-2">
          <img src="https://www.lampmediatech.com/wp-content/uploads/2025/01/lamp-media-tech-logo_2.svg" alt="logo" className="w-12 h-12" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {["Services", "Why Us", "Testimonials", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="relative px-4 py-2 text-white hover:text-cyan-300 transition-colors group"
            >
              <span>{item}</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          ))}

          <Button className="ml-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white border-none">
            Speak to an expert
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 rounded-full bg-pink-600/20 hover:bg-pink-600/30 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gradient-to-b from-violet-900/95 to-fuchsia-900/95 backdrop-blur-md"
        >
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {["Services", "Why Us", "Testimonials", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-white hover:text-cyan-300 py-2 border-b border-pink-500/20"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white border-none w-full">
              Speak to an expert
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
