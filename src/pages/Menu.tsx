import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { menuItems } from '../data/menu';

type Category = 'all' | 'breakfast' | 'main' | 'other' | 'pizza' | 'dessert';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'Sve' },
    { value: 'breakfast', label: 'Doručak' },
    { value: 'main', label: 'Sendviči & Tortilje' },
    { value: 'other', label: 'Ostala jela' },
    { value: 'pizza', label: 'Pizze' },
    { value: 'dessert', label: 'Deserti' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      <div className="pt-24 pb-12 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-secondary-900 mb-4">Naš Meni</h1>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-secondary-700 max-w-2xl mx-auto">
              Uživajte u našem pažljivo sastavljenom meniju tradicionalnih i savremenih jela.
              Svi naši proizvodi su pripremljeni sa ljubavlju i od najkvalitetnijih sastojaka.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-secondary-700 hover:bg-primary-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Menu items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-xl text-secondary-900 mb-2">{item.name}</h3>
                  <p className="text-secondary-700 mb-4 flex-grow">{item.description}</p>
                  <div className="mt-auto">
                    <span className="text-primary-600 font-medium">{item.price} RSD</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;