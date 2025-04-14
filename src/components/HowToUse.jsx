import React from "react";
import { motion } from "framer-motion";

const HowToUse = ({ steps }) => {
  return (
    <section className="bg-black py-16 px-4 md:px-16 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">How to Use It</h2>
        <p className="text-gray-400 text-lg">
          Follow these simple steps to start translating sign language in real-time.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-red-600 transition-shadow border border-gray-800"
          >
            <div className="text-5xl mb-4 text-red-500">{step.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowToUse;