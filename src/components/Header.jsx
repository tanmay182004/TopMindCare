import React, { useState } from 'react'

const Header = ({ onStartFree }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              {/* Logo */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 via-green-400 via-purple-400 to-pink-400 flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm opacity-20"></div>
              </div>
              <span className="text-2xl font-bold text-black">Topmind Care</span>
            </div>
          </div>

          {/* Desktop Navigation - Right Aligned */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <a href="#why" className="text-purple-600 hover:text-purple-700 transition-colors font-medium text-base">Why</a>
              <a href="#programs" className="text-purple-600 hover:text-purple-700 transition-colors font-medium text-base">Programs</a>
              <a href="#features" className="text-purple-600 hover:text-purple-700 transition-colors font-medium text-base">Features</a>
              <a href="#parents" className="text-purple-600 hover:text-purple-700 transition-colors font-medium text-base">For Parents</a>
              <a href="#faq" className="text-purple-600 hover:text-purple-700 transition-colors font-medium text-base">FAQ</a>
            </nav>
            
            {/* CTA Button */}
            <button
              onClick={onStartFree}
              className="bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-base shadow-sm"
            >
              Start Free
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-4 py-4 space-y-3 bg-white">
              <a href="#why" className="block text-purple-600 hover:text-purple-700 font-medium">Why</a>
              <a href="#programs" className="block text-purple-600 hover:text-purple-700 font-medium">Programs</a>
              <a href="#features" className="block text-purple-600 hover:text-purple-700 font-medium">Features</a>
              <a href="#parents" className="block text-purple-600 hover:text-purple-700 font-medium">For Parents</a>
              <a href="#faq" className="block text-purple-600 hover:text-purple-700 font-medium">FAQ</a>
              <button
                onClick={onStartFree}
                className="w-full mt-4 bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                Start Free
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
