import React from 'react'

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      subtitle: "Perfect for new explorers",
      price: "Free",
      features: [
        "5 guided meditations",
        "2 sleep stories",
        "Parent starter kit"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Premium",
      subtitle: "Unlock full potential",
      price: "₹299/mo",
      features: [
        "Unlimited meditations",
        "Sleep stories & calming music",
        "Printable guides for parents"
      ],
      buttonText: "Upgrade Now",
      popular: false
    },
    {
      name: "Family",
      subtitle: "For multiple kids",
      price: "₹499/mo",
      features: [
        "4 child profiles",
        "Rewards & streaks",
        "Classroom meditation pack"
      ],
      buttonText: "Get Family Plan",
      popular: false
    }
  ]

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 text-lg">
            Start free, cancel anytime. No hidden charges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.subtitle}</p>
                <div className="text-3xl font-bold text-purple-600 mb-2">{plan.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-green-500 mr-3 text-lg">✓</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center">
                <button
                  className="w-auto py-2 px-4 rounded-lg font-semibold transition-colors bg-purple-600 text-white hover:bg-purple-700 text-sm"
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
