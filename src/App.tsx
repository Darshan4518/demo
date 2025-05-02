import './App.css'
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { WhyChooseUs } from "./components/WhyChooseUs"
import { ContactCTA } from "./components/ContactCta"
import { Testimonials } from "./components/Testimonials"
import { WelcomeSection } from './components/WelcomeSection'
import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import Approch from './components/Approch'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <WelcomeSection />
      <Services />
      <WhyChooseUs />
      <Approch/>
      <Testimonials />
      <ContactCTA />
    </main>
  )
}

export default App
