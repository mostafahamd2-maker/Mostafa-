import { LanguageProvider } from '@/i18n/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MissionValues from '@/components/MissionValues';
import Siwertell from '@/components/Siwertell';
import Services from '@/components/Services';
import Products from '@/components/Products';
import WhyPortix from '@/components/WhyPortix';
import ProcessSteps from '@/components/ProcessSteps';
import Industries from '@/components/Industries';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <MissionValues />
          <Siwertell />
          <Services />
          <Products />
          <WhyPortix />
          <ProcessSteps />
          <Industries />
          <QuoteForm />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
