import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Home Page</h1>
          <Link to="/login" className="text-blue-500 hover:underline">Login</Link> | 
          <Link to="/signup" className="text-blue-500 hover:underline"> Signup</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};