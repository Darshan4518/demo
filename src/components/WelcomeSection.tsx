
import { motion } from "framer-motion"

export const WelcomeSection = () => {
  return (
    <section className="py-20 px-4 md:px-20 relative overflow-hidden bg-white">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-10">
            <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-6"></div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
              Why Choose Us
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full ml-6"></div>
          </div>

          <p className="text-lg text-gray-700 mb-8 text-center">
            As a leading digital marketing company Dubai, our expertise in SEO, social media marketing, content
            creation, and PPC advertising ensures your brand stands out among the best marketing companies in Dubai.
          </p>

          <h3 className="text-2xl font-bold mb-6 text-slate-800 text-center">
            Why Lamp Media Tech is the Best Digital Marketing Company in Dubai
          </h3>

          <p className="text-lg text-gray-700 mb-6">
            Searching for a reliable digital marketing agency in Dubai? Lamp Media Tech offers a wide array of digital
            marketing services in Dubai designed to deliver measurable results. From SEO agencies in Dubai to online
            marketing companies in Dubai, we are the preferred choice for companies seeking consistent growth.
          </p>

          <p className="text-lg text-gray-700">
            Unlike other digital marketing companies in Dubai, we prioritize providing customized strategies based on
            thorough research, creativity, and technical expertise. As a prominent digital marketing company in Dubai,
            our methods are built to help your brand thrive in a competitive market.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
