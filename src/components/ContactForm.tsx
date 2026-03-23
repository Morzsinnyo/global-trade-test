'use client';

import { useState } from 'react';
import { useTranslation, useLanguage } from '@/lib/i18n';
import { sendContactEmail } from '@/app/actions/contact';
import { toast } from 'sonner';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().max(30).optional(),
  message: z.string().trim().min(1).max(2000),
  interest: z.string().min(1),
});

const ContactForm = () => {
  const t = useTranslation();
  const { lang } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; interest?: string }>({});
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    interest: '',
  });

  const interests = [
    { value: 'quote', label: t('contact.interest.quote') },
    { value: 'privatelabel', label: t('contact.interest.privatelabel') },
    { value: 'partnership', label: t('contact.interest.partnership') },
    { value: 'other', label: t('contact.interest.other') },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fe = result.error.flatten().fieldErrors;
      setErrors({
        email: fe.email
          ? (lang === 'hu' ? 'Érvénytelen e-mail cím' : 'Invalid email address')
          : undefined,
        interest: fe.interest
          ? (lang === 'hu' ? 'Kérjük válasszon kategóriát' : 'Please select a category')
          : undefined,
      });
      toast.error(lang === 'hu' ? 'Kérjük töltse ki az összes kötelező mezőt.' : 'Please fill in all required fields.');
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await sendContactEmail(result.data as { name: string; company: string; email: string; phone?: string; message: string; interest: string });
      if (res.success) {
        toast.success(t('contact.success'));
        setForm({ name: '', company: '', email: '', phone: '', message: '', interest: '' });
        setErrors({});
      } else {
        toast.error(t('contact.error'));
      }
    } catch {
      toast.error(t('contact.error'));
    } finally {
      setLoading(false);
    }
  };

  const inputClass = 'w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          className={inputClass}
          placeholder={t('contact.name') + ' *'}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className={inputClass}
          placeholder={t('contact.company') + ' *'}
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          required
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            className={`${inputClass} ${errors.email ? 'border-red-500' : ''}`}
            type="email"
            placeholder={t('contact.email') + ' *'}
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
              setErrors(prev => ({ ...prev, email: undefined }));
            }}
            required
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
        <input
          className={inputClass}
          type="tel"
          placeholder={t('contact.phone')}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>
      <select
        className={`${inputClass} ${errors.interest ? 'border-red-500' : ''}`}
        value={form.interest}
        onChange={(e) => {
          setForm({ ...form, interest: e.target.value });
          setErrors(prev => ({ ...prev, interest: undefined }));
        }}
        required
      >
        <option value="" disabled>{t('contact.interest')}</option>
        {interests.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {errors.interest && <p className="text-xs text-red-500 mt-1">{errors.interest}</p>}
      <textarea
        className={`${inputClass} min-h-[120px] resize-y`}
        placeholder={t('contact.message') + ' *'}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-md bg-primary text-primary-foreground font-bold hover:brightness-110 transition-all disabled:opacity-50"
      >
        {loading ? '...' : t('contact.send')}
      </button>
    </form>
  );
};

export default ContactForm;
