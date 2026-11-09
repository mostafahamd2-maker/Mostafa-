import { useState, useEffect } from 'react';
import { Menu, X, Languages, FileText } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import BrandLogo from '@/components/BrandLogo';

export default function Header() {
  const { t, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Top strip */}
      <div className="bg-primary-950 text-steel-400 text-xs py-2 px-4 border-b border-primary-800/50 hidden md:block">
        <div className="max-w-[1160px] mx-auto flex justify-between items-center flex-wrap gap-2">
          <span className="text-accent-500 font-bold">{t.topStrip.agency}</span>
          <span>{t.topStrip.scope}</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
        } border-b border-steel-200`}
      >
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button onClick={() => handleNavClick('#home')} className="hover:opacity-80 transition-opacity">
              <BrandLogo />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-5">
              {t.navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-semibold text-steel-800 hover:text-accent-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-bold text-primary-800 bg-steel-100 border border-steel-200 hover:bg-steel-200 transition-colors"
                aria-label="Toggle language"
              >
                <Languages className="w-4 h-4" />
                <span className="hidden sm:inline">{t.nav.langToggle}</span>
              </button>

              <button
                onClick={() => handleNavClick('#rfq')}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-md bg-accent-600 text-white text-sm font-bold hover:bg-accent-700 transition-all shadow-md shadow-accent-500/20 hover:scale-105"
              >
                <FileText className="w-4 h-4" />
                {t.nav.rfq}
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-md text-steel-800 hover:bg-steel-100 transition-colors"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-steel-200 animate-fade-in">
            <nav className="px-4 py-4 space-y-1">
              {t.navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-start px-4 py-3 rounded-lg text-steel-800 hover:text-accent-600 hover:bg-steel-50 transition-colors font-semibold"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#rfq')}
                className="flex items-center gap-2 w-full px-4 py-3 rounded-lg bg-accent-600 text-white font-bold mt-2"
              >
                <FileText className="w-4 h-4" />
                {t.nav.rfq}
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
