import React, { useEffect, useMemo } from 'react'


function OurFleet() {
    useEffect(() => {
        window.scrollTo(0,0 );
      }, []);

    const images= useMemo(()=>[
        {  id:1, src:"OurFleet/Fleet1.jpg", alt:"Image 1",},
        {  id:2, src:"OurFleet/Fleet2.jpg", alt:"Image 2",},
        {  id:3, src:"OurFleet/Fleet3.jpg", alt:"Image 3",},
        {  id:4, src:"OurFleet/Fleet4.jpg", alt:"Image 4",},
        {  id:5, src:"OurFleet/Fleet5.jpg", alt:"Image 5",},
        {  id:6, src:"OurFleet/Fleet6.jpg", alt:"Image 6",},
        {  id:7, src:"OurFleet/Fleet7.jpg", alt:"Image 7",},
        {  id:8, src:"OurFleet/Fleet8.jpg", alt:"Image 8",},
        {  id:9, src:"OurFleet/Fleet9.jpg", alt:"Image 9",},
        {  id:10, src:"OurFleet/Fleet10.jpg", alt:"Image 10",},
        {  id:11, src:"OurFleet/Fleet11.jpg", alt:"Image 11",},
        {  id:12, src:"OurFleet/Fleet12.jpg", alt:"Image 12",},
        {  id:13, src:"OurFleet/Fleet13.jpg", alt:"Image 13",},
        {  id:14, src:"OurFleet/Fleet14.jpg", alt:"Image 14",},
        {  id:15, src:"OurFleet/Fleet15.jpg", alt:"Image 15",},

    ],[])
  return (
    <div className="container mx-auto p-6 font-sans">
    <p className="text-yellow-700 italic text-lg font-semibold mt-10 mb-4 text-center md:text-xl lg:text-2xl">First-Class Experience</p>
    <p className="text-3xl font-semibold mb-4 text-CarCard2 text-center md:text-4xl lg:text-5xl">Sophisticated Travel</p>

    <div className="flex justify-center mb-4 font-extrabold">
      <p className="text-gray-400 m-0 p-0">____________</p>
      <p className="text-yellow-700 m-0 p-0">______________</p>
      <p className="text-gray-400 m-0 p-0">______________</p>
    </div>

    <div className="text-gray-700 mb-32 leading-relaxed">
      <p className="text-base md:text-lg lg:text-xl">
      Discover the epitome of luxury with our premier selections of rental cars. Each vehicle in our fleet is meticulously chosen to offer unparalleled elegance and sophistication. From the sleek lines of our sedans to the commanding presence of our SUVs, our cars are designed to make a statement. Whether you're attending a business meeting or a special event, arrive in style and leave a lasting impression with our luxurious vehicles.
</p>
      <p className="mt-4 text-base md:text-lg lg:text-xl">
      Experience the ultimate in comfort with our luxurious interiors. Our cars are equipped with the finest materials and state-of-the-art amenities to ensure a smooth and relaxing journey. Plush leather seats, advanced climate control, and premium sound systems are just a few of the features that set our fleet apart. Whether you're traveling for business or leisure, our cars provide an oasis of comfort and relaxation, making every journey a pleasure.
</p>
      <p className="mt-4 text-base md:text-lg italic lg:text-xl">
      Our high-performance cars deliver an exhilarating driving experience that is second to none. Engineered for speed and precision, each vehicle in our fleet offers exceptional handling and performance. Whether you're navigating city streets or cruising on the motorway, our cars provide a powerful and responsive ride. Trust in our fleet to deliver the perfect blend of performance and luxury, ensuring a driving experience that is both thrilling and refined.        </p>
      <p className="mt-4 text-base md:text-lg italic lg:text-xl">
      Our elite fleet represents the pinnacle of automotive excellence. We offer a carefully curated selection of the world's most prestigious car brands, each renowned for their craftsmanship and innovation. From iconic classics to cutting-edge models, our fleet caters to the most discerning tastes. Experience the best that the automotive world has to offer with our exclusive selection, and indulge in the luxury of choice with our unparalleled range of vehicles.          </p>
      <div className="text-center text-lg md:text-xl lg:text-2xl italic mt-4">
      "Luxury must be comfortable, otherwise it is not luxury."
        <br /> <span className='text-yellow-600'> — Coco Chanel</span>
      </div>
    </div>

    <p className="text-yellow-700 italic text-lg font-semibold mt-10 mb-4 text-center md:text-xl lg:text-2xl">Ultimate Class</p>
    <p className="text-3xl font-semibold mb-4 text-CarCard2 text-center md:text-4xl lg:text-5xl">Luxury Showcase</p>

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

export default OurFleet
