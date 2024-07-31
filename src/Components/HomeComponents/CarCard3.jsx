import React from 'react';
import { Link } from 'react-router-dom';

function CarCard3() {
  const cardData = [
    {
      id: 1,
      img: 'CarCard3-1.jpg',
      title: 'Airport Transfers',
      description: 'While stepping in London, use our luxury cars it will enhance the charm of your tour.',
      lines: 4,
    },
    {
      id: 2,
      img: 'CardCard3-2.jpg',
      title: 'Business Transfers',
      description: 'Our Business Transfers Service offers seamless, professional transportation solutions tailored for corporate clients.',
      lines: 6,
    },
    {
      id: 3,
      img: 'CardCard3-3.jpg',
      title: 'Events & Wedding',
      description: 'To make your events more special and memorable we provide you our luxury cars to comfort your travel.',
      lines: 4,
    },
  ];

  return (
    <div className="container mx-auto mt-8 p-6 font-sans h-screen">
      <p className="text-yellow-700 italic text-lg font-semibold mt-10 mb-4 text-center md:text-xl lg:text-2xl">
        Welcome to Our
      </p>
      <p className="text-3xl font-semibold mb-4 text-center md:text-4xl lg:text-5xl">
        Travel Offerings
      </p>

      <div className="flex justify-center mb-4 font-extrabold">
        <p className="text-gray-400 m-0 p-0">____________</p>
        <p className="text-yellow-700 m-0 p-0">______________</p>
        <p className="text-gray-400 m-0 p-0">______________</p>
      </div>

      <div className="flex flex-col space-y-6 md:flex-row  md:space-y-0 md:space-x-6">
        
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-gray-800 rounded-lg shadow-lg flex p-6 md:w-1/3"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-24 h-24 object-cover mt-1 rounded-full mr-4"
            />
            <div  className="flex flex-col justify-center w-64">
            <Link to='/airport' className="text-yellow-700 hover:text-gray-50 mb-5 text-2xl font-semibold transition-colors duration-700">
  {card.title}
</Link>
              <p className="text-white overflow-hidden" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: card.lines }}>
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarCard3;
