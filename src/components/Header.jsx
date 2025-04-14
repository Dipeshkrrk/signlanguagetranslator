import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold text-red-600">SignLangAI</h1>
      <nav>
        <a href="/" className="mx-2 hover:underline">Home</a>
        <a href="/login" className="mx-2 hover:underline">Login</a>
        <a href="/signup" className="mx-2 hover:underline">Sign Up</a>
      </nav>
    </header>
  );
};

export default Header;