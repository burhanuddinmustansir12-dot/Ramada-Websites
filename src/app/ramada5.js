// Ramada Website 5 - Two Column Layout

export default function Ramada5() {
  return (
    <div className="min-h-screen bg-purple-50 flex">
      {/* Left Column - 3 Equal Columns for Images */}
      <div className="w-80 bg-gray-100 border-r border-gray-300">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Image Gallery</h2>
          <div className="grid grid-cols-3 gap-2">
            <div className="aspect-square bg-white rounded border flex items-center justify-center">
              <span className="text-gray-400 text-xs">Image 1</span>
            </div>
            <div className="aspect-square bg-white rounded border flex items-center justify-center">
              <span className="text-gray-400 text-xs">Image 2</span>
            </div>
            <div className="aspect-square bg-white rounded border flex items-center justify-center">
              <span className="text-gray-400 text-xs">Image 3</span>
            </div>
            <div className="aspect-square bg-white rounded border flex items-center justify-center">
              <span className="text-gray-400 text-xs">Image 4</span>
            </div>
            <div className="aspect-square bg-white rounded border flex items-center justify-center">
              <span className="text-gray-400 text-xs">Image 5</span>
            </div>
            <div className="aspect-square bg-white rounded border flex items-center justify-center">
              <span className="text-gray-400 text-xs">Image 6</span>
            </div>
            <div className="aspect-square bg-white rounded border flex items-center justify-center">
              <span className="text-gray-400 text-xs">Image 7</span>
            </div>
            <div className="aspect-square bg-white rounded border flex items-center justify-center">
              <span className="text-gray-400 text-xs">Image 8</span>
            </div>
            <div className="aspect-square bg-white rounded border flex items-center justify-center">
              <span className="text-gray-400 text-xs">Image 9</span>
            </div>
            <div className="aspect-square bg-white rounded border flex items-center justify-center">
              <span className="text-gray-400 text-xs">Image 10</span>
            </div>
            <div className="aspect-square bg-white rounded border flex items-center justify-center">
              <span className="text-gray-400 text-xs">Image 11</span>
            </div>
            <div className="aspect-square bg-white rounded border flex items-center justify-center">
              <span className="text-gray-400 text-xs">Image 12</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Two Rows, Two Columns Each */}
      <div className="flex-1 p-6">
        {/* First Row - Two Columns */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-violet-50 p-6 rounded-lg border border-violet-200">
            <h3 className="text-lg font-semibold mb-2">Top Left</h3>
            <p className="text-gray-600">Content area 1</p>
          </div>
          <div className="bg-violet-50 p-6 rounded-lg border border-violet-200">
            <h3 className="text-lg font-semibold mb-2">Top Right</h3>
            <p className="text-gray-600">Content area 2</p>
          </div>
        </div>

        {/* Second Row - Two Columns */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-fuchsia-50 p-6 rounded-lg border border-fuchsia-200">
            <h3 className="text-lg font-semibold mb-2">Bottom Left</h3>
            <p className="text-gray-600">Content area 3</p>
          </div>
          <div className="bg-fuchsia-50 p-6 rounded-lg border border-fuchsia-200">
            <h3 className="text-lg font-semibold mb-2">Bottom Right</h3>
            <p className="text-gray-600">Content area 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
