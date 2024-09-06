import React, { useState } from 'react';
import { FaTrash, FaSuitcaseRolling, FaChild } from 'react-icons/fa';

const Booking = () => {
  const [serviceType, setServiceType] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [stops, setStops] = useState([]);
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [numPassengers, setNumPassengers] = useState(1);
  const [luggageCount, setLuggageCount] = useState(0);
  const [addChildSeat, setAddChildSeat] = useState(false);
  const [childSeats, setChildSeats] = useState([]);
  const [accessible, setAccessible] = useState(false);
  const [returnAtDiffLocation, setReturnAtDiffLocation] = useState(false);
  const [returnLocation, setReturnLocation] = useState('');

  // Validation state
  const [errors, setErrors] = useState({
    pickupDate: '',
    pickupTime: '',
    pickupLocation: '',
    dropOffLocation: ''
  });

  const validateForm1 = () => {
    const newErrors = {
      pickupDate: '',
      pickupTime: '',
      pickupLocation: '',
      dropOffLocation: ''
    };

    let isValid = true;

    if (!pickupDate) {
      newErrors.pickupDate = 'Pickup Date is required';
      isValid = false;
    }
    if (!pickupTime) {
      newErrors.pickupTime = 'Pickup Time is required';
      isValid = false;
    }
    if (!pickupLocation) {
      newErrors.pickupLocation = 'Pickup Location is required';
      isValid = false;
    }
    if (['AIRPORT DROP OFF', 'POINT TO POINT', 'AIRPORT PICK UP'].includes(serviceType) && !dropOffLocation) {
      newErrors.dropOffLocation = 'Drop Off Location is required for this service type';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const resetForm = () => {
    setServiceType('');
    setPickupDate('');
    setPickupTime('');
    setPickupLocation('');
    setStops([]);
    setDropOffLocation('');
    setNumPassengers(1);
    setLuggageCount(0);
    setAddChildSeat(false);
    setChildSeats([]);
    setAccessible(false);
    setReturnAtDiffLocation(false);
    setReturnLocation('');
    setErrors({
      pickupDate: '',
      pickupTime: '',
      pickupLocation: '',
      dropOffLocation: ''
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm1()) {
      // Form is valid, proceed with form submission or move to the next step
      const formData = {
        serviceType,
        pickupDate,
        pickupTime,
        pickupLocation,
        stops,
        dropOffLocation,
        numPassengers,
        luggageCount,
        addChildSeat,
        childSeats,
        accessible,
        returnAtDiffLocation,
        returnLocation
      };
      console.log('Form Data:', formData);
      // You might want to send formData to your API here
      resetForm()
    }
  };

  const handleServiceChange = (event) => {
    setServiceType(event.target.value);
    if (event.target.value !== 'AIRPORT PICK UP') {
      setReturnAtDiffLocation(false);
      setReturnLocation('');
    }
  };

  const handleAddStop = () => {
    setStops([...stops, '']);
  };

  const handleStopChange = (index, value) => {
    const newStops = stops.slice();
    newStops[index] = value;
    setStops(newStops);
  };

  const handleRemoveStop = (index) => {
    const newStops = stops.filter((_, i) => i !== index);
    setStops(newStops);
  };

  const handleAddChildSeat = () => {
    setAddChildSeat(!addChildSeat);
    if (!addChildSeat) {
      setChildSeats([...childSeats, { type: '', quantity: 1 }]);
    }
  };

  const handleChildSeatChange = (index, field, value) => {
    const newChildSeats = childSeats.slice();
    newChildSeats[index][field] = value;
    setChildSeats(newChildSeats);
  };

  const handleRemoveChildSeat = (index) => {
    const newChildSeats = childSeats.filter((_, i) => i !== index);
    setChildSeats(newChildSeats);
  };

  const handleChildSeatTypeChange = (index, value) => {
    handleChildSeatChange(index, 'type', value);
  };

  const handleChildSeatQuantityChange = (index, value) => {
    handleChildSeatChange(index, 'quantity', value);
  };

  const handleAccessibleChange = () => {
    setAccessible(!accessible);
  };

  const handleReturnAtDiffLocationChange = () => {
    setReturnAtDiffLocation(!returnAtDiffLocation);
  };

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
        <p className="mt-4 text-base mb-32 md:text-lg lg:text-xl">
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
      <div className="max-w-full mx-auto bg-gray-100 p-8 rounded-2xl shadow-lg">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <label className="text-yellow-700 flex items-center mb-7">
            <span className="border-2 border-yellow-700 text rounded-full w-4 h-4 mr-2"></span>
            Step 1: Ride info
          </label>
          <div className="mb-4">
            <label htmlFor="service" className="block text-lg font-medium text-gray-700">
              Select Service Type
            </label>
            <select
              id="service"
              value={serviceType}
              onChange={handleServiceChange}
              className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>-- Please choose an option --</option>
              <option value="AIRPORT DROP OFF">AIRPORT DROP OFF</option>
              <option value="AIRPORT PICK UP">AIRPORT PICK UP</option>
              <option value="HOURLY/AS DIRECTED">HOURLY/AS DIRECTED</option>
              <option value="POINT TO POINT">POINT TO POINT</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700">
                Pickup Date
              </label>
              <input
                id="pickupDate"
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className={`mt-1 block w-full p-2 border ${errors.pickupDate ? 'border-red-500' : 'border-gray-300'} bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.pickupDate && <p className="text-red-600 text-sm">{errors.pickupDate}</p>}
            </div>
            <div>
              <label htmlFor="pickupTime" className="block text-sm font-medium text-gray-700">
                Pickup Time
              </label>
              <input
                id="pickupTime"
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className={`mt-1 block w-full p-2 border ${errors.pickupTime ? 'border-red-500' : 'border-gray-300'} bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.pickupTime && <p className="text-red-600 text-sm">{errors.pickupTime}</p>}
            </div>
            <div>
              <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700">
                Pickup Location
              </label>
              <input
                id="pickupLocation"
                type="text"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className={`mt-1 block w-full p-2 border ${errors.pickupLocation ? 'border-red-500' : 'border-gray-300'} bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.pickupLocation && <p className="text-red-600 text-sm">{errors.pickupLocation}</p>}
            </div>
          </div>
          {(serviceType === 'HOURLY/AS DIRECTED' || serviceType === 'POINT TO POINT' || serviceType === 'AIRPORT DROP OFF' || serviceType === 'AIRPORT PICK UP') && (
            <div>
              <button
                type="button"
                onClick={handleAddStop}
                className="text-indigo-600 hover:text-indigo-500"
              >
                + Add Stop
              </button>
              {stops.map((stop, index) => (
                <div key={index} className="flex items-center mt-2">
                  <input
                    type="text"
                    value={stop}
                    onChange={(e) => handleStopChange(index, e.target.value)}
                    className="flex-1 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder={`Stop ${index + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveStop(index)}
                    className="ml-2 text-red-600 hover:text-red-500"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}
          {(serviceType === 'AIRPORT DROP OFF' || serviceType === 'POINT TO POINT' || serviceType === 'AIRPORT PICK UP') && (
            <div>
              <label htmlFor="dropOffLocation" className="block text-sm font-medium text-gray-700">
                Drop Off Location
              </label>
              <input
                id="dropOffLocation"
                type="text"
                value={dropOffLocation}
                onChange={(e) => setDropOffLocation(e.target.value)}
                className={`mt-1 block w-full p-2 border ${errors.dropOffLocation ? 'border-red-500' : 'border-gray-300'} bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.dropOffLocation && <p className="text-red-600 text-sm">{errors.dropOffLocation}</p>}
            </div>
          )}
          {serviceType === 'HOURLY/AS DIRECTED' && (
            <div className="mt-4 flex items-center">
              <input
                id="returnAtDiffLocation"
                type="checkbox"
                checked={returnAtDiffLocation}
                onChange={handleReturnAtDiffLocationChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor="returnAtDiffLocation" className="ml-2 text-sm font-medium text-gray-700">
                Return at different location
              </label>
              {returnAtDiffLocation && (
                <div className="mt-2 ml-7">
                  <label htmlFor="returnLocation" className="block text-sm font-medium text-gray-700">
                    Return Location
                  </label>
                  <input
                    id="returnLocation"
                    type="text"
                    value={returnLocation}
                    onChange={(e) => setReturnLocation(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />

                </div>
              )}
            </div>
          )}
          <div className="flex space-x-4 mt-4">
            <div className="">
              <label htmlFor="numPassengers" className="block text-sm font-medium text-gray-700">
                Number of Passengers
              </label>
              <div className="flex items-center">
                <FaChild className="text-gray-500 mr-2" />
                <button
                  type="button"
                  onClick={() => setNumPassengers(numPassengers > 1 ? numPassengers - 1 : 1)}
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  -
                </button>
                <input
                  id="numPassengers"
                  type="text"
                  value={numPassengers}
                  readOnly
                  className="mx-2 w-16 text-center p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setNumPassengers(numPassengers + 1)}
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  +
                </button>
              </div>
            </div>
            <div className="">
              <label htmlFor="luggageCount" className="block text-sm font-medium text-gray-700">
                Luggage Count
              </label>
              <div className="flex items-center">
                <FaSuitcaseRolling className="text-gray-500 mr-2" />
                <button
                  type="button"
                  onClick={() => setLuggageCount(luggageCount > 0 ? luggageCount - 1 : 0)}
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  -
                </button>
                <input
                  id="luggageCount"
                  type="text"
                  value={luggageCount}
                  readOnly
                  className="mx-2 w-16 text-center p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setLuggageCount(luggageCount + 1)}
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {(serviceType === 'AIRPORT DROP OFF' || serviceType === 'AIRPORT PICK UP' || serviceType === 'HOURLY/AS DIRECTED' || serviceType === 'POINT TO POINT') && (
            <div className="mt-4">
              <button
                type="button"
                onClick={handleAddChildSeat}
                className="text-indigo-600 hover:text-indigo-500"
              >
                + Add Child Seat
              </button>
              {addChildSeat && childSeats.map((seat, index) => (
                <div key={index} className="flex items-center mt-2">
                  <select
                    value={seat.type}
                    onChange={(e) => handleChildSeatTypeChange(index, e.target.value)}
                    className="p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Select Seat Type</option>
                    <option value="Rear Facing">Rear Facing</option>
                    <option value="Forward Facing">Forward Facing</option>
                    <option value="Booster Seat">Booster Seat</option>
                  </select>
                  <button
                    type="button"
                    onClick={() => handleChildSeatQuantityChange(index, seat.quantity > 1 ? seat.quantity - 1 : 1)}
                    className="text-indigo-600 ml-4 hover:text-indigo-500 "
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={seat.quantity}
                    readOnly
                    className="mx-2 w-16 text-center p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => handleChildSeatQuantityChange(index, seat.quantity + 1)}
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveChildSeat(index)}
                    className="ml-4 text-red-600 hover:text-red-500 "
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center mt-4">
            <label htmlFor="accessible" className="mr-2 text-sm font-medium text-gray-700">
              Accessible Vehicle
            </label>
            <div
              onClick={handleAccessibleChange}
              className={`relative inline-block w-14 h-5 cursor-pointer select-none ${accessible ? 'bg-yellow-700' : 'bg-gray-300'} rounded-full`}
            >
              <div
                className={`absolute left-0 top-0 h-5 w-6 bg-white rounded-full shadow-md transition-transform transform ${accessible ? 'translate-x-8' : 'translate-x-0'}`}
              />
            </div>
          </div>



          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-700 text-white font-semibold rounded-2xl shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
