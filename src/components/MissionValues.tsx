import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Quote, Eye, Target, Gem } from 'lucide-react';

export default function MissionValues() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="mission" ref={sectionRef} className="py-16 md:py-20 bg-steel-50">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="reveal grid md:grid-cols-5 gap-6 bg-white rounded-xl border border-steel-200 shadow-sm p-8 md:p-10">
          <div className="md:col-span-3 flex flex-col">
            <span className="text-accent-600 font-extrabold text-sm uppercase tracking-wide mb-2">{t.mission.badge}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">{t.mission.title}</h2>
            <div className="relative ps-8">
              <Quote className="absolute start-0 top-0 w-6 h-6 text-accent-500" />
              <p className="text-steel-700 text-lg leading-relaxed">{t.mission.quote}</p>
              <p className="mt-4 text-sm font-bold text-primary-800">{t.mission.quoteBy}</p>
            </div>
          </div>

          <div className="md:col-span-2 grid gap-4 content-start">
            <div className="rounded-lg bg-primary-900 p-5 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-accent-400" />
                <h3 className="font-bold">{t.mission.vision.title}</h3>
              </div>
              <p className="text-sm text-steel-300 leading-relaxed">{t.mission.vision.text}</p>
            </div>
            <div className="rounded-lg border border-steel-200 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-accent-600" />
                <h3 className="font-bold text-primary-900">{t.mission.mission.title}</h3>
              </div>
              <p className="text-sm text-steel-600 leading-relaxed">{t.mission.mission.text}</p>
            </div>
          </div>
        </div>

        <div className="reveal mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Gem className="w-5 h-5 text-accent-600" />
            <h3 className="font-bold text-primary-900">{t.mission.values.title}</h3>
          </div>
          <ul className="flex flex-wrap gap-3">
            {t.mission.values.items.map((value) => (
              <li
                key={value}
                className="px-4 py-2 rounded-full bg-white border border-steel-200 text-sm font-semibold text-steel-800 hover:border-accent-500 hover:text-accent-600 transition-colors"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
