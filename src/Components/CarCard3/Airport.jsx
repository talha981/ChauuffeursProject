import React, { useEffect, useMemo } from 'react';

function Airport() {
  useEffect(() => {
    window.scrollTo(75,75 );
  }, []);

  const images = useMemo(() => [
    { id: 1, src: "/Airport-img/airport1.jpg", alt: "Image 1" },
    { id: 2, src: "/Airport-img/airport2.jpg", alt: "Image 2" },
    { id: 3, src: "/Airport-img/airport3.jpg", alt: "Image 3" },
    { id: 4, src: "/Airport-img/airport4.jpg", alt: "Image 4" },
    { id: 5, src: "/Airport-img/airport5.jpg", alt: "Image 5" },
    { id: 6, src: "/Airport-img/airport6.jpg", alt: "Image 6" },
    { id: 7, src: "/Airport-img/airport7.jpg", alt: "Image 7" },
    { id: 8, src: "/Airport-img/airport8.jpg", alt: "Image 8" },
    { id: 9, src: "/Airport-img/airport9.jpg", alt: "Image 9" }
  ], []);

  return (
    <div className="container mx-auto p-6 font-sans">
      <p className="text-yellow-700 italic text-lg font-semibold mt-10 mb-4 text-center md:text-xl lg:text-2xl">Airport Shuttle Service</p>
      <p className="text-3xl font-semibold mb-4 text-CarCard2 text-center md:text-4xl lg:text-5xl">Reliable Transfers</p>

      <div className="flex justify-center mb-4 font-extrabold">
        <p className="text-gray-400 m-0 p-0">____________</p>
        <p className="text-yellow-700 m-0 p-0">______________</p>
        <p className="text-gray-400 m-0 p-0">______________</p>
      </div>

      <div className="text-gray-700 mb-32 leading-relaxed">
        <p className="text-base md:text-lg lg:text-xl">
          We offer exclusive airport transfer services that redefine convenience and luxury. Our professional chauffeurs are dedicated to ensuring a seamless experience by providing door-to-door service, including pick-up and drop-off directly from the airport terminal. For added convenience and exclusivity, we offer the unique advantage of escorting you to and from your aircraft, ensuring a swift and effortless transition between your flight and ground transportation.
        </p>
        <p className="mt-4 text-base md:text-lg lg:text-xl">
          We are committed to providing exceptional service and luxurious transportation solutions to our valued clients. We specialize in offering a premium fleet of vehicles, ensuring that our customers experience the utmost comfort and style. Whether you require a car for a business trip, a leisurely vacation, or any other purpose, our meticulously maintained and fully equipped vehicles are designed to meet your highest expectations.
        </p>
        <p className="mt-4 text-base md:text-lg lg:text-xl">
          We pride ourselves on delivering an unparalleled level of service, marked by punctuality, reliability, and attention to detail. Our commitment to excellence is reflected in every aspect of our operations, from the quality of our vehicles to the professionalism of our staff. When you choose our rental car company for your transportation needs, you can expect a bespoke service that prioritizes your comfort, safety, and satisfaction, making your travel experience both memorable and enjoyable.
        </p>
        <div className="text-center text-lg md:text-xl italic lg:text-2xl mt-4">
          "One more stage, one more limo, one more run for your life."
          <br /> <span className='text-yellow-600'> — John Lennon</span>
        </div>
      </div>

      <p className="text-yellow-700 italic text-lg font-semibold mt-10 mb-4 text-center md:text-xl lg:text-2xl">Sharing moments from our airport pickups</p>
      <p className="text-3xl font-semibold mb-4 text-CarCard2 text-center md:text-4xl lg:text-5xl">Arrivals in Style</p>

      <div className="flex justify-center mb-5 font-extrabold">
        <p className="text-gray-400 m-0 p-0">____________</p>
        <p className="text-yellow-700 m-0 p-0">______________</p>
        <p className="text-gray-400 m-0 p-0">______________</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex justify-center">
            <img src={image.src} alt={image.alt} className="w-full h-auto object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Airport;
