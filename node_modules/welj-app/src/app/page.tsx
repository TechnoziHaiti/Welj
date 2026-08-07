"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plane, Ship, Package, MapPin, Truck, Globe2, UserPlus, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.welj.welj_flutter_user&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleATXAqhwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp1df_MA9aDfcaCYKVcQO5Z4aBXdhCLby1EC93clafyeJwZqGWJYIEsZTeKxh_aem_UJdkg5m8JttTIdKAitbJkw&pli=1';
const appStoreUrl = 'https://apps.apple.com/us/app/welj/id1666198727';

const partners = [
  { name: 'Alibaba', image: '/partners/alibaba.png', url: 'https://www.alibaba.com' },
  { name: 'AliExpress', image: '/partners/aliexpress.png', url: 'https://www.aliexpress.com' },
  { name: 'Amazon', image: '/partners/amazon.png', url: 'https://www.amazon.com' },
  { name: 'Best Buy', image: '/partners/bestbuy.png', url: 'https://www.bestbuy.com' },
  { name: 'eBay', image: '/partners/ebay.png', url: 'https://www.ebay.com' },
  { name: 'GAP', image: '/partners/gap.png', url: 'https://www.gap.com' }, 
  { name: 'GILT', image: '/partners/gilt.png', url: 'https://www.gilt.com' },
  { name: 'JCPenney', image: '/partners/jcpenney.png', url: 'https://www.jcpenney.com' },
  { name: 'Kohl\'s', image: '/partners/kohls.png', url: 'https://www.kohls.com' },
  { name: 'Lowe\'s', image: '/partners/lowes.png', url: 'https://www.lowes.com' },
  { name: 'MYHABIT', image: '/partners/myhabit.png', url: 'https://www.amazon.com' },
  { name: 'Newegg', image: '/partners/newegg.png', url: 'https://www.newegg.com' },
  { name: 'Nomorerack', image: '/partners/nomorerack.png', url: '#' },
  { name: 'Overstock', image: '/partners/overstock.png', url: 'https://www.overstock.com' },
  { name: 'Rakuten', image: '/partners/rakuten.png', url: 'https://www.rakuten.com' },
  { name: 'Sears', image: '/partners/sears.png', url: 'https://www.sears.com' },
  { name: 'Shein', image: '/partners/shein.png', url: 'https://www.shein.com' },
  { name: 'Smart Bargains', image: '/partners/smart_bargains.png', url: 'https://www.smartbargains.com' },
  { name: 'Target', image: '/partners/target.png', url: 'https://www.target.com' },
  { name: 'TEMU', image: '/partners/temu.png', url: 'https://www.temu.com' },
  { name: 'TigerDirect', image: '/partners/tigerdirect.png', url: 'https://www.tigerdirect.com' },
  { name: 'Victoria\'s Secret', image: '/partners/victorias_secret.png', url: 'https://www.victoriassecret.com' },
  { name: 'Walmart', image: '/partners/walmart.png', url: 'https://www.walmart.com' },
];

const slides = [
  {
    id: 1,
    image: '/hero-scene.png',
    title: "Services d'Expédition de Colis Internationaux",
    subtitle: "Votre partenaire de confiance pour le transport et la logistique internationale. Welj met son expertise au service de vos expéditions afin de garantir des livraisons sécurisées, des délais maîtrisés et un accompagnement personnalisé à chaque étape.",
    showText: true,
    buttonType: "register",
    bgStyle: "bg-cover bg-[position:60%_bottom] md:bg-[position:right_bottom]"
  },
  {
    id: 2,
    image: '/a9.jpg',
    title: "",
    subtitle: "",
    showText: false,
    buttonType: "download",
    bgStyle: "bg-cover bg-center"
  },
  {
    id: 3,
    image: '/a17.jpg',
    title: "",
    subtitle: "",
    showText: false,
    buttonType: "register",
    bgStyle: "bg-cover bg-top"
  }
];

