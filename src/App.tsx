import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Placeholder components for other routes
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-[70vh] flex items-center justify-center pt-24">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-secondary mb-4">{title}</h1>
      <p className="text-slate-600">This page is currently under construction.</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<PlaceholderPage title="Our Programs" />} />
          <Route path="/media" element={<PlaceholderPage title="News & Media" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<PlaceholderPage title="Donate" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
