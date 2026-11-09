import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ServiceIcon } from './IconHelper';

export default function WhyPortix() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="why" ref={sectionRef} className="py-16 md:py-20 bg-primary-900 text-white">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="reveal block text-accent-400 font-extrabold text-sm uppercase tracking-wide mb-2">
            {t.why.badge}
          </span>
          <h2 className="reveal text-2xl md:text-3xl font-bold mb-2">{t.why.title}</h2>
          <p className="reveal text-steel-300 max-w-2xl mx-auto">{t.why.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.why.items.map((item, idx) => (
            <div
              key={item.title}
              className="reveal group rounded-lg border border-primary-700 bg-primary-800/40 p-6 hover:-translate-y-1 hover:border-accent-500 transition-all duration-200"
              style={{ transitionDelay: `${(idx % 4) * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-lg bg-accent-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ServiceIcon name={item.icon} className="w-5 h-5 text-primary-900" />
              </div>
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-steel-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
