import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
                SDD
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Dialogue
              </span>
            </div>
            <p className="text-sm leading-relaxed mt-4 text-slate-400">
              Saving and Development Dialogue is dedicated to promoting democratic governance, sustainable development, and social justice across communities.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Globe size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Globe size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Globe size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> About Us</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Our Programs</Link></li>
              <li><Link to="/media" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> News & Media</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Contact Us</Link></li>
              <li><Link to="/donate" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Support Our Work</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span>123 Democracy Avenue, Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+233 20 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span>info@sdddialogue.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <p className="text-sm mb-4 text-slate-400">Subscribe to our newsletter for the latest updates and impact stories.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary text-white"
              />
              <button className="btn w-full !rounded-lg py-3">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Saving and Development Dialogue. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Made with <Heart size={14} className="text-primary fill-current mx-1" /> for social impact
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
