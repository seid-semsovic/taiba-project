import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary-500" : "";
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary-950/95 shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Coffee className={`mr-2 ${isScrolled ? 'text-primary-500' : 'text-white'}`} size={32} />
            <span className={`font-serif text-xl font-bold ${isScrolled ? 'text-white' : 'text-white'}`}>
              Taiba
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium hover:text-primary-500 transition-colors ${
                isScrolled ? 'text-white' : 'text-white'
              } ${isActive('/')}`}
            >
              Početna
            </Link>
            <Link 
              to="/menu" 
              className={`font-medium hover:text-primary-500 transition-colors ${
                isScrolled ? 'text-white' : 'text-white'
              } ${isActive('/menu')}`}
            >
              Meni
            </Link>
            <Link 
              to="/about" 
              className={`font-medium hover:text-primary-500 transition-colors ${
                isScrolled ? 'text-white' : 'text-white'
              } ${isActive('/about')}`}
            >
              O nama
            </Link>
            <Link 
              to="/gallery" 
              className={`font-medium hover:text-primary-500 transition-colors ${
                isScrolled ? 'text-white' : 'text-white'
              } ${isActive('/gallery')}`}
            >
              Galerija
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium hover:text-primary-500 transition-colors ${
                isScrolled ? 'text-white' : 'text-white'
              } ${isActive('/contact')}`}
            >
              Kontakt
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-primary-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-secondary-950/95 px-4 py-5">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`font-medium text-white hover:text-primary-500 transition-colors ${isActive('/')}`}
            >
              Početna
            </Link>
            <Link 
              to="/menu" 
              className={`font-medium text-white hover:text-primary-500 transition-colors ${isActive('/menu')}`}
            >
              Meni
            </Link>
            <Link 
              to="/about" 
              className={`font-medium text-white hover:text-primary-500 transition-colors ${isActive('/about')}`}
            >
              O nama
            </Link>
            <Link 
              to="/gallery" 
              className={`font-medium text-white hover:text-primary-500 transition-colors ${isActive('/gallery')}`}
            >
              Galerija
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium text-white hover:text-primary-500 transition-colors ${isActive('/contact')}`}
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;