import React from 'react'

const Comparison = () => {
  const comparisons = [
    {
      feature: "Child-Friendly Guided Meditations",
      minderyKids: "✔ Story-based, fun & short",
      otherApps: "X Generic adult content"
    },
    {
      feature: "Safe & Ad-Free Environment",
      minderyKids: "✔ 100% secure for kids",
      otherApps: "X Ads & distractions"
    },
    {
      feature: "Age-Specific Programs",
      minderyKids: "✔ Tailored for 4-14",
      otherApps: "X One-size-fits-all"
    },
    {
      feature: "Parent & Teacher Support",
      minderyKids: "✔ Guides, printables, progress insights",
      otherApps: "X Limited or none"
    }
  ]

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Mindery Kids Over Others?
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-purple-50">
                <th className="px-6 py-4 text-center text-base font-bold text-purple-600 border-b border-gray-200 border-r border-gray-200">
                  Feature
                </th>
                <th className="px-6 py-4 text-center text-base font-bold text-purple-600 border-b border-gray-200 border-r border-gray-200">
                  Mindery Kids
                </th>
                <th className="px-6 py-4 text-center text-base font-bold text-purple-600 border-b border-gray-200">
                  Other Apps
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comparison, index) => (
                <tr key={index} className="border-b border-gray-200 last:border-b-0">
                  <td className="px-6 py-4 text-gray-700 font-medium border-r border-gray-200 text-center">
                    {comparison.feature}
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-r border-gray-200 text-center">
                    <div className="flex items-center justify-center">
                      <span className="text-green-500 mr-2 text-lg">✔</span>
                      <span className="text-sm">{comparison.minderyKids.split(' ').slice(1).join(' ')}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-center">
                    <div className="flex items-center justify-center">
                      <span className="text-red-500 mr-2 text-lg">X</span>
                      <span className="text-sm">{comparison.otherApps.split(' ').slice(1).join(' ')}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Comparison
