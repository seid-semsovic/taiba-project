import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { teamMembers } from '../data/team';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 bg-primary-50">
        {/* Hero section */}
        <div className="bg-primary-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl mb-6">O Nama</h1>
              <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
              <p className="text-xl text-primary-100 mb-4">
                Dobrodošli u Taiba Caffe Restoran - mjesto gdje se susreću tradicija i inovacija
              </p>
            </motion.div>
          </div>
        </div>

        {/* Our story */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="https://images.pexels.com/photos/2277653/pexels-photo-2277653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Taiba Caffe Restoran interior" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl text-secondary-900 mb-6">Naša Priča</h2>
                <div className="w-24 h-1 bg-primary-500 mb-6"></div>
                <p className="text-secondary-700 mb-4">
                  Taiba Caffe Restoran je nastao 2015. godine iz strasti prema tradicionalnim bosanskim receptima i 
                  želje da se stvori prostor gdje ljudi mogu uživati u domaćoj hrani u prijatnom, savremenom ambijentu.
                </p>
                <p className="text-secondary-700 mb-4">
                  Naziv "Taiba" na arapskom znači "dobrota" i "prijatnost", što savršeno odražava našu misiju - 
                  da našim gostima pružimo prijatno iskustvo uz dobru hranu i uslugu.
                </p>
                <p className="text-secondary-700">
                  Od našeg otvaranja, postali smo omiljeno mjesto za stanovnike Sarajeva i turiste koji žele 
                  iskusiti autentičnu bosansku kuhinju u modernom ambijentu. Naša stalna posvećenost kvalitetu i 
                  autentičnosti učinila nas je jednim od najpopularnijih restorana u gradu.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="py-20 bg-[#fcf9f6]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-secondary-900 mb-4">Naše Vrijednosti</h2>
              <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-primary-600">🌿</span>
                </div>
                <h3 className="font-serif text-xl text-secondary-900 mb-4">Kvalitet</h3>
                <p className="text-secondary-700">
                  Koristimo samo najsvježije i najkvalitetnije sastojke, te tradicionalne tehnike pripreme koje osiguravaju autentičan ukus.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-primary-600">🤝</span>
                </div>
                <h3 className="font-serif text-xl text-secondary-900 mb-4">Gostoprimstvo</h3>
                <p className="text-secondary-700">
                  Našim gostima želimo pružiti toplu dobrodošlicu i vrhunsku uslugu koja će ih navesti da se uvijek rado vraćaju.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-primary-600">♻️</span>
                </div>
                <h3 className="font-serif text-xl text-secondary-900 mb-4">Održivost</h3>
                <p className="text-secondary-700">
                  Posvećeni smo održivom poslovanju kroz podršku lokalnim proizvođačima i implementaciju ekološki prihvatljivih praksi.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-secondary-900 mb-4">Naš Tim</h2>
              <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
              <p className="text-secondary-700 max-w-2xl mx-auto">
                Upoznajte ljude koji stoje iza Taiba Caffe Restoran. Naš talentovani tim čine stručnjaci koji dijele strast 
                prema kulinarstvu i gostoprimstvu.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={member.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-secondary-900 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                    <p className="text-secondary-700">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;