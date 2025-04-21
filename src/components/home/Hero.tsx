import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-secondary-950/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-xl">
          <motion.h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Dobrodošli u Taiba Caffe Restoran
          </motion.h1>
          
          <motion.p 
            className="text-xl text-primary-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Otkrijte elegantni ambijent i ukusne specijalitete u srcu grada.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white py-3 px-8 rounded transition-colors duration-300 font-medium"
            >
              Rezerviši Odmah
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;