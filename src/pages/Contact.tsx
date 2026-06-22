import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with us to learn more about our programs or how you can partner with us.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Our Office</h4>
                    <p className="text-slate-600 mt-1">123 Democracy Avenue<br/>Accra, Ghana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Phone Number</h4>
                    <p className="text-slate-600 mt-1">+233 20 123 4567<br/>+233 24 987 6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Email Address</h4>
                    <p className="text-slate-600 mt-1">info@sdddialogue.org<br/>support@sdddialogue.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 md:p-10">
              <h3 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn w-full md:w-auto px-8 py-4 flex items-center justify-center gap-2">
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
