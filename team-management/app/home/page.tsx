'use client'; 
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#CDE5DF] font-sans" style={{ fontFamily: 'Verdana, sans-serif' }}>
      <h1 className="text-4xl font-bold mb-8 text-[#0F6466]">
        Welcome to Team Management System
      </h1>
      <div className="flex space-x-4">
        <Link href="/login" className="px-6 py-3 bg-[#0F6466] text-white font-semibold rounded-md hover:bg-[#0B4D4F] transition duration-300">
          Login
        </Link>
        <Link href="/register" className="px-6 py-3  bg-[#23be90e7] text-white font-semibold rounded-md hover:bg-[#A6D1CC] transition duration-300">
          Register
        </Link>
      </div>
    </div>
  );
}



