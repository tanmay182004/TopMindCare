import React from 'react'

const BuiltForKids = () => {
  const features = [
    {
      title: "Ad-Free & Safe",
      description: "Child-first design with privacy controls and no external ads."
    },
    {
      title: "Rewards that Motivate",
      description: "Stars, badges, and gentle streaks encourage healthy habits—no pressure."
    },
    {
      title: "Offline Access",
      description: "Download favorite sessions for calm on the go."
    },
    {
      title: "Sleep Mode",
      description: "Fade-out music and dim visuals help kids drift off peacefully."
    },
    {
      title: "Classroom Friendly",
      description: "Teacher packs with 5-minute start-of-class resets and posters."
    },
    {
      title: "Multi-Child Profiles",
      description: "Personalized tracks for each child in the family."
    }
  ]

  return (
    <section id="features" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Built for Kids, Loved by Parents
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BuiltForKids
