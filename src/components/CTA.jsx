import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar, Sparkles } from 'lucide-react';

const CTA = () => {
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
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
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
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 360],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-10 left-10 text-blue-400/10"
        variants={floatingVariants}
        animate="float"
      >
        <Sparkles className="w-16 h-16" />
      </motion.div>
      <motion.div
        className="absolute top-20 right-20 text-purple-400/10"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 2 }}
      >
        <Sparkles className="w-20 h-20" />
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-1/4 text-pink-400/10"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 4 }}
      >
        <Sparkles className="w-12 h-12" />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Got An Idea Or Concerns?{' '}
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Let's Discuss.
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We've built our business by assembling a team of skilled developers, 
              experts in the frameworks and technologies driving modern solutions.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold relative overflow-hidden group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {/* Button background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <span className="relative flex items-center justify-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start a Project
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </span>
            </motion.button>

            <motion.button 
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 relative overflow-hidden group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {/* Button background animation */}
              <motion.div
                className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              
              <span className="relative flex items-center justify-center">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Call
              </span>
            </motion.button>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                icon: <MessageCircle className="w-6 h-6" />,
                title: "Quick Response",
                description: "Get a reply within 24 hours",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Free Consultation",
                description: "30-minute strategy session",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: <ArrowRight className="w-6 h-6" />,
                title: "Fast Delivery",
                description: "Rapid prototyping & development",
                gradient: "from-green-500 to-teal-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-slate-600/30 group hover:bg-slate-700/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <motion.div
                  className={`text-transparent bg-gradient-to-r ${item.gradient} bg-clip-text mb-3 inline-block`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-white font-semibold mb-2 group-hover:text-blue-100 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60"
          >
            <div className="flex items-center text-gray-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              ISO 27001 Certified
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              GDPR Compliant
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
              SOC 2 Type II
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;