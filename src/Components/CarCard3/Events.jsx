import React, {  useMemo , useEffect } from 'react';

function Events() {
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
    <p className="text-yellow-700 italic text-lg font-semibold mt-10 mb-4 text-center md:text-xl lg:text-2xl">Elevate Your Events</p>
    <p className="text-3xl font-semibold mb-4 text-CarCard2 text-center md:text-4xl lg:text-5xl">Event Transportation</p>

    <div className="flex justify-center mb-4 font-extrabold">
      <p className="text-gray-400 m-0 p-0">____________</p>
      <p className="text-yellow-700 m-0 p-0">______________</p>
      <p className="text-gray-400 m-0 p-0">______________</p>
    </div>

    <div className="text-gray-700 mb-32 leading-relaxed">
      <p className="text-base md:text-lg lg:text-xl">
      Experience the pinnacle of event transportation with our bespoke services designed to add a touch of sophistication to your special occasions. Whether it’s a wedding, gala, or corporate event, our luxury vehicles and professional chauffeurs ensure that every detail is meticulously handled. Enjoy a seamless ride that reflects the importance of your event and makes a lasting impression.
</p>
      <p className="mt-4 text-base md:text-lg lg:text-xl">
      Our event transportation solutions provide unmatched convenience, from the moment you step out of your home to the event venue. We offer door-to-door service, ensuring that you arrive on time and in style. Our experienced drivers are dedicated to delivering a smooth and efficient journey, allowing you to focus on enjoying the event without any transportation-related concerns.
</p>
      <p className="mt-4 text-base md:text-lg lg:text-xl">
we understand that the success of an event often hinges on the overall experience. That’s why we offer more than just transportation; we provide a memorable experience that enhances your event. From our luxury fleet to our attentive service, every aspect is designed to exceed expectations and ensure that your special occasion is unforgettable.</p>   
   <div className="text-center text-lg md:text-xl italic lg:text-2xl mt-4">
   “Events are not just about the moment but about creating lasting memories.” 
           <br /> <span className='text-yellow-600'> — Alexandra Brooks</span>
      </div>
    </div>

    <p className="text-yellow-700 italic text-lg font-semibold mt-10 mb-4 text-center md:text-xl lg:text-2xl">visual Highlights</p>
    <p className="text-3xl font-semibold mb-4 text-CarCard2 text-center md:text-4xl lg:text-5xl">Event Gallery</p>

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

export default Events
