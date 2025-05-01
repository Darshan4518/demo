
import { Button } from "../components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 px-4 md:px-20 flex items-center" id="home">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.digitalgravity.ae/assets/images/services-details/services-details-hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-4 py-1 rounded-full bg-purple-900/50 backdrop-blur-sm border border-purple-500/30 mb-6"
            >
              <span className="text-purple-300 text-sm font-medium">Best Digital Marketing Agency in Dubai</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl md:text-4xl font-bold mb-6 leading-tight"
            >
              <span className="block text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600 mb-2 font-display">
                Lamp Media Tech
              </span>
              Digital Marketing Agency in Dubai
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
            >
              Welcome to Lamp Media Tech, the best digital marketing agency in Dubai offering a complete range of
              digital marketing services in Dubai. We understand the unique opportunities and challenges of the Dubai
              market and provide tailored solutions to help your business achieve maximum visibility, engagement, and
              conversions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-700 hover:to-purple-700 text-white font-medium px-8 py-6 h-auto text-lg group"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-purple-500 text-purple-300 hover:bg-purple-900/30 font-medium px-8 py-6 h-auto text-lg"
              >
                Our Services
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hidden md:block"
          >
            {/* Decorative element */}
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute top-40 right-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
