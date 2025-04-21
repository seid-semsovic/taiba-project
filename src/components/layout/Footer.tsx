import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4 text-primary-200">Taiba Caffe Restoran</h3>
            <p className="text-primary-100 mb-4">
              Udoban kafić i restoran koji kombinuje tradicionalni i savremeni stil.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:info@taiba-caffe.com" 
                className="text-primary-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-4 text-primary-200">Radno Vrijeme</h3>
            <ul className="text-primary-100">
              <li className="flex justify-between mb-2">
                <span>Ponedjeljak - Petak</span>
                <span>08:00 - 23:00</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Subota</span>
                <span>09:00 - 00:00</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Nedjelja</span>
                <span>10:00 - 22:00</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-4 text-primary-200">Kontakt</h3>
            <ul className="text-primary-100">
              <li className="flex items-start mb-3">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-primary-300" />
                <span>Ulica Gradačačka 12, Sarajevo 71000, Bosna i Hercegovina</span>
              </li>
              <li className="flex items-center mb-3">
                <Phone size={20} className="mr-2 flex-shrink-0 text-primary-300" />
                <span>+387 33 123 456</span>
              </li>
              <li className="flex items-center mb-3">
                <Mail size={20} className="mr-2 flex-shrink-0 text-primary-300" />
                <span>info@taiba-caffe.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-800 mt-8 pt-8 text-center text-primary-300">
          <div className="mb-4">
            <Link to="/" className="mx-2 hover:text-white transition-colors">Početna</Link>
            <Link to="/menu" className="mx-2 hover:text-white transition-colors">Meni</Link>
            <Link to="/about" className="mx-2 hover:text-white transition-colors">O nama</Link>
            <Link to="/gallery" className="mx-2 hover:text-white transition-colors">Galerija</Link>
            <Link to="/contact" className="mx-2 hover:text-white transition-colors">Kontakt</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Taiba Caffe Restoran. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;