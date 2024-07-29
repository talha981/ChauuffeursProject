import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//npm install react-slick slick-carousel
import React from 'react';
import Slider from 'react-slick';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
      <Slider {...settings} className="h-full">
        <div className="h-full">
          <img src="home.jpg" alt="Slide 1" className="w-full h-full object-cover" />
        </div>
        <div className="h-full">
          <img src="home2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
    </div>
  );
};

export default ImageSlider;
