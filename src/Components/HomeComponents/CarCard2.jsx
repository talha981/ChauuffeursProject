import React from 'react';
import { FaCrown, FaClock, FaTruck, FaShieldAlt, FaDollarSign, FaUserTie } from 'react-icons/fa';


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
    <div className="flex flex-col lg:flex-row items-start justify-center">
      <div className="text-center">
        <p className="text-white text-xl md:text-2xl lg:text-3xl mb-8 ">
          We make sure that <span className="text-yellow-700"> your every <br className="hidden lg:inline" /> trip </span> is comfortable
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="border-r border-white p-4 border-dashed text-center flex flex-col items-center">
            <FaCrown className="text-white text-2xl mb-2" />
            <h2 className="text-white text-base md:text-lg lg:text-xl">Luxury</h2>
          </div>
          {/* Card 2 */}
          <div className="border-r border-white p-4 border-dashed text-center flex flex-col items-center">
            <FaClock className="text-white text-2xl mb-2" />
            <h2 className="text-white text-base md:text-lg lg:text-xl">24/7 Order Available</h2>
          </div>
          {/* Card 3 */}
          <div className="border-r border-white p-4 border-dashed text-center flex flex-col items-center">
            <FaTruck className="text-white text-2xl mb-2" />
            <h2 className="text-white text-base md:text-lg lg:text-xl">Fast Vehicle Delivery Service</h2>
          </div>
          {/* Card 4 */}
          <div className="border-r border-white p-4 border-dashed text-center flex flex-col items-center">
            <FaShieldAlt className="text-white text-2xl mb-2" />
            <h2 className="text-white text-base md:text-lg lg:text-xl">High Safety and Security</h2>
          </div>
          {/* Card 5 */}
          <div className="border-r border-white p-4 border-dashed text-center flex flex-col items-center">
            <FaDollarSign className="text-white text-2xl mb-2" />
            <h2 className="text-white text-base md:text-lg lg:text-xl">Affordable with Quality Service</h2>
          </div>
          {/* Card 6 */}
          <div className="p-4 text-center border-r border-dashed border-white flex flex-col items-center">
            <FaUserTie className="text-white text-2xl mb-2" />
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
