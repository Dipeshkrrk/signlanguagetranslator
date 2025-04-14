import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HowToUse from '../components/HowToUse';
import AboutUs from '../components/AboutUs';
import { motion } from 'framer-motion';

const Homepage = () => {
  return (
    <div
      className="min-h-screen bg-black text-white flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('src/assets/ds.png')" }}
    >
      <Header />

      <main className="flex flex-col items-center text-center px-6 md:px-20 py-12 md:py-24 space-y-10 backdrop-blur-sm bg-black/70">
        {/* Hero Section */}
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight md:leading-snug"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sign Language <span className="text-red-600">Translator</span>
        </motion.h2>

        <motion.p 
          className="text-base sm:text-lg md:text-xl max-w-3xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Sign language serves as a crucial communication medium for the deaf and hard-of-hearing community.
        </motion.p>

        <motion.video 
          className="w-full max-w-4xl aspect-video rounded-xl shadow-xl border border-gray-700"
          src="src/assets/hero-video.mp4"
          autoPlay loop muted playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        />

        <motion.p 
          className="text-base sm:text-lg md:text-xl max-w-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          An AI-powered solution designed to recognize and translate ASL finger-spelling into text.
        </motion.p>

        <motion.a 
          href="/login"
          className="inline-block bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-full font-semibold shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Try the Demo
        </motion.a>
      </main>

      {/* Interactive Sections */}
      <HowToUse
        steps={[
          {
            title: "Step 1",
            description: "Enable your webcam and position your hand within the frame.",
            icon: "🎥",
          },
          {
            title: "Step 2",
            description: "Start signing in ASL using finger-spelling gestures.",
            icon: "🤟",
          },
          {
            title: "Step 3",
            description: "Watch the real-time translation appear on your screen.",
            icon: "💬",
          },
        ]}
      />

      <AboutUs />
      <Footer />
    </div>
  );
};

export default Homepage;
