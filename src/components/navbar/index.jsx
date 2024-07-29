import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Desafio Armazenamento Dados</h1>
        <div>
          <Link to="/" className="mx-2 hover:underline">Home</Link>
          <Link to="/login" className="mx-2 hover:underline">Login</Link>
          <Link to="/signup" className="mx-2 hover:underline">Signup</Link>
        </div>
      </div>
    </nav>
  );
};