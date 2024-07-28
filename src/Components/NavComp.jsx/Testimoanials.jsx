import React from 'react'

function Testimoanials() {
  return (
    <>

      <div className="container mx-auto p-6 font-sans">
        <h4 className="text-yellow-700 font-style: italic text-lg font-semibold mt-10 mb-4 text-center md:text-xl lg:text-2xl">Partners</h4>
        <h1 className="text-3xl font-semibold mb-4 text-center md:text-4xl lg:text-5xl">Top Clients Reviews</h1>


        <div className="flex justify-center mb-4 font-extrabold">
          <p className="text-gray-400 m-0 p-0">_______________</p>
          <p className="text-yellow-700  m-0 p-0">___________</p>
          <p className="text-gray-400 m-0 p-0">_______________</p>
        </div>

        {/* <div className="text-center mb-4">
          <h1 className="text-yellow-500 text-3xl">
            <span style={{ fontWeight: '900' }}>//</span>
          </h1>
        </div> */}


        <div className="text-gray-700 text-center leading-relaxed">
          <p className="text-base md:text-lg lg:text-xl mx-auto max-w-4xl">

            Grandeur Chauffeuring Service exceeded my expectations with their impeccable service and luxurious fleet. From booking to drop-off, every detail was handled with professionalism and care. Their Mercedes-Benz S-Class was pristine, and the chauffeur was courteous and punctual. Highly recommend for anyone seeking a top-tier chauffeuring experience!      </p>
        </div>






        {/* Testimonial Text */}
        <div className="text-gray-700 text-center leading-relaxed">
          <p className="text-base md:text-lg lg:text-xl mx-auto max-w-4xl">
            Grandeur Chauffeuring Service exceeded my expectations with their impeccable service and luxurious fleet. From booking to drop-off, every detail was handled with professionalism and care. Their Mercedes-Benz S-Class was pristine,...
          </p>
        </div>
        <div className="mt-4 text-center">
          <h1 className="text-2xl  mb-32 md:text-3xl lg:text-2xl font-semibold">
            Stefanie Rashford
          </h1>
        </div>




        <h4 className="text-yellow-700 font-style: italic text-lg font-semibold mt-32 mb-4 text-center md:text-xl lg:text-xl " >Feedback
        </h4>
        <h1 className="text-3xl font-semibold mb-4 text-center md:text-4xl lg:text-5xl ">Leave your Review</h1>

        <div className="flex justify-center mb-4 font-extrabold">
          <p className="text-gray-400 m-0 p-0">______________</p>
          <p className="text-yellow-700  m-0 p-0">______________</p>
          <p className="text-gray-400 m-0 p-0">______________</p>
        </div>



        <div className="text-gray-700 mb-8 text-center leading-relaxed">
          <p className="text-base md:text-lg lg:text-lg mx-auto max-w-4xl">
            Grandeur Chauffeuring Service exceeded my expectations with their impeccable service and luxurious fleet. From booking to drop-off, every detail was handled with professionalism and care. Their Mercedes-Benz S-Class was pristine,...
          </p>
        </div>
        







        <div className="bg-Form2 flex rounded-2xl justify-center ">
          <div className="w-full max-w-lg p-8 ">
            <form className="space-y-4 ">
              {/* Name input */}
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full p-4 rounded-lg text-gray-700  placeholder-gray-500"
                />
              </div>
              {/* Email and Contact inputs */}
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="w-full md:w-1/2 p-4 rounded-lg text-gray-700  placeholder-gray-500 mb-4 md:mb-0"
                />
                <input
                  type="text"
                  placeholder="Enter Contact Number"
                  className="w-full md:w-1/2 p-4 rounded-lg text-gray-700  placeholder-gray-500"
                />
              </div>
              {/* Message input */}
              <div>
                <input
                  type="text"
                  placeholder="Your Reviews"
                  className="w-full p-4 rounded-lg text-gray-700  placeholder-gray-500"
                />
              </div>
              {/* Submit button */}
              <div>

                <button
                  type="submit"
                  className="w-full p-4 rounded-lg bg-yellow-700 text-white   hover:bg-yellow-600  hover:text-white transition duration-300"
                >
                  Submit
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>



    </>
  )
}

export default Testimoanials
