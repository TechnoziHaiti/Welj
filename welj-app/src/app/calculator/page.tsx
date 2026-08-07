"use client";

import { useState, type FormEvent } from 'react';
import { Tag, MapPin, Plane, Ship, ArrowRight, ChevronDown, PackageCheck } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const destinations = [
  "Port-au-Prince",
  "Cap-Haïtien",
  "Ouanaminthe",
  "Les Cayes",
  "Jérémie",
  "République Dominicaine"
];

export default function CalculatorPage() {
  const [weight, setWeight] = useState('');
  const [showDimensions, setShowDimensions] = useState(false);
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [origin, setOrigin] = useState('Fort Lauderdale, USA');
  const [destination, setDestination] = useState(destinations[0]);
  
  const [hasCalculated, setHasCalculated] = useState(false);
  const [airPrice, setAirPrice] = useState(0);
  const [seaPrice, setSeaPrice] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const { t } = useLanguage();

  const calculatePrice = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const w = parseFloat(weight) || 0;
    let chargeableWeight = w;

    if (showDimensions && length && width && height) {
      const l = parseFloat(length) || 0;
      const wi = parseFloat(width) || 0;
      const h = parseFloat(height) || 0;
      const volWeight = (l * wi * h) / 160;
      chargeableWeight = Math.max(w, volWeight);
    }

    if (chargeableWeight <= 0) return;

    setIsCalculating(true);

    setTimeout(() => {
      // Avion = $4 / lb
      // Bateau = $2.5 / lb
      setAirPrice(chargeableWeight * 4);
      setSeaPrice(chargeableWeight * 2.5);
      setHasCalculated(true);
      setIsCalculating(false);
    }, 500);
  };

  return (
    <div className="min-h-[85vh] bg-[#f8fafc] pt-32 pb-24 font-sans flex flex-col items-center">
      
      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-xl md:text-2xl font-black text-[#022f4b] uppercase tracking-widest">
              {t('calc.title')}
            </h1>
            <div className="hidden md:flex items-center gap-2 text-[#022f4b] px-3 py-1.5">
              <Tag size={16} className="text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-wider">{t('calc.guarantee')}</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 max-w-md md:text-right">
            {t('calc.desc')}
          </p>
        </div>

        {/* Horizontal Form Box */}
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 md:p-8 w-full mb-12 relative z-10">
          <form onSubmit={calculatePrice} className="flex flex-col gap-6">
            
            {/* Top Row: Origin, Dest, Weight, Button */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-end">
              
              {/* Origin */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">{t('calc.from')}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <MapPin size={16} className="text-gray-400" />
                  </div>
                  <select 
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg pl-9 pr-8 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-[#e12229] focus:border-transparent text-sm font-semibold cursor-pointer"
                  >
                    <option value="Fort Lauderdale, USA">Fort Lauderdale, USA</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <ChevronDown size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Destination */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">{t('calc.to')}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <MapPin size={16} className="text-gray-400" />
                  </div>
                  <select 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg pl-9 pr-8 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-[#e12229] focus:border-transparent text-sm font-semibold cursor-pointer"
                  >
                    {destinations.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <ChevronDown size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Weight */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">{t('calc.weight')}</label>
                <div className="relative flex">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <PackageCheck size={16} className="text-gray-400" />
                  </div>
                  <input 
                    type="number"
                    min="0"
                    step="0.1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                    placeholder="Ex: 5"
                    className="w-full bg-gray-50 border border-r-0 border-gray-200 text-gray-900 rounded-l-lg pl-9 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#e12229] focus:border-transparent text-sm font-semibold"
                  />
                  <div className="bg-gray-100 border border-l-0 border-gray-200 text-gray-600 rounded-r-lg px-4 py-3 text-sm font-bold flex items-center justify-center">
                    lbs
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isCalculating}
                className="sm:w-auto w-full bg-[#e12229] hover:bg-red-700 text-white font-bold px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2 group whitespace-nowrap h-[46px]"
              >
                {isCalculating ? (
                  <div className="flex space-x-1.5 items-center justify-center h-6">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  </div>
                ) : (
                  <>
                    {t('calc.get_rates')}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

            </div>

            {/* Dimensional Weight Toggle */}
            <div className="pt-2">
              <button 
                type="button"
                onClick={() => setShowDimensions(!showDimensions)}
                className="text-sm text-[#022f4b] hover:text-blue-700 transition-colors inline-flex flex-wrap items-center gap-1 font-medium"
              >
                <span>{t('calc.dim_msg1')}</span>
                <span className="text-[#e12229] underline underline-offset-2">{t('calc.dim_msg2')}</span>
                <span>{t('calc.dim_msg3')}</span>
              </button>
            </div>

            {/* Dimensional Weight Fields */}
            {showDimensions && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100 animate-entrance">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{t('calc.len')}</label>
                  <input 
                    type="number" min="0" step="0.1"
                    value={length} onChange={(e) => setLength(e.target.value)}
                    placeholder="L"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#e12229]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{t('calc.wid')}</label>
                  <input 
                    type="number" min="0" step="0.1"
                    value={width} onChange={(e) => setWidth(e.target.value)}
                    placeholder="W"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#e12229]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{t('calc.hei')}</label>
                  <input 
                    type="number" min="0" step="0.1"
                    value={height} onChange={(e) => setHeight(e.target.value)}
                    placeholder="H"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#e12229]"
                  />
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Results Section */}
        {hasCalculated && (
          <div className="w-full animate-entrance mb-8">
            <h2 className="text-xl md:text-2xl font-black text-[#022f4b] mb-6 uppercase tracking-widest">
              {t('calc.results_title')}
            </h2>
            
            <div className="flex flex-col gap-4">
              
              {/* Option 1: Avion */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:shadow-md transition-shadow group">
                <div className="flex items-center gap-5 ml-2">
                  <div className="text-gray-400 p-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Plane size={28} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#022f4b]">{t('calc.by_air')}</h3>
                    <p className="text-gray-500 text-sm">{t('calc.air_desc')}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full sm:w-auto gap-8 sm:gap-16">
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">{t('calc.est_time')}</p>
                    <p className="font-semibold text-gray-700">5 - 10 jours ouvrables Max</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">{t('calc.total')}</p>
                    <p className="font-black text-2xl text-[#e12229]">${airPrice.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              {/* Option 2: Bateau */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:shadow-md transition-shadow group">
                <div className="flex items-center gap-5 ml-2">
                  <div className="text-gray-400 p-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Ship size={28} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#022f4b]">{t('calc.by_sea')}</h3>
                    <p className="text-gray-500 text-sm">{t('calc.sea_desc')}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full sm:w-auto gap-8 sm:gap-16">
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">{t('calc.est_time')}</p>
                    <p className="font-semibold text-gray-700">15 - 22 jours ouvrables</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">{t('calc.total')}</p>
                    <p className="font-black text-2xl text-[#022f4b]">${seaPrice.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 px-2">
                <p 
                  className="text-xs text-[#e12229] italic leading-relaxed" 
                  dangerouslySetInnerHTML={{ __html: t('calc.disclaimer') }} 
                />
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
