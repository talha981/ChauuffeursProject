import React from 'react';

function CarCard2() {
  return (
    <>
      <div className="">
        <p className="text-lg xl:text-base mt-20 text-center italic text-gray-700">
          We value the time and quality of travel <br /> for each of our clients
        </p>
        <h4 className="text-yellow-700 italic text-lg font-semibold mt-2 mb-4 text-center md:text-xl lg:text-2xl">
          Incredible
        </h4>
        <h1 className="text-3xl font-semibold mb-4 text-center md:text-4xl lg:text-5xl">
          Comfort
        </h1>

        <div className="flex justify-center font-extrabold">
          <p className="text-gray-400 m-0 p-0">____________</p>
          <p className="text-yellow-700 m-0 p-0">_________</p>
          <p className="text-gray-400 m-0 p-0">______________</p>
        </div>
      </div>

      <div className="relative">
       <div className="relative">
  <img
    src="about-limmo2.png"
    alt="Luxury Car"
    className="relative top-16 left-0 w-full h-auto z-10"
  />
</div>
        <div className="relative bg-CarCard2 z-0 pt-32 -mt-1/4">
          <div className="container mx-auto p-6 font-sans">
            <h1 className="text-3xl font-semibold text-yellow-700 md:text-4xl lg:text-6xl">
              Luxury Cars
            </h1>
            <p className="text-4xl lg:text-5xl mt-4 text-white font-semibold">
              for Maximum <br /> Satisfaction
            </p>
            <p className="text-sm lg:text-base mt-7 text-white">
              Explore the best of London with our luxury <br /> cars for a comfortable tour.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarCard2;
