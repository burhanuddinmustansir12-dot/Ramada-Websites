import React, { useState } from 'react';

export default function Ramada1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { id: 1, color: 'from-blue-400 to-blue-600', label: 'Slide 1' },
    { id: 2, color: 'from-green-400 to-green-600', label: 'Slide 2' },
    { id: 3, color: 'from-cyan-400 to-cyan-600', label: 'Slide 3' },
    { id: 4, color: 'from-teal-400 to-teal-600', label: 'Slide 4' },
    { id: 5, color: 'from-indigo-400 to-indigo-600', label: 'Slide 5' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex' }}>
      <div style={{ width: '256px', background: '#f3f4f6', borderRight: '1px solid #d1d5db', padding: '16px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Image Gallery</h2>
        <div style={{ position: 'relative', height: '200px', marginBottom: '16px' }}>
          <div style={{ 
            width: '100%', 
            height: '100%', 
            borderRadius: '8px', 
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: `linear-gradient(to bottom right, ${slides[currentSlide].color.split(' ')[1]}, ${slides[currentSlide].color.split(' ')[3]})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              {slides[currentSlide].label}
            </div>
          </div>
          
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid #d1d5db',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            &#8249;
          </button>
          
          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid #d1d5db',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            &#8250;
          </button>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '16px' }}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                border: 'none',
                background: currentSlide === index ? '#3b82f6' : '#d1d5db',
                cursor: 'pointer'
              }}
            />
          ))}
        </div>
        
        <p style={{ color: '#4b5563', fontSize: '12px', textAlign: 'center' }}>Ramada 1 - Working!</p>
      </div>
      
      <div style={{ flex: 1, padding: '24px' }}>
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: 'white', borderRadius: '8px', border: '1px solid #d1d5db', padding: '32px', maxWidth: '672px', width: '100%' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>Content Area 1</h2>
            <p style={{ color: '#4b5563', marginBottom: '24px' }}>This is the main content area in the middle of the page.</p>
            <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '16px' }}>
              <p style={{ color: '#6b7280', fontSize: '14px' }}>White/Blue/Green Theme - Ramada 1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
