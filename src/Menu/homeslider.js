import React, { useState, useEffect } from "react";
import "../CSS/Homeslider.css";
const images = [
  "./IMGS/Banner1.jpg",
  "./IMGS/Banner2.png",
  "./IMGS/Banner3.png",
  "./IMGS/Banner4.png",
];

function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the image index to display the next image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='imgslider'>
      <div className='slider-container'>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className='slider-image'
        />
        {/* Optional: Add navigation arrows or dots */}
        <button
          onClick={() =>
            setCurrentImageIndex(
              (prevIndex) => (prevIndex - 1 + images.length) % images.length
            )
          }>
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
          }>
          Next
        </button>
      </div>
    </div>
  );
}

export default Slider;
