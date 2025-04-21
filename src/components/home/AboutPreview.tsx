import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Tradicija i Inovacija</h2>
            <div className="w-24 h-1 bg-primary-500 mb-6"></div>
            <p className="text-primary-100 mb-6">
              Taiba Caffe Restoran je nastao iz ljubavi prema tradicionalnoj kuhinji i modernom ambijentu. 
              Naša misija je da stvorimo prostor gdje se preplliću ukusi prošlosti i sadašnjosti.
            </p>
            <p className="text-primary-100 mb-8">
              Svakog dana trudimo se da našim gostima pružimo jedinstveno iskustvo kroz pažljivo odabrane sastojke, 
              autentične recepte i toplu atmosferu koja će vas navesti da se uvijek vraćate.
            </p>
            <Link 
              to="/about" 
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white py-3 px-8 rounded transition-colors duration-300 font-medium"
            >
              Saznaj Više
            </Link>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden h-48 md:h-64">
                <img 
                  src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Traditional coffee preparation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48 md:h-64">
                <img 
                  src="https://images.pexels.com/photos/7474372/pexels-photo-7474372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Traditional dessert" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="rounded-lg overflow-hidden h-full">
              <img 
                src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Cafe interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;