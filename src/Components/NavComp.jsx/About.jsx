import React from 'react';

function About() {
  return (
    <div className="container mx-auto p-6 font-sans">
      {/* Introduction Section */}
      <p className="text-yellow-700 font-style: italic text-lg font-semibold mt-10 mb-4 text-center md:text-xl lg:text-2xl">Our Story</p>
      <p className="text-3xl font-semibold mb-4 text-CarCard2 text-center md:text-4xl lg:text-5xl">Introduction</p>


      <div className="flex justify-center mb-4 font-extrabold">
        <p className="text-gray-400 m-0 p-0">____________</p>
        <p className="text-yellow-700  m-0 p-0">______________</p>
        <p className="text-gray-400 m-0 p-0">______________</p>
      </div>
      {/* About Section Text */}
      <div className="text-gray-700 leading-relaxed">
        <p className="text-base md:text-lg lg:text-xl">
          With years of experience in the luxury transportation industry, our chauffeuring service in London has established a reputation for excellence and reliability. Catering to a diverse clientele from all around the world, we offer an extensive fleet of premium vehicles to meet your every need, ensuring an unparalleled travel experience.
        </p>
        <p className="mt-4 text-base md:text-lg lg:text-xl">
          Our fleet includes an array of high-end vehicles such as the Rolls-Royce Phantom, Bentley Bentayga, Mercedes-Benz S-Class, and Lamborghini Urus, among others. Whether you’re attending a business meeting, a special event, or simply exploring the city, our professional chauffeurs provide impeccable service, ensuring you arrive at your destination in style and comfort.
        </p>
        <p className="mt-4 text-base md:text-lg lg:text-xl">
          Experience the ultimate in luxury and convenience with our bespoke chauffeuring services, tailored to exceed your expectations and deliver a truly remarkable journey. Trust us to provide a seamless and sophisticated travel experience every time.
        </p>
        <p className="mt-4 mb-32 text-base md:text-lg lg:text-xl">
          We take pride in being the best luxury car rental service in the UK, offering a wide range of vehicles to cater to every need. Our commitment to excellence ensures that you receive the highest quality service, making us the top choice for luxury transportation.
        </p>
      </div>

      {/* Team Members Section */}
      <h4 className="text-yellow-700 font-style: italic text-lg font-semibold mt-10 mb-4 text-center md:text-xl lg:text-2xl">Team Grandeur
      </h4>
      <h1 className="text-3xl font-semibold text-CarCard2 mb-4 text-center md:text-4xl lg:text-5xl">Meet Our Team</h1>


      <div className="flex justify-center mb-8 font-extrabold">
        <p className="text-gray-400 m-0 p-0">____________</p>
        <p className="text-yellow-700  m-0 p-0">________________</p>
        <p className="text-gray-400 m-0 p-0">_____________</p>
      </div>
      <div className="team-members grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className=" transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <img
            src="AboutSection1.jpg"
            alt="About Us"
            className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-lg object-cover"
            style={{ height: '300px' }} // Set a fixed height
          />
        </div>
        <div className=" transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <img
            src="AboutSection2.jpg"
            alt="About Us"
            className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-lg object-cover"
            style={{ height: '300px' }} // Set a fixed height
          />
        </div>
      </div>

      {/* Team Member Cards */}
      <div className="grid grid-cols-1 mb-32 md:grid-cols-2 gap-8  ">
        <div className=" rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl bg-Form3">
          <div className="flex justify-center">
            <img
              src="Bilal.png"
              alt="Bilal Akbar"
              className="w-24 h-24 rounded-full mb-2"
            />
          </div>
          <div className="">
            <h4 className="text-xl text-CarCard2 font-semibold text-center">Bilal Akbar</h4>
            <p className="text-base mt-2">
              Bilal has over 20 years of experience in the luxury car rental industry. His vision and leadership have been pivotal in the growth of Grandeur Chauffeurs.
            </p>
          </div>
        </div>
        <div className="bg-Form3 rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl ">
          <div className="flex justify-center">
            <img
              src="Bilal.png"
              alt="Jane Smith"
              className="w-24 h-24 rounded-full mb-2"
            />
          </div>
          <div className="">
            <h4 className="text-xl font-semibold text-CarCard2 text-center">Jane Smith</h4>
            <p className="text-base mt-2">
              Jane has over 20 years of experience in the luxury car rental industry. Her vision and leadership have been pivotal in the growth of Grandeur Chauffeurs.
            </p>
          </div>
        </div>
      </div>

      <h4 className="text-yellow-700 font-style: italic text-lg font-semibold  mb-4 text-center md:text-xl lg:text-2xl ">Qualified Personnel</h4>
      <h1 className="text-3xl font-semibold mb-4 text-center md:text-4xl  text-CarCard2 lg:text-5xl">Certified Chauffeurs</h1>


      <div className="flex justify-center mb-8 font-extrabold">
        <p className="text-gray-400 m-0 p-0">__________________</p>
        <p className="text-yellow-700  m-0 p-0">________________</p>
        <p className="text-gray-400 m-0 p-0">_________________</p>
      </div>
      {/* About Section Text */}
      <div className="text-gray-700 leading-relaxed">
        <p className="text-base md:text-lg lg:text-xl">
          Our chauffeurs are not only professional but also exceptionally courteous. Each chauffeur undergoes a comprehensive training program meticulously designed to instill a keen attention to detail and to ensure they are highly attentive to our customer's needs.        </p>
        <p className="mt-4 text-base md:text-lg lg:text-xl">
          The Chauffeur Certification program encompasses six rigorous modules that every chauffeur must successfully complete to qualify for driving with Grandeur Executive Transportation. This extensive training ensures our chauffeurs are fully prepared to deliver the highest standards of safety and service to our esteemed passengers.</p>
        <p className="mt-4 text-base md:text-lg lg:text-xl">
          Our commitment is to exceed the expectations of a Luxury Black Car Service. By prioritizing unparalleled service and safety, we strive to deliver an exceptional experience that goes above and beyond industry standards.       
          In addition to their initial training, our chauffeurs participate in ongoing professional development to stay current with industry best practices and emerging technologies. This continuous learning approach empowers our chauffeurs to consistently provide an exceptional level of service, ensuring that every ride with Grandeur Executive Transportation is a seamless and luxurious experience. </p>

      </div>

      {/* Contact Information */}
      <h4 className="text-yellow-700 font-style: italic text-lg font-semibold mt-28 mb-4 text-center md:text-xl lg:text-2xl">Get Social
      </h4>
      <h1 className="text-3xl font-semibold mb-4 text-center md:text-4xl lg:text-5xl text-CarCard2">Stay Connected</h1>

      <div className="flex justify-center mb-8 font-extrabold">
        <p className="text-gray-400 m-0 p-0">__________________</p>
        <p className="text-yellow-700  m-0 p-0">________________</p>
        <p className="text-gray-400 m-0 p-0">_________________</p>
      </div>
      <div className="contact-info bg-Form3 rounded-lg p-8  shadow-lg">
        <p className="text-lg text-center text-gray-700 mb-4">We would love to hear from you! Feel free to reach out to us with any inquiries or to book your next luxury ride.</p>
        <div className="flex flex-col items-center mb-6">
          <p className="text-lg text-gray-700"><strong>Email:</strong> <a href="mailto:info@grandeurchauffeurs.com" className="text-blue-500">info@grandeurchauffeurs.com</a></p>
          <p className="text-lg text-gray-700"><strong>Phone Number:</strong> <a href="tel:+447766557716" className="text-blue-500 mr-6">+44 7766557716</a></p>
        </div>
        <div className="social-media flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-6 mt-4">
  <a href="https://facebook.com" className="text-2xl text-blue-700 hover:text-blue-900 transition-colors ml-2">
    <i className="fab fa-facebook"></i> Facebook
  </a>
  <a href="https://twitter.com" className="text-2xl text-blue-400 hover:text-blue-600 transition-colors ml-2">
    <i className="fab fa-twitter"></i> Twitter
  </a>
  <a href="https://instagram.com" className="text-2xl text-pink-600 hover:text-pink-800 transition-colors ml-2">
    <i className="fab fa-instagram"></i> Instagram
  </a>
</div>

      </div>
    </div>
  );
}

export default About;
