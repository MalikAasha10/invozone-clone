import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Users, Shield, Database, Cloud, Smartphone, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Product Engineering",
      description: "Our Product Engineering Services cover product management, design, development, DevOps, testing, security & more.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data & Artificial Intelligence",
      description: "Leverage AI and machine learning to transform your business data into actionable insights.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "DevOps & CloudOps",
      description: "Streamline your development and deployment processes with our DevOps expertise.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Blockchain & Web 3.0",
      description: "Build decentralized applications and smart contracts with cutting-edge blockchain technology.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Create powerful native and cross-platform mobile applications for iOS and Android.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Build responsive, scalable web applications using modern frameworks and technologies.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Design intuitive and engaging user experiences that drive user adoption and satisfaction.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Transform your business processes with digital solutions and automation technologies.",
      gradient: "from-yellow-500 to-orange-500"
    }
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

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
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
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-xl tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Software Development{' '}
            <motion.span
              className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Services
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Forward Planners - Empowering businesses with cutting-edge technology solutions
          </motion.p>
        </motion.div>
        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -14,
                scale: 1.04,
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 h-full relative overflow-hidden transition-all duration-300 group-hover:bg-white/20 shadow-xl">
                {/* Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={{ scale: 0, rotate: 180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className={`text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text mb-4 inline-block drop-shadow-lg`}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {service.icon}
                  </motion.div>
                  <motion.h3
                    className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-200 text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-300"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {service.description}
                  </motion.p>
                </div>
                {/* Hover Effect Border */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  style={{
                    background: `linear-gradient(135deg, transparent, transparent), linear-gradient(135deg, ${service.gradient.split(' ')[1]}, ${service.gradient.split(' ')[3]})`,
                    backgroundClip: 'padding-box, border-box',
                    backgroundOrigin: 'border-box'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-400/50 transition-all duration-300"
            whileHover={{
              scale: 1.07,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Explore All Services"
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;