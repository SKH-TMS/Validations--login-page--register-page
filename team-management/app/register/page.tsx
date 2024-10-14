'use client';
import { useState } from 'react';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // validation to check empty fields
    if (!fullName || !email || !password || !confirmPassword) {
      alert('All fields are required!');
      return;
    }
  
    // validate email pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
  
    // validate password length
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
  
    // check password and confirm password
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    
    alert('Validation passed! Now you can proceed with registration.');
    
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#CDE5DF]" style={{ fontFamily: 'Verdana, sans-serif' }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-center text-3xl font-bold mb-6 text-[#0F6466]">Create an Account</h2>

          <div>
            <label htmlFor="fullName" className="block mb-1 font-semibold text-[#0F6466]">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md border-[#D9EDE8] focus:outline-none focus:ring-2 focus:ring-[#0F6466]"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-[#0F6466]">
              Email
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

          <div className="my-6">
            <label htmlFor="confirmPassword" className="block mb-1 font-semibold text-[#0F6466]">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md border-[#D9EDE8] focus:outline-none focus:ring-2 focus:ring-[#0F6466]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#0F6466] text-white font-semibold rounded-md hover:bg-[#0B4D4F] transition duration-300"
          >
            Register
          </button>

          <div className="text-center mt-6">
            <p className="text-[#0F6466]">
              Already have an account?{' '}
              <a href="/login" className="text-[#0F6466] hover:underline">
                Log in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
