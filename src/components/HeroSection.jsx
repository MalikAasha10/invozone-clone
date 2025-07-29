import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glassmorphism Card Background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div className="w-full max-w-4xl h-[420px] bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl mx-auto mt-10 mb-10" aria-hidden="true"></div>
      </div>
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-10 text-blue-400/20"
        variants={floatingVariants}
        animate="float"
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-purple-400/20"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 1 }}
      >
        <Sparkles className="w-12 h-12" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-1/4 text-pink-400/20"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 2 }}
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 flex justify-center items-center min-h-[500px]">
        <div className="mx-auto bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-6 md:p-12 max-w-3xl">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="mb-4"
            >
              <motion.h1 
                className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-xl tracking-tight"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                Software Development{' '}
                <motion.span 
                  className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x"
                  initial={{ backgroundPosition: '0% 50%' }}
                  animate={{ backgroundPosition: '100% 50%' }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  & Consulting
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.p 
                className="text-base md:text-lg text-gray-200 mb-3 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  400+ Products Developed For{' '}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="font-semibold text-blue-400"
                >
                  300+ Customers{' '}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  Across{' '}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  className="font-semibold text-purple-400"
                >
                  120+ Countries
                </motion.span>
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-full text-base font-bold relative overflow-hidden group shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400/50 transition-all duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                aria-label="Start Your Project"
              >
                {/* Button background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center">
                  Start Your Project
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { number: '400+', label: 'Products Delivered' },
                { number: '300+', label: 'Happy Clients' },
                { number: '120+', label: 'Countries Served' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.8 + index * 0.2,
                      type: 'spring',
                      stiffness: 200
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <motion.p
                    className="text-gray-300 text-xs uppercase tracking-wider"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 2 + index * 0.2 }}
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;