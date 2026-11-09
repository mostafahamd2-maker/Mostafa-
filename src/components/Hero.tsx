import { ArrowRight, FileText, Wrench, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Hero() {
  const { t, lang } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} id="home" className="relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-700 text-white border-b-4 border-accent-600">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/24702864/pexels-photo-24702864.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Cargo ship docked at a port with cranes loading containers"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/85 to-primary-900/60" />
      </div>
      <div className="relative max-w-[1160px] mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="reveal inline-block bg-accent-500/15 border border-accent-500 text-accent-200 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
          {t.hero.badge}
        </div>

        <h1 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 max-w-4xl">
          {t.hero.title}
        </h1>

        <p className="reveal text-lg text-steel-300 max-w-3xl mb-8 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="reveal flex flex-wrap gap-3 sm:gap-4">
          <button
            onClick={() => scrollTo('#rfq')}
            className="group flex items-center gap-2 px-6 py-3 rounded-md bg-accent-600 text-white font-bold hover:bg-accent-700 transition-all shadow-lg shadow-accent-500/20 hover:scale-105"
          >
            <FileText className="w-5 h-5" />
            {t.hero.ctaRfq}
            <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
          </button>

          <button
            onClick={() => scrollTo('#services')}
            className="flex items-center gap-2 px-6 py-3 rounded-md border-1.5 border-steel-400 text-white font-semibold hover:bg-white/10 transition-all"
          >
            <Wrench className="w-5 h-5" />
            {t.hero.ctaServices}
          </button>
        </div>
      </div>

      {/* Metrics bar */}
      <div className="bg-primary-950 border-t border-primary-800/50 py-6">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {t.metrics.map((m, idx) => (
              <div key={idx} className="reveal">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-accent-500" />
                  <h4 className="text-accent-500 font-bold text-base">{m.value}</h4>
                </div>
                <p className="text-xs text-steel-400">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
