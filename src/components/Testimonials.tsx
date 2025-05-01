
import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "../components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "../components/ui/button"

const testimonials = [
  {
    name: "Sarah Al Maktoum",
    position: "Marketing Director",
    company: "Dubai Luxury Retail",
    content:
      "Lamp Media Tech transformed our digital presence completely. Their SEO and social media strategies helped us increase our online sales by 70% in just six months.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Mohammed Rahman",
    position: "CEO",
    company: "Tech Innovations LLC",
    content:
      "Working with Lamp Media Tech has been a game-changer for our startup. Their team's expertise in PPC and content marketing helped us establish our brand in a competitive market.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Aisha Khalid",
    position: "Operations Manager",
    company: "Dubai Hospitality Group",
    content:
      "The team at Lamp Media Tech understands the Dubai market like no other agency. Their localized approach to digital marketing has helped us reach our ideal customers effectively.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "John Mathews",
    position: "Business Owner",
    company: "Dubai Fitness Club",
    content:
      "I've worked with several marketing agencies before, but Lamp Media Tech's attention to detail and commitment to results sets them apart. Highly recommended!",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-24 px-4 md:px-20 relative overflow-hidden" id="testimonials">
      {/* Background with space theme */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.digitalgravity.ae/assets/images/services-details/process-bg-digital-marketing.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-purple-600 mx-auto mb-6" />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Lamp Media Tech.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-black/40 backdrop-blur-sm hover:bg-purple-900/30 border-purple-500/30 text-white"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
          </div>

          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-purple-900/50 bg-black/40 backdrop-blur-sm shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500/30">
                          <img
                            src={testimonials[currentIndex].image || "/placeholder.svg"}
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-purple-900/70 rounded-full p-1.5 text-purple-300">
                          <Quote className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-gray-300 text-lg mb-6 italic">"{testimonials[currentIndex].content}"</p>
                      <div>
                        <h4 className="font-bold text-white">{testimonials[currentIndex].name}</h4>
                        <p className="text-purple-300">
                          {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-black/40 backdrop-blur-sm hover:bg-purple-900/30 border-purple-500/30 text-white"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? "bg-fuchsia-500" : "bg-gray-600"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
