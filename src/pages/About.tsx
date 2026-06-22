import { Target, Eye, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-secondary text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Saving and Development Dialogue</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Committed to fostering democratic governance and sustainable development in communities across Ghana.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-6">Our Story</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Saving and Development Dialogue (SDD) was founded with a clear mandate: to bridge the gap between policy formulation and grassroots implementation. We believe that true democracy thrives when citizens are actively engaged in the governance process.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Over the years, we have partnered with local communities, international organizations, and government agencies to deliver impactful programs that empower the marginalized, promote transparency, and build sustainable livelihoods.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary/5 p-6 rounded-2xl">
              <Target size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-secondary mb-2">Our Mission</h3>
              <p className="text-sm text-slate-600">To promote democratic governance and sustainable development through civic education and policy advocacy.</p>
            </div>
            <div className="bg-secondary/5 p-6 rounded-2xl mt-8">
              <Eye size={32} className="text-secondary mb-4" />
              <h3 className="font-bold text-secondary mb-2">Our Vision</h3>
              <p className="text-sm text-slate-600">A society where democracy thrives and sustainable development is a reality for all.</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center hover:-translate-y-2 transition-transform">
              <Shield size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-3">Integrity</h3>
              <p className="text-slate-600">We uphold the highest standards of transparency and accountability in all our operations.</p>
            </div>
            <div className="glass-card p-8 text-center hover:-translate-y-2 transition-transform">
              <Users size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-3">Inclusivity</h3>
              <p className="text-slate-600">We believe in equal opportunities and giving a voice to the marginalized in society.</p>
            </div>
            <div className="glass-card p-8 text-center hover:-translate-y-2 transition-transform">
              <Target size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-3">Excellence</h3>
              <p className="text-slate-600">We are committed to delivering high-quality, evidence-based interventions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
