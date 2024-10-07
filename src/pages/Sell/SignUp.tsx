import React, { useState, ChangeEvent, FormEvent } from 'react';

const SignUp: React.FC = () => {
  const [storeName, setStoreName] = useState<string>('');
  const [storeUrl, setStoreUrl] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [streetAddress, setStreetAddress] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [lga, setLga] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [landmark, setLandmark] = useState<string>('');
  const [hearAbout, setHearAbout] = useState<string>('');
  const [referralCode, setReferralCode] = useState<string>('');
  const [userAgreement, setUserAgreement] = useState<boolean>(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', {
      storeName,
      storeUrl,
      description,
      email,
      password,
      title,
      firstName,
      lastName,
      phoneNumber,
      streetAddress,
      state,
      lga,
      city,
      landmark,
      hearAbout,
      referralCode,
    });
  };

  return (
    <div className="container mx-auto max-w-3xl p-8 bg-white py-10 rounded-xl">
      <h2 className="text-3xl text-[#022b5f] font-bold mb-4">Create a SellerHQ Account</h2>
      <p className="mb-6">Start selling on RwaDiscounts today</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Store Details */}
        <div>
          <h3 className="text-xl text-[#022b5f] font-semibold">STORE DETAILS</h3>
          <div className="flex flex-col">
            <label className="text-gray-700">Store Name:</label>
            <input
              type="text"
              placeholder="Your online store name"
              className="border border-gray-300 rounded-md p-2"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Store URL (www.RwaDiscounts.com/):</label>
            <input
              type="text"
              placeholder="Enter your store URL"
              className="border border-gray-300 rounded-md p-2"
              value={storeUrl}
              onChange={(e) => setStoreUrl(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Description:</label>
            <textarea
              placeholder="Enter store description here"
              className="border border-gray-300 rounded-md p-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Personal Details */}
        <div>
          <h3 className="text-xl text-[#022b5f] font-semibold">Enter Personal Details</h3>
          <div className="flex flex-col">
            <label className="text-gray-700">Title:</label>
            <select
              className="border border-gray-300 rounded-md p-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            >
              <option value="">Select One</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">First Name:</label>
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-md p-2"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Last Name:</label>
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded-md p-2"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Phone Number:</label>
            <input
              type="tel"
              placeholder="We’ll send a verification code"
              className="border border-gray-300 rounded-md p-2"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-xl text-[#022b5f] font-semibold">Address Details</h3>
          <div className="flex flex-col">
            <label className="text-gray-700">Street Address:</label>
            <input
              type="text"
              placeholder="Enter your address"
              className="border border-gray-300 rounded-md p-2"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Select LGA:</label>
            <select
              className="border border-gray-300 rounded-md p-2"
              value={lga}
              onChange={(e) => setLga(e.target.value)}
              required
            >
              <option value="">Select One</option>
              {/* Add LGA options */}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">City:</label>
            <input
              type="text"
              placeholder="Enter your city/town"
              className="border border-gray-300 rounded-md p-2"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Landmark:</label>
            <input
              type="text"
              placeholder="Closest landmark to your location"
              className="border border-gray-300 rounded-md p-2"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
            />
          </div>
        </div>

        {/* Other Information */}
        <div>
          <h3 className="text-xl text-[#022b5f] font-semibold">Other Information</h3>
          <div className="flex flex-col">
            <label className="text-gray-700">How did you hear about SellerHQ?</label>
            <select
              className="border border-gray-300 rounded-md p-2"
              value={hearAbout}
              onChange={(e) => setHearAbout(e.target.value)}
            >
              <option value="">Select One</option>
              <option value="Google">Google</option>
              <option value="Social Media">Social Media</option>
              {/* Add more options */}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Referral Code:</label>
            <input
              type="text"
              placeholder="Enter referral code"
              className="border border-gray-300 rounded-md p-2"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
            />
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={userAgreement}
            onChange={(e) => setUserAgreement(e.target.checked)}
            required
          />
          <label className="text-gray-700">
            By continuing, you accept our <a href="#" className="text-blue-500">Privacy policy</a> & <a href="#" className="text-blue-500">terms and conditions</a>
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2 w-full"
        >
          Create Account
        </button>
        <p className="text-gray-700 mt-4">
          Already have an account?{' '}
          <a href="#" className="text-blue-500">
            Sign in here!
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

