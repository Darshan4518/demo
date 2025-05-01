
import { Button } from "../components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export const ContactCTA = () => {
  return (
    <section className="py-24 px-4 md:px-20 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-fuchsia-900 to-black" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Contact the Best Digital Marketing Company Dubai – Lamp Media Tech
          </h2>

          <p className="text-lg md:text-xl mb-10 text-gray-300">
            Looking for the most effective digital marketing agency in Dubai? At Lamp Media Tech, we are committed to
            delivering exceptional digital marketing services Dubai. Whether you need a Dubai SEO agency or one of the
            best digital marketing companies in Dubai, we are here to help.
          </p>

          <p className="text-lg md:text-xl mb-10 text-gray-300">
            Contact us today to discover how our digital marketing services in Dubai can transform your brand's online
            presence and rank you among the top marketing companies in Dubai.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-700 hover:to-purple-700 text-white font-medium px-8 py-6 h-auto text-lg group"
            >
              Request a Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Phone className="h-6 w-6" />,
                title: "Call Us",
                content: "+91 6362XXXXXX",
              },
              {
                icon: <Mail className="h-6 w-6" />,
                title: "Email Us",
                content: "demo@gmail.com",
              },
              {
                icon: <MapPin className="h-6 w-6" />,
                title: "Visit Us",
                content: "Business Bay, Dubai, UAE",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center mb-4 text-purple-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-purple-300">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
