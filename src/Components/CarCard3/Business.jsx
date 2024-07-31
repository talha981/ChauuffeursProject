import React, { useEffect, useMemo } from 'react';

function Business() {
    useEffect(() => {
        window.scrollTo(0, 0);
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
    <p className="text-yellow-700 italic text-lg font-semibold mt-10 mb-4 text-center md:text-xl lg:text-2xl">Seamless Professional Transportation</p>
    <p className="text-3xl font-semibold mb-4 text-CarCard2 text-center md:text-4xl lg:text-5xl">Business Travel</p>

    <div className="flex justify-center mb-4 font-extrabold">
      <p className="text-gray-400 m-0 p-0">____________</p>
      <p className="text-yellow-700 m-0 p-0">______________</p>
      <p className="text-gray-400 m-0 p-0">______________</p>
    </div>

    <div className="text-gray-700 mb-32 leading-relaxed">
      <p className="text-base md:text-lg lg:text-xl">
      We are committed to providing exceptional corporate transfer services that cater to the needs of modern businesses. Our premium transportation solutions are designed to ensure a seamless and professional experience, from the moment you step out of your door to the exact location of your meeting or event.

</p>
      <p className="mt-4 text-base md:text-lg lg:text-xl">
      Our fleet of luxurious vehicles and highly skilled chauffeurs are dedicated to delivering a smooth and punctual journey, reflecting the high standards of your business. We offer tailored services that accommodate your schedule, preferences, and specific requirements, ensuring a hassle-free travel experience that enhances your productivity and comfort.

</p>
      <p className="mt-4 text-base md:text-lg lg:text-xl">
      Whether you’re heading to an important meeting, a corporate event, or any other business-related engagement, trust us to provide a level of service that aligns with the professionalism and excellence you expect. Our commitment to punctuality, discretion, and reliability ensures that every aspect of your transfer is handled with the utmost care and attention.      </p>
      <div className="text-center text-lg md:text-xl lg:text-2xl mt-4">
      "The best way to predict the future is to create it." 
        <br /> <span className='text-yellow-600'> — Peter Drucker</span>
      </div>
    </div>

    <p className="text-yellow-700 italic text-lg font-semibold mt-10 mb-4 text-center md:text-xl lg:text-2xl">Service Highlights</p>
    <p className="text-3xl font-semibold mb-4 text-CarCard2 text-center md:text-4xl lg:text-5xl">Premier Business Travel</p>

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
  )
}

export default Business

