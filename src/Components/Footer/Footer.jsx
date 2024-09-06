import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    
  return (
    <footer className="bg-gray-800 text-white mt-32 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between mb-12">
          {/* About Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <span className="text-yellow-500 text-3xl font-bold mb-4 block">Grandeur Chauffeurs</span>
            <p className="text-gray-300 mb-6">
              Providing top-tier luxury transportation solutions with unparalleled comfort and style. 
              Experience the difference with our premium chauffeur services.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 text-xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 text-xl">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <span className="text-yellow-500 text-xl font-semibold mb-4 block">Quick Links</span>
            <ul>
              <li className="mb-2"><Link to="/" className="hover:text-yellow-500">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="hover:text-yellow-500">About Us</Link></li>
              <li className="mb-2"><Link to="/booking" className="hover:text-yellow-500">Booking</Link></li>
              <li className="mb-2"><Link to="/testimonials" className="hover:text-yellow-500">Testimonials</Link></li>
              <li className="mb-2"><Link to="/contact" className="hover:text-yellow-500">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-yellow-500">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <span className="text-yellow-500 text-xl font-semibold mb-4 block">Contact Us</span>
            <p className="mb-2"><i className="fas fa-envelope"></i> info@grandeurchauffeurs.com</p>
            <p className="mb-2"><i className="fas fa-phone-alt"></i> +44 776 6557 716</p>
            <p><i className="fas fa-phone-alt"></i> +44 203 6171 114</p>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="bg-gray-700 py-4">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Grandeur Chauffeurs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
