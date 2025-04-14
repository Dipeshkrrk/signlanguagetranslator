
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow p-4">
        <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
        <p className="text-gray-400 mb-4">Log in to translate in real time</p>
        <form className="w-full max-w-sm">
          <input type="email" placeholder="Email" className="w-full p-2 mb-3 rounded bg-gray-800 text-white border border-gray-600" />
          <input type="password" placeholder="Password" className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-gray-600" />
          <button className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded">Login</button>
        </form>
        <p className="mt-4 text-sm text-gray-400">
          New here? <a href="/signup" className="text-red-500 hover:underline">Sign up instead</a>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Login;