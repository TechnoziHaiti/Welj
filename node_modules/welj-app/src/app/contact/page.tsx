"use client";

import { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi');
      }

      setSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError(t('contact.error_desc'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[85vh] bg-gray-50/50 md:bg-white pt-32 md:pt-36 pb-24 font-sans flex flex-col items-center">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div className="bg-white md:bg-transparent p-6 sm:p-8 md:p-0 rounded-3xl md:rounded-none shadow-[0_4px_20px_rgb(0,0,0,0.04)] md:shadow-none border border-gray-100 md:border-none order-last md:order-first">
            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-8 md:mb-10 uppercase tracking-widest">
              {t('contact.send_title')}
            </h2>
            
            {/* Modal de Succès (Fixed Overlay) */}
            {success && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4 animate-in fade-in duration-300">
                <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgb(0,0,0,0.1)] border border-gray-100 p-10 md:p-12 flex flex-col items-center text-center animate-in zoom-in-95 duration-300 w-full max-w-sm">
                  <div className="relative mb-6">
                    <div className="bg-[#10b981] text-white p-4 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20">
                      <CheckCircle2 size={40} strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('contact.success_title')}</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                    {t('contact.success_desc')}
                  </p>
                  
                  <button 
                    onClick={() => setSuccess(false)}
                    className="w-full bg-[#f4f6f8] hover:bg-gray-200 text-gray-700 font-bold py-3.5 rounded-xl transition-colors text-sm"
                  >
                    {t('contact.close_btn')}
                  </button>
                </div>
              </div>
            )}

            {/* L'erreur et le formulaire sont toujours rendus (le modal s'affiche par-dessus) */}
            {error && (
              <div className="mb-10 p-5 bg-white border border-gray-100 border-l-4 border-l-red-500 shadow-[0_4px_20px_rgb(0,0,0,0.04)] rounded-r-xl flex items-start gap-4 animate-entrance">
                <div className="bg-red-50 p-2 rounded-full flex-shrink-0 mt-0.5">
                  <AlertCircle size={20} className="text-red-600" />
                </div>
                <div>
                  <h3 className="text-[13px] font-bold text-gray-900 uppercase tracking-wider mb-1">{t('contact.error_title')}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    {error}
                  </p>
                </div>
              </div>
            )}

            <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="flex flex-col">
                    <label htmlFor="firstName" className="text-[#022f4b] text-xs font-bold uppercase tracking-wider mb-1">
                      {t('contact.form_firstName')}
                    </label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full bg-transparent border-b border-[#022f4b]/20 py-1.5 text-gray-900 focus:border-[#e12229] focus:outline-none transition-colors"
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="lastName" className="text-[#022f4b] text-xs font-bold uppercase tracking-wider mb-1">
                      {t('contact.form_lastName')}
                    </label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full bg-transparent border-b border-[#022f4b]/20 py-1.5 text-gray-900 focus:border-[#e12229] focus:outline-none transition-colors"
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-[#022f4b] text-xs font-bold uppercase tracking-wider mb-1">
                      {t('contact.form_email')}
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full bg-transparent border-b border-[#022f4b]/20 py-1.5 text-gray-900 focus:border-[#e12229] focus:outline-none transition-colors"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="subject" className="text-[#022f4b] text-xs font-bold uppercase tracking-wider mb-1">
                      {t('contact.form_subject')}
                    </label>
                    <input 
                      type="text" 
                      id="subject"
                      className="w-full bg-transparent border-b border-[#022f4b]/20 py-1.5 text-gray-900 focus:border-[#e12229] focus:outline-none transition-colors"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-[#022f4b] text-xs font-bold uppercase tracking-wider mb-1">
                      {t('contact.form_message')}
                    </label>
                    <textarea 
                      id="message"
                      rows={2}
                      className="w-full bg-transparent border-b border-[#022f4b]/20 py-1.5 text-gray-900 focus:border-[#e12229] focus:outline-none transition-colors resize-none"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                    ></textarea>
                  </div>

                  <div className="pt-2 flex justify-start">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-14 h-14 rounded-full bg-[#10b981] hover:bg-green-600 flex items-center justify-center group transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                      title={t('contact.form_send')}
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <div 
                          className="w-7 h-7 bg-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300 mr-1 mt-1"
                          style={{
                            WebkitMaskImage: 'url("/bouton envoi.png")',
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            maskImage: 'url("/bouton envoi.png")',
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                          }}
                        />
                      )}
                    </button>
                  </div>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="md:pl-12 lg:pl-16 md:border-l md:border-gray-100 flex flex-col bg-gray-50 md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none shadow-[0_4px_20px_rgb(0,0,0,0.04)] md:shadow-none border border-gray-100 md:border-none order-first md:order-last">
            
            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-8 md:mb-10 uppercase tracking-widest relative z-10">
              {t('contact.call_title')}
            </h2>
            
            <div className="space-y-6 text-sm text-gray-600 relative z-10">
              <div>
                <h4 className="text-gray-900 font-bold mb-1 text-[13px]">{t('contact.phone')}</h4>
                <p className="text-[13px] font-medium">+509 3703 0010</p>
                <p className="text-[13px] font-medium">+509 3703 0011</p>
                <p className="text-[13px] font-medium">+509 3834 7343</p>
              </div>
              
              <div>
                <h4 className="text-gray-900 font-bold mb-1 text-[13px]">{t('contact.email')}</h4>
                <a href="mailto:info@welj-ht.com" className="text-[13px] font-medium hover:text-[#e12229] transition-colors">info@welj-ht.com</a>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-gray-900 font-bold mb-2 text-[13px]">{t('contact.address')}</h4>
                
                <div className="space-y-3">
                  <div>
                    <strong className="text-gray-900 block font-semibold text-xs">Port-au-Prince</strong>
                    <span className="text-gray-600 text-[13px] font-medium">#7, Delmas 95 & Tabarre 36</span>
                  </div>
                  <div>
                    <strong className="text-gray-900 block font-semibold text-xs">Cap-Haïtien</strong>
                    <span className="text-gray-600 text-[13px] font-medium">Rue 19 D, Cap-Haïtien</span>
                  </div>
                  <div>
                    <strong className="text-gray-900 block font-semibold text-xs">Ouanaminthe</strong>
                    <span className="text-gray-600 text-[13px] font-medium">42, Rue Vallières, Ouanaminthe</span>
                  </div>
                  <div>
                    <strong className="text-gray-900 block font-semibold text-xs">Les Cayes</strong>
                    <span className="text-gray-600 text-[13px] font-medium">Bourjolly #7, Route Nationale</span>
                  </div>
                  <div>
                    <strong className="text-gray-900 block font-semibold text-xs">Floride, USA (No Tax)</strong>
                    <span className="text-gray-600 text-[13px] font-medium">Entrepôt d'expédition internationale</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}
