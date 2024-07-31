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
                <h1 className="text-3xl font-semibold mb-4 text-center text-CarCard2 md:text-4xl lg:text-5xl">
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
                        className="relative top-16 left-0 w-full h-auto z-10 mx-auto"
                    />
                </div>

                <div className="relative bg-CarCard2 z-0 pt-32 -mt-1/4">
  <div className="container mx-auto p-6 font-sans">
    <div className="flex flex-col lg:flex-row items-start">
      <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-8 flex justify-center lg:justify-start">
        <img src="about-limmo3.png" alt="Luxury Car" className="w-56 md:w-72 lg:w-96 h-auto mx-auto lg:mx-0" />
      </div>
      <div className="text-left  lg:text-center">
        <p className="text-white text-xl md:text-2xl lg:text-3xl mb-8 lg:mb-12">
          We make sure that <span className="text-yellow-700"> your every <br className="hidden lg:inline" /> trip </span> is comfortable
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-20 md:grid-cols-3 gap-4">
          <div className="border-r border-white p-4 border-dashed text-left sm:text-center">
            <h2 className="text-white text-base md:text-lg lg:text-xl">Luxury</h2>
          </div>
          <div className="border-r border-white border-dashed p-4 text-left sm:text-center">
            <h2 className="text-white text-base md:text-lg lg:text-xl">24/7 Order Available</h2>
          </div>
          <div className="border-r border-white border-dashed p-4 text-left sm:text-center">
            <h2 className="text-white text-base md:text-lg lg:text-xl">Fast Vehicle Delivery Service</h2>
          </div>
          <div className="border-r border-white border-dashed p-4 text-left sm:text-center">
            <h2 className="text-white text-base md:text-lg lg:text-xl">High Safety and Security</h2>
          </div>
          <div className="border-r border-white border-dashed p-4 text-left sm:text-center">
            <h2 className="text-white text-base md:text-lg lg:text-xl">Affordable with Quality Service</h2>
          </div>
          <div className="p-4 text-left sm:text-center border-r border-dashed border-white">
            <h2 className="text-white text-base md:text-lg lg:text-xl">Professional Car Drivers</h2>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
        </>
    );
}

export default CarCard2;
