import React, { useState, useMemo } from 'react'; // Ensure useState and useMemo are imported
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = useMemo(() => (
    <>
      <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-500 mr-4 lg:mr-6 uppercase">
        Home
      </Link>
      <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-500 mr-4 lg:mr-6 uppercase">
        About Us
      </Link>
      <Link to="/testimonials" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-500 mr-4 lg:mr-6 uppercase">
        Testimonials
      </Link>
      <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-500 mr-4 lg:mr-6 uppercase">
        Contact Us
      </Link>
      <Link to="/faq" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-500 mr-4 lg:mr-6 uppercase">
        FAQ
      </Link>
      <Link to="/gallery" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-500 mr-4 lg:mr-6 uppercase">
        Gallery
      </Link>
      <Link to="/blog" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-500 uppercase">
        Blog
      </Link>
    </>
  ), []);

  return (
    <nav className="bg-Navbar p-6 font-sans">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center flex-shrink-0 text-yellow-500 mr-6">
          <span className="font-semibold text-xl italic tracking-tight">Grandeur Chauffers</span>
        </div>
        <div className="block lg:hidden">
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
          <div className="text-sm ml-14 lg:flex-grow">
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
