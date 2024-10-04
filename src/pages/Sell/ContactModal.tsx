import React, { useState } from 'react';
import { X } from 'lucide-react';

const ContactModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleClose = () => setIsOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { fullName, phoneNumber, rememberMe });
    // Handle form submission logic here
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-6 bg-pink-100 rounded-t-lg">
          <img src="/konga-logo.png" alt="Konga" className="h-8" />
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Hello there. To continue, please introduce yourself below.</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="flex">
                <select className="px-3 py-2 border-y border-l border-gray-300 rounded-l-md bg-gray-50">
                  <option>+250</option>
                </select>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-pink-600"
                />
                <span className="ml-2 text-sm text-gray-700">Remember Me</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Start Conversation
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 mb-2">Or Chat us on</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-500 text-white p-2 rounded-full">
                {/* Messenger icon */}
              </button>
              <button className="bg-green-500 text-white p-2 rounded-full">
                {/* WhatsApp icon */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;