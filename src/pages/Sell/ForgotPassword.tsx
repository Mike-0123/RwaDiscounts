import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

const ForgotPasswordForm: React.FC = () => {
  const [recoveryMethod, setRecoveryMethod] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform forgot password logic here
    console.log('Recovery method:', recoveryMethod);
    console.log('Email:', email);
    console.log('Phone number:', phoneNumber);
  };

  return (
    <div className="container mx-auto max-w-sm py-20">
      <h2 className="text-3xl text-[#022b5f] font-bold mb-4">FORGOT YOUR PASSWORD?</h2>
      <p className="text-gray-500 mb-4">Select your recovery method below</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input
            type="radio"
            name="recoveryMethod"
            value="email"
            checked={recoveryMethod === 'email'}
            onChange={() => setRecoveryMethod('email')}
          />
          <label className="ml-2 text-gray-700">EMAIL ADDRESS</label>
        </div>
        <div className="flex flex-col">
          <input
            type="email"
            className="border border-gray-300 rounded-md p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={recoveryMethod !== 'email'}
          />
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="recoveryMethod"
            value="phone"
            checked={recoveryMethod === 'phone'}
            onChange={() => setRecoveryMethod('phone')}
          />
          <label className="ml-2 text-gray-700">PHONE NUMBER</label>
        </div>
        <div className="flex flex-col">
          <input
            type="tel"
            className="border border-gray-300 rounded-md p-2"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            disabled={recoveryMethod !== 'phone'}
          />
        </div>
        <p className="text-gray-500">
          We will send a verification code to confirm access to this phone number
        </p>
        <button
          type="submit"
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600"
        >
          SUBMIT
        </button>
      </form>
      <div className="text-center mt-4">
        <Link to='/login' className="text-blue-500 hover:underline">
          Go Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
