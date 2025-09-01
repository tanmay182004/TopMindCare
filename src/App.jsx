import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyMinderyKids from './components/WhyMinderyKids'
import Programs from './components/Programs'
import BuiltForKids from './components/BuiltForKids'
import Comparison from './components/Comparison'
import Pricing from './components/Pricing'
import ParentHub from './components/ParentHub'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import PopupForm from './components/PopupForm'

function App() {
  const [showPopup, setShowPopup] = useState(false)

  const handleStartFreeTrial = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onStartFree={handleStartFreeTrial} />
      <Hero onStartFreeTrial={handleStartFreeTrial} />
      <WhyMinderyKids />
      <Programs />
      <BuiltForKids />
      <Comparison />
      <Pricing />
      <ParentHub />
      <Testimonials />
      <FAQ />
      <CTA onStartFreeTrial={handleStartFreeTrial} />
      <Footer />
      
      {showPopup && (
        <PopupForm onClose={handleClosePopup} />
      )}
    </div>
  )
}

export default App
