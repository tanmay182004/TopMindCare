import React from 'react'

const ParentHub = () => {
  const resources = [
    {
      icon: "⬇️",
      text: "Download Starter Kit (PDF)",
      color: "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
    },
    {
      icon: "📅",
      text: "7-Day Calm Plan",
      color: "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
    },
    {
      icon: "🏫",
      text: "Classroom Pack",
      color: "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
    }
  ]

  return (
    <section id="parents" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="text-left mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Parent & Teacher Hub
            </h2>
            <p className="text-gray-600 text-lg">
              Practical guides, printable routines, and progress insights so you can support mindfulness at home and school.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {resources.map((resource, index) => (
              <button
                key={index}
                className={`${resource.color} rounded-lg px-4 py-3 font-medium transition-colors flex items-center space-x-2 text-sm`}
              >
                <span className="text-base">{resource.icon}</span>
                <span>{resource.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ParentHub
