
import React, { useState, useEffect } from 'react';
function HomeSlider() {


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "Grandeur",
      subtitle: "Enjoy the Ride",
      description: "the inspiration comes standard",

    },
    {
      title: "Luxury",
      subtitle: "Travel in Style",
      description: "comfort and elegance redefined",
    },
    {
      title: "Grandeur",
      subtitle: "Vip Transfers",
      description: "for your success in business",
    },
    {
      title: "Excellence",
      subtitle: "Experience the Best",
      description: "where quality meets perfection",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setIsVisible(true);
      }, 1000); // match this with your fade duration
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <>
    <div className="w-full h-1/2 p-6 flex mt-10   ">
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-left">
            <span className="text-5xl font-semibold sm:text-6xl md:text-7xl lg:text-7xl italic text-yellow-600 ml-3">
              {slides[currentIndex].title}
            </span> <br />
            <span className="text-6xl font-semibold sm:text-7xl md:text-8xl lg:text-8xl italic text-CarCard2 mb-4">
              {slides[currentIndex].subtitle}
            </span> <br /> <br/>
            <span className="text-lg font-normal sm:text-sm md:text-base lg:text-2xl italic text-CarCard2 sm:mt-10 lg:mt-10">
              {slides[currentIndex].description}
            </span>
          </p>
        </div>
      </div>
      
    </>
  )
}

export default HomeSlider
