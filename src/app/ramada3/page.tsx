// Ramada Website 3 - Two Column Layout

import React, { useState } from 'react';

export default function Ramada3() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { id: 1, color: 'from-green-400 to-green-600', label: 'Slide 1' },
    { id: 2, color: 'from-teal-400 to-teal-600', label: 'Slide 2' },
    { id: 3, color: 'from-cyan-400 to-cyan-600', label: 'Slide 3' },
    { id: 4, color: 'from-blue-400 to-blue-600', label: 'Slide 4' },
    { id: 5, color: 'from-indigo-400 to-indigo-600', label: 'Slide 5' },
    { id: 6, color: 'from-emerald-400 to-emerald-600', label: 'Slide 6' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-green-50 flex">
      {/* Left Column - Image Slider */}
      <div className="w-80 bg-gray-100 border-r border-gray-300">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Image Gallery</h2>
          <div className="relative h-48 mb-4">
            <div className="w-full h-full rounded-lg overflow-hidden relative">
              <div 
                className={`w-full h-full bg-gradient-to-br ${slides[currentSlide].color} flex items-center justify-center text-white text-sm font-semibold`}
              >
                {slides[currentSlide].label}
              </div>
            </div>
            
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer text-xs"
            >
              &#8249;
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer text-xs"
            >
              &#8250;
            </button>
          </div>
          
          <div className="flex justify-center gap-1 mb-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full border-none cursor-pointer ${
                  currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Two Rows, Two Columns Each */}
      <div className="flex-1 p-6">
        {/* First Row - Two Columns */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
            <h3 className="text-lg font-semibold mb-2">Top Left</h3>
            <p className="text-gray-600">Content area 1</p>
          </div>
          <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
            <h3 className="text-lg font-semibold mb-2">Top Right</h3>
            <p className="text-gray-600">Content area 2</p>
          </div>
        </div>

        {/* Second Row - Two Columns */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
            <h3 className="text-lg font-semibold mb-2">Bottom Left</h3>
            <p className="text-gray-600">Content area 3</p>
          </div>
          <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
            <h3 className="text-lg font-semibold mb-2">Bottom Right</h3>
            <p className="text-gray-600">Content area 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
