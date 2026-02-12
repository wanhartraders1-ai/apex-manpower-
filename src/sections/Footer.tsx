import { ShieldCheck, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 font-bold text-xl text-white mb-4"
            >
              <ShieldCheck className="w-7 h-7 text-amber-500" />
              <span>APEX Manpower & Security</span>
            </button>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building Reliable Manpower for Secure Operations
            </p>
          </div>
          

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                >
                  Manpower Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                >
                  Security Personnel
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@apexmanpower.co.uk"
                  className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  contact@apexmanpower.co.uk
                </a>
              </li>
              <li>
                <a
                  href="tel:+447472986701"
                  className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +44 74 7298 6701
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-center text-slate-500 text-sm">
            © 2026 Apex Manpower & Security. All rights reserved. | Registered
            in England & Wales | Compliant with UK Employment Agency Standards.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
