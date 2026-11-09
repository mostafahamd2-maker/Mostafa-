import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={sectionRef} className="py-16 bg-slate-50 bg-steel-50">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="reveal bg-white rounded-xl border border-steel-200 shadow-sm overflow-hidden grid md:grid-cols-2">
          <div className="p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-primary-800 mb-4">{t.about.title}</h3>
            <p className="text-steel-600 leading-relaxed mb-4">{t.about.p1}</p>
            <p className="text-steel-600 leading-relaxed">{t.about.p2}</p>
          </div>
          <img
            src="https://images.pexels.com/photos/37668423/pexels-photo-37668423.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Engineer examining heavy industrial machinery"
            loading="lazy"
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
