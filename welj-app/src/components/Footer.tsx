"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, ExternalLink, ArrowRight, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const [isPricingOpen, setIsPricingOpen] = useState(false);
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
    <footer className="bg-[#021b33] text-white pt-8 pb-5 border-t border-blue-900/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-gray-800/80">
          
          {/* Col 1: Brand, Socials & App Downloads (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-4">
            <div>
              {/* Logo without white background box */}
              <div className="mb-4">
                <Link href="/" className="inline-block hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/logo.png" 
                    alt="WELJ Express Services Logo" 
                    width={180} 
                    height={60} 
                    style={{ height: 'auto' }}
                    className="object-contain filter drop-shadow-md" 
                  />
                </Link>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed max-w-sm font-light">
                {t('footer.desc')}
              </p>
            </div>

            {/* Social Media Links - No Background Circles */}
            <div className="space-y-2">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-red-500">Suivez-nous</h4>
              <div className="flex items-center space-x-4">
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/weljexpress?igsh=MTZtN2J0cnFqbnFkMQ==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pink-500 hover:scale-110 transition-all duration-200"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a 
                  href="https://www.tiktok.com/@weljexpressservices2?_r=1&_t=ZS-98RQuOeOu1g" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-200"
                  aria-label="TikTok"
                  title="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V258.2a93.61 93.61 0 1 0 59.34 87.42V0h69.46a140.55 140.55 0 0 0 1.25 18.2 141.6 141.6 0 0 0 66.86 98.44 142.11 142.11 0 0 0 66.09 19.34v73.93z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/share/1BdMMExzBf/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 hover:scale-110 transition-all duration-200"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Mobile App Download Buttons */}
            <div className="space-y-2 pt-1">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Téléchargez l'application</h4>
              <div className="flex flex-wrap gap-2.5">
                {/* Google Play (Official Google Play Arrow SVG Image) */}
                <a 
                  href="https://play.google.com/store/apps/details?id=com.welj.welj_flutter_user&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleATXAqhwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp1df_MA9aDfcaCYKVcQO5Z4aBXdhCLby1EC93clafyeJwZqGWJYIEsZTeKxh_aem_UJdkg5m8JttTIdKAitbJkw&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0b1726] hover:bg-[#122135] border border-gray-700/80 text-white px-3 py-1.5 rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-sm group"
                >
                  <Image 
                    src="/google-play-official.svg" 
                    alt="Google Play" 
                    width={20} 
                    height={20} 
                    style={{ height: 'auto' }}
                    className="flex-shrink-0 object-contain" 
                  />
                  <div className="text-left">
                    <span className="block text-[8px] uppercase text-gray-400 font-semibold tracking-wider leading-none">Disponible sur</span>
                    <span className="block text-xs font-bold text-white leading-tight">Google Play</span>
                  </div>
                </a>

                {/* App Store */}
                <a 
                  href="https://apps.apple.com/us/app/welj/id1666198727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0b1726] hover:bg-[#122135] border border-gray-700/80 text-white px-3 py-1.5 rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-sm group"
                >
                  <svg className="w-5 h-5 fill-current text-white flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.13-1.96.99-3.1-.97.04-2.17.65-2.86 1.46-.61.72-1.15 1.88-.99 3.01 1.09.08 2.22-.54 2.86-1.37z"/>
                  </svg>
                  <div className="text-left">
                    <span className="block text-[8px] uppercase text-gray-400 font-semibold tracking-wider leading-none">Télécharger dans</span>
                    <span className="block text-xs font-bold text-white leading-tight">App Store</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-red-500 border-b border-gray-800 pb-1.5">{t('footer.links')}</h3>
            <ul className="space-y-2 text-xs text-gray-300 font-medium">
              <li>
                <Link href="/" className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight size={11} className="text-red-500" />
                  <span>{t('nav.home')}</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight size={11} className="text-red-500" />
                  <span>{t('nav.about')}</span>
                </Link>
              </li>
              {/* Prix et Shipping with Click Dropdown */}
              <li className="relative">
                <button 
                  onClick={() => setIsPricingOpen(!isPricingOpen)}
                  className="hover:text-red-400 transition-colors flex items-center gap-1.5 w-full text-left"
                >
                  <ArrowRight size={11} className="text-red-500 flex-shrink-0" />
                  <span>{t('nav.pricing_shipping')}</span>
                  <ChevronUp size={12} className={`ml-1 transition-transform duration-300 text-gray-400 ${isPricingOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu (Appears above) */}
                <div className={`absolute left-0 bottom-full mb-2 w-56 bg-[#0b1726] border border-gray-700/80 rounded-xl p-2 shadow-2xl z-50 transition-all duration-300 ${isPricingOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                  <div className="flex flex-col space-y-1">
                    <Link href="/procedures" className="text-gray-300 font-medium hover:bg-[#122135] hover:text-red-400 px-3 py-2 rounded-lg transition-colors text-xs flex items-center">
                      <span>{t('nav.procedures')}</span>
                    </Link>
                    <Link href="/pricing" className="text-gray-300 font-medium hover:bg-[#122135] hover:text-red-400 px-3 py-2 rounded-lg transition-colors text-xs flex items-center">
                      <span>{t('nav.pricing_options')}</span>
                    </Link>
                    <Link href="/shipping-items" className="text-gray-300 font-medium hover:bg-[#122135] hover:text-red-400 px-3 py-2 rounded-lg transition-colors text-xs flex items-center">
                      <span>{t('nav.forbidden_items')}</span>
                    </Link>
                    <Link href="/track" className="text-gray-300 font-bold hover:bg-[#122135] hover:text-red-400 px-3 py-2 rounded-lg transition-colors text-xs flex items-center border-t border-gray-700/80 mt-1 pt-2">
                      <span>{t('nav.track')}</span>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/resources" className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight size={11} className="text-red-500" />
                  <span>{t('nav.resources_help')}</span>
                </Link>
              </li>
              <li>
                <Link href="/track" className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight size={11} className="text-red-500" />
                  <span>{t('nav.track')}</span>
                </Link>
              </li>
              <li className="pt-1.5 border-t border-gray-800/80">
                <a href="https://www.welj-ht.com/user/login" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors flex items-center gap-1.5 text-white font-semibold">
                  <ExternalLink size={11} className="text-blue-400" />
                  <span>{t('nav.login')}</span>
                </a>
              </li>
              <li>
                <a href="https://www.welj-ht.com/user/signup" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors flex items-center gap-1.5 text-red-400 font-bold">
                  <ExternalLink size={11} className="text-red-500" />
                  <span>{t('nav.signup')}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Agences & Entrepôts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-red-500 border-b border-gray-800 pb-1.5">{t('footer.agencies')}</h3>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-gray-300 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold text-xs">Port-au-Prince</strong>
                  <span className="text-gray-400 text-[11px]">#7, Delmas 95 & Tabarre 36</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-gray-300 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold text-xs">Cap-Haïtien</strong>
                  <span className="text-gray-400 text-[11px]">Rue 19 D, Cap-Haïtien</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-gray-300 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold text-xs">Ouanaminthe</strong>
                  <span className="text-gray-400 text-[11px]">42, Rue vallières, Ouanaminthe</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-gray-300 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold text-xs">Les Cayes</strong>
                  <span className="text-gray-400 text-[11px]">Bourjolly #7, Route Nationale</span>
                </div>
              </li>
              <li className="flex items-start gap-2 pt-0.5">
                <MapPin size={15} className="text-gray-300 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold text-xs">Floride, USA (No Tax)</strong>
                  <span className="text-gray-400 text-[11px]">Entrepôt d'expédition internationale</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts & Assistance (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-red-500 border-b border-gray-800 pb-1.5">{t('footer.customer_service')}</h3>
            <p className="text-xs text-gray-300 leading-relaxed font-light">
              {t('footer.questions_desc')}
            </p>
            
            <div>
              <div className="flex items-center gap-1.5 text-white font-bold text-xs mb-2">
                <Phone size={13} className="text-red-500" />
                <span>{t('footer.direct_lines')}</span>
              </div>
              <div className="grid grid-cols-1 gap-y-1 text-xs font-semibold text-gray-200">
                {phoneNumbers.map((phone, idx) => (
                  <a 
                    key={idx} 
                    href={`tel:${phone.replace(/\s+/g, '')}`} 
                    className="hover:text-red-400 transition-colors flex items-center justify-between py-0.5 border-b border-gray-800/50 last:border-none"
                  >
                    <span className="text-gray-300 hover:text-white text-[11px]">{phone}</span>
                    <span className="text-[10px] text-gray-400 font-normal">Appel / WA</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <p className="text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} WELJ Express Services. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