const mapBranches = [
  {
    id: 'pap',
    name: 'Port-au-Prince',
    address: '#7, Delmas 95 & Tabarre 36',
    image: '/port-au-prince.jpg',
    badgeColor: 'bg-amber-500',
    top: '73%',
    left: '64%'
  },
  {
    id: 'cap',
    name: 'Cap-Haïtien',
    address: 'Rue 19 D, Cap-Haïtien',
    image: '/cap-haitien.jpg',
    badgeColor: 'bg-red-600',
    top: '30%',
    left: '68%'
  },
  {
    id: 'ouana',
    name: 'Ouanaminthe',
    address: '42, Rue vallières, Ouanaminthe',
    image: '/ouanaminthe.jpg',
    badgeColor: 'bg-blue-600',
    top: '40%',
    left: '77%'
  },
  {
    id: 'cayes',
    name: 'Les Cayes',
    address: 'Bourjolly #7, Route Nationale',
    image: '/cayes.jpg',
    badgeColor: 'bg-purple-600',
    top: '89%',
    left: '40%'
  },
  {
    id: 'jeremie',
    name: 'Jérémie',
    address: '#4, Source Dommage, Rue Jérémie',
    image: '/jeremie.png',
    badgeColor: 'bg-green-600',
    top: '73%',
    left: '32%'
  }
];

const usaBranches = [
  {
    id: 'fort-lauderdale',
    name: 'Fort Lauderdale, FL',
    address: 'Entrepôt WELJ, Fort Lauderdale',
    image: '/logo.png',
    badgeColor: 'bg-blue-600',
    top: '70%',
    left: '76%'
  }
];

const rdBranches = [
  {
    id: 'santo-domingo',
    name: 'Santo Domingo',
    address: 'Agence Centrale, Santo Domingo',
    image: '/logo.png',
    badgeColor: 'bg-blue-800',
    top: '58%',
    left: '53%'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeMapIndex, setActiveMapIndex] = useState(0);
  const [activeUSAMapIndex, setActiveUSAMapIndex] = useState(0);
  const [activeRDMapIndex, setActiveRDMapIndex] = useState(0);
  const [activeCountryTab, setActiveCountryTab] = useState<'haiti' | 'usa' | 'rd'>('haiti');
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const mapTimer = setInterval(() => {
      setActiveMapIndex((prev) => (prev + 1) % mapBranches.length);
      setActiveUSAMapIndex((prev) => (prev + 1) % usaBranches.length);
      setActiveRDMapIndex((prev) => (prev + 1) % rdBranches.length);
    }, 3000);

    return () => clearInterval(mapTimer);
  }, []);

  const [downloadUrl, setDownloadUrl] = useState(playStoreUrl);

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

      if (/android/i.test(userAgent)) {
        setDownloadUrl(playStoreUrl);
        return;
      }

      if (/iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
        setDownloadUrl(appStoreUrl);
        return;
      }
    }

    setDownloadUrl(playStoreUrl);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans overflow-x-hidden">
      {/* Hero Carousel Section */}
      <section className="relative text-white overflow-hidden min-h-screen flex items-end group bg-[#021f3a] w-full pb-20">
        {/* Background Images with smooth fade transition */}
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 z-0 bg-no-repeat transition-opacity duration-1000 ease-in-out ${slide.bgStyle} ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`
            }}
          ></div>
        ))}

        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none transition-all duration-700"
          style={{
            background: currentSlide === 0
              ? "linear-gradient(90deg, rgba(2, 31, 58, 0.90) 0%, rgba(2, 31, 58, 0.70) 35%, rgba(2, 31, 58, 0.30) 65%, transparent 90%)"
              : "linear-gradient(90deg, rgba(2, 31, 58, 0.75) 0%, rgba(2, 31, 58, 0.4) 25%, transparent 60%)"
          }}
        ></div>
        
        {/* Carousel Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white transition-all duration-200 hover:scale-110"
          aria-label="Slide précédente"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white transition-all duration-200 hover:scale-110"
          aria-label="Slide suivante"
        >
          <ChevronRight size={24} />
        </button>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-28 pb-4 flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="w-full max-w-full lg:max-w-3xl lg:w-[60%] transition-all duration-700 flex flex-col items-center sm:items-start">
            {slides[currentSlide].showText && (
              <>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white drop-shadow-md max-w-full break-words">
                  {currentSlide === 0 ? t('home.hero_title') : slides[currentSlide].title}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl mb-8 leading-relaxed text-white font-light max-w-xl drop-shadow">
                  {currentSlide === 0 ? t('home.hero_subtitle') : slides[currentSlide].subtitle}
                </p>
              </>
            )}
            <div className="flex justify-center sm:justify-start w-full gap-4">
              {slides[currentSlide].buttonType === 'download' ? (
                <a 
                  href={downloadUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2.5"
                >
                  <Download size={18} />
                  <span>{t('home.download_app')}</span>
                </a>
              ) : (
                <a 
                  href="https://www.welj-ht.com/user/signup" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2.5"
                >
                  <UserPlus size={18} />
                  <span>{t('nav.signup')}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Slide Indicators (Dots) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-red-600' : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Aller à la slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Warehouses & Branches Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Framed by Two Horizontal Lines */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto mb-4">
              <div className="h-[2px] bg-gradient-to-r from-transparent to-[#022f4b] flex-grow rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#022f4b] tracking-tight whitespace-nowrap">
                {t('home.branches_title')}
              </h2>
              <div className="h-[2px] bg-gradient-to-l from-transparent to-[#022f4b] flex-grow rounded-full"></div>
            </div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {t('home.branches_subtitle')}
            </p>
          </div>
          
          {/* Country Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-12">
            <button
              onClick={() => setActiveCountryTab('haiti')}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-sm ${
                activeCountryTab === 'haiti'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-600 ring-offset-2'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
              }`}
            >
              Haïti
            </button>
            <button
              onClick={() => setActiveCountryTab('usa')}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-sm ${
                activeCountryTab === 'usa'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-600 ring-offset-2'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
              }`}
            >
              États-Unis
            </button>
            <button
              onClick={() => setActiveCountryTab('rd')}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-sm ${
                activeCountryTab === 'rd'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-600 ring-offset-2'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
              }`}
            >
              République Dominicaine
            </button>
          </div>

          {/* HAITI TAB CONTENT */}
          {activeCountryTab === 'haiti' && (
            <div className="transition-all duration-500">
              {/* Top Part: Map Summary & Warehouse Bullet Points */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            {/* Left: 3D Haiti Flag Map Graphic with Realistic Looping Magnifying Glass */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="relative w-full max-w-xl aspect-[16/10] flex items-center justify-center p-2 mx-auto">
                <Image 
                  src="/haiti-flag-map.png" 
                  alt="Carte d'Haïti WELJ" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                  loading="eager"
                  className="object-contain p-2"
                />

                {/* Fixed Pins for all 4 branches - Initially WHITE dots, turns colored when active! */}
                {mapBranches.map((branch, idx) => {
                  const isActive = idx === activeMapIndex;
                  return (
                    <button
                      key={branch.id}
                      onClick={() => setActiveMapIndex(idx)}
                      className="absolute z-20 flex items-center justify-center cursor-pointer -translate-x-1/2 -translate-y-1/2 group transition-all duration-500"
                      style={{ top: branch.top, left: branch.left }}
                      aria-label={branch.name}
                    >
                      <span 
                        className={`w-3.5 h-3.5 rounded-full border-2 shadow-md transition-all duration-500 ${
                          isActive 
                            ? 'bg-blue-500 border-white scale-125 ring-4 ring-blue-200/60' 
                            : 'bg-transparent border-transparent'
                        }`}
                      ></span>
                    </button>
                  );
                })}

                {/* Looping Realistic Magnifying Glass (Exact match to User Image 2) */}
                <div 
                  className="absolute z-30 transition-all duration-1000 ease-in-out pointer-events-none flex flex-col items-center"
                  style={{
                    top: mapBranches[activeMapIndex].top,
                    left: mapBranches[activeMapIndex].left,
                    transform: 'translate(-42%, -18%)'
                  }}
                >
                  <div className="relative w-24 h-24 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]">
                    <Image 
                      src="/loupe-welj.png" 
                      alt="Loupe WELJ" 
                      fill
                      sizes="96px"
                      className="object-contain"
                    />
                  </div>

                  {/* Floating active branch card preview */}
                  <div className="-mt-1 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-2xl border border-gray-200 flex items-center gap-2.5 w-48 sm:w-52 z-40">
                    <div className="relative w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100 shadow-xs">
                      <Image 
                        src={mapBranches[activeMapIndex].image} 
                        alt={mapBranches[activeMapIndex].name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left overflow-hidden">
                      <h4 className="text-xs font-bold text-[#022f4b] truncate">{mapBranches[activeMapIndex].name}</h4>
                      <p className="text-[10px] text-gray-500 line-clamp-2 leading-tight">{mapBranches[activeMapIndex].address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Warehouses List in Black Font */}
<div className="lg:col-span-5 mt-10 lg:mt-0 flex flex-col justify-center space-y-4 items-center text-center lg:items-start lg:text-left">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('home.branches_haiti')}</h3>
              
              {mapBranches.map((branch, idx) => (
                <div 
                  key={branch.id} 
                  onClick={() => setActiveMapIndex(idx)}
                  className={`flex items-start gap-3 py-2 px-2.5 rounded-lg cursor-pointer transition-all duration-300 ${
                    idx === activeMapIndex ? 'font-bold text-gray-900' : 'text-gray-700 opacity-80 hover:opacity-100'
                  }`}
                >
                  <MapPin 
                    size={20} 
                    className={`mt-1 flex-shrink-0 transition-colors duration-300 ${
                      idx === activeMapIndex ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'
                    }`}
                  />
                  <div className="flex flex-col items-center lg:items-start">
                    <h4 className={`text-sm ${idx === activeMapIndex ? 'font-extrabold text-gray-900' : 'font-bold text-gray-800'}`}>
                      {branch.name}
                    </h4>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">{branch.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Part: 5 Location Cards with user provided images */}
          <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
            {[
              { name: 'Port-au-Prince', image: '/port-au-prince.jpg', text: '#7, Delmas 95, Route de Jacquet, Complexe Sitwonèl, 36 Tabarre 36, Port-au-Prince, et aussi à Technozi Haiti, Route Frère.' },
              { name: 'Cap-Haïtien', image: '/cap-haitien.jpg', text: 'Rue 19 D, Cap-Haïtien.' },
              { name: 'Ouanaminthe', image: '/ouanaminthe.jpg', text: '42, Rue vallières, Ouanaminthe.' },
              { name: 'Les Cayes', image: '/cayes.jpg', text: 'Bourjolly #7, Route Nationale.' },
              { name: 'Jérémie', image: '/jeremie.png', text: '#4, Source Dommage, Rue Jérémie.' }
            ].map((agency, idx) => (
              <motion.div 
                key={agency.name}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group w-full max-w-[340px]"
              >
                <div className="text-center py-3.5 bg-gray-50 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-[#022f4b]">{agency.name}</h3>
                </div>
                <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                  <Image 
                    src={agency.image} 
                    alt={`Agence ${agency.name} WELJ`} 
                    fill
                    sizes="(max-width: 768px) 100vw, 340px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow justify-between text-center bg-white">
                  <p className="text-xs text-gray-600 font-medium leading-relaxed">
                    {agency.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
            </div>
          )}

          {/* USA TAB CONTENT */}
          {activeCountryTab === 'usa' && (
            <div className="transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
                <div className="lg:col-span-7 flex justify-center items-center">
                  <div className="relative w-full max-w-xl aspect-[16/10] flex items-center justify-center p-2 mx-auto">
                    <Image 
                      src="/usa_flag.png" 
                      alt="Carte USA WELJ" 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                      loading="eager"
                      className="object-contain p-2"
                    />

                    {usaBranches.map((branch, idx) => {
                      const isActive = idx === activeUSAMapIndex;
                      return (
                        <button
                          key={branch.id}
                          onClick={() => setActiveUSAMapIndex(idx)}
                          className="absolute z-20 flex items-center justify-center cursor-pointer -translate-x-1/2 -translate-y-1/2 group transition-all duration-500"
                          style={{ top: branch.top, left: branch.left }}
                          aria-label={branch.name}
                        >
                          <span 
                            className={`w-3.5 h-3.5 rounded-full border-2 shadow-md transition-all duration-500 ${
                              isActive 
                                ? 'bg-blue-500 border-white scale-125 ring-4 ring-blue-200/60' 
                                : 'bg-transparent border-transparent'
                            }`}
                          ></span>
                        </button>
                      );
                    })}

                    <div 
                      className="absolute z-30 transition-all duration-1000 ease-in-out pointer-events-none flex flex-col items-center"
                      style={{
                        top: (usaBranches[activeUSAMapIndex] || usaBranches[0])?.top,
                        left: (usaBranches[activeUSAMapIndex] || usaBranches[0])?.left,
                        transform: 'translate(-42%, -18%)'
                      }}
                    >
                      <div className="relative w-24 h-24 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]">
                        <Image 
                          src="/loupe-welj.png" 
                          alt="Loupe WELJ" 
                          fill
                          sizes="96px"
                          className="object-contain"
                        />
                      </div>

                      <div className="-mt-1 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-2xl border border-gray-200 flex items-center gap-2.5 w-48 sm:w-52 z-40">
                        <div className="relative w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100 shadow-xs bg-gray-50 flex items-center justify-center">
                          <Image 
                            src={(usaBranches[activeUSAMapIndex] || usaBranches[0])?.image} 
                            alt={(usaBranches[activeUSAMapIndex] || usaBranches[0])?.name}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                        <div className="text-left overflow-hidden">
                          <h4 className="text-xs font-bold text-[#022f4b] truncate">{(usaBranches[activeUSAMapIndex] || usaBranches[0])?.name}</h4>
                          <p className="text-[10px] text-gray-500 line-clamp-2 leading-tight">{(usaBranches[activeUSAMapIndex] || usaBranches[0])?.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 mt-10 lg:mt-0 flex flex-col justify-center space-y-4 items-center text-center lg:items-start lg:text-left">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Nos Agences aux États-Unis :</h3>
                  
                  {usaBranches.map((branch, idx) => (
                    <div 
                      key={branch.id} 
                      onClick={() => setActiveUSAMapIndex(idx)}
                      className={`flex items-start gap-3 py-2 px-2.5 rounded-lg cursor-pointer transition-all duration-300 ${
                        idx === activeUSAMapIndex ? 'font-bold text-gray-900' : 'text-gray-700 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <MapPin 
                        size={20} 
                        className={`mt-1 flex-shrink-0 transition-colors duration-300 ${
                          idx === activeUSAMapIndex ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'
                        }`}
                      />
                      <div className="flex flex-col items-center lg:items-start">
                        <h4 className={`text-sm ${idx === activeUSAMapIndex ? 'font-extrabold text-gray-900' : 'font-bold text-gray-800'}`}>
                          {branch.name}
                        </h4>
                        <p className="text-xs text-gray-600 font-medium leading-relaxed">{branch.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* RD TAB CONTENT */}
          {activeCountryTab === 'rd' && (
            <div className="transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
                <div className="lg:col-span-7 flex justify-center items-center">
                  <div className="relative w-full max-w-xl aspect-[16/10] flex items-center justify-center p-2 mx-auto">
                    <Image 
                      src="/rep_dom.png" 
                      alt="Carte RD WELJ" 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                      loading="eager"
                      className="object-contain p-2"
                    />

                    {rdBranches.map((branch, idx) => {
                      const isActive = idx === activeRDMapIndex;
                      return (
                        <button
                          key={branch.id}
                          onClick={() => setActiveRDMapIndex(idx)}
                          className="absolute z-20 flex items-center justify-center cursor-pointer -translate-x-1/2 -translate-y-1/2 group transition-all duration-500"
                          style={{ top: branch.top, left: branch.left }}
                          aria-label={branch.name}
                        >
                          <span 
                            className={`w-3.5 h-3.5 rounded-full border-2 shadow-md transition-all duration-500 ${
                              isActive 
                                ? 'bg-blue-500 border-white scale-125 ring-4 ring-blue-200/60' 
                                : 'bg-transparent border-transparent'
                            }`}
                          ></span>
                        </button>
                      );
                    })}

                    <div 
                      className="absolute z-30 transition-all duration-1000 ease-in-out pointer-events-none flex flex-col items-center"
                      style={{
                        top: rdBranches[activeRDMapIndex].top,
                        left: rdBranches[activeRDMapIndex].left,
                        transform: 'translate(-42%, -18%)'
                      }}
                    >
                      <div className="relative w-24 h-24 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]">
                        <Image 
                          src="/loupe-welj.png" 
                          alt="Loupe WELJ" 
                          fill
                          sizes="96px"
                          className="object-contain"
                        />
                      </div>

                      <div className="-mt-1 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-2xl border border-gray-200 flex items-center gap-2.5 w-48 sm:w-52 z-40">
                        <div className="relative w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100 shadow-xs bg-gray-50 flex items-center justify-center">
                          <Image 
                            src={rdBranches[activeRDMapIndex].image} 
                            alt={rdBranches[activeRDMapIndex].name}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                        <div className="text-left overflow-hidden">
                          <h4 className="text-xs font-bold text-[#022f4b] truncate">{rdBranches[activeRDMapIndex].name}</h4>
                          <p className="text-[10px] text-gray-500 line-clamp-2 leading-tight">{rdBranches[activeRDMapIndex].address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 mt-10 lg:mt-0 flex flex-col justify-center space-y-4 items-center text-center lg:items-start lg:text-left">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Nos Agences en République Dominicaine :</h3>
                  
                  {rdBranches.map((branch, idx) => (
                    <div 
                      key={branch.id} 
                      onClick={() => setActiveRDMapIndex(idx)}
                      className={`flex items-start gap-3 py-2 px-2.5 rounded-lg cursor-pointer transition-all duration-300 ${
                        idx === activeRDMapIndex ? 'font-bold text-gray-900' : 'text-gray-700 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <MapPin 
                        size={20} 
                        className={`mt-1 flex-shrink-0 transition-colors duration-300 ${
                          idx === activeRDMapIndex ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'
                        }`}
                      />
                      <div className="flex flex-col items-center lg:items-start">
                        <h4 className={`text-sm ${idx === activeRDMapIndex ? 'font-extrabold text-gray-900' : 'font-bold text-gray-800'}`}>
                          {branch.name}
                        </h4>
                        <p className="text-xs text-gray-600 font-medium leading-relaxed">{branch.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Title Framed by Two Horizontal Lines */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto mb-4">
              <div className="h-[2px] bg-gradient-to-r from-transparent to-[#022f4b] flex-grow rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#022f4b] tracking-tight whitespace-nowrap">
                {t('home.partners_title')}
              </h2>
              <div className="h-[2px] bg-gradient-to-l from-transparent to-[#022f4b] flex-grow rounded-full"></div>
            </div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {t('home.partners_subtitle')}
            </p>
          </div>
          
          <div className="max-w-[1000px] mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6 justify-items-center items-center py-10 px-2">
              {partners.map((partner, i) => (
              <a 
                key={i}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center justify-center w-[105px] h-[105px] sm:w-[130px] sm:h-[130px] lg:w-[140px] lg:h-[140px] bg-white rounded-2xl sm:rounded-[24px] border border-black/[0.04] shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)] hover:-translate-y-1 hover:border-black/[0.08] transition-all duration-300 ease-out p-3 sm:p-5 ${
                  i % 3 === 1 ? 'mt-8 md:mt-0' : ''
                } ${
                  i % 2 !== 0 ? 'md:mt-12' : ''
                }`}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image 
                    src={partner.image} 
                    alt={partner.name} 
                    fill 
                    className="object-contain filter group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              </a>
            ))}
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
