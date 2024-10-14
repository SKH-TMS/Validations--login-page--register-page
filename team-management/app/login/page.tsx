'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // validation to check if any field is empty
    if (!email || !password) {
      alert('Both email and password are required!');
      return;
    }
   
    
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#CDE5DF]" style={{ fontFamily: 'Verdana, sans-serif' }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-center text-3xl font-bold mb-6 text-[#0F6466]">Login</h2>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-[#0F6466]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md border-[#D9EDE8] focus:outline-none focus:ring-2 focus:ring-[#0F6466]"
              required
            />
          </div>

          <div className="my-6">
            <label htmlFor="password" className="block mb-1 font-semibold text-[#0F6466]">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md border-[#D9EDE8] focus:outline-none focus:ring-2 focus:ring-[#0F6466]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#0F6466] text-white font-semibold rounded-md hover:bg-[#0B4D4F] transition duration-300"
          >
            Login
          </button>

          <div className="text-center mt-4">
            <a href="#" className="text-sm text-[#0F6466] hover:underline">
              Forgot your password?
            </a>
          </div>
        </form>
        <p className="mt-6 text-center text-[#0F6466]">
          Don't have an account?{' '}
          <Link href="/register" className="text-[#0F6466] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
