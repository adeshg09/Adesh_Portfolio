import React from 'react';
import { motion } from 'framer-motion';

const LogoAnimation = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, scale: 2.5 }}
        className="text-white text-4xl font-bold"
      >
        Your Logo
      </motion.div>
    </div>
  );
};

export default LogoAnimation;
