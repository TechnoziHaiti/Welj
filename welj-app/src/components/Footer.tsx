"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, ExternalLink, ArrowRight, ChevronUp, LogIn, UserPlus } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const { t } = useLanguage();
  const phoneNumbers = [
    "+509 3703 0010",
    "+509 3703 0011",
    "+509 3834 7343",
    "+509 3774 6643",
    "+509 4163 2641",
    "+509 3704 0007",
    "+509 5514 2765"
  ];

  return (
    <footer className="bg-[#021b33] text-white pt-10 pb-6 border-t border-blue-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP: Logo + tagline + socials — centered */}
        <div className="flex flex-col items-center text-center pb-8 border-b border-white/10">
          <Link href="/" className="inline-block hover:opacity-90 transition-opacity mb-3">
            <Image 
              src="/logo.png" 
              alt="WELJ Express Services" 
              width={150} 
              height={50} 
              style={{ height: 'auto' }}
              className="object-contain filter drop-shadow-md" 
            />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-5">
            {t('footer.desc')}
          </p>
          {/* Social icons */}
          <div className="flex items-center justify-center gap-5">
            <a href="https://www.instagram.com/weljexpress?igsh=MTZtN2J0cnFqbnFkMQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.facebook.com/share/1BdMMExzBf/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@weljexpressservices2?_r=1&_t=ZS-98RQuOeOu1g" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V258.2a93.61 93.61 0 1 0 59.34 87.42V0h69.46a140.55 140.55 0 0 0 1.25 18.2 141.6 141.6 0 0 0 66.86 98.44 142.11 142.11 0 0 0 66.09 19.34v73.93z"/></svg>
            </a>
          </div>
        </div>

        {/* MIDDLE: 2×2 link grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 py-8 border-b border-white/10">

          {/* Liens Rapides */}
          <div>
            <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-4">
              {t('footer.links')}
            </p>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-gray-300 hover:text-white text-sm transition-colors">{t('nav.home')}</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white text-sm transition-colors">{t('nav.about')}</Link></li>
              <li>
                <button onClick={() => setIsPricingOpen(!isPricingOpen)} className="text-gray-300 hover:text-white text-sm transition-colors flex items-center gap-1 w-full text-left">
                  <span>{t('nav.pricing_shipping')}</span>
                  <ChevronUp size={12} className={`text-gray-500 transition-transform duration-300 ${isPricingOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isPricingOpen ? 'max-h-40 mt-2' : 'max-h-0'}`}>
                  <div className="pl-3 border-l border-white/10 space-y-2 mt-1">
                    <Link href="/procedures" className="block text-gray-400 hover:text-white text-xs transition-colors">{t('nav.procedures')}</Link>
                    <Link href="/pricing" className="block text-gray-400 hover:text-white text-xs transition-colors">{t('nav.pricing_options')}</Link>
                    <Link href="/shipping-items" className="block text-gray-400 hover:text-white text-xs transition-colors">{t('nav.forbidden_items')}</Link>
                  </div>
                </div>
              </li>
              <li>
                <button onClick={() => setIsResourcesOpen(!isResourcesOpen)} className="text-gray-300 hover:text-white text-sm transition-colors flex items-center gap-1 w-full text-left">
                  <span>{t('nav.resources_help')}</span>
                  <ChevronUp size={12} className={`text-gray-500 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isResourcesOpen ? 'max-h-40 mt-2' : 'max-h-0'}`}>
                  <div className="pl-3 border-l border-white/10 space-y-2 mt-1">
                    <Link href="/resources" className="block text-gray-400 hover:text-white text-xs transition-colors">{t('nav.tips')}</Link>
                    <Link href="/contact" className="block text-gray-400 hover:text-white text-xs transition-colors">{t('nav.contact')}</Link>
                  </div>
                </div>
              </li>
              <li><Link href="/track" className="text-gray-300 hover:text-white text-sm transition-colors">{t('nav.track')}</Link></li>
              <li className="pt-2">
                <a href="https://www.welj-ht.com/user/login" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-red-600 text-red-500 hover:bg-red-600/10 text-sm font-semibold py-2 px-3 rounded-lg transition-colors w-[150px] mb-2">
                  <LogIn size={16} />
                  <span>{t('nav.login')}</span>
                </a>
                <a href="https://www.welj-ht.com/user/signup" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2 px-3 rounded-lg transition-colors w-[150px]">
                  <UserPlus size={16} />
                  <span>{t('nav.signup')}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Agences & Entrepôts */}
          <div>
            <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-4">
              {t('footer.agencies')}
            </p>
            <ul className="space-y-3">
              {[
                { city: 'Port-au-Prince', addr: '#7, Delmas 95 & Tabarre 36' },
                { city: 'Cap-Haïtien', addr: 'Rue 19 D, Cap-Haïtien' },
                { city: 'Ouanaminthe', addr: '42, Rue vallières' },
                { city: 'Les Cayes', addr: 'Bourjolly #7, Route Nationale' },
                { city: 'Floride, USA', addr: 'Entrepôt international' },
              ].map(({ city, addr }) => (
                <li key={city} className="flex items-start gap-2">
                  <MapPin size={13} className="text-gray-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white text-sm font-medium leading-tight">{city}</div>
                    <div className="text-gray-400 text-xs leading-snug">{addr}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Client */}
          <div>
            <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-4">
              {t('footer.customer_service')}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t('footer.questions_desc')}
            </p>
            <div className="flex items-center gap-1.5 text-white text-sm font-semibold mb-3">
              <Phone size={13} className="text-red-500" />
              <span>{t('footer.direct_lines')}</span>
            </div>
            <div className="space-y-1.5">
              {phoneNumbers.map((phone, idx) => (
                <a key={idx} href={`tel:${phone.replace(/\s+/g, '')}`} className="flex items-center text-sm group">
                  <span className="text-gray-300 group-hover:text-white transition-colors">{phone}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Téléchargez l'application */}
          <div>
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">
              Application
            </p>
            <div className="space-y-3">
              <a 
                href="https://play.google.com/store/apps/details?id=com.welj.welj_flutter_user"
                target="_blank" rel="noopener noreferrer"
                className="flex w-[190px] h-[52px] items-center gap-3 bg-black hover:bg-gray-900 border border-gray-800 px-4 py-2 rounded-xl transition-all duration-200"
              >
                <Image src="/google-play-official.svg" alt="Google Play" width={28} height={28} style={{ height: 'auto' }} className="flex-shrink-0" />
                <div className="flex flex-col items-start justify-center">
                  <span className="text-[10px] text-white leading-tight font-medium">GET IT ON</span>
                  <span className="text-[19px] font-semibold text-white leading-none -mt-0.5 tracking-tight">Google Play</span>
                </div>
              </a>
              <a 
                href="https://apps.apple.com/us/app/welj/id1666198727"
                target="_blank" rel="noopener noreferrer"
                className="flex w-[190px] h-[52px] items-center gap-3 bg-black hover:bg-gray-900 border border-gray-800 px-4 py-2 rounded-xl transition-all duration-200"
              >
                <svg className="w-8 h-8 fill-current text-white flex-shrink-0 mb-1" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.13-1.96.99-3.1-.97.04-2.17.65-2.86 1.46-.61.72-1.15 1.88-.99 3.01 1.09.08 2.22-.54 2.86-1.37z"/></svg>
                <div className="flex flex-col items-start justify-center">
                  <span className="text-[10px] text-white leading-tight font-medium">Download on the</span>
                  <span className="text-[19px] font-semibold text-white leading-none -mt-0.5 tracking-tight">App Store</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-5 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} WELJ Express Services. {t('footer.rights')}
          </p>
        </div>

      </div>
    </footer>
  );
}
