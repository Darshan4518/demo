
import type React from "react"

import { motion } from "framer-motion"
import { Target, BarChart, Users, Award } from "lucide-react"
import { Card, CardContent } from "../components/ui/card"
import { useEffect, useState, useRef } from "react"

type FeatureCardProps = {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}

const FeatureCard = ({ title, description, icon, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="border-slate-200 bg-gradient-to-br from-white to-pink-50 shadow-md hover:shadow-lg transition-all duration-300 h-full">
        <CardContent className="pt-6 flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-4 text-pink-600">
            {icon}
          </div>
          <h3 className="font-bold text-xl mb-2 text-slate-800">{title}</h3>
          <p className="text-slate-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
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
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-2">
        {count}
        {label.includes("%") ? "%" : "+"}
      </div>
      <div className="text-slate-600">{label}</div>
    </motion.div>
  )
}

export const WhyChooseUs = () => {
  const features = [
    {
      title: "Customized Solutions",
      description: "Our strategies are tailored to your specific business needs.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Transparent Reporting",
      description: "Regular reports detailing your campaign's progress.",
      icon: <BarChart className="h-6 w-6" />,
    },
    {
      title: "Expert Local Team",
      description: "Deep knowledge of the Dubai market and emerging trends.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Proven Results",
      description: "From SEO agencies in Dubai to marketing firms in Dubai, our success speaks for itself.",
      icon: <Award className="h-6 w-6" />,
    },
  ]

  return (
    <section className="py-24 px-4 md:px-20 relative overflow-hidden bg-white" id="why-us">
      {/* Background with digital marketing theme */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                Why Lamp Media Tech Stands Out as the Best Digital Marketing Company Dubai
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-6" />
              <p className="text-lg text-slate-600 max-w-3xl">
                What sets us apart from other digital marketing companies in Dubai? Our unique approach combines
                data-driven strategies with creative excellence to deliver exceptional results for our clients.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              alt="Digital Marketing Team"
              className="rounded-lg shadow-2xl border-4 border-white transform -rotate-2"
            />
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-violet-50 via-fuchsia-50 to-pink-50 rounded-2xl p-10 shadow-lg border border-pink-100"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Impact in Numbers</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We've helped businesses across Dubai achieve remarkable growth through our digital marketing expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CounterItem value={150} label="Happy Clients" />
            <CounterItem value={500} label="Projects Completed" />
            <CounterItem value={85} label="ROI Increase %" />
            <CounterItem value={12} label="Years Experience" />
          </div>
        </motion.div>

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Approach</h3>
            <p className="text-slate-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your digital marketing campaigns deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1. Research & Strategy",
                description:
                  "We analyze your business, competitors, and target audience to develop a tailored strategy.",
              },
              {
                step: "2. Implementation & Optimization",
                description: "We execute the strategy and continuously optimize for maximum performance.",
              },
              {
                step: "3. Analysis & Reporting",
                description: "We provide detailed reports and insights to track progress and inform future decisions.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-pink-50 p-6 rounded-lg shadow-md border border-slate-200"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-slate-800">{item.step}</h4>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
