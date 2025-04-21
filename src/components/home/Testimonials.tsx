import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Amina Selimović',
    role: 'Redovna gošća',
    text: 'Taiba Caffe ima najbolju bosansku kafu u gradu! Ambijent je predivan, a osoblje uvijek ljubazno. Dolazim ovdje svaki vikend i nikad nisam bila razočarana.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Emir Bašić',
    role: 'Poslovni čovjek',
    text: 'Savršeno mjesto za poslovne sastanke. Mirna atmosfera, odlična usluga i hrana koja oduševljava. Posebno preporučujem njihove tradicionalne deserte.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Lejla Hodžić',
    role: 'Food blogger',
    text: 'Kao neko ko piše o hrani, mogu reći da je Taiba Caffe uspješno spojio tradicionalne recepte sa modernom prezentacijom. Njihovi ćevapi su među najboljima koje sam probala.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary-900 mb-4">Šta Kažu Naši Gosti</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-secondary-700 max-w-2xl mx-auto">
            Iskustva naših gostiju su naš najveći ponos. Saznajte šta drugi misle o Taiba Caffe Restoranu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="absolute text-primary-200 top-6 right-6" size={40} />
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-secondary-900">{testimonial.name}</h4>
                  <p className="text-secondary-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-secondary-700 italic">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;