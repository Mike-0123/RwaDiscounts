import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container mx-auto max-w-sm py-20">
      <h2 className="text-3xl text-[#022b5f] font-bold mb-4">LOGIN TO YOUR SELLERHQ ACCOUNT</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-gray-700">EMAIL ADDRESS</label>
          <input
            type="email"
            className="border border-gray-300 rounded-md p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700">PASSWORD</label>
          <div className="relative">
            <input
              type="password"
              className="border border-gray-300 w-full rounded-md p-2 pr-8"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-0 top-0 bottom-0 flex items-center justify-center px-3 py-2 text-gray-500 hover:text-gray-700"
            >
           SHOW
            </button>
          </div>
        </div>
        <div className="text-right">
          <Link to='forgotPassword' className="text-blue-500 hover:underline">
            Forgot password?
          </Link>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
