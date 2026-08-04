"use client";

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Search, Package, Ship, ChevronDown, 
  Home, MapPin, Info
} from 'lucide-react';
import Image from 'next/image';

export default function TrackPage() {
  const { t } = useLanguage();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;
    
    setIsSearching(true);
    setHasResult(false);
    
    // Simulate API call for tracking
    setTimeout(() => {
      setIsSearching(false);
      setHasResult(true);
    }, 1500);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      title: t('track.faq1_title'),
      desc: t('track.faq1_desc')
    },
    {
      title: t('track.faq2_title'),
      desc: t('track.faq2_desc')
    }
  ];

  const trackingSteps = [
    {
      id: 1,
      title: t('track.status_received'),
      desc: t('track.status_received_desc'),
      icon: <Package className="w-5 h-5" />,
      date: "Oct 24, 2025 - 10:30 AM",
      location: "Miami, FL, USA",
      completed: true,
      current: false
    },
    {
      id: 2,
      title: t('track.status_transit'),
      desc: t('track.status_transit_desc'),
      icon: <Ship className="w-5 h-5" />,
      date: "Oct 26, 2025 - 08:15 AM",
      location: "En mer / Ocean",
      completed: true,
      current: true
    },
    {
      id: 3,
      title: t('track.status_available'),
      desc: t('track.status_available_desc'),
      icon: <MapPin className="w-5 h-5" />,
      date: "En attente",
      location: "Port-au-Prince, HT",
      completed: false,
      current: false
    },
    {
      id: 4,
      title: t('track.status_delivered'),
      desc: t('track.status_delivered_desc'),
      icon: <Home className="w-5 h-5" />,
      date: "En attente",
      location: "Client",
      completed: false,
      current: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 font-sans selection:bg-red-500 selection:text-white">
      {/* Hero Section with Image Background */}
      <div className="relative bg-[#021b33] text-white py-24 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/tracking-hero-bg.jpg"
            alt="Suivi WELJ"
            fill
            className="object-cover opacity-45"
            priority
          />
        </div>
        
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#021b33] via-[#021b33]/40 to-transparent pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 drop-shadow-md">
            {t('track.title')}
          </h1>
          <p className="text-gray-300 text-lg font-light leading-relaxed">
            {t('track.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-30">
        <div className="space-y-8">
          
          {/* Search Card */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_-12px_rgba(2,27,51,0.1)] border border-white p-8 md:p-12 overflow-hidden">
            {/* Decorative background blob */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-tr from-blue-900/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 mb-8">
              <h2 className="text-2xl font-extrabold text-[#021b33] mb-2 flex items-center gap-3">
                <Image src="/box-icon.png" alt="Box icon" width={40} height={40} className="object-contain drop-shadow-sm" />
                Suivre votre colis
              </h2>
              <p className="text-gray-500 text-sm font-medium">
                Saisissez votre numéro de suivi ci-dessous pour consulter l'état et l'historique de votre expédition en temps réel.
              </p>
            </div>

            <form onSubmit={handleSearch} className="flex flex-col space-y-6 relative z-10">
              <div className="flex flex-col sm:flex-row gap-4 relative">
                <div className="relative flex-1 group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#021b33] transition-colors duration-300">
                    <Search size={20} />
                  </div>
                  <input 
                    id="tracking-input"
                    type="text" 
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
                    placeholder={t('track.placeholder')}
                    className="block w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white hover:border-gray-300 text-gray-900 font-semibold text-base focus:ring-2 focus:ring-[#021b33]/10 focus:border-[#021b33] transition-all outline-none uppercase shadow-sm"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSearching || !trackingNumber.trim()}
                  className="sm:w-auto w-full bg-[#e3000f] hover:bg-[#c2000d] text-white font-semibold px-8 py-3.5 rounded-xl shadow-[0_4px_14px_0_rgba(227,0,15,0.25)] hover:shadow-[0_6px_20px_rgba(227,0,15,0.2)] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex justify-center items-center min-w-[140px]"
                >
                  {isSearching ? (
                    <div className="flex space-x-1.5 items-center justify-center h-6">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    </div>
                  ) : (
                    <span className="text-base tracking-wide">{t('track.track_btn')}</span>
                  )}
                </button>
              </div>
              
              <div className="flex items-start sm:items-center gap-2.5 mt-1 bg-gray-50/50 p-3 rounded-xl border border-gray-100 w-fit">
                <div className="p-1 bg-white rounded-full shadow-sm border border-gray-100 mt-0.5 sm:mt-0">
                  <Info size={14} className="text-[#021b33]" />
                </div>
                <p className="text-xs text-gray-500 font-medium">
                  {t('track.format_help')}
                </p>
              </div>
            </form>
          </div>

          {/* Tracking Results Area */}
          {hasResult && (
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between border-b border-gray-100 pb-6 mb-8">
                <div>
                  <span className="text-xs font-bold text-[#021b33] uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-md mb-2 inline-block">
                    {t('track.demo_notice')}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#021b33]">WELJ{trackingNumber}</h3>
                </div>
                <div className="text-right">
                  <span className="block text-base font-bold text-gray-900">{t('track.status_transit')}</span>
                  <span className="block text-sm text-gray-500">Miami → Port-au-Prince</span>
                </div>
              </div>

              {/* Sober Vertical Timeline Stepper */}
              <div className="relative pl-6 sm:pl-12 py-4">
                <div className="absolute left-10 sm:left-[3.35rem] top-10 bottom-10 w-0.5 bg-gray-200"></div>
                
                <div className="space-y-10 relative">
                  {trackingSteps.map((step, idx) => (
                    <div key={step.id} className="flex gap-6 sm:gap-10 relative group">
                      {/* Timeline line fill (active) */}
                      {step.completed && idx !== trackingSteps.length - 1 && (
                        <div className="absolute left-4 sm:left-4 top-12 bottom-[-2.5rem] w-0.5 bg-[#021b33] z-0"></div>
                      )}
                      
                      {/* Status Icon Indicator */}
                      <div className={`relative z-10 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        step.current ? 'bg-[#021b33] text-white ring-4 ring-blue-50' :
                        step.completed ? 'bg-[#021b33] text-white' : 'bg-gray-100 text-gray-400 border border-gray-200'
                      }`}>
                        {step.icon}
                      </div>
                      
                      {/* Status Details */}
                      <div className={`flex-1 pb-2 ${step.current ? 'opacity-100' : step.completed ? 'opacity-80' : 'opacity-50'}`}>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1.5">
                          <h4 className={`text-lg font-bold ${step.current ? 'text-[#021b33]' : 'text-gray-900'}`}>
                            {step.title}
                          </h4>
                          <span className="text-sm text-gray-500 font-medium">
                            {step.date}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2.5">{step.desc}</p>
                        <div className="flex items-center gap-1.5 text-sm font-medium text-gray-500">
                          <MapPin size={14} className={step.current ? 'text-[#021b33]' : 'text-gray-400'} />
                          {step.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* FAQ Accordion */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-[#021b33] mb-8">{t('chatbot.tab_faq')}</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className={`w-full text-left px-6 py-5 flex items-center justify-between border-b border-gray-100 focus:outline-none ${openFaq === index ? 'bg-gray-50/50' : 'bg-white hover:bg-gray-50'}`}
                  >
                    <span className={`font-bold text-base ${openFaq === index ? 'text-[#021b33]' : 'text-gray-800'}`}>
                      {faq.title}
                    </span>
                    <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openFaq === index ? 'text-[#021b33] rotate-180' : 'text-gray-400'}`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-base text-gray-600 leading-relaxed">{faq.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
