import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ServiceIcon } from './IconHelper';

const sectorIcons = ['Ship', 'Anchor', 'Crane', 'Fuel', 'Wheat', 'Factory'];

export default function Industries() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="sectors" ref={sectionRef} className="py-16 md:py-20 bg-white">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="reveal block text-accent-600 font-extrabold text-sm uppercase tracking-wide mb-2">
            {t.sectors.badge}
          </span>
          <h2 className="reveal text-2xl md:text-3xl font-bold text-primary-900 mb-2">{t.sectors.title}</h2>
          <p className="reveal text-steel-600 max-w-2xl mx-auto">{t.sectors.subtitle}</p>
        </div>

        {/* Sectors grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.sectors.items.map((item, idx) => (
            <div
              key={idx}
              className="reveal group bg-white border border-steel-200 rounded-lg p-6 hover:shadow-lg hover:border-steel-300 transition-all"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ServiceIcon name={sectorIcons[idx] ?? 'Factory'} className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-bold text-primary-900 mb-2">{item.title}</h4>
              <p className="text-sm text-steel-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
