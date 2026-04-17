'use client';

import { useState } from 'react';

export default function ramada7() {
  const [isEditing, setIsEditing] = useState(false);

  // Slider data (you can replace with real images later)
  const [sliders, setSliders] = useState([
    ['Slide 1', 'Slide 2', 'Slide 3'],
    ['Slide A', 'Slide B', 'Slide C'],
    ['Slide X', 'Slide Y', 'Slide Z'],
  ]);

  const [content, setContent] = useState({
    title: 'Content Area',
    text: 'Add your details here...',
  });

  const [currentSlides, setCurrentSlides] = useState([0, 0, 0]);

  const nextSlide = (sliderIndex: number) => {
    setCurrentSlides((prev) =>
      prev.map((val, i) =>
        i === sliderIndex ? (val + 1) % sliders[i].length : val
      )
    );
  };

  const prevSlide = (sliderIndex: number) => {
    setCurrentSlides((prev) =>
      prev.map((val, i) =>
        i === sliderIndex
          ? (val - 1 + sliders[i].length) % sliders[i].length
          : val
      )
    );
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* LEFT: 3 SLIDERS */}
      <div className="w-64 p-4 space-y-4">
        {sliders.map((slider, i) => (
          <div key={i} className="relative h-40 bg-white rounded shadow overflow-hidden">
            
            <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-400 to-purple-600 text-white font-bold">
              {slider[currentSlides[i]]}
            </div>

            {/* Buttons */}
            <button
              onClick={() => prevSlide(i)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white px-2 rounded"
            >
              ‹
            </button>
            <button
              onClick={() => nextSlide(i)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-2 rounded"
            >
              ›
            </button>
          </div>
        ))}
      </div>

      {/* MIDDLE: CONTENT */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white p-6 rounded shadow w-full max-w-xl relative">
          
          <h2 className="text-2xl font-bold mb-4">{content.title}</h2>
          <p className="text-gray-600">{content.text}</p>

          {/* EDIT BUTTON */}
          <button
            onClick={() => setIsEditing(true)}
            className="absolute bottom-3 right-3 bg-purple-500 text-white px-3 py-1 text-xs rounded"
          >
            Edit
          </button>

          {/* EDIT PANEL */}
          {isEditing && (
            <div className="absolute inset-0 bg-white p-4 border-2 border-purple-500 rounded z-50 overflow-auto">
              
              <h3 className="font-bold mb-3">Edit Content</h3>

              {/* Content Edit */}
              <input
                className="w-full border p-2 mb-2"
                value={content.title}
                onChange={(e) =>
                  setContent({ ...content, title: e.target.value })
                }
              />
              <textarea
                className="w-full border p-2 mb-4"
                value={content.text}
                onChange={(e) =>
                  setContent({ ...content, text: e.target.value })
                }
              />

              {/* Slider Edit */}
              {sliders.map((slider, i) => (
                <div key={i} className="mb-3">
                  <p className="font-semibold">Slider {i + 1}</p>
                  <input
                    className="w-full border p-2"
                    value={slider.join(', ')}
                    onChange={(e) => {
                      const updated = [...sliders];
                      updated[i] = e.target.value.split(',').map(s => s.trim());
                      setSliders(updated);
                    }}
                  />
                </div>
              ))}

              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-400 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-purple-500 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
              </div>

            </div>
          )}
        </div>
      </div>

    </div>
  );
}