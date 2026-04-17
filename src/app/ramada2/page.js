// Ramada Website 2 - Three Column Layout with Stacked Image Sliders

'use client';

import { useState } from 'react';

export default function Ramada2() {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingSliders, setIsEditingSliders] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Column 1 - 3 Stacked Vertical Image Sliders (Smaller) */}
      <div className="w-64 bg-gray-100 border-r border-gray-300">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Image Gallery</h2>
          <div className="space-y-2 relative">
            {/* Slider 1 - Top */}
            <div className="relative aspect-[9/16] bg-white rounded border overflow-hidden">
              <button
                onClick={() => setIsEditingSliders(!isEditingSliders)}
                className="absolute top-2 right-2 z-30 bg-purple-500 hover:bg-purple-600 text-white text-xs px-2 py-1 rounded-full shadow-lg transition-colors duration-200"
              >
                {isEditingSliders ? 'Done' : 'Edit'}
              </button>
              <div className="absolute inset-0 flex animate-slide">
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 1</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 2</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 3</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 4</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 5</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 6</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 7</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 8</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 9</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 10</span>
                </div>
              </div>
            </div>

            {/* Slider 2 - Middle */}
            <div className="relative aspect-[9/16] bg-white rounded border overflow-hidden">
              <div className="absolute inset-0 flex animate-slide-reverse">
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide A</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide B</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide C</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide D</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide E</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide F</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide G</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide H</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide I</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide J</span>
                </div>
              </div>
            </div>

            {/* Slider 3 - Bottom */}
            <div className="relative aspect-[9/16] bg-white rounded border overflow-hidden">
              <div className="absolute inset-0 flex animate-slide">
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 1</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 2</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-zinc-400 to-zinc-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 3</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-neutral-400 to-neutral-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 4</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-stone-400 to-stone-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 5</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 6</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 7</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 8</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 9</span>
                </div>
                <div className="min-w-full aspect-[9/16] bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Slide 10</span>
                </div>
              </div>
            </div>
          
          {/* Slider Edit Mode Overlay */}
          {isEditingSliders && (
            <div className="absolute inset-0 bg-white bg-opacity-95 rounded-lg border-2 border-purple-500 p-4 z-40">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Edit Sliders</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Slider 1 - Top:</label>
                  <textarea
                    className="w-full h-20 p-2 border border-gray-300 rounded-md text-xs"
                    defaultValue="Slide 1: Purple gradient, Slide 2: Pink gradient, Slide 3: Indigo gradient..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Slider 2 - Middle:</label>
                  <textarea
                    className="w-full h-20 p-2 border border-gray-300 rounded-md text-xs"
                    defaultValue="Slide A: Orange gradient, Slide B: Red gradient, Slide C: Rose gradient..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Slider 3 - Bottom:</label>
                  <textarea
                    className="w-full h-20 p-2 border border-gray-300 rounded-md text-xs"
                    defaultValue="Slide 1: Gray gradient, Slide 2: Slate gradient, Slide 3: Zinc gradient..."
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={() => setIsEditingSliders(false)}
                  className="px-3 py-1 bg-gray-500 text-white text-xs rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Save logic here
                    setIsEditingSliders(false);
                  }}
                  className="px-3 py-1 bg-purple-500 text-white text-xs rounded hover:bg-purple-600"
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Column 2 - Single Content Area in Middle */}
      <div className="flex-1 p-6">
        <div className="h-full flex items-center justify-center">
          <div className="bg-white rounded-lg border border-gray-300 p-8 max-w-2xl w-full relative">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Content Area 1</h2>
            <p className="text-gray-600 mb-6">This is the main content area in the middle of the page. You can add any content here such as text, images, forms, or other components.</p>
            <div className="border-t pt-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 bg-gray-50 rounded border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Section 1</h3>
                  <p className="text-sm text-gray-600">Content for section 1 goes here. You can add any type of content.</p>
                </div>
                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Section 2</h3>
                  <p className="text-sm text-gray-600">Content for section 2 goes here. You can add any type of content.</p>
                </div>
                <div className="p-4 bg-pink-50 rounded border border-pink-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Section 3</h3>
                  <p className="text-sm text-gray-600">Content for section 3 goes here. You can add any type of content.</p>
                </div>
              </div>
            </div>
            
            {/* Edit Button - Bottom Right Corner */}
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="absolute bottom-4 right-4 bg-purple-500 hover:bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-lg transition-colors duration-200 z-10"
            >
              {isEditing ? 'Done' : 'Edit'}
            </button>
            
            {/* Edit Mode Overlay */}
            {isEditing && (
              <div className="absolute inset-0 bg-white bg-opacity-95 rounded-lg border-2 border-purple-500 p-4 z-20">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Edit Content:</label>
                  <textarea
                    className="w-full h-32 p-2 border border-gray-300 rounded-md text-sm"
                    defaultValue="Content for section 1 goes here. You can add any type of content."
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Edit Section 2:</label>
                  <textarea
                    className="w-full h-32 p-2 border border-gray-300 rounded-md text-sm"
                    defaultValue="Content for section 2 goes here. You can add any type of content."
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Edit Section 3:</label>
                  <textarea
                    className="w-full h-32 p-2 border border-gray-300 rounded-md text-sm"
                    defaultValue="Content for section 3 goes here. You can add any type of content."
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-gray-500 text-white text-sm rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      // Save logic here
                      setIsEditing(false);
                    }}
                    className="px-4 py-2 bg-purple-500 text-white text-sm rounded hover:bg-purple-600"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Column 3 - Empty Space */}
      <div className="w-64 bg-gray-50 border-r border-gray-300">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Sidebar</h2>
          <div className="bg-white rounded-lg border border-gray-300 p-4 h-full">
            <div className="text-center text-gray-500">
              <div className="text-6xl mb-4">+</div>
              <p className="text-lg">Sidebar Space</p>
              <p className="text-sm">Available for content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
