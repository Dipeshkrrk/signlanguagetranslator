import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg text-gray-400 mb-6">
          We are a team of passionate developers and researchers committed to bridging communication gaps through inclusive technology.
          Our Real-Time Sign Language Translator leverages the power of artificial intelligence, computer vision, and modern web design to deliver a truly accessible tool for the deaf and hard-of-hearing community.
        </p>
        <p className="text-lg text-gray-400">
          This project was built with the aim of creating a world where language is no longer a barrier. With real-time ASL recognition and translation, we hope to foster inclusivity and break down walls—one gesture at a time.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUs;