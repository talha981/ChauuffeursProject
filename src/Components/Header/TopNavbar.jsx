import React from 'react';

function TopNavbar() {
  return (
    <>
      <div className="bg-CarCard2 text-white pt-5 font-sans">
        <div className="container mx-auto flex mt-5 flex-wrap justify-between">
          <div className="flex flex-col md:flex-row flex-wrap">
            <div className="flex mb-2 md:mb-0">
              <div className="hidden md:block " />
              <span className="ml-5 sm:ml-4 md:ml-0">info@grandeurchauffeurs.com</span>
            </div>
            <div className="flex mb-2 md:mb-0">
              <div className="mr-5" />
              <span>+44 776 6557 716</span>
            </div>
            <div className="flex items-center">
              <div className="mr-5" />
              <span>+44 203 6171 114</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNavbar;
