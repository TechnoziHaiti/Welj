"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Home, Users, BadgePercent, HelpCircle, PackageSearch, Menu, X, Globe, ChevronDown, UserPlus, LogIn, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  const languages = [
    { code: 'FR', label: 'Français', flagImg: '/flags/fr.png' },
    { code: 'HT', label: 'Kreyòl', flagImg: '/flags/ht.png' },
    { code: 'US', label: 'English', flagImg: '/flags/us.png' }
  ] as const;

  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]);

  // Link Style (underline only for active section)
  const getNavLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `font-medium text-sm transition-colors py-2 px-1 flex items-center gap-1.5 border-b-2 ${
      isActive 
        ? 'text-red-600 font-semibold border-red-600' 
        : 'text-gray-700 hover:text-red-600 border-transparent'
    }`;
  };

  return (
    <>
      <nav 
        className={`bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] fixed w-full top-0 z-50 border-b border-gray-100 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between h-20 items-center">
          {/* Far Left: Logo */}
          <a href="/" className="flex-shrink-0 flex items-center group">
            <Image 
              src="/logo.png" 
              alt="Welj Logo" 
              width={135} 
              height={46} 
              loading="eager"
              style={{ height: 'auto' }}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10 flex-1 justify-center px-4">
            <Link href="/" className={getNavLinkClass('/')}>
              <span>{t('nav.home')}</span>
            </Link>
            
            <Link href="/about" className={getNavLinkClass('/about')}>
              <span>{t('nav.about')}</span>
            </Link>

            {/* Dropdown: Prix et Shipping */}
            <div className="relative group">
              <button className={getNavLinkClass('/pricing')}>
                <span>{t('nav.pricing_shipping')}</span>
                <ChevronDown size={14} className="ml-1 transition-transform duration-300 group-hover:-rotate-180 text-gray-400 group-hover:text-red-500" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-64 bg-white rounded-2xl p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-gray-100 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                <div className="flex flex-col space-y-1">
                  <Link href="/procedures" className="text-gray-700 font-medium hover:bg-gray-50 hover:text-red-600 px-3 py-2.5 rounded-xl transition-colors text-[13px] flex items-center">
                    <span>{t('nav.procedures')}</span>
                  </Link>
                  <Link href="/calculator" className="text-gray-700 font-medium hover:bg-gray-50 hover:text-red-600 px-3 py-2.5 rounded-xl transition-colors text-[13px] flex items-center">
                    <span>{t('nav.calculator')}</span>
                  </Link>
                  <Link href="/pricing" className="text-gray-700 font-medium hover:bg-gray-50 hover:text-red-600 px-3 py-2.5 rounded-xl transition-colors text-[13px] flex items-center">
                    <span>{t('nav.pricing_options')}</span>
                  </Link>
                  <Link href="/shipping-items" className="text-gray-700 font-medium hover:bg-gray-50 hover:text-red-600 px-3 py-2.5 rounded-xl transition-colors text-[13px] flex items-center">
                    <span>{t('nav.forbidden_items')}</span>
                  </Link>
                  <Link href="/track" className="text-gray-700 font-bold hover:bg-gray-50 hover:text-red-600 px-3 py-2.5 rounded-xl transition-colors text-[13px] flex items-center border-t border-gray-100 mt-1.5 pt-3">
                    <PackageSearch size={15} className="mr-2.5 text-red-500" />
                    <span>{t('nav.track')}</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Dropdown: Ressources et aide */}
            <div className="relative group">
              <button className={getNavLinkClass('/resources')}>
                <HelpCircle size={17} />
                <span>{t('nav.resources_help')}</span>
                <ChevronDown size={14} className="ml-1 transition-transform duration-300 group-hover:-rotate-180 text-gray-400 group-hover:text-red-500" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-56 bg-white rounded-2xl p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-gray-100 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                <div className="flex flex-col space-y-1">
                  <Link href="/resources" className="text-gray-700 font-medium hover:bg-gray-50 hover:text-red-600 px-3 py-2.5 rounded-xl transition-colors text-[13px] flex items-center">
                    <span>{t('nav.tips')}</span>
                  </Link>
                  <Link href="/contact" className="text-gray-700 font-medium hover:bg-gray-50 hover:text-red-600 px-3 py-2.5 rounded-xl transition-colors text-[13px] flex items-center">
                    <span>{t('nav.contact')}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Far Right Action Controls: Se connecter, S'inscrire & Language Selector */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Selector (With Flag Images & Country Codes) */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 text-xs font-semibold text-[#021f3a] px-3.5 py-2 rounded-full border border-gray-200 bg-white shadow-xs hover:shadow transition-all"
              >
                <div className="relative w-5 h-3.5 rounded-xs overflow-hidden border border-gray-200 shadow-xs flex-shrink-0">
                  <Image src={currentLangObj.flagImg} alt={currentLangObj.label} fill sizes="24px" className="object-cover" />
                </div>
                <span className="font-bold text-[11px] text-gray-500 uppercase">{currentLangObj.code}</span>
                <span>{currentLangObj.label}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 text-gray-400 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangOpen && (
                <div className="absolute left-0 mt-2.5 w-48 bg-white rounded-2xl p-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 z-50 text-xs space-y-1">
                  {languages.map((l) => {
                    const isActive = lang === l.code;
                    return (
                      <button 
                        key={l.code}
                        onClick={() => { setLang(l.code); setIsLangOpen(false); }}
                        className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors flex items-center justify-between ${
                          isActive ? 'bg-red-50/60 font-bold text-red-600' : 'text-gray-700 font-medium hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="relative w-5 h-3.5 rounded-xs overflow-hidden border border-gray-200 shadow-xs flex-shrink-0">
                            <Image src={l.flagImg} alt={l.label} fill sizes="24px" className="object-cover" />
                          </div>
                          <span className={`text-[11px] font-bold uppercase ${isActive ? 'text-red-600' : 'text-gray-500'}`}>
                            {l.code}
                          </span>
                          <span>{l.label}</span>
                        </div>
                        {isActive && <Check size={16} className="text-red-600 stroke-[2.5]" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Se connecter Button */}
            <a 
              href="https://www.welj-ht.com/user/login" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#022f4b] hover:bg-gray-100 px-4 py-2 rounded-full font-bold text-xs border border-gray-200 shadow-xs hover:shadow transition-all duration-300 flex items-center gap-1.5"
            >
              <LogIn size={15} />
              <span>{t('nav.login')}</span>
            </a>

            {/* S'inscrire Button */}
            <a 
              href="https://www.welj-ht.com/user/signup" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-semibold text-xs shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-1.5"
            >
              <UserPlus size={15} />
              <span>{t('nav.signup')}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
             <button 
               onClick={() => setIsMobileMenuOpen(true)}
               className="w-12 h-12 rounded-full bg-gradient-to-b from-white to-gray-100 flex items-center justify-center font-bold text-[11px] tracking-wider text-[#021f3a] border border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_2px_5px_rgba(255,255,255,0.9)] active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.15)] active:translate-y-0.5 transition-all duration-200"
             >
               {t('nav.menu')}
             </button>
          </div>
        </div>
      </div>
    </nav>

      {/* Mobile Full-Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center p-6">
          <div className="absolute top-6 right-6 flex items-center gap-3">
            {/* Mobile Lang Button */}
            <button 
              onClick={() => {
                const nextIndex = (languages.findIndex(l => l.code === lang) + 1) % languages.length;
                setLang(languages[nextIndex].code);
              }}
              className="flex items-center gap-2 text-xs font-bold text-gray-800 px-3.5 py-2 rounded-full border border-gray-200 bg-white shadow-sm"
            >
              <div className="relative w-5 h-3.5 rounded-xs overflow-hidden border border-gray-200 shadow-xs flex-shrink-0">
                <Image src={currentLangObj.flagImg} alt={currentLangObj.label} fill sizes="24px" className="object-cover" />
              </div>
              <span className="font-bold text-[11px] text-gray-500 uppercase">{currentLangObj.code}</span>
              <span>{currentLangObj.label}</span>
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-red-600 transition-colors"
              aria-label="Fermer le menu"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          
          <div className="flex flex-col items-center space-y-6 text-lg font-semibold w-full max-w-sm">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 transition-colors ${pathname === '/' ? 'text-red-600' : 'text-[#334155] hover:text-red-600'}`}>
              <span>{t('nav.home')}</span>
            </Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 transition-colors ${pathname === '/about' ? 'text-red-600' : 'text-[#334155] hover:text-red-600'}`}>
              <span>{t('nav.about')}</span>
            </Link>
            <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 transition-colors ${pathname === '/pricing' ? 'text-red-600' : 'text-[#334155] hover:text-red-600'}`}>
              <span>{t('nav.pricing_shipping')}</span>
            </Link>
            <Link href="/calculator" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 transition-colors ${pathname === '/calculator' ? 'text-red-600' : 'text-[#334155] hover:text-red-600'}`}>
              <span>{t('nav.calculator')}</span>
            </Link>
            <Link href="/resources" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 transition-colors ${pathname === '/resources' ? 'text-red-600' : 'text-[#334155] hover:text-red-600'}`}>
              <HelpCircle size={20} />
              <span>{t('nav.tips')}</span>
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 transition-colors ${pathname === '/contact' ? 'text-red-600' : 'text-[#334155] hover:text-red-600'}`}>
              <HelpCircle size={20} />
              <span>{t('nav.contact')}</span>
            </Link>
            <Link href="/track" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 transition-colors ${pathname === '/track' ? 'text-red-600' : 'text-[#334155] hover:text-red-600'}`}>
              <PackageSearch size={20} />
              <span>{t('nav.track')}</span>
            </Link>

            {/* Mobile Action Buttons: Se connecter & S'inscrire */}
            <div className="flex flex-col w-full gap-3 pt-4 border-t border-gray-100">
              <a 
                href="https://www.welj-ht.com/user/login" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 border border-gray-300 text-[#022f4b] font-bold py-3 rounded-full hover:bg-gray-50 transition-all text-sm"
              >
                <LogIn size={18} />
                <span>{t('nav.login')}</span>
              </a>
              <a 
                href="https://www.welj-ht.com/user/signup" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-3 rounded-full hover:bg-red-700 shadow-md transition-all text-sm"
              >
                <UserPlus size={18} />
                <span>{t('nav.signup')}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
