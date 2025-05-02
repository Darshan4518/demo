
import type React from "react"

import { motion } from "framer-motion"
import { Search, Share2, MousePointerClick, FileText, Layout, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

type ServiceCardProps = {
  title: string
  description: string
  points: string[]
  icon: React.ReactNode
  index: number
}

const ServiceCard = ({ title, description, points, icon, index, }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <Card className="h-full border-slate-200 bg-gradient-to-br from-white to-purple-50 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-4 text-pink-600">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-slate-800">{title}</CardTitle>
        <CardDescription className="text-slate-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        

        <h4 className="font-semibold text-purple-700 mb-2">Our {title.split(" ")[0]} Services Include:</h4>
        <ul className="space-y-2">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start">
              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-pink-500 flex-shrink-0" />
              <span className="text-slate-700">{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </motion.div>
)

export const Services = () => {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "As a premier Dubai SEO agency, we specialize in on-page SEO, off-page SEO, technical SEO, and link-building. Our comprehensive strategies improve your website's visibility, authority, and overall performance across search engines.",
      icon: <Search className="h-6 w-6" />,
      
      points: [
        "On-page SEO optimization",
        "Off-page SEO strategies",
        "Technical SEO improvements",
        "Local SEO for Dubai businesses",
      ],
      note: "Unlike other marketing companies in Dubai, our SEO solutions are driven by meticulous research and technical expertise. We ensure your website ranks high for relevant search queries, making us a top digital marketing company in Dubai.",
    },
    {
      title: "Social Media Marketing (SMM)",
      description:
        "Our social media marketing services are aimed at enhancing your brand's visibility across popular platforms such as Facebook, Instagram, LinkedIn, and Twitter. As a trusted digital marketing company in Dubai, we focus on creating impactful social media strategies that boost engagement and drive growth.",
      icon: <Share2 className="h-6 w-6" />,
      points: [
        "Content creation and management",
        "Paid advertising campaigns",
        "Community engagement and reputation management",
        "Performance monitoring and optimization",
      ],
      note: "By partnering with Lamp Media Tech, your brand reaches a broader audience, establishing itself among the top marketing companies in Dubai.",
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Looking for fast results? Our PPC advertising services are designed to drive targeted traffic to your website. As a leading digital marketing company in Dubai, we deliver PPC campaigns that maximize your return on investment.",
      icon: <MousePointerClick className="h-6 w-6" />,
      points: [
        "Keyword research and audience targeting",
        "Crafting compelling ad copies",
        "Continuous optimization and reporting",
        "In-depth performance analysis",
      ],
      note: "Our expertise ensures your business achieves visibility through strategic PPC advertising, ranking you among the top marketing companies in Dubai.",
    },
    {
      title: "Content Marketing",
      description:
        "At Lamp Media Tech, we recognize that content is king. As a reputed digital marketing company in Dubai, we create high-quality, engaging, and SEO-focused content that speaks directly to your audience.",
      icon: <FileText className="h-6 w-6" />,
      points: [
        "Blog posts and articles",
        "Infographics and visuals",
        "Website content optimization",
        "SEO-focused content creation",
      ],
      note: "With Lamp Media Tech, your brand becomes a recognized authority, setting you apart from other online marketing companies in Dubai.",
    },
    {
      title: "Website Design and Development",
      description:
        "Your website is your digital storefront. As a reliable digital marketing company in Dubai, we provide comprehensive website design and development services that are visually appealing, responsive, and SEO-optimized.",
      icon: <Layout className="h-6 w-6" />,
      points: [
        "Responsive design",
        "SEO-friendly development",
        "User experience optimization",
        "Effective calls-to-action",
      ],
      note: "Ensure your brand's online presence is polished and professional with Lamp Media Tech.",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Data-driven decisions are crucial for digital marketing success. We provide comprehensive analytics and reporting to track your campaign performance and ROI.",
      icon: <BarChart3 className="h-6 w-6" />,
      points: [
        "Custom performance dashboards",
        "Regular detailed reporting",
        "Conversion tracking",
        "Actionable insights and recommendations",
      ],
    },
  ]

  return (
    <section
      className="py-24 px-4 md:px-20 relative overflow-hidden bg-gradient-to-b from-white to-purple-50"
      id="services"
    >
      {/* Background with digital marketing theme */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            Digital Marketing Services in Dubai – Specialized Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            As a top-tier digital marketing agency, we provide a broad range of services designed to enhance your
            brand's online presence. Here's a glimpse of our digital marketing services in Dubai:
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              points={service.points}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>

        {services.map(
          (service, index) =>
            service.note && (
              <motion.div
                key={`note-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-4 text-slate-600 italic text-center max-w-3xl mx-auto"
              >
                <p className="text-sm mt-2">{service.note}</p>
              </motion.div>
            ),
        )}
      </div>
    </section>
  )
}
