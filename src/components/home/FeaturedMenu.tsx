import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { menuItems } from '../../data/menu';

const FeaturedMenu: React.FC = () => {
  // Get a few items from different categories
  const featuredItems = [
    menuItems.find(item => item.category === 'dessert'),
    menuItems.find(item => item.category === 'main'),
  ].filter(Boolean);

  return (
    <section className="py-20 bg-[#fcf9f6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary-900 mb-4">Naši Specijaliteti</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-secondary-700 max-w-2xl mx-auto">
            Otkrijte naša najpopularnija jela, pripremljena s ljubavlju i pažnjom prema detaljima.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredItems.map((item, index) => (
            item && (
              <motion.div 
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-secondary-900 mb-2">{item.name}</h3>
                  <p className="text-secondary-700 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-600 font-medium">{item.price} RSD</span>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/menu" 
            className="inline-block border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white py-3 px-8 rounded transition-colors duration-300 font-medium"
          >
            Pogledaj Kompletan Meni
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;