"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Home, Users, BadgePercent, HelpCircle, PackageSearch, Menu, X, Globe, ChevronDown, ChevronRight, Plus, Minus, UserPlus, LogIn, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobilePricingOpen, setIsMobilePricingOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
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

  // Link Style (active = red text only, no underline)
  const getNavLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `font-medium text-sm transition-colors py-2 px-1 flex items-center gap-1.5 ${
      isActive 
        ? 'text-red-600 font-semibold' 
        : 'text-gray-700 hover:text-red-600'
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
              className="w-14 h-14 rounded-full bg-gradient-to-b from-white to-gray-100 flex items-center justify-center text-[#021f3a] border border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_2px_5px_rgba(255,255,255,0.9)] active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.15)] active:translate-y-0.5 transition-all duration-200"
              aria-label="Ouvrir le menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>

      {/* Mobile Full-Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-gray-100/80">
            <button 
              onClick={() => {
                const nextIndex = (languages.findIndex(l => l.code === lang) + 1) % languages.length;
                setLang(languages[nextIndex].code);
              }}
              className="flex items-center gap-2 text-xs font-semibold text-gray-700 px-3.5 py-2 rounded-full border border-gray-200 bg-white shadow-sm"
            >
              <div className="relative w-5 h-3.5 rounded-xs overflow-hidden border border-gray-200 shadow-xs flex-shrink-0">
                <Image src={currentLangObj.flagImg} alt={currentLangObj.label} fill sizes="24px" className="object-cover" />
              </div>
              <span className="font-bold text-[11px] text-gray-400 uppercase">{currentLangObj.code}</span>
              <span>{currentLangObj.label}</span>
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center transition-all duration-200 hover:shadow-md"
              aria-label="Fermer le menu"
            >
              <span className="text-red-600 font-bold text-[10px] tracking-wider uppercase">Close</span>
            </button>
          </div>

          {/* Scrollable Navigation */}
          <div className="flex-1 overflow-y-auto px-4 py-5">
            <nav className="flex flex-col gap-1">
              {/* Accueil */}
              <Link 
                href="/" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="group flex items-center justify-between min-h-[52px] px-5 rounded-2xl transition-all duration-200 text-[#1a2b4a] hover:bg-[#F7F8FA] hover:translate-x-1"
              >
                <span className="font-semibold text-[15px]">{t('nav.home')}</span>
                <ChevronRight size={16} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
              </Link>

              {/* Qui sommes nous */}
              <Link 
                href="/about" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="group flex items-center justify-between min-h-[52px] px-5 rounded-2xl transition-all duration-200 text-[#1a2b4a] hover:bg-[#F7F8FA] hover:translate-x-1"
              >
                <span className="font-semibold text-[15px]">{t('nav.about')}</span>
                <ChevronRight size={16} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
              </Link>

              {/* Separator */}
              <div className="h-px bg-gray-100 my-3 mx-3" />

              {/* Prix & Shipping - Expandable */}
              <div>
                <button 
                  onClick={() => {
                    setIsMobilePricingOpen(!isMobilePricingOpen);
                    if (!isMobilePricingOpen) setIsMobileResourcesOpen(false);
                  }}
                  className="group w-full flex items-center justify-between min-h-[52px] px-5 rounded-2xl transition-all duration-200 text-[#1a2b4a] hover:bg-[#F7F8FA] hover:translate-x-1"
                >
                  <span className="font-semibold text-[15px]">{t('nav.pricing_shipping')}</span>
                  {isMobilePricingOpen 
                    ? <Minus size={18} className="text-gray-500 transition-all duration-300" />
                    : <Plus size={18} className="text-gray-600 group-hover:text-gray-800 transition-all duration-300" />
                  }
                </button>
                
                {/* Expandable sub-menu */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobilePricingOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-5 py-1.5 flex flex-col gap-0.5">
                    <Link href="/procedures" onClick={() => setIsMobileMenuOpen(false)} className="group flex items-center justify-between min-h-[46px] px-4 rounded-xl text-gray-500 hover:bg-[#F7F8FA] hover:text-[#1a2b4a] hover:translate-x-1 transition-all duration-200">
                      <span className="text-[14px] font-medium">{t('nav.procedures')}</span>
                      <ChevronRight size={14} className="text-gray-200 group-hover:text-gray-400 transition-colors" />
                    </Link>
                    <Link href="/calculator" onClick={() => setIsMobileMenuOpen(false)} className="group flex items-center justify-between min-h-[46px] px-4 rounded-xl text-gray-500 hover:bg-[#F7F8FA] hover:text-[#1a2b4a] hover:translate-x-1 transition-all duration-200">
                      <span className="text-[14px] font-medium">{t('nav.calculator')}</span>
                      <ChevronRight size={14} className="text-gray-200 group-hover:text-gray-400 transition-colors" />
                    </Link>
                    <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="group flex items-center justify-between min-h-[46px] px-4 rounded-xl text-gray-500 hover:bg-[#F7F8FA] hover:text-[#1a2b4a] hover:translate-x-1 transition-all duration-200">
                      <span className="text-[14px] font-medium">{t('nav.pricing_options')}</span>
                      <ChevronRight size={14} className="text-gray-200 group-hover:text-gray-400 transition-colors" />
                    </Link>
                    <Link href="/shipping-items" onClick={() => setIsMobileMenuOpen(false)} className="group flex items-center justify-between min-h-[46px] px-4 rounded-xl text-gray-500 hover:bg-[#F7F8FA] hover:text-[#1a2b4a] hover:translate-x-1 transition-all duration-200">
                      <span className="text-[14px] font-medium">{t('nav.forbidden_items')}</span>
                      <ChevronRight size={14} className="text-gray-200 group-hover:text-gray-400 transition-colors" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Suivre l'expédition - Top level */}
              <Link 
                href="/track" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="group flex items-center justify-between min-h-[52px] px-5 rounded-2xl transition-all duration-200 text-[#1a2b4a] hover:bg-[#F7F8FA] hover:translate-x-1"
              >
                <span className="font-semibold text-[15px]">{t('nav.track')}</span>
                <ChevronRight size={16} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
              </Link>

              {/* Separator */}
              <div className="h-px bg-gray-100 my-3 mx-3" />

              {/* Ressources & aide - Expandable */}
              <div>
                <button 
                  onClick={() => {
                    setIsMobileResourcesOpen(!isMobileResourcesOpen);
                    if (!isMobileResourcesOpen) setIsMobilePricingOpen(false);
                  }}
                  className="group w-full flex items-center justify-between min-h-[52px] px-5 rounded-2xl transition-all duration-200 text-[#1a2b4a] hover:bg-[#F7F8FA] hover:translate-x-1"
                >
                  <span className="font-semibold text-[15px]">{t('nav.resources_help')}</span>
                  {isMobileResourcesOpen 
                    ? <Minus size={18} className="text-gray-500 transition-all duration-300" />
                    : <Plus size={18} className="text-gray-600 group-hover:text-gray-800 transition-all duration-300" />
                  }
                </button>
                
                {/* Expandable sub-menu */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileResourcesOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-5 py-1.5 flex flex-col gap-0.5">
                    <Link href="/resources" onClick={() => setIsMobileMenuOpen(false)} className="group flex items-center justify-between min-h-[46px] px-4 rounded-xl text-gray-500 hover:bg-[#F7F8FA] hover:text-[#1a2b4a] hover:translate-x-1 transition-all duration-200">
                      <span className="text-[14px] font-medium">{t('nav.tips')}</span>
                      <ChevronRight size={14} className="text-gray-200 group-hover:text-gray-400 transition-colors" />
                    </Link>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="group flex items-center justify-between min-h-[46px] px-4 rounded-xl text-gray-500 hover:bg-[#F7F8FA] hover:text-[#1a2b4a] hover:translate-x-1 transition-all duration-200">
                      <span className="text-[14px] font-medium">{t('nav.contact')}</span>
                      <ChevronRight size={14} className="text-gray-200 group-hover:text-gray-400 transition-colors" />
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* Fixed Bottom: S'inscrire uniquement */}
          <div className="px-5 py-4 border-t border-gray-100 bg-white">
            <a 
              href="https://www.welj-ht.com/user/signup" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-2xl shadow-md transition-all duration-200 text-[14px]"
            >
              <UserPlus size={16} />
              <span>{t('nav.signup')}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
