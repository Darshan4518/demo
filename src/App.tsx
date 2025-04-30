import './App.css'
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { WhyChooseUs } from "./components/WhyChooseUs"
import { ContactCTA } from "./components/ContactCta"
import { Testimonials } from "./components/Testimonials"
import { WelcomeSection } from './components/WelcomeSection'
import Navbar from './components/Navbar'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar/>
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
