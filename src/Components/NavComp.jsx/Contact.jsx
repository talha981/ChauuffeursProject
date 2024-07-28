import React, { useMemo } from 'react';
import DOMPurify from 'dompurify';

function Contact() {
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
      <h1 className="text-3xl font-semibold mb-4 text-center md:text-4xl lg:text-5xl">Contact Us</h1>
      <div className="flex justify-center mb-8 font-extrabold">
        <p className="text-gray-400 m-0 p-0">___________</p>
        <p className="text-yellow-700 m-0 p-0">______________</p>
        <p className="text-gray-400 m-0 p-0">__________</p>
      </div>   
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cards.slice(0, 4).map((card, index) => (
          <div
            key={index}
            className="border border-gray-300 border-r-dashed rounded-lg p-4 shadow-lg text-center transition duration-300 transform hover:scale-105 bg-Form2 hover:shadow-black"
          >
            <img src={card.imgSrc} alt={card.title} className="mx-auto mb-4 w-10 h-10" />
            <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
            <p
              className="text-base text-gray-700 break-words"
              dangerouslySetInnerHTML={{ __html: sanitizeHTML(card.content) }}
            />
          </div>
        ))}
        <div className="md:col-span-4 flex mb-32 justify-center">
          <div className="border border-gray-300 border-r-dashed rounded-lg p-4 shadow-lg text-center transition duration-300 transform hover:scale-105 hover:shadow-black w-full max-w-sm bg-Form2">
            <img src={cards[4].imgSrc} alt={cards[4].title} className="mx-auto mb-4 w-10 h-10" />
            <h2 className="text-2xl font-semibold mb-2">{cards[4].title}</h2>
            <p
              className="text-base text-gray-700 break-words"
              dangerouslySetInnerHTML={{ __html: sanitizeHTML(cards[4].content) }}
            />
          </div>
        </div>
      </div>

      <h4 className="text-yellow-700 italic text-lg font-semibold mt-10 mb-4 text-center md:text-xl lg:text-2xl">Reach Out</h4>
      <h1 className="text-3xl font-semibold mb-4 text-center md:text-4xl lg:text-5xl">Send Message</h1>
      <div className="flex justify-center mb-8 font-extrabold">
        <p className="text-gray-400 m-0 p-0">___________</p>
        <p className="text-yellow-700 m-0 p-0">______________</p>
        <p className="text-gray-400 m-0 p-0">__________</p>
      </div>  
      <div className="bg-Form2 flex rounded-2xl justify-center">
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
    </div>
  );
}

export default Contact;
