'use client';

import React, { useState } from 'react';

export default function Ramada2() {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingSliders, setIsEditingSliders] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="w-64 bg-gray-100 border-r border-gray-300">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Image Gallery</h2>
          <div className="space-y-2 relative">
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
              </div>
            </div>

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
              </div>
            </div>

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
              </div>
            </div>
          
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
                    onClick={() => setIsEditingSliders(false)}
                    className="px-3 py-1 bg-purple-500 text-white text-xs rounded hover:bg-purple-600"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 p-6">
        <div className="h-full flex items-center justify-center">
          <div className="bg-white rounded-lg border border-gray-300 p-8 max-w-2xl w-full relative">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Content Area 1</h2>
            <p className="text-gray-600 mb-6">This is the main content area in the middle of the page.</p>
            <div className="border-t pt-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 bg-gray-50 rounded border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Section 1</h3>
                  <p className="text-sm text-gray-600">Content for section 1 goes here.</p>
                </div>
                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Section 2</h3>
                  <p className="text-sm text-gray-600">Content for section 2 goes here.</p>
                </div>
                <div className="p-4 bg-pink-50 rounded border border-pink-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Section 3</h3>
                  <p className="text-sm text-gray-600">Content for section 3 goes here.</p>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="absolute bottom-4 right-4 bg-purple-500 hover:bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-lg transition-colors duration-200 z-10"
            >
              {isEditing ? 'Done' : 'Edit'}
            </button>
            
            {isEditing && (
              <div className="absolute inset-0 bg-white bg-opacity-95 rounded-lg border-2 border-purple-500 p-4 z-20">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Edit Content:</label>
                  <textarea
                    className="w-full h-32 p-2 border border-gray-300 rounded-md text-sm"
                    defaultValue="Content for section 1 goes here."
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
                    onClick={() => setIsEditing(false)}
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
