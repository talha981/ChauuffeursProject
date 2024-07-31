// src/ToggleSection.js
import React, {  useState } from 'react';

import { useNavigate } from 'react-router-dom';

const questionsAndAnswers = [
  { question: "What types of vehicles do you offer for chauffeuring services?", answer: "We offer a range of vehicles including luxury sedans, SUVs, and limousines to suit your needs." },
  { question: "What are your operating hours?", answer: "We operate 24/7 to accommodate your schedule and travel needs." },
  { question: "How can I book a ride?", answer: "You can book a ride through our website or by calling our customer service number." },
  { question: "Do you offer airport transfers?", answer: "Yes, we provide airport transfer services to and from all major airports." },
  { question: "Are your drivers licensed and insured?", answer: "Yes, all our drivers are licensed and insured to ensure your safety and peace of mind." },
  { question: "What is your cancellation policy?", answer: "We offer a flexible cancellation policy with a full refund if canceled at least 24 hours before the scheduled ride." },
  { question: "Can I rent a car without a driver?", answer: "Yes, we offer a range of self-drive rental cars for your convenience." },
  { question: "What are the requirements for renting a car?", answer: "You must be at least 21 years old, have a valid driver's license, and provide a major credit card for the security deposit." },
  { question: "Do you offer insurance for rental cars?", answer: "Yes, we offer comprehensive insurance coverage options for all our rental cars." },
  { question: "What is the process for returning a rental car?", answer: "You can return the car to any of our locations. Please ensure the car is in the same condition as when it was rented and that the fuel tank is refilled." },
];

const Faq = () => {


  const navigate = useNavigate();
  const [visibleIndex, setVisibleIndex] = useState(null);

  const handleNavigate = () => {
    navigate('/contact'); // Ensure this path matches your routing setup
  };

  const handleToggle = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6 font-sans">
      {/* Introduction Section */}
      <h4 className="text-yellow-700 italic text-lg font-semibold mt-10 mb-4 text-center md:text-xl lg:text-2xl">Common Queries</h4>
      <h1 className="text-3xl font-semibold mb-4 text-center md:text-4xl lg:text-5xl text-CarCard2">Query Resolution</h1>
      <div className="flex justify-center mb-6 font-extrabold">
        <p className="text-gray-400 m-0 p-0">____________</p>
        <p className="text-yellow-700 m-0 p-0">______________</p>
        <p className="text-gray-400 m-0 p-0">______________</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-8 mx-auto mb-12">
        {/* About Our Services Section */}
        <div className="flex-1 lg:mr-8">
          <h4 className="italic text-lg font-semibold mb-4 md:text-xl lg:text-2xl text-CarCard2">Every day help for our customers</h4>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg lg:text-xl mb-4">
            At Grandeur Chauffeurs, we are dedicated to providing seamless and luxurious transportation solutions tailored to your needs. Whether you’re traveling for business, pleasure, or a special event, our commitment to excellence ensures a stress-free and enjoyable journey every time.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg lg:text-xl mb-4">
            Our fleet includes an array of high-end vehicles such as the Rolls-Royce Phantom, Bentley Bentayga, Mercedes-Benz S-Class, and Lamborghini Urus, among others. Whether you’re attending a business meeting, a special event, or simply exploring the city, our professional chauffeurs provide impeccable service, ensuring you arrive at your destination in style and comfort.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg lg:text-xl mb-4">
            Experience the ultimate in luxury and convenience with our bespoke chauffeuring services, tailored to exceed your expectations and deliver a truly remarkable journey. Trust us to provide a seamless and sophisticated travel experience every time.
          </p>
          <h4 className="italic text-lg font-semibold mb-4 md:text-xl lg:text-2xl text-CarCard2">Rental Car Services</h4>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg lg:text-xl mb-4">
            In addition to our chauffeuring services, we also offer a wide range of rental cars for self-drive purposes. Whether you need a car for a day, a week, or longer, we have flexible rental options to meet your needs. Our fleet includes economy cars, luxury sedans, SUVs, and more.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg lg:text-xl mb-4">
            Our rental cars are well-maintained and regularly serviced to ensure a safe and comfortable driving experience. We also offer various insurance coverage options for your peace of mind.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg lg:text-xl mb-4">
            Book your rental car today and enjoy the freedom of exploring the city at your own pace. Contact us for more information on our rental car services and to make a reservation.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="flex-1">
  <div className="flex flex-col space-y-4 mb-8">
    {questionsAndAnswers.map((item, index) => (
      <div key={index}>
        <div
          className={`cursor-pointer font-bold p-4 rounded-t-lg transition-colors duration-300 ease-in-out text-CarCard2 ${visibleIndex === index ? 'bg-yellow-700 text-white' : 'bg-gray-200 hover:bg-yellow-600'}`}
          onClick={() => handleToggle(index)}
        >
          {item.question}
        </div>
        <div
          className={`transition-max-height duration-500 ease-out overflow-hidden ${visibleIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <p className="p-4 text-base md:text-lg lg:text-xl bg-gray-100 rounded-b-lg ">
            {item.answer}
          </p>
        </div>
      </div>
    ))}
  </div>
  <div className="flex justify-center">
    <button className="bg-yellow-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors duration-300 w-full sm:w-auto" onClick={handleNavigate}>
      Contact Us
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default Faq;
