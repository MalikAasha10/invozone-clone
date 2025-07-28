import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Users, Settings, Code } from 'lucide-react';

const EngagementModels = () => {
  const [activeTab, setActiveTab] = useState(0);

  const engagementModels = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Product Development",
      description: "End-to-end product development from concept to launch",
      features: [
        "Early Growth Stage or Stealth Startup",
        "Product Development Roadmap",
        "MVP Development",
        "Prototypes / POC"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Managed IT Systems",
      description: "Complete IT infrastructure management and support",
      features: [
        "Full-stack Development",
        "System Architecture",
        "Performance Optimization",
        "Security Implementation"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Augmentation",
      description: "Scale your team with skilled developers and specialists",
      features: [
        "Skilled Developer Resources",
        "Flexible Scaling",
        "Dedicated Teams",
        "Long-term Partnerships"
      ],
      gradient: "from-green-500 to-teal-500"
    }
  ];

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
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

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const tabVariants = {
    inactive: { 
      opacity: 0.6,
      scale: 0.95,
      y: 10
    },
    active: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Engagement
            </motion.span>
            {' '}Models
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Choose from flexible engagement models tailored to your needs, ensuring seamless 
            collaboration with time & material or dedicated teams.
          </motion.p>
        </motion.div>

        {/* Tab Navigation for Mobile */}
        <div className="md:hidden mb-8">
          <div className="flex space-x-2 bg-slate-700/30 p-2 rounded-xl">
            {engagementModels.map((model, index) => (
              <motion.button
                key={index}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab(index)}
                whileTap={{ scale: 0.95 }}
              >
                {model.title.split(' ')[0]}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Desktop Grid / Mobile Tabs Content */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          <motion.div 
            className="contents"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {engagementModels.map((model, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <EngagementCard model={model} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Tab Content */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <EngagementCard model={engagementModels[activeTab]} index={activeTab} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: "98%", label: "Client Satisfaction" },
            { number: "150+", label: "Expert Developers" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 bg-slate-700/30 rounded-xl backdrop-blur-sm border border-slate-600/30"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Reusable Card Component
const EngagementCard = ({ model, index }) => {
  return (
    <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 h-full relative overflow-hidden transition-all duration-300 group-hover:bg-slate-700/70">
      {/* Animated Background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${model.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        initial={{ scale: 0, rotate: 180 }}
        whileHover={{ scale: 1.2, rotate: 0 }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Icon */}
      <motion.div
        className={`text-transparent bg-gradient-to-r ${model.gradient} bg-clip-text mb-6 inline-block`}
        animate={{ 
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5
        }}
        whileHover={{
          scale: 1.1,
          rotate: 0,
          transition: { duration: 0.3 }
        }}
      >
        {model.icon}
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h3 
          className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {model.title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-400 text-sm mb-6 group-hover:text-gray-300 transition-colors duration-300"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
        >
          {model.description}
        </motion.p>

        {/* Features */}
        <motion.div 
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {model.features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              custom={featureIndex}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: (i) => ({
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: i * 0.1,
                    duration: 0.5
                  }
                })
              }}
              className="flex items-start group/feature"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0 group-hover/feature:text-green-300 transition-colors duration-300" />
              </motion.div>
              <motion.span 
                className="text-gray-300 group-hover/feature:text-white transition-colors duration-300"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                {feature}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className={`absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-r ${model.gradient} opacity-10`}
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: 360
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default EngagementModels;