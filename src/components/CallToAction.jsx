// components/CallToAction.jsx
import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="w-full py-16 px-6 md:px-20 flex justify-center items-center bg-gradient-to-r from-black via-red-900 to-black">
      <motion.div
        className="bg-red-600 text-white rounded-3xl p-10 md:p-16 shadow-2xl text-center max-w-4xl w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Ready to Experience AI-Powered Translation?
        </h3>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          Dive into a seamless sign language interpretation journey. Start your experience now and bridge the communication gap.
        </p>
        <a
          href="/login"
          className="inline-block bg-white text-red-600 font-bold text-lg px-8 py-4 rounded-full hover:bg-red-100 transition-transform transform hover:scale-105 shadow-md"
        >
          Try It Out Now
        </a>
      </motion.div>
    </section>
  );
};

export default CallToAction;
