import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ServiceIcon } from './IconHelper';
import { Check, AlertTriangle, ArrowRight } from 'lucide-react';

export default function Services() {
  const { t, lang } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  const scrollToRfq = () => {
    const el = document.querySelector('#rfq');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-20 bg-white">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="reveal block text-accent-600 font-extrabold text-sm uppercase tracking-wide mb-2">
            {t.services.badge}
          </span>
          <h2 className="reveal text-2xl md:text-3xl font-bold text-primary-900 mb-2">{t.services.title}</h2>
          <p className="reveal text-steel-600 max-w-2xl mx-auto">{t.services.subtitle}</p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.cards.map((card, idx) => (
            <div
              key={idx}
              className="reveal group bg-white border border-steel-200 rounded-lg p-6 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <span className="inline-block text-[0.7rem] font-extrabold uppercase px-2 py-1 rounded bg-steel-100 text-steel-600 mb-4 w-fit">
                {card.badge}
              </span>

              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ServiceIcon name={card.icon} className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-bold text-primary-800 mb-2">{card.title}</h3>
              <p className="text-sm text-steel-600 mb-4 flex-grow">{card.desc}</p>

              <ul className="text-xs text-steel-800 border-t border-dashed border-steel-200 pt-3 space-y-1.5">
                {card.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToRfq}
                className="flex items-center gap-1.5 text-sm font-bold text-accent-600 hover:text-accent-700 mt-4 transition-colors"
              >
                {t.nav.rfq}
                <ArrowRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          ))}
        </div>

        {/* Lifting disclaimer */}
        <div className="reveal mt-12 bg-accent-50 rounded-lg p-6 md:p-8 border-2 border-accent-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-accent-700" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-accent-800 mb-2">{t.services.lifting.title}</h4>
              <p className="text-accent-800/90 leading-relaxed">{t.services.lifting.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
