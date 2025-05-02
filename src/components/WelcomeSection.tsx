import { motion } from "framer-motion"

export const WelcomeSection = () => {
  return (
    <section className="py-20 px-4 md:px-20 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start mb-10">
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-6"></div>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
                Why Choose Us
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full ml-6"></div>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              As a leading digital marketing company Dubai, our expertise in SEO, social media marketing, content
              creation, and PPC advertising ensures your brand stands out among the best marketing companies in Dubai.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-slate-800">
              Why Lamp Media Tech is the Best Digital Marketing Company in Dubai
            </h3>

            <p className="text-lg text-gray-700 mb-6">
              Searching for a reliable digital marketing agency in Dubai? Lamp Media Tech offers a wide array of digital
              marketing services in Dubai designed to deliver measurable results. From SEO agencies in Dubai to online
              marketing companies in Dubai, we are the preferred choice for companies seeking consistent growth.
            </p>

            <p className="text-lg text-gray-700">
              Unlike other digital marketing companies in Dubai, we prioritize providing customized strategies based on
              thorough research, creativity, and technical expertise.
            </p>
          </motion.div>

          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              alt="img"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
