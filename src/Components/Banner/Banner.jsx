import { useState, useEffect } from "react";
import "./Slider.css";

const Banner = () => {
  const slides = [
    "number-slide1",
    "number-slide2",
    "number-slide3",
    "number-slide4",
    "number-slide5",
    "number-slide6",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="navigation-wrapper">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className={`number-slide ${slide}`}>
            {index + 1}
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button className="arrow arrow--left" onClick={prevSlide}>&#8592;</button>
      <button className="arrow arrow--right" onClick={nextSlide}>&#8594;</button>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
