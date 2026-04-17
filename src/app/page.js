export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Ramada Websites Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of 7 unique website templates with two-column layouts and image galleries
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image Section */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-2">R</div>
                      <div className="text-xl font-semibold">Ramada</div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-75"></div>
                </div>
              </div>

              {/* Links Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Explore All Websites
                </h2>
                <div className="space-y-3">
                  <a 
                    href="/ramada1" 
                    className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 border border-blue-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-blue-800">Ramada 1</h3>
                        <p className="text-sm text-blue-600">White/Blue/Green Theme</p>
                      </div>
                      <span className="text-blue-500">Visit</span>
                    </div>
                  </a>

                  <a 
                    href="/ramada2" 
                    className="block p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200 border border-purple-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-purple-800">Ramada 2</h3>
                        <p className="text-sm text-purple-600">Gray/Purple/Orange Theme</p>
                      </div>
                      <span className="text-purple-500">Visit</span>
                    </div>
                  </a>

                  <a 
                    href="/ramada3" 
                    className="block p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors duration-200 border border-indigo-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-indigo-800">Ramada 3</h3>
                        <p className="text-sm text-indigo-600">Blue/Indigo/Cyan Theme</p>
                      </div>
                      <span className="text-indigo-500">Visit</span>
                    </div>
                  </a>

                  <a 
                    href="/ramada4" 
                    className="block p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200 border border-green-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-green-800">Ramada 4</h3>
                        <p className="text-sm text-green-600">Green/Emerald/Teal Theme</p>
                      </div>
                      <span className="text-green-500">Visit</span>
                    </div>
                  </a>

                  <a 
                    href="/ramada5" 
                    className="block p-4 bg-violet-50 hover:bg-violet-100 rounded-lg transition-colors duration-200 border border-violet-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-violet-800">Ramada 5</h3>
                        <p className="text-sm text-violet-600">Purple/Violet/Fuchsia Theme</p>
                      </div>
                      <span className="text-violet-500">Visit</span>
                    </div>
                  </a>

                  <a 
                    href="/ramada6" 
                    className="block p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors duration-200 border border-yellow-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-yellow-800">Ramada 6</h3>
                        <p className="text-sm text-yellow-600">Yellow/Amber/Lime Theme</p>
                      </div>
                      <span className="text-yellow-500">Visit</span>
                    </div>
                  </a>

                  <a 
                    href="/ramada7" 
                    className="block p-4 bg-red-50 hover:bg-red-100 rounded-lg transition-colors duration-200 border border-red-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-red-800">Ramada 7</h3>
                        <p className="text-sm text-red-600">Red/Rose/Pink Theme</p>
                      </div>
                      <span className="text-red-500">Visit</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-center mt-12">
            <p className="text-gray-600">
              Built with Next.js, React, and Tailwind CSS
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Each website features a two-column layout with image gallery and content areas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
