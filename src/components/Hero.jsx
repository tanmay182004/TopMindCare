import React from 'react'

const Hero = ({ onStartFreeTrial }) => {
  const benefits = [
    {
      icon: "🧠",
      title: "Improves Focus",
      color: "bg-pink-100 border-pink-200"
    },
    {
      icon: "😊",
      title: "Reduces Stress",
      color: "bg-yellow-100 border-yellow-200"
    },
    {
      icon: "💤",
      title: "Better Sleep",
      color: "bg-blue-100 border-blue-200"
    },
    {
      icon: "❤️",
      title: "Builds Empathy",
      color: "bg-red-100 border-red-200"
    }
  ]

  const todaysJourney = [
    {
      icon: "🐉",
      title: "Dragon Breath",
      duration: "3 min",
      color: "text-green-600"
    },
    {
      icon: "🦋",
      title: "Butterfly Body Scan",
      duration: "5 min",
      color: "text-blue-600"
    },
    {
      icon: "🌙",
      title: "Sleep Story: Star Boat",
      duration: "7 min",
      color: "text-purple-600"
    }
  ]

  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Content Area */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
            <span className="mr-2">🌈</span> Calm Minds, Happy Hearts
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Mindfulness & Meditation for Kids (4-14)
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Fun, story-based meditations that build focus, kindness, and confidence. Safe, ad-free, and crafted with child-development experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <button
              onClick={onStartFreeTrial}
              className="bg-purple-600 text-white px-3 py-2 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </button>
            <button className="bg-green-500 text-white px-3 py-2 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl">
              Explore Programs
            </button>
          </div>

          {/* Benefit Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-md text-center h-24 flex flex-col justify-center">
                <span className="text-3xl mb-2 block">{benefit.icon}</span>
                <p className="text-sm font-semibold text-gray-800">{benefit.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image/Card Area */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
          {/* Main Content Area - Empty as requested */}
          <div className="w-full max-w-md h-124 bg-gray-100 rounded-3xl shadow-xl flex items-center justify-center">
            {/* Empty area - no text content */}
          </div>

          {/* Today's Journey Card - Original position with content */}
          <div className="absolute bottom-8 left-32 bg-white p-4 rounded-2xl shadow-lg w-64 border border-gray-100 transform -rotate-3">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Today's Journey</h3>
            <div className="space-y-0">
              {todaysJourney.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 pl-4">
                  <span className="text-gray-400 text-sm">•</span>
                  <span className={`text-xl ${item.color}`}>{item.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium text-gray-700">{item.title}</div>
                  </div>
                  <span className={`text-sm font-semibold ${item.color}`}>
                    ({item.duration})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
