import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const headingAnim = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const paragraphAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
};

const buttonAnim = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } }
};

const WhereWorkHappens = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white py-16 px-6 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
      
      {/* Illustration (No animation) */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="./this.png"
          alt="Real-time sign language translation"
          className="max-w-full h-auto object-contain scale-95 hover:scale-100 transition duration-500"
        />
      </div>

      {/* Text Content with Animation */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-red-500"
          initial="hidden"
          animate="visible"
          variants={headingAnim}
        >
          Bridge the Language Gap
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={paragraphAnim}
        >
          Empower communication across boundaries with our real-time sign language translator.
          Multiple Language Support — our app instantly interprets
          sign language into spoken words, and vice versa.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial="hidden"
          animate="visible"
          variants={buttonAnim}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default WhereWorkHappens;
