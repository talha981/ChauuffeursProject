import React, { useMemo } from 'react'


function OutFleet() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const images= useMemo(()=>[
        {  id:1, src:"OurFleet/Fleet1.jpg", alt:"Image 1",},
        {  id:2, src:"OurFleet/Fleet2.jpg", alt:"Image 1",},
        {  id:3, src:"OurFleet/Fleet3.jpg", alt:"Image 1",},
        {  id:4, src:"OurFleet/Fleet4.jpg", alt:"Image 1",},
        {  id:5, src:"OurFleet/Fleet5.jpg", alt:"Image 1",},
        {  id:6, src:"OurFleet/Fleet6.jpg", alt:"Image 1",},
        {  id:7, src:"OurFleet/Fleet7.jpg", alt:"Image 1",},
        {  id:8, src:"OurFleet/Fleet8.jpg", alt:"Image 1",},
        {  id:9, src:"OurFleet/Fleet9.jpg", alt:"Image 1",},
        {  id:10, src:"OurFleet/Fleet10.jpg", alt:"Image 1",},
        {  id:11, src:"OurFleet/Fleet11.jpg", alt:"Image 1",},
        {  id:12, src:"OurFleet/Fleet12.jpg", alt:"Image 1",},
        {  id:13, src:"OurFleet/Fleet13.jpg", alt:"Image 1",},
        {  id:14, src:"OurFleet/Fleet14.jpg", alt:"Image 1",},
        {  id:15, src:"OurFleet/Fleet15.jpg", alt:"Image 1",},

    ],[])
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
      <p className="mt-4 text-base md:text-lg italic lg:text-xl">
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

export default OutFleet
