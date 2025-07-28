import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Building, Wrench } from 'lucide-react'; // Fixed Tool to Wrench

const BusinessTypes = () => {
  const businessTypes = [
    {
      icon: <Rocket className="w-12 h-12" />,
      type: "Startup",
      description: "Remarkable ideas often stall without the right team to bring them to life",
      buttonText: "Get Started",
      gradient: "from-blue-500 to-purple-600",
      features: ["MVP Development", "Product Strategy", "Tech Stack Selection", "Team Building"]
    },
    {
      icon: <Building className="w-12 h-12" />,
      type: "Enterprise",
      description: "Scaling without the right infrastructure and expertise can lead to costly bottlenecks.",
      buttonText: "Explore More",
      gradient: "from-purple-500 to-pink-600",
      features: ["System Integration", "Legacy Modernization", "Performance Optimization", "Security Enhancement"]
    },
    {
      icon: <Wrench className="w-12 h-12" />, // Fixed icon here
      type: "Rescue",
      description: "A messy codebase and tech debt are suffocating your progress.",
      buttonText: "Need a Fix",
      gradient: "from-pink-500 to-red-600",
      features: ["Code Refactoring", "Bug Fixes", "Performance Tuning", "Technical Debt Reduction"]
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
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
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
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Backing You Up At Every Stage Of Your{' '}
            <motion.span
              className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Progress
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            From launching startups to expanding enterprises, or recovering from setbacks, 
            we help businesses overcome every challenge on their journey.
          </motion.p>
        </motion.div>

        {/* Business Types Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {businessTypes.map((business, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative h-full"
            >
              <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 h-full relative overflow-hidden transition-all duration-300 group-hover:bg-slate-700/70">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${business.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={{ scale: 0, rotate: 180 }}
                  whileHover={{ scale: 1.2, rotate: 0 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className={`text-transparent bg-gradient-to-r ${business.gradient} bg-clip-text mb-6 inline-block`}
                  animate={{
                    y: [-5, 5, -5],
                    rotate: [0, 5, -5, 0]
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
                  {business.icon}
                </motion.div>
                <div className="relative z-10">
                  <motion.h3
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    I'm A{' '}
                    <motion.span
                      className={`bg-gradient-to-r ${business.gradient} bg-clip-text text-transparent`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {business.type}
                    </motion.span>
                  </motion.h3>
                  <motion.p
                    className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {business.description}
                  </motion.p>
                  <motion.div
                    className="mb-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <ul className="space-y-2">
                      {business.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          custom={featureIndex}
                          variants={featureVariants}
                          className="text-sm text-gray-400 flex items-center"
                        >
                          <motion.div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${business.gradient} mr-3`}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: featureIndex * 0.2
                            }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.button
                    className={`bg-gradient-to-r ${business.gradient} text-white px-6 py-3 rounded-full font-semibold relative overflow-hidden group/btn w-full`}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative flex items-center justify-center">
                      {business.buttonText}
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </span>
                  </motion.button>
                </div>
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 rounded-full border border-white/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-8 h-8 rounded-full border border-white/5"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessTypes;
