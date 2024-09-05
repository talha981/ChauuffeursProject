import React, { useMemo, useEffect } from 'react';
import DOMPurify from 'dompurify';

function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cards = useMemo(() => [
    {
      title: 'Location',
      content: '515 Battersea Park Road<br />London, SW11 3BN',
      imgSrc: 'Bilal.png',
    },
    {
      title: 'Phones',
      content: '+44 203 6171 114<br />+44 776 6557 716',
      imgSrc: 'Bilal.png',
    },
    {
      title: 'Email',
      content: 'info@grandeurchauffeurs.com',
      imgSrc: 'Bilal.png',
    },
    {
      title: 'Working Hours',
      content: 'MON-SUN<br />0600 - 2300',
      imgSrc: 'Bilal.png',
    },
    {
      title: 'Whatsapp',
      content: '+44 7766557716',
      imgSrc: 'Bilal.png',
    },
  ], []);

  const sanitizeHTML = (html) => {
    return DOMPurify.sanitize(html);
  };

  return (
    <div className="container mx-auto p-6 font-sans">
      <h4 className="text-yellow-700 italic text-lg font-semibold mt-10 mb-4 text-center md:text-xl lg:text-2xl">Connect with Us</h4>
      <h1 className="text-3xl font-semibold mb-4 text-center md:text-4xl  text-CarCard2 lg:text-5xl">Contact Us</h1>
      <div className="flex justify-center mb-6 font-extrabold">
        <p className="text-gray-400 m-0 p-0">____________</p>
        <p className="text-yellow-700  m-0 p-0">______________</p>
        <p className="text-gray-400 m-0 p-0">______________</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cards.slice(0, 4).map((card, index) => (
          <div
            key={index}
            className="border border-gray-300 border-r-dashed rounded-lg p-4 shadow-lg text-center transition duration-300 transform hover:scale-105 bg-Form3 hover:shadow-black"
          >
            <img src={card.imgSrc} alt={card.title} className="mx-auto mb-4 w-10 h-10" />
            <h2 className="text-2xl font-semibold mb-2 text-yellow-700">{card.title}</h2>
            <p
              className="text-base text-gray-700 break-words text-CarCard2"
              dangerouslySetInnerHTML={{ __html: sanitizeHTML(card.content) }}
            />
          </div>
        ))}
        <div className="md:col-span-4 flex mb-28 justify-center">
          <div className="border border-gray-300 border-r-dashed rounded-lg p-4 shadow-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-black w-full max-w-sm bg-Form3">
            <img src={cards[4].imgSrc} alt={cards[4].title} className="mx-auto mb-4 w-10 h-10" />
            <h2 className="text-2xl font-semibold mb-2 text-yellow-700">{cards[4].title}</h2>
            <p
              className="text-base break-words text-CarCard2"
              dangerouslySetInnerHTML={{ __html: sanitizeHTML(cards[4].content) }}
            />
          </div>
        </div>
      </div>



      <h4 className="text-yellow-700 italic text-lg font-semibold  mb-4 text-center md:text-xl lg:text-2xl">Reach Out</h4>
      <h1 className="text-3xl font-semibold mb-4 text-center md:text-4xl lg:text-5xl text-CarCard2">Send Message</h1>
      <div className="flex justify-center mb-4 font-extrabold">
        <p className="text-gray-400 m-0 p-0">____________</p>
        <p className="text-yellow-700  m-0 p-0">______________</p>
        <p className="text-gray-400 m-0 p-0">______________</p>
      </div>
      <div className="bg-Form3 flex rounded-2xl justify-center">
        <div className="w-full max-w-lg p-8">
          <form className="space-y-4">
            {/* Name input */}
            <div>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full p-4 rounded-lg text-gray-700 placeholder-gray-500"
              />
            </div>
            {/* Email and Contact inputs */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full md:w-1/2 p-4 rounded-lg text-gray-700 placeholder-gray-500 mb-4 md:mb-0"
              />
              <input
                type="text"
                placeholder="Enter Contact Number"
                className="w-full md:w-1/2 p-4 rounded-lg text-gray-700 placeholder-gray-500"
              />
            </div>
            {/* Message input */}
            <div>
              <input
                type="text"
                placeholder="Your Reviews"
                className="w-full p-4 rounded-lg text-gray-700 placeholder-gray-500"
              />
            </div>
            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="w-full p-4 rounded-lg bg-yellow-700 text-white hover:bg-yellow-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
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

export default Contact;
