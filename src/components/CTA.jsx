import React from 'react'

const CTA = ({ onStartFreeTrial }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Start Your Child's Mindfulness Journey
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Try it free. Build calm, focus, and kindness—one small practice a day.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onStartFreeTrial}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-purple-700 transition-colors"
              >
                Create Account
              </button>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-green-700 transition-colors">
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
