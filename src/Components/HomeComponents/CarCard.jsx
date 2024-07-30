import React from 'react';
import { useNavigate } from 'react-router-dom';

function CarCard() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/about'); // Update this to your desired route
  };

  return (
    <> 
    <h4 className="text-yellow-700 font-style: italic text-lg font-semibold mt-10 mb-4 text-center md:text-xl lg:text-2xl">Explore Our</h4>
      <h1 className="text-3xl font-semibold mb-4 text-CarCard2 text-center md:text-4xl lg:text-5xl">Luxury Collection</h1>


      <div className="flex justify-center mb-4 font-extrabold">
        <p className="text-gray-400 m-0 p-0">____________</p>
        <p className="text-yellow-700  m-0 p-0">______________</p>
        <p className="text-gray-400 m-0 p-0">______________</p>
      </div>
    
    <div className="flex flex-col lg:flex-row lg:items-start space-y-6 lg:space-y-0 lg:space-x-6 p-6 ">
      <div className="flex flex-col lg:w-1/2 lg:pr-6">
        <h1 className="text-3xl font-semibold  text-yellow-700  md:text-4xl lg:text-6xl">Luxury Cars</h1>
        <p className="text-4xl lg:text-5xl text-CarCard2 mt-4 font-semibold">for Maximum <br /> Satisfaction</p>
        <p className="text-sm lg:text-base mt-7  text-gray-700">
          Explore the best of London with our best of luxury <br /> cars for a comfortable tour.
        </p>
        <div className=" mt-4 lg:text-left">
        <button className="bg-yellow-700 text-white px-6 py-3 shadow-lg w-full sm:w-auto" 
        onClick={handleNavigate}>
      Read More
    </button>

        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img src="about-limmo.png" alt="Luxury Car" className="w-full h-auto " />
      </div>

      
    </div>
   


      
            </>
  );
}

export default CarCard;
