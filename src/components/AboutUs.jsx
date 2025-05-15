import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-balance">About the Project</h2>
        <p className="text-lg text-gray-400 mb-4">
          The Multilingual Real-Time Sign Language Translator is a cutting-edge project aimed at bridging communication gaps for individuals with hearing and speech impairments. This system leverages AI, computer vision, and modern web technologies to enable seamless communication between the deaf and hearing communities.
        </p>
        <p className="text-lg text-gray-400 mb-4">
          By utilizing MediaPipe for hand tracking and a CNN-based gesture classifier, the system can recognize American Sign Language (ASL) gestures and translate them in real time into both English and Urdu. It accurately translates common phrases like “Hello,” “Thank you,” and “Good morning,” providing users with instant feedback for a more natural and fluid interaction.
        </p>
        <p className="text-lg text-gray-400 mb-4">
          While the system excels at recognizing simple gestures, challenges such as rapid or unclear signing, similar hand shapes, poor lighting, and limitations in the Google Translate API were observed. These findings underscore the need for further refinement, including improved gesture datasets, lighting adaptation, and context-aware translation models.
        </p>
        <p className="text-lg text-gray-400 mb-4">
          Despite these hurdles, the web-based interface remains intuitive and accessible, even for users with minimal technical experience. Future enhancements include support for Indian Sign Language (ISL), more educational tools like tutorials, and expansion to more languages—ensuring broader inclusivity.
        </p>
        <p className="text-lg text-gray-400 mb-6">
          This project lays a strong foundation for the future of sign language translation technology and has the potential to significantly impact global accessibility and communication equity.
        </p>
        <p className="text-md text-gray-500 italic">
          Made with purpose and passion by Dipesh, Abhijit, Megha, and Aman.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUs;
