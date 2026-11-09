import { useLanguage } from '@/i18n/LanguageContext';
import BrandLogo from '@/components/BrandLogo';
import { CONTACT } from '@/lib/contact';
import { Mail, MapPin, Phone, Globe, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-950 text-steel-400 border-t border-primary-800">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="inline-flex rounded-md bg-white px-4 py-3">
              <BrandLogo />
            </div>
            <p className="text-xs text-steel-500 leading-relaxed max-w-xs">{t.brandTagline}</p>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wide text-white mb-1">{t.footer.quickLinks}</span>
            {t.navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm text-start hover:text-accent-500 transition-colors w-fit"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm">
            <span className="text-xs font-bold uppercase tracking-wide text-white mb-1">{t.footer.contactTitle}</span>
            <a href={CONTACT.websiteUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 hover:text-accent-500 transition-colors">
              <Globe className="w-4 h-4 text-accent-500" />
              {CONTACT.website}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 hover:text-accent-500 transition-colors">
              <Mail className="w-4 h-4 text-accent-500" />
              {CONTACT.email}
            </a>
            <a href={`mailto:${CONTACT.secondaryEmail}`} className="flex items-center gap-2.5 hover:text-accent-500 transition-colors">
              <Mail className="w-4 h-4 text-accent-500" />
              {CONTACT.secondaryEmail}
            </a>
            <a href={`tel:${CONTACT.phoneDisplay.replace(/\s/g, '')}`} className="flex items-center gap-2.5 hover:text-accent-500 transition-colors" dir="ltr">
              <Phone className="w-4 h-4 text-accent-500" />
              {CONTACT.phoneDisplay}
            </a>
            <span className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-accent-500" />
              {t.footer.location}
            </span>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-800/50 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-steel-500 text-center sm:text-start">{t.footer.copyright}</p>
          <p className="text-xs text-steel-500 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-accent-500" />
            {t.footer.hseNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
