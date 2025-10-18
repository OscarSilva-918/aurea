import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import Design3D from './components/Design3D';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import BudgetCalculator from './components/BudgetCalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Catalog />
      <Design3D />
      <BeforeAfter />
      <Testimonials />
      {/* <BudgetCalculator /> */}
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
