import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import FloatingChat from './components/FloatingChat.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import Industries from './pages/Industries.jsx'
import Pricing from './pages/Pricing.jsx'
import About from './pages/About.jsx'
import CallRecording from './pages/CallRecording.jsx'
import LiveChat from './pages/LiveChat.jsx'
import AppointmentBooking from './pages/AppointmentBooking.jsx'
import FAQs from './pages/FAQs.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

function RevealOnRoute() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    const items = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.14 },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [location.pathname])

  return null
}

function App() {
  return (
    <main>
      <RevealOnRoute />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/call-recording" element={<CallRecording />} />
        <Route path="/live-chat" element={<LiveChat />} />
        <Route path="/appointment-booking" element={<AppointmentBooking />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingChat />
    </main>
  )
}

export default App
