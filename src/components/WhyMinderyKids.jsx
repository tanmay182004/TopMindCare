import React from 'react'

const WhyMinderyKids = () => {
  const features = [
    {
      label: "Story Meditations",
      title: "Guided Adventures",
      description: "Short, age-wise journeys that help kids calm their bodies and name their feelings."
    },
    {
      label: "Anytime Calm",
      title: "Tools for Big Feelings",
      description: "Quick \"reset\" audios for anger, worry, pre-exam jitters, and bedtime battles."
    },
    {
      label: "Parent Hub",
      title: "Guides & Routines",
      description: "Weekly tips, printable charts, and simple routines you can use at home or school."
    }
  ]

  return (
    <section id="why" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Why Mindery Kids?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl leading-relaxed">
            Children learn best through play and stories. Our sessions blend gentle breathing, guided imagery, and music to make mindfulness enjoyable and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                {feature.label}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyMinderyKids
