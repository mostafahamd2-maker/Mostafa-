import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { supabase } from '@/lib/supabase';
import { CONTACT } from '@/lib/contact';
import { MessageCircle, Mail, CheckCircle2, Send, AlertCircle } from 'lucide-react';

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
}

const emptyForm: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  consent: false,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function QuoteForm() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const isValid =
    form.name.trim() &&
    form.company.trim() &&
    EMAIL_PATTERN.test(form.email.trim()) &&
    form.service &&
    form.message.trim() &&
    form.consent;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      setValidationError(true);
      return;
    }
    setValidationError(false);
    setSubmitError('');
    setStatus('sending');

    const { error } = await supabase.from('contact_enquiries').insert({
      name: form.name.trim(),
      company: form.company.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      service: form.service,
      message: form.message.trim(),
    });

    if (error) {
      setSubmitError(t.rfq.submitFailed);
      setStatus('error');
      return;
    }
    setForm(emptyForm);
    setStatus('success');
  };

  const inputClass =
    'w-full px-3 py-3 rounded-md border border-primary-700 bg-primary-950/60 text-white placeholder-steel-500 text-sm transition-colors focus:outline-none focus:border-accent-500';

  return (
    <section id="rfq" ref={sectionRef} className="py-16 md:py-20 bg-primary-900 text-white">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="reveal">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t.rfq.title}</h2>
            <p className="text-steel-400 leading-relaxed mb-6">{t.rfq.text}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-md bg-accent-600 text-white font-bold hover:bg-accent-700 transition-all shadow-lg shadow-accent-500/20 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                {t.rfq.btnWhatsapp}
              </a>
              <a
                href={`mailto:${CONTACT.email},${CONTACT.secondaryEmail}`}
                className="flex items-center gap-2 px-5 py-3 rounded-md border border-steel-400 text-white font-semibold hover:bg-white/10 transition-all"
              >
                <Mail className="w-5 h-5" />
                {t.rfq.btnEmail}
              </a>
            </div>
          </div>

          <div className="reveal bg-primary-800 border border-primary-700 rounded-xl p-6 md:p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-lg font-semibold text-white">{t.rfq.success}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-accent-500 font-bold hover:text-accent-400 transition-colors text-sm"
                >
                  {t.rfq.successAgain}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <h3 className="text-xl font-bold text-white mb-4">{t.rfq.formHeader}</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-steel-400 mb-1.5">
                      {t.rfq.lblName.label} <span className="text-accent-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder={t.rfq.lblName.placeholder}
                      maxLength={200}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-steel-400 mb-1.5">
                      {t.rfq.lblCompany.label} <span className="text-accent-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      placeholder={t.rfq.lblCompany.placeholder}
                      maxLength={200}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-steel-400 mb-1.5">
                      {t.rfq.lblEmail.label} <span className="text-accent-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder={t.rfq.lblEmail.placeholder}
                      maxLength={320}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-steel-400 mb-1.5">
                      {t.rfq.lblPhone.label}
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder={t.rfq.lblPhone.placeholder}
                      maxLength={40}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-steel-400 mb-1.5">
                    {t.rfq.lblType.label} <span className="text-accent-500">*</span>
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => update('service', e.target.value)}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" className="bg-primary-900">—</option>
                    {t.rfq.typeOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-primary-900">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-steel-400 mb-1.5">
                    {t.rfq.lblScope.label} <span className="text-accent-500">*</span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder={t.rfq.lblScope.placeholder}
                    rows={3}
                    maxLength={5000}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => update('consent', e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-steel-600 accent-accent-500 cursor-pointer"
                  />
                  <span className="text-sm text-steel-400 leading-relaxed">
                    {t.rfq.consent} <span className="text-accent-500">*</span>
                  </span>
                </label>

                {validationError && (
                  <p className="flex items-center gap-2 text-sm text-red-400 font-medium">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {t.rfq.error}
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center gap-2 text-sm text-red-400 font-medium">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-accent-600 text-white font-bold hover:bg-accent-700 transition-all shadow-lg shadow-accent-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {status === 'sending' ? t.rfq.sending : t.rfq.btnSubmit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
