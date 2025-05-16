import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const WhereWorkHappens = () => {
  return (
    <motion.section
      className="w-full min-h-screen bg-black text-white py-16 px-6 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {/* Illustration */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center"
        variants={fadeInUp}
      >
        <img
          src="./this.png"
          alt="Real-time sign language translation"
          className="max-w-full h-auto object-contain scale-95 hover:scale-100 transition duration-500"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
        variants={fadeInUp}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-red-500">Bridge the Language Gap</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Empower communication across boundaries with our real-time sign language translator.
          Whether you're speaking English, Spanish, or Hindi — our app instantly interprets
          sign language into spoken words, and vice versa.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/homepage"
            className="bg-red-600 hover:bg-red-700 text-white text-lg font-medium px-6 py-3 rounded-lg transition duration-300"
          >
            Get Started
          </Link>
          <p className="text-sm text-gray-400">
            Want to sign in instead?{' '}
            <Link to="/signup" className="underline text-gray-200 hover:text-white">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WhereWorkHappens;
