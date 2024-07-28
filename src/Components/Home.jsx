import React from 'react'

function Home() {
  return (
    <div className="container mx-auto p-6 font-sans">
   <h4 className="text-yellow-500 text-lg font-semibold mt-10 text-center md:text-xl lg:text-2xl">Our Story</h4>
   <h1 className="text-3xl font-semibold mb-8 text-center md:text-4xl lg:text-5xl">Introduction</h1>
    <div className="mb-6">
      <img
        src="AboutSection1.jpg"
        alt="About Us"
        className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-lg"
      />
    </div>
    <div className="text-gray-700 leading-relaxed">
      <p className="text-base md:text-lg lg:text-xl">
        With years of experience in the luxury transportation industry, our chauffeuring service in London has established a reputation for excellence and reliability. Catering to a diverse clientele from all around the world, we offer an extensive fleet of premium vehicles to meet your every need, ensuring an unparalleled travel experience.
      </p>
      <p className="mt-4 text-base md:text-lg lg:text-xl">
        Our fleet includes an array of high-end vehicles such as the Rolls-Royce Phantom, Bentley Bentayga, Mercedes-Benz S-Class, and Lamborghini Urus, among others. Whether you’re attending a business meeting, a special event, or simply exploring the city, our professional chauffeurs provide impeccable service, ensuring you arrive at your destination in style and comfort.
      </p>
      <p className="mt-4 mb-8  text-base md:text-lg lg:text-xl">
        Experience the ultimate in luxury and convenience with our bespoke chauffeuring services, tailored to exceed your expectations and deliver a truly remarkable journey. Trust us to provide a seamless and sophisticated travel experience every time.
      </p>
    </div>

    <div className="mb-6 ">
      <img
        src="AboutSection2.jpg"
        alt="About Us"
        className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-lg"
      />
    </div>
    <div className="items-center ">
    <h1 className="text-yellow-500 text-center text-3xl">
      <span style={{ fontWeight: '900' }}>\\</span>
    </h1>
  </div>
  </div>
  )
}

export default Home
