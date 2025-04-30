
import { motion } from "framer-motion"

export const WelcomeSection = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg text-gray-700 mb-8">
            As a leading digital marketing company Dubai, our expertise in SEO, social media marketing, content
            creation, and PPC advertising ensures your brand stands out among the best marketing companies in Dubai.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-indigo-800">
            Why Lamp Media Tech is the Best Digital Marketing Company in Dubai
          </h2>

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
