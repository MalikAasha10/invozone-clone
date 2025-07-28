import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Product Engineering", href: "#" },
        { name: "AI & Data Science", href: "#" },
        { name: "DevOps & Cloud", href: "#" },
        { name: "Blockchain Development", href: "#" },
        { name: "Mobile Development", href: "#" },
        { name: "Web Development", href: "#" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "For Startups", href: "#" },
        { name: "For Enterprises", href: "#" },
        { name: "Code Rescue", href: "#" },
        { name: "Team Augmentation", href: "#" },
        { name: "Consulting", href: "#" },
        { name: "Digital Transformation", href: "#" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Healthcare", href: "#" },
        { name: "Fintech", href: "#" },
        { name: "E-commerce", href: "#" },
        { name: "Education", href: "#" },
        { name: "Real Estate", href: "#" },
        { name: "Manufacturing", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Team", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { 
      icon: <Facebook className="w-5 h-5" />, 
      href: "#", 
      name: "Facebook",
      color: "from-blue-600 to-blue-700" 
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      href: "#", 
      name: "Twitter",
      color: "from-sky-400 to-sky-600" 
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: "#", 
      name: "LinkedIn",
      color: "from-blue-500 to-blue-700" 
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: "#", 
      name: "Instagram",
      color: "from-pink-500 to-purple-600" 
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "hello@invozone.com",
      href: "mailto:hello@invozone.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: "123 Tech Street, Silicon Valley, CA 94000",
      href: "#"
    }
  ];

  return (
    <footer className="bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='5' cy='5' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Main Footer Content */}
      <motion.div 
        className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-4"
              variants={itemVariants}
            >
              <motion.div 
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                InvoZone
              </motion.div>
              <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
                Leading software development and consulting company helping businesses 
                transform their ideas into reality with cutting-edge technology solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="mr-3 text-blue-400"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="group-hover:text-white transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300`}
                    variants={socialVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, sectionIndex) => (
                <motion.div 
                  key={sectionIndex}
                  variants={itemVariants}
                >
                  <h4 className="text-white font-semibold mb-4 text-lg">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li key={linkIndex}>
                        <motion.a
                          href={link.href}
                          className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.name}
                          <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <motion.div 
            className="mt-12 pt-8 border-t border-slate-700"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
                <p className="text-gray-400 text-sm">
                  Subscribe to our newsletter for the latest insights and updates.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <motion.input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300 min-w-64"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div 
        className="relative z-10 border-t border-slate-700 py-6 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={ { opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>&copy; 2025 InvoZone. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 md:ml-6"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.9 }}
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;