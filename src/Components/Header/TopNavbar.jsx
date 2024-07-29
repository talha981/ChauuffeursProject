import React from 'react';

function TopNavbar() {
  return (
    <>
      <div className="bg-Form text-white pt-5  font-sans">
        <div className="container mx-auto flex flex-wrap  justify-between">
          <div className="flex flex-col md:flex-row  flex-wrap">
            <div className="flex  mr-4 mb-2 md:mb-0">
              <div className="" />
              <span>info@grandeurchauffeurs.com</span>
            </div>
            <div className="flex i=== mr-4 mb-2 md:mb-0">
              <div className="mr-5" />
              <span>+447766557716</span>
            </div>
            <div className="flex items-center">
              <div className="mr-5 " />
              <span>+44 203 6171 114</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNavbar;
