import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ServiceIcon } from './IconHelper';

export default function Products() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="products" ref={sectionRef} className="py-16 md:py-20 bg-white">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="reveal block text-accent-600 font-extrabold text-sm uppercase tracking-wide mb-2">
            {t.products.badge}
          </span>
          <h2 className="reveal text-2xl md:text-3xl font-bold text-primary-900 mb-2">{t.products.title}</h2>
          <p className="reveal text-steel-600 max-w-2xl mx-auto">{t.products.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.products.items.map((item, idx) => (
            <div
              key={item.title}
              className="reveal group flex items-start gap-4 bg-white border border-steel-200 rounded-lg p-5 hover:border-accent-500 hover:shadow-md transition-all"
              style={{ transitionDelay: `${(idx % 3) * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-lg bg-primary-900 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 transition-colors">
                <ServiceIcon name={item.icon} className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-primary-900 mb-1">{item.title}</h3>
                <p className="text-sm text-steel-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
