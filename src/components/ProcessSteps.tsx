import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ProcessSteps() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="workflow" ref={sectionRef} className="py-16 md:py-20 bg-steel-50 border-y border-steel-200">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="reveal block text-accent-600 font-extrabold text-sm uppercase tracking-wide mb-2">
            {t.workflow.badge}
          </span>
          <h2 className="reveal text-2xl md:text-3xl font-bold text-primary-900 mb-2">{t.workflow.title}</h2>
          <p className="reveal text-steel-600 max-w-2xl mx-auto">{t.workflow.subtitle}</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {t.workflow.steps.map((step, idx) => (
            <div
              key={idx}
              className="reveal bg-white border border-steel-200 rounded-lg p-5 text-center hover:shadow-md transition-all"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="w-9 h-9 rounded-full bg-primary-800 text-white flex items-center justify-center mx-auto mb-3 font-extrabold text-sm">
                {idx + 1}
              </div>
              <h4 className="font-bold text-primary-900 text-sm mb-1">{step.title}</h4>
              <p className="text-xs text-steel-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
