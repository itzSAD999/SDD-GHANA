import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/50 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=2000" 
            alt="Community gathering" 
            className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-110"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16 pb-32">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-light font-medium text-sm mb-6 border border-primary/30 backdrop-blur-sm animate-fade-in">
            Empowering Communities
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Saving & Development <br/>
            <span className="text-primary">Dialogue</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Dedicated to promoting democratic governance, sustainable development, and social justice across communities in Ghana and beyond.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/about" className="btn text-lg px-8 py-4 w-full sm:w-auto">
              Discover Our Impact
            </Link>
            <Link to="/programs" className="btn-outline border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-4 w-full sm:w-auto">
              View Programs
            </Link>
          </div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
          <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C-2.48,97.74,5.4,101.4,14.28,105.74,90.4,141.22,234.3,101.21,321.39,56.44Z" className="fill-surface"></path>
          </svg>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-20">
            
            {/* Our Mission */}
            <div className="p-6 lg:p-8 text-center group cursor-default">
              <div className="inline-block animate-float" style={{ animationDelay: '0s' }}>
                <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto mb-8 text-primary group-hover:scale-110 transition-transform duration-500 drop-shadow-sm" fill="currentColor">
                  <circle cx="40" cy="20" r="8" />
                  <path d="M33 32 L47 32 L43 55 L37 55 Z" />
                  <path d="M33 34 L22 46 L29 52 L36 43" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
                  <path d="M47 34 L58 13" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  <path d="M37 54 L25 85 L32 85 L40 60" />
                  <path d="M43 54 L52 85 L59 85 L43 60" />
                  <path d="M47 32 C 65 25, 85 40, 95 45 C 80 50, 75 60, 65 65 C 55 55, 45 50, 43 45 Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary tracking-tight group-hover:text-primary transition-colors duration-300">Our Mission</h3>
              <p className="text-slate-500 leading-relaxed text-[15px] max-w-[280px] mx-auto">
                Our mission is to be a catalyst for positive change, combining inclusive and sustainable development initiatives, research insights and policy influence to transform lives and communities.
              </p>
            </div>

            {/* Our Vision */}
            <div className="p-6 lg:p-8 text-center group cursor-default">
              <div className="inline-block animate-float" style={{ animationDelay: '0.4s' }}>
                <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto mb-8 text-secondary group-hover:scale-110 transition-transform duration-500 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="3.5">
                  <path d="M25 50 C 35 35, 65 35, 75 50 C 65 65, 35 65, 25 50 Z" />
                  <circle cx="50" cy="50" r="9" />
                  <circle cx="50" cy="50" r="3" fill="currentColor" />
                  <path d="M46 28 A 4 4 0 0 1 54 28" strokeLinecap="round" />
                  <path d="M40 21 A 14 14 0 0 1 60 21" strokeLinecap="round" />
                  <path d="M33 13 A 24 24 0 0 1 67 13" strokeLinecap="round" />
                  <path d="M18 45 A 35 35 0 0 0 82 45" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary tracking-tight group-hover:text-primary transition-colors duration-300">Our Vision</h3>
              <p className="text-slate-500 leading-relaxed text-[15px] max-w-[280px] mx-auto">
                A world where diversity inspires actions to create opportunities and enhance inclusion for all people facing barriers.
              </p>
            </div>

            {/* Our Approach */}
            <div className="p-6 lg:p-8 text-center group cursor-default">
              <div className="inline-block animate-float" style={{ animationDelay: '0.8s' }}>
                <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto mb-8 text-secondary group-hover:scale-110 transition-transform duration-500 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="3.5">
                  <ellipse cx="50" cy="50" rx="16" ry="42" transform="rotate(30 50 50)" />
                  <ellipse cx="50" cy="50" rx="16" ry="42" transform="rotate(90 50 50)" />
                  <ellipse cx="50" cy="50" rx="16" ry="42" transform="rotate(150 50 50)" />
                  <circle cx="21" cy="33" r="5" fill="white" />
                  <circle cx="21" cy="33" r="3" fill="currentColor" />
                  <circle cx="79" cy="67" r="5" fill="white" />
                  <circle cx="79" cy="67" r="3" fill="currentColor" />
                  <circle cx="67" cy="21" r="5" fill="white" />
                  <circle cx="67" cy="21" r="3" fill="currentColor" />
                  <circle cx="33" cy="79" r="5" fill="white" />
                  <circle cx="33" cy="79" r="3" fill="currentColor" />
                  <circle cx="92" cy="50" r="5" fill="white" />
                  <circle cx="92" cy="50" r="3" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary tracking-tight group-hover:text-primary transition-colors duration-300">Our Approach</h3>
              <p className="text-slate-500 leading-relaxed text-[15px] max-w-[280px] mx-auto">
                Our approach is double-edge, incorporating a business case to social development and specific solutions directed at reducing vulnerability.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary-light rounded-[3rem] opacity-20 blur-2xl"></div>
              <div className="overflow-hidden rounded-3xl shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our Impact" 
                  className="object-cover h-[500px] w-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute -left-6 bottom-12 bg-white px-8 py-5 rounded-full shadow-[0_20px_40px_rgb(0,0,0,0.12)] flex items-center gap-5 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex flex-col items-end border-r border-slate-200 pr-5">
                  <span className="text-3xl font-extrabold text-primary leading-none mb-1">10+</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Years</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-secondary text-sm">Of Active Impact</span>
                  <span className="text-xs text-slate-500">In our communities</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6 leading-tight">
                Driving Sustainable Change Through <span className="heading-gradient">Democratic Action</span>
              </h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Saving and Development Dialogue (SDD) is a non-governmental organization committed to fostering a society where democracy thrives and sustainable development is a reality for all. We bridge the gap between policy and community action.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Through research, advocacy, and capacity building, we empower citizens to actively participate in governance processes and hold institutions accountable.
              </p>
              <ul className="space-y-4 mb-8">
                {['Promoting Civic Education', 'Advocating for Policy Reforms', 'Empowering Youth & Women'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <ArrowRight size={14} className="text-primary" />
                    </div>
                    <span className="font-medium text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn gap-2">
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center z-0 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl text-slate-300 mb-10">Your support helps us continue our work in promoting democratic governance and sustainable development in Ghana.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/donate" className="btn px-8 py-4 text-lg shadow-primary/40 shadow-lg">
              Support Our Cause
            </Link>
            <Link to="/contact" className="btn-outline border-slate-400 text-white hover:bg-slate-800 hover:border-slate-800 px-8 py-4 text-lg">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
