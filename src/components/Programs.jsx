import React from 'react'

const Programs = () => {
  const programs = [
    {
      age: "4-6",
      title: "Little Explorers",
      description: "Three to five-minute stories with animal friends that teach belly-breathing, noticing sounds, and gentle stretching.",
      features: [
        { icon: "🛋️", text: "Cozy Corner" },
        { icon: "🎵", text: "Calm Music" },
        { icon: "⭐", text: "Sticker Badges" }
      ],
      imagePosition: "left",
      imageSrc: "/Little Explorers.png"
    },
    {
      age: "7-10",
      title: "Brave Thinkers",
      description: "Mindset stories, focus timers, and kindness practices that build confidence and classroom readiness.",
      features: [
        { icon: "⏱️", text: "Focus Timer" },
        { icon: "📝", text: "Gratitude Notes" },
        { icon: "⚡", text: "Streak Rewards" }
      ],
      imagePosition: "right",
      imageSrc: "/Brave Thinkers.png"
    },
    {
      age: "11-14",
      title: "Calm & Curious",
      description: "Longer meditations, reframing thoughts, and sleep stories for deeper rest and emotional balance.",
      features: [
        { icon: "🧠", text: "Mindset Minis" },
        { icon: "🌙", text: "Sleep Stories" },
        { icon: "🎯", text: "Goal Cards" }
      ],
      imagePosition: "left",
      imageSrc: "/Calm & Curious.png"
    }
  ]

  return (
    <section id="programs" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Programs for Every Age
          </h2>
          <p className="text-gray-600 text-lg">
            Pick a track or mix and match. Each program grows with your child.
          </p>
        </div>

        <div className="space-y-0">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className={`flex ${program.imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Image */}
                <div className="w-1/2 h-80 flex items-center justify-center overflow-hidden">
                  <img
                    src={program.imageSrc}
                    alt={`${program.title} program`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content */}
                <div className="w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{program.title}</h3>
                    <span className="text-sm font-semibold text-gray-600">
                      ({program.age})
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {program.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {program.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        <span>{feature.icon}</span>
                        <span>{feature.text}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
