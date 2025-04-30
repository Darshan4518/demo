
import type React from "react"

import { motion } from "framer-motion"
import { Target, BarChart, Users, Award } from "lucide-react"
import { Card, CardContent } from "../components/ui/card"



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
      <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 h-full">
        <CardContent className="pt-6 flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mb-4 text-indigo-600">
            {icon}
          </div>
          <h3 className="font-bold text-xl mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const CounterItem = ({ value, label }: { value: number; label: string }) => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-4xl font-bold text-indigo-600 mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {value}+
      </motion.div>
      <div className="text-gray-600">{label}</div>
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
    <section className="py-24 px-4 md:px-20 bg-white" id="why">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Lamp Media Tech Stands Out as the Best Digital Marketing Company Dubai
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            What sets us apart from other digital marketing companies in Dubai?
          </p>
        </motion.div>

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
          className="bg-gradient-to-r from-violet-50 to-indigo-50 rounded-2xl p-10"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
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
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">{item.step}</h4>
                    <p className="text-gray-600">{item.description}</p>
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

