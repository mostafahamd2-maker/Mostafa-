import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function Siwertell() {
  const { t, lang } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  const scrollToRfq = () => {
    const el = document.querySelector('#rfq');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="siwertell" ref={sectionRef} className="py-12 bg-steel-50">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="reveal bg-white rounded-xl border-2 border-sky-400 p-8 md:p-10 shadow-lg shadow-sky-500/10">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-5">
            <div>
              <span className="inline-block bg-sky-100 text-sky-700 border border-sky-300 px-3 py-1 rounded text-sm font-bold mb-3">
                {t.siwertell.tag}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary-900">{t.siwertell.title}</h2>
            </div>
            <button
              onClick={scrollToRfq}
              className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent-600 text-white font-bold text-sm hover:bg-accent-700 transition-all whitespace-nowrap flex-shrink-0"
            >
              {t.siwertell.cta}
              <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <p className="text-steel-800 leading-relaxed mb-6">{t.siwertell.desc}</p>

          <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-steel-200">
            {t.siwertell.features.map((f, idx) => (
              <div key={idx} className="reveal">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-sky-500 flex-shrink-0" />
                  <h4 className="font-bold text-primary-900">{f.title}</h4>
                </div>
                <p className="text-sm text-steel-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
