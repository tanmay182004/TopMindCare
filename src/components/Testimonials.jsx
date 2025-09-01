import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Bedtime is finally peaceful. My 6-year-old asks for the Star Boat story every night.",
      author: "Priya, Mom of 6-year-old"
    },
    {
      quote: "The 5-minute 'reset' before homework has been a game changer for focus.",
      author: "Ravi, Dad of 10-year-old"
    },
    {
      quote: "Our class uses the breathing games after lunch. Kids come back calm and ready.",
      author: "Anika, Grade 4 Teacher"
    }
  ]

  const renderStars = () => {
    return (
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-gray-800 text-lg">★</span>
        ))}
      </div>
    )
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What Families Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
            >
              {renderStars()}
              <blockquote className="text-gray-700 mb-4 text-base">
                "{testimonial.quote}"
              </blockquote>
              <cite className="text-gray-500 text-sm">
                — {testimonial.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
