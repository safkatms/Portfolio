import React from 'react'

const Educational = () => {
  return (
    <>
      <section id="education" className="min-h-fit py-12">
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                  Education
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
                {/* Card 1 */}
                <div className="bg-white relative rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
                  {/* Background gradients */}
                  <div className="absolute top-0 left-0 w-16 h-24 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full blur-3xl opacity-50"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full blur-3xl opacity-50"></div>

                  {/* Card Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-pink-400">
                        BSc in Computer Science
                      </h3>
                      <div className="bg-pink-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                        3.75/4
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">
                      American International University-Bangladesh (AIUB) (2021
                      - 2025)
                    </p>
                    <p className="text-gray-300 text-sm">
                      Major in Software Engineering
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white relative rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
                  {/* Background gradients */}
                  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full blur-3xl opacity-50"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full blur-3xl opacity-50"></div>

                  {/* Card Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-pink-400">
                        HSC (Higher Secondary Certificate)
                      </h3>
                      <div className="bg-pink-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                        5.00/5
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">
                      Milestone College, Dhaka (2019)
                    </p>
                    <p className="text-gray-300 text-sm">Science group</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white relative rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
                  {/* Background gradients */}
                  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full blur-3xl opacity-50"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full blur-3xl opacity-50"></div>

                  {/* Card Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-pink-400">
                        SSC (Secondary School Certificate)
                      </h3>
                      <div className="bg-pink-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                        4.59/5
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">
                      Patuakhali Govt. Jubilee High School, Barishal (2017)
                    </p>
                    <p className="text-gray-300 text-sm">Science group</p>
                  </div>
                </div>
              </div>
            </section>
    </>
  )
}

export default Educational
