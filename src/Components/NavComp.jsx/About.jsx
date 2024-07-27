import React from 'react';

function About() {
  return (
    <div className="container mx-auto p-6 font-sans">
      <h4 className="text-yellow-500 text-lg font-semibold mt-10 text-center md:text-xl lg:text-2xl">Our Story</h4>
      <h1 className="text-3xl font-bold mb-8 text-center md:text-4xl lg:text-5xl">Introduction</h1>
      
      {/* AboutSection1 Image */}
      <div className="mb-6">
        <img
          src="AboutSection1.jpg"
          alt="About Us"
          className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-lg"
        />
      </div>
      
      {/* About Section Text */}
      <div className="text-gray-700 leading-relaxed">
        <p className="text-base md:text-lg lg:text-xl">
          With years of experience in the luxury transportation industry, our chauffeuring service in London has established a reputation for excellence and reliability. Catering to a diverse clientele from all around the world, we offer an extensive fleet of premium vehicles to meet your every need, ensuring an unparalleled travel experience.
        </p>
        <p className="mt-4 text-base md:text-lg lg:text-xl">
          Our fleet includes an array of high-end vehicles such as the Rolls-Royce Phantom, Bentley Bentayga, Mercedes-Benz S-Class, and Lamborghini Urus, among others. Whether you’re attending a business meeting, a special event, or simply exploring the city, our professional chauffeurs provide impeccable service, ensuring you arrive at your destination in style and comfort.
        </p>
        <p className="mt-4 mb-8 text-base md:text-lg lg:text-xl">
          Experience the ultimate in luxury and convenience with our bespoke chauffeuring services, tailored to exceed your expectations and deliver a truly remarkable journey. Trust us to provide a seamless and sophisticated travel experience every time.
        </p>
      </div>

      {/* AboutSection2 Image */}
      <div className="mb-12">
        <img
          src="AboutSection2.jpg"
          alt="About Us"
          className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-lg"
        />
      </div>
      
      {/* Backslash Text */}
      <div className="text-center mb-8">
        <h1 className="text-yellow-500 text-3xl">
          <span style={{ fontWeight: '900' }}>\\</span>
        </h1>
      </div>

      {/* Testimonial Text */}
      <div className="text-gray-700 text-center leading-relaxed">
        <p className="text-base md:text-lg lg:text-xl mx-auto max-w-4xl">
          Grandeur Chauffeuring Service exceeded my expectations with their impeccable service and luxurious fleet. From booking to drop-off, every detail was handled with professionalism and care. Their Mercedes-Benz S-Class was pristine,...
        </p>
      </div>
    </div>
  );
}

export default About;
