import React from 'react';
import { motion } from 'framer-motion';

const ClientLogos = () => {
  const clientLogos = [
    { name: "TechCorp", color: "4338ca" },
    { name: "DataFlow", color: "7c3aed" },
    { name: "CloudBase", color: "dc2626" },
    { name: "InnovateLab", color: "059669" },
    { name: "DigitalEdge", color: "ea580c" },
    { name: "FutureSync", color: "0891b2" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Trusted by leading companies worldwide
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {clientLogos.map((client, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              whileHover={{ 
                scale: 1.1,
                filter: "grayscale(0%)",
                transition: { duration: 0.3 }
              }}
              animate={floatingAnimation}
              style={{ 
                animationDelay: `${index * 0.5}s` 
              }}
              className="group cursor-pointer"
            >
              <motion.div
                className="relative"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Logo Container */}
                <div className="w-32 h-16 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-300">
                  <div
                    className="w-20 h-8 rounded flex items-center justify-center text-white text-xs font-semibold"
                    style={{ backgroundColor: `#${client.color}` }}
                  >
                    {client.name}
                  </div>
                </div>
                
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ 
                    background: `linear-gradient(45deg, #${client.color}, transparent)`,
                    filter: "blur(10px)"
                  }}
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated divider */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: "200% 100%" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;