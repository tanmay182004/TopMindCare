import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Company Info */}
          <div className="flex items-center space-x-3">
            {/* Logo */}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 via-green-400 via-purple-400 to-pink-400 flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm opacity-20"></div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">Topmind Care</h3>
              <p className="text-sm text-gray-500">Mindfulness for growing minds. © 2025 Mindery Kids.</p>
            </div>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-3">Contact</h3>
            <div className="flex items-center space-x-2">
              <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors text-sm">Instagram</a>
              <span className="text-gray-400 text-xs">•</span>
              <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors text-sm">YouTube</a>
              <span className="text-gray-400 text-xs">•</span>
              <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors text-sm">X</a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-3">Legal</h3>
            <div className="flex items-center space-x-2">
              <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors text-sm">Privacy</a>
              <span className="text-gray-400 text-xs">•</span>
              <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors text-sm">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
