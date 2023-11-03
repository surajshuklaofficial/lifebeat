import React, { useState } from 'react';

const SlideComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [startX, setStartX] = useState();

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startX) {
      const currentX = e.touches[0].clientX;
      const deltaX = currentX - startX;
      if (deltaX > 50) {
        // Sliding from left to right
        setIsVisible(true);
      } else if (deltaX < -50) {
        // Sliding from right to left
        setIsVisible(false);
      }
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-gray-200 transition-transform transform ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
      }`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      suraj shukla
    </div>
  );
};

export default SlideComponent;
