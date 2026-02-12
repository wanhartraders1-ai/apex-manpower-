import { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className={`flex items-center gap-2 font-bold transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
          >
            <ShieldCheck className="w-6 h-6 lg:w-7 lg:h-7 text-amber-500 flex-shrink-0" />
            <span className="text-lg lg:text-xl">APEX Manpower & Security</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-medium hover:text-amber-500 transition-colors ${
                isScrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-medium hover:text-amber-500 transition-colors ${
                isScrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              About Us
            </button>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center gap-1 text-sm font-medium hover:text-amber-500 transition-colors ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-100 py-2 animate-fade-in">
                  <button
                    onClick={() => {
                      scrollToSection('services');
                      setIsServicesOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600 transition-colors"
                  >
                    Manpower Solutions
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection('services');
                      setIsServicesOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600 transition-colors"
                  >
                    Security Personnel Supply
                  </button>
                </div>
              )}
            </div>
            
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-medium hover:text-amber-500 transition-colors ${
                isScrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors flex-shrink-0 ${
              isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 animate-slide-in-down">
          <div className="px-4 py-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium"
            >
              About Us
            </button>
            
            {/* Mobile Services Submenu */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium"
              >
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <button
                    onClick={() => scrollToSection('services')}
                    className="block w-full text-left px-4 py-2 text-sm text-slate-600 hover:text-amber-600"
                  >
                    Manpower Solutions
                  </button>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="block w-full text-left px-4 py-2 text-sm text-slate-600 hover:text-amber-600"
                  >
                    Security Personnel Supply
                  </button>
                </div>
              )}
            </div>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
