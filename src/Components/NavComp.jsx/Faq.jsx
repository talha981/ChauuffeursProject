// src/ToggleSection.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questionsAndAnswers = [
  { question: "What types of vehicles do you offer for chauffeuring services?", answer: "We offer a range of vehicles including luxury sedans, SUVs, and limousines to suit your needs." },
  { question: "What are your operating hours?", answer: "We operate 24/7 to accommodate your schedule and travel needs." },
  { question: "How can I book a ride?", answer: "You can book a ride through our website or by calling our customer service number." },
  { question: "Do you offer airport transfers?", answer: "Yes, we provide airport transfer services to and from all major airports." },
  { question: "Are your drivers licensed and insured?", answer: "Yes, all our drivers are licensed and insured to ensure your safety and peace of mind." },
  { question: "What is your cancellation policy?", answer: "We offer a flexible cancellation policy with a full refund if canceled at least 24 hours before the scheduled ride." }
];

const Faq = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/contact'); // Ensure this path matches your routing setup
  };

  const [visibleIndex, setVisibleIndex] = useState(null);

  const handleToggle = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6 font-sans">
      {/* Introduction Section */}
      <h4 className="text-yellow-700 italic text-lg font-semibold mt-10 mb-4 text-center md:text-xl lg:text-2xl">Common Queries</h4>
      <h1 className="text-3xl font-semibold mb-4 text-center md:text-4xl lg:text-5xl">Query Resolution</h1>
      <div className="flex justify-center mb-6 font-extrabold">
        <p className="text-gray-400 m-0 p-0">____________</p>
        <p className="text-yellow-700 m-0 p-0">______________</p>
        <p className="text-gray-400 m-0 p-0">______________</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-8 mx-auto mb-12">
        {/* About Our Services Section */}
        <div className="flex-1 lg:mr-8">
          <h4 className="italic text-lg font-semibold mb-4 md:text-xl lg:text-2xl">Every day help for our customers</h4>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg lg:text-xl mb-4">
            At Grandeur Chauffeurs, we are dedicated to providing seamless and luxurious transportation solutions tailored to your needs. Whether you’re traveling for business, pleasure, or a special event, our commitment to excellence ensures a stress-free and enjoyable journey every time.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg lg:text-xl mb-4">
            Our fleet includes an array of high-end vehicles such as the Rolls-Royce Phantom, Bentley Bentayga, Mercedes-Benz S-Class, and Lamborghini Urus, among others. Whether you’re attending a business meeting, a special event, or simply exploring the city, our professional chauffeurs provide impeccable service, ensuring you arrive at your destination in style and comfort.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg lg:text-xl mb-4">
            Experience the ultimate in luxury and convenience with our bespoke chauffeuring services, tailored to exceed your expectations and deliver a truly remarkable journey. Trust us to provide a seamless and sophisticated travel experience every time.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="flex-1">
          <div className="flex flex-col space-y-4 mb-6">
            {questionsAndAnswers.map((item, index) => (
              <div key={index}>
                <div
                  className={`cursor-pointer font-bold p-4 rounded-t-lg transition-colors duration-300 ease-in-out ${visibleIndex === index ? 'bg-yellow-700 text-white' : 'bg-gray-200 hover:bg-yellow-600'}`}
                  onClick={() => handleToggle(index)}
                >
                  {item.question}
                </div>
                <div
                  className={`transition-max-height duration-500 ease-out overflow-hidden ${visibleIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="p-4 text-base md:text-lg lg:text-xl bg-gray-50 rounded-b-lg">
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
