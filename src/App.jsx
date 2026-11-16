import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FounderProfile from './components/FounderProfile';
import MedicalStandards from './components/MedicalStandards';
import Services from './components/Services';
import PricingPackages from './components/PricingPackages';
import HowItWorks from './components/HowItWorks';
import BookingForm from './components/BookingForm';
import ServiceAreas from './components/ServiceAreas';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
      offset: 80,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-800 overflow-x-hidden selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <FounderProfile />
        <MedicalStandards />
        <Services />
        <PricingPackages />
        <HowItWorks />
        <BookingForm />
        <ServiceAreas />
        <Testimonials />
        <FAQSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
