import React, { useState, useMemo } from 'react'; 
import { Link, useLocation } from 'react-router-dom'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current pathname

  const navLinks = useMemo(() => (
    <>
      <Link
        to="/"
        className={`block mx-4 lg:mx-4 uppercase font-semibold text-white ${location.pathname === '/' ? 'text-yellow-300' : 'hover:text-gray-300'} p-2 rounded`}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`block mx-4 lg:mx-4 uppercase font-semibold text-white ${location.pathname === '/about' ? 'text-yellow-300' : 'hover:text-gray-300'} p-2 rounded`}
      >
        About Us
      </Link>
      <Link
        to="/testimonials"
        className={`block mx-4 lg:mx-4 uppercase font-semibold text-white ${location.pathname === '/testimonials' ? 'text-yellow-300' : 'hover:text-gray-300'} p-2 rounded`}
      >
        Testimonials
      </Link>
      <Link
        to="/contact"
        className={`block mx-4 lg:mx-4 uppercase font-semibold text-white ${location.pathname === '/contact' ? 'text-yellow-300' : 'hover:text-gray-300'} p-2 rounded`}
      >
        Contact Us
      </Link>
      <Link
        to="/faq"
        className={`block mx-4 lg:mx-4 uppercase font-semibold text-white ${location.pathname === '/faq' ? 'text-yellow-300' : 'hover:text-gray-300'} p-2 rounded`}
      >
        FAQ
      </Link>
      <Link
        to="/gallery"
        className={`block mx-4 lg:mx-4 uppercase font-semibold text-white ${location.pathname === '/gallery' ? 'text-yellow-300' : 'hover:text-gray-300'} p-2 rounded`}
      >
        Gallery
      </Link>
    </>
  ), [location.pathname]); // Update navLinks when location.pathname changes

  return (
    <nav className="bg-CarCard2 p-6 font-sans">
      <div className="container mx-auto flex flex-wrap mb- items-center justify-between w-full ">
        <div className="flex items-center flex-shrink-0 text-yellow-500 mr-6">
        {/* <img src="Logo.png" alt="Logo" class="h-20 w-36 sm:h-20 sm:w-36 md:h-20 md:w-36 lg:h-20 lg:w-36 xl:h-18 xl:w-18 2xl:h-40 2xl:w-40" /> */}
        
        <span className="font-semibold text-2xl italic font-mono tracking-tight"><span className='text-yellow-50'>Grandeur <br/></span> Chauffeurs</span>
        </div>
        <div className="block lg:hidden ml-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-yellow-500 hover:border-yellow-500"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'}`}>
          <div className="text-sm flex flex-col lg:flex-row lg:justify-center lg:items-center lg:flex-grow">
            {navLinks}
          </div>
          <div className="lg:flex lg:items-center">
            <div className="text-yellow-500 text-center lg:text-right lg:mr-4 text-sm lg:text-base">
              Call to book an order:
            </div>
            <div className="text-white text-center text-sm lg:text-base">
              +44 7766557716
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
