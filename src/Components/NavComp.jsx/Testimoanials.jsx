import React, { useMemo, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function Testimonials() {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    contact: Yup.string().required('Contact number is required'),
    review: Yup.string().required('Review is required'),
  });
  const reviews = useMemo(() => [
    {
      id: 1,
      review: 'Grandeur Chauffeuring Service exceeded my expectations with their impeccable service and luxurious fleet. From booking to drop-off, every detail was handled with professionalism and care. Their Mercedes-Benz S-Class was pristine, and the chauffeur was courteous and punctual. Highly recommend for anyone seeking a top-tier chauffeuring experience!',
      name: 'Stefanie Rashford',
    },
    {
      id: 2,
      review: 'I had an excellent experience. The booking process was smooth, and the customer service was very friendly and helpful. The vehicle was in pristine condition and exceeded my expectations. The comfort and features of the car made my trip very enjoyable. The pickup and drop-off were convenient and hassle-free. I highly recommend their services and will definitely rent from them again in the future.',
      name: 'John Smith',
    },
    {
      id: 3,
      review: 'The service was outstanding from start to finish. The booking was easy and the chauffeur was very professional. The car was spotless and very comfortable. I would highly recommend this service to anyone looking for a premium chauffeuring experience.',
      name: 'Jessica Lee',
    },
    {
      id: 4,
      review: 'I had an outstanding experience with Grandeur Chauffeuring Service. The quality of the Mercedes-Benz S-Class was second to none, and the chauffeur was both professional and accommodating. The entire journey was smooth and luxurious, making it a memorable experience. I would certainly choose them again for my future needs.',
      name: 'James Anderson',
    },
    {
      id: 5,
      review: 'Grandeur Chauffeuring Service truly delivered on their promise of luxury and excellence. The vehicle was immaculate, and the service was exceptional from start to finish. The chauffeur was friendly and well-informed, ensuring a comfortable and enjoyable ride. I highly recommend their services for a premium experience.',
      name: 'Emma Thompson',
    },
    {
      id: 6,
      review: 'From the moment I booked with Grandeur Chauffeuring Service, I knew I was in good hands. The Mercedes-Benz S-Class was in perfect condition, and the chauffeur’s professionalism was top-notch. The attention to detail and the high level of service made this a standout experience. I will definitely use them again.',
      name: 'Michael Johnson',
    },
    {
      id: 7,
      review: 'Grandeur Chauffeuring Service offers a remarkable level of comfort and luxury. The Mercedes-Benz S-Class was pristine, and the chauffeur’s attention to detail and punctuality were impressive. The entire experience was smooth and refined. I would highly recommend them to anyone seeking superior chauffeuring service.',
      name: 'David Wilson',
    },
  ], []);

  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prevStep) => (prevStep < reviews.length - 1 ? prevStep + 1 : prevStep));
  };

  const prevStep = () => {
    setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  return (
    <div className="container mx-auto p-6 font-sans">
      <h4 className="text-yellow-700  italic text-lg  font-semibold mt-10 mb-4 text-center md:text-xl lg:text-2xl">
        Partners
      </h4>
      <h1 className="text-3xl font-semibold mb-4 text-center md:text-4xl lg:text-5xl text-CarCard2">
        Top Clients Reviews
      </h1>
      <div className="flex justify-center mb-6 font-extrabold">
        <p className="text-gray-400 m-0 p-0">____________</p>
        <p className="text-yellow-700 m-0 p-0">______________</p>
        <p className="text-gray-400 m-0 p-0">______________</p>
      </div>

      {/* Render all testimonials but show only the current one based on step */}
      {reviews.map((card) => (
  card.id === reviews[step].id && (
    <div key={card.id}>
      <div className="text-gray-700 text-center leading-relaxed flex flex-col md:flex-row items-center justify-center italic">
        {step > 0 && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={prevStep}
            className="cursor-pointer w-8 h-8 md:mr-4 self-center"
          />
        )}
        <div className="text-base md:text-lg lg:text-xl mx-auto max-w-4xl mt-7 mb-7">
          <div className="p-4 bg-gray-200 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-gray-200 hover:shadow-lg hover:scale-105">
            {card.review}
          </div>
        </div>
        {step < reviews.length - 1 && (
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={nextStep}
            className="cursor-pointer  w-8 h-8 md:ml-4 self-center"
          />
        )}
      </div>
      <div className="mt-6 text-center">
        <h1 className="text-2xl mb-32 md:text-3xl italic text-CarCard2 lg:text-2xl font-semibold">
          ---{card.name}---
        </h1>
      </div>
    </div>
  )
))}



      <h4 className="text-yellow-700 font-italic text-lg font-semibold mt-32 mb-4 text-center md:text-xl lg:text-xl">
        Feedback
      </h4>
      <h1 className="text-3xl font-semibold mb-4 text-center md:text-4xl text-CarCard2 lg:text-5xl">
        Leave your Reviews
      </h1>
      <div className="flex justify-center mb-4 font-extrabold">
        <p className="text-gray-400 m-0 p-0">______________</p>
        <p className="text-yellow-700 m-0 p-0">______________</p>
        <p className="text-gray-400 m-0 p-0">______________</p>
      </div>

      <div className="bg-gray-200 flex rounded-2xl justify-center">
        <div className="w-full max-w-lg p-8">
          <Formik
            initialValues={{
              name: '',
              email: '',
              contact: '',
              review: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-4">
                <div>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Enter Your Name"
                    className={`w-full p-4 rounded-lg text-gray-700 placeholder-gray-500 border ${touched.name && errors.name ? 'border-red-500' : ''
                      }`}
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="w-full md:w-1/2">
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter Your Email"
                      className={`w-full p-4 rounded-lg text-gray-700 placeholder-gray-500 border ${touched.email && errors.email ? 'border-red-500' : ''
                        }`}
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <Field
                      name="contact"
                      type="text"
                      placeholder="Enter Contact Number"
                      className={`w-full p-4 rounded-lg text-gray-700 placeholder-gray-500 border ${touched.contact && errors.contact ? 'border-red-500' : ''
                        }`}
                    />
                    <ErrorMessage name="contact" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>
                <div>
                  <Field
                    name="review"
                    type="text"
                    placeholder="Your Reviews"
                    className={`w-full p-4 rounded-lg text-gray-700 placeholder-gray-500 border ${touched.review && errors.review ? 'border-red-500' : ''
                      }`}
                  />
                  <ErrorMessage name="review" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full p-4 rounded-lg bg-yellow-700 text-white hover:bg-yellow-600 transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>


    </div>
  );
}

export default Testimonials;
