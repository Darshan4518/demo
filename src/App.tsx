import './App.css'
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { WhyChooseUs } from "./components/WhyChooseUs"
import { ContactCTA } from "./components/ContactCta"
import { Testimonials } from "./components/Testimonials"
import { WelcomeSection } from './components/WelcomeSection'

function App() {

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WelcomeSection />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
    </main>
  )
}

export default App
