
import { Button } from "../components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 px-4 md:px-20 flex items-center" id="home">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/80 via-fuchsia-900/70 to-pink-900/80" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-cyan-500/20 backdrop-blur-sm border border-pink-500/30 mb-6"
            >
              <span className="text-pink-300 text-sm font-medium">Best Digital Marketing Agency in Dubai</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-sans text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mb-2">
                Lamp Media Tech
              </span>
              <span className="text-white">Digital Marketing Agency in Dubai</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl font-light"
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
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white font-medium px-8 py-6 h-auto text-lg group"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-pink-500 text-pink-300 hover:bg-pink-900/30 font-medium px-8 py-6 h-auto text-lg"
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
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                alt="Digital Marketing Analytics"
                className="rounded-lg shadow-2xl border-4 border-white/10 transform rotate-3"
              />
              <div className="absolute -bottom-10 -left-10 bg-gradient-to-br from-violet-900/40 to-fuchsia-900/40 backdrop-blur-sm p-8 rounded-xl border border-pink-500/20 shadow-xl transform -rotate-3">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Impact</h3>
                <div className="grid grid-cols-2 gap-8">
                  <CounterItem value={150} label="Happy Clients" />
                  <CounterItem value={500} label="Projects Completed" />
                  <CounterItem value={85} label="ROI Increase %" />
                  <CounterItem value={12} label="Years Experience" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const CounterItem = ({ value, label }: { value: number; label: string }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 50
    const stepTime = duration / steps
    const increment = value / steps
    let currentStep = 0

    countRef.current = setInterval(() => {
      currentStep++
      setCount(Math.min(Math.round(increment * currentStep), value))

      if (currentStep >= steps) {
        if (countRef.current) clearInterval(countRef.current)
      }
    }, stepTime)

    return () => {
      if (countRef.current) clearInterval(countRef.current)
    }
  }, [value])

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mb-2">
        {count}
        {label.includes("%") ? "%" : "+"}
      </div>
      <div className="text-gray-300 text-sm">{label}</div>
    </div>
  )
}
