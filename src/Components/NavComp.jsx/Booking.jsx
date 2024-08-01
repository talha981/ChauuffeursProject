import React, { useState, useMemo } from 'react';

const Booking = () => {
  // State for form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    pickUpDate: '',
    dropOffDate: '',
    pickUpLocation: '',
    dropOffLocation: '',
    specialRequirements: '',
    termsAccepted: false,
    privacyAccepted: false,
    comments: '',
    hours: '',
  });

  // State for form display
  const [formType, setFormType] = useState('byHour');
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setIsConfirmed(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      pickUpDate: '',
      dropOffDate: '',
      pickUpLocation: '',
      dropOffLocation: '',
      specialRequirements: '',
      termsAccepted: false,
      privacyAccepted: false,
      comments: '',
      hours: '',
    });
  };

  // Memoized form fields
  const formFieldsByHour = useMemo(() => (
    <form onSubmit={handleSubmit} className="bg-gray-200 rounded-lg shadow-black p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: 'Full Name', name: 'fullName', type: 'text' },
          { label: 'Email Address', name: 'email', type: 'email' },
          { label: 'Phone Number', name: 'phone', type: 'text' },
          { label: 'Address', name: 'address', type: 'text' },
          { label: 'Pick-Up Date and Time', name: 'pickUpDate', type: 'datetime-local' },
          { label: 'Drop-Off Date and Time', name: 'dropOffDate', type: 'datetime-local' },
          { label: 'Pick-Up Location', name: 'pickUpLocation', type: 'text' },
          { label: 'Drop-Off Location', name: 'dropOffLocation', type: 'text' },
          { label: 'Special Requirements', name: 'specialRequirements', type: 'text' }
        ].map((field, index) => (
          <div key={index} className="p-2">
            <label className="block text-sm font-medium text-gray-700">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
        ))}
        <div className="p-2 col-span-1 md:col-span-2 lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700">Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            rows="2"
          />
        </div>
        {[
          { label: 'Accept Terms and Conditions', name: 'termsAccepted' },
          { label: 'Accept Privacy Policy', name: 'privacyAccepted' }
        ].map((checkbox, index) => (
          <div key={index} className="p-2 col-span-1 md:col-span-1 lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700">{checkbox.label}</label>
            <input
              type="checkbox"
              name={checkbox.name}
              checked={formData[checkbox.name]}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
        ))}
        <div className="p-2 col-span-1 md:col-span-1 lg:col-span-1 flex items-end">
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-700 transition-colors duration-300 hover:bg-yellow-800 text-white rounded-md w-full"
          >
            Book
          </button>
        </div>
      </div>
    </form>
  ), [formData, handleChange, handleSubmit]);

  const formFieldsHourly = useMemo(() => (
    <form className="bg-gray-200 rounded-lg shadow-black p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: 'Full Name', name: 'fullName', type: 'text', placeholder: 'Enter your full name' },
          { label: 'Email Address', name: 'email', type: 'email', placeholder: 'Enter your email address' },
          { label: 'Phone Number', name: 'phone', type: 'text', placeholder: 'Enter your phone number' },
          { label: 'Address', name: 'address', type: 'text', placeholder: 'Enter your address' },
          { label: 'Pick-Up Date and Time', name: 'pickUpDateTime', type: 'datetime-local' },
          { label: 'Hours', name: 'hours', type: 'number', placeholder: 'Enter number of hours' },
          { label: 'Pick-Up Location', name: 'pickUpLocation', type: 'text', placeholder: 'Enter pick-up location' },
          { label: 'Special Requirements', name: 'specialRequirements', type: 'text', placeholder: 'Enter any special requirements' }
        ].map((field, index) => (
          <div key={index} className="p-2">
            <label className="block text-sm font-medium text-gray-700">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              placeholder={field.placeholder}
            />
          </div>
        ))}
        <div className="p-2 col-span-1 md:col-span-2 lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700">Comments</label>
          <textarea
            name="comments"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            rows="2"
            placeholder="Enter any comments"
          />
        </div>
        {[
          { label: 'Accept Terms and Conditions', name: 'termsAccepted' },
          { label: 'Accept Privacy Policy', name: 'privacyAccepted' }
        ].map((checkbox, index) => (
          <div key={index} className="p-2 col-span-1 md:col-span-1 lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700">{checkbox.label}</label>
            <input
              type="checkbox"
              name={checkbox.name}
              className="mt-1"
            />
          </div>
        ))}
        <div className="p-2 col-span-1 md:col-span-1 lg:col-span-1 flex items-end">
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-700 transition-colors duration-300 hover:bg-yellow-800 text-white rounded-md w-full"
          >
            Book
          </button>
        </div>
      </div>
    </form>
  ), []);

  return (
    <div className="container mx-auto p-6 font-sans">
      <p className="text-yellow-700 italic text-lg font-semibold mb-4 mt-11 text-center md:text-xl lg:text-2xl">Reliable Transport</p>
      <p className="text-3xl font-semibold mb-4 text-CarCard2 text-center md:text-4xl lg:text-5xl">Choose Us</p>

      <div className="flex justify-center mb-4 font-extrabold">
        <p className="text-gray-400 m-0 p-0">____________</p>
        <p className="text-yellow-700 m-0 p-0">______________</p>
        <p className="text-gray-400 m-0 p-0">______________</p>
      </div>

      <div className="text-gray-700 leading-relaxed">
        <p className="text-base md:text-lg lg:text-xl">
          We prioritize delivering exceptional quality in every aspect of our service. Our fleet is meticulously maintained to ensure safety and comfort, and our drivers are highly trained professionals dedicated to providing a smooth and pleasant journey. We are committed to excellence, and our track record speaks for itself. for booking with us. Our responsive customer support team is available 24/7 to address any inquiries and provide assistance, ensuring that your experience is as seamless as possible.
        </p>
        <p className="mt-4 text-base md:text-lg lg:text-xl">
          Our fleet of well-maintained vehicles is equipped to meet your needs, whether you’re traveling for business or pleasure. Rest assured that our experienced drivers will provide you with a safe, reliable, and enjoyable ride. We look forward to exceeding your expectations and making your experience memorable.
        </p>
      </div>

      <p className="text-yellow-700 italic text-lg font-semibold mt-10 mb-4 text-center md:text-xl lg:text-2xl">Fill Out the Form Below to Book Your Car</p>
      <p className="text-3xl font-semibold mb-4 text-center md:text-4xl lg:text-5xl">Reserve Your Ride</p>
      <div className="flex justify-center mb-6 font-extrabold">
        <p className="text-gray-400 m-0 p-0">____________</p>
        <p className="text-yellow-700 m-0 p-0">______________</p>
        <p className="text-gray-400 m-0 p-0">______________</p>
      </div>
      
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setFormType('byHour')}
          className={`bg-yellow-700 text-white px-6 py-3 shadow-lg rounded-lg transition-colors duration-300 hover:bg-yellow-800 w-full sm:w-auto ${
            formType === 'byHour' ? 'bg-yellow-700 text-white' : 'bg-gray-300 text-gray-700'
          }`}
        >
          From
        </button>
        <button
          onClick={() => setFormType('hourly')}
          className={`bg-yellow-700 text-white px-6 ml-3 py-3 shadow-lg rounded-lg transition-colors duration-300 hover:bg-yellow-800 w-full sm:w-auto ${
            formType === 'hourly' ? 'bg-yellow-700 text-white' : 'bg-gray-300 text-gray-700'
          }`}
        >
          By Hour
        </button>
      </div>
      
      {formType === 'byHour' ? formFieldsByHour : formFieldsHourly}

      {isConfirmed && (
        <div className="mt-6 bg-green-100 text-green-800 p-4 rounded-md">
          <p className="font-semibold">Booking Confirmed!</p>
          <p>Your booking has been successfully submitted. Thank you!</p>
        </div>
      )}
    </div>

    
  );
};

export default Booking;


