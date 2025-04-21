import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-secondary-900 mb-4">Kontaktirajte Nas</h1>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-secondary-700 max-w-2xl mx-auto">
              Rezervišite sto, postavite pitanje ili jednostavno svratite. Radujemo se vašoj posjeti!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl text-secondary-900 mb-6">Informacije</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-primary-500 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-medium text-secondary-900 mb-1">Adresa</h3>
                    <p className="text-secondary-700">Ulica Gradačačka 12, Sarajevo 71000, Bosna i Hercegovina</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-primary-500 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-medium text-secondary-900 mb-1">Telefon</h3>
                    <p className="text-secondary-700">+387 33 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-primary-500 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-medium text-secondary-900 mb-1">Email</h3>
                    <p className="text-secondary-700">info@taiba-caffe.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-primary-500 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-medium text-secondary-900 mb-1">Radno vrijeme</h3>
                    <ul className="text-secondary-700">
                      <li className="flex justify-between mb-1">
                        <span>Ponedjeljak - Petak:</span>
                        <span>08:00 - 23:00</span>
                      </li>
                      <li className="flex justify-between mb-1">
                        <span>Subota:</span>
                        <span>09:00 - 00:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Nedjelja:</span>
                        <span>10:00 - 22:00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-8 h-64 bg-primary-100 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.9557699684147!2d18.413406476231856!3d43.85645907109393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c8c7e583e5dd%3A0xb262a8c8e9016c7a!2sSarajevo%20City%20Center!5e0!3m2!1sen!2sba!4v1698164285544!5m2!1sen!2sba" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Taiba Caffe Restoran location"
                ></iframe>
              </div>
            </motion.div>
            
            {/* Contact form */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl text-secondary-900 mb-6">Pošaljite nam poruku</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-secondary-700 mb-2">Ime i prezime</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
                    placeholder="Vaše ime i prezime"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-secondary-700 mb-2">Email adresa</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
                    placeholder="vasa.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-secondary-700 mb-2">Broj telefona</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full p-3 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
                    placeholder="+387 XX XXX XXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-secondary-700 mb-2">Razlog kontakta</label>
                  <select 
                    id="subject"
                    className="w-full p-3 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Izaberite razlog kontakta</option>
                    <option value="reservation">Rezervacija</option>
                    <option value="inquiry">Upit</option>
                    <option value="feedback">Povratna informacija</option>
                    <option value="other">Ostalo</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-secondary-700 mb-2">Poruka</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full p-3 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
                    placeholder="Vaša poruka..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white py-3 px-8 rounded transition-colors duration-300 font-medium w-full"
                >
                  Pošalji poruku
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;