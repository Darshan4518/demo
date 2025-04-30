
import { Button } from "../components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"


export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 to-indigo-50 py-24 px-4 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-indigo-700"
        >
          Digital Marketing Agency in Dubai
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold mb-6 text-indigo-900"
        >
          Lamp Media Tech
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8"
        >
          Welcome to Lamp Media Tech, the best digital marketing agency in Dubai offering a complete range of digital
          marketing services in Dubai. We understand the unique opportunities and challenges of the Dubai market and
          provide tailored solutions to help your business achieve maximum visibility, engagement, and conversions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-medium px-8 py-6 h-auto text-lg group"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 font-medium px-8 py-6 h-auto text-lg"
          >
            Our Services
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

