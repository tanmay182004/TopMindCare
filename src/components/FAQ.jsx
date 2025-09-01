import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null) // All questions closed by default

  const faqs = [
    {
      question: "What ages is this for?",
      answer: "Mindery Kids is designed for children aged 4-14 years, with age-appropriate content for different developmental stages."
    },
    {
      question: "How long are the sessions?",
      answer: "Sessions range from 3-15 minutes, with shorter sessions for younger children and longer ones for older kids."
    },
    {
      question: "Is it safe and ad-free?",
      answer: "Yes. We designed this for children. No external ads, clear privacy options, and parent controls."
    },
    {
      question: "Can schools use it?",
      answer: "Absolutely! We offer special classroom packages and teacher resources to support mindfulness in educational settings."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="pt-4 pb-1 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors border-b border-gray-200 last:border-b-0"
              >
                <span className="text-base font-medium text-gray-800">
                  {faq.question}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pt-4 pb-4 bg-gray-50">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
