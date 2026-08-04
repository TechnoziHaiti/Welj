"use client";

import Image from 'next/image';
import { 
  Flame, 
  Crosshair, 
  EyeOff, 
  AlertTriangle, 
  Shield, 
  ShieldAlert, 
  Pill, 
  Plane, 
  Radio, 
  UserX, 
  CircleDot, 
  Briefcase, 
  Binoculars, 
  Shirt, 
  Hand, 
  Award, 
  HardHat, 
  Paintbrush, 
  Apple, 
  Banknote, 
  Droplets,
  Ban
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const forbiddenItemsKeys = [
  { key: "shipping.items.flammable", icon: Flame },
  { key: "shipping.items.firearms", icon: Crosshair },
  { key: "shipping.items.obscene", icon: EyeOff },
  { key: "shipping.items.counterfeit", icon: AlertTriangle },
  { key: "shipping.items.bulletproof", icon: Shield },
  { key: "shipping.items.security", icon: ShieldAlert },
  { key: "shipping.items.illicit", icon: Pill },
  { key: "shipping.items.drone", icon: Plane },
  { key: "shipping.items.radios", icon: Radio },
  { key: "shipping.items.masks", icon: UserX },
  { key: "shipping.items.uniforms", icon: ShieldAlert },
  { key: "shipping.items.ammo", icon: CircleDot },
  { key: "shipping.items.holsters", icon: Briefcase },
  { key: "shipping.items.nightvision", icon: Binoculars },
  { key: "shipping.items.tactical", icon: Shirt },
  { key: "shipping.items.gloves", icon: Hand },
  { key: "shipping.items.badges", icon: Award },
  { key: "shipping.items.helmets", icon: HardHat },
  { key: "shipping.items.paint", icon: Paintbrush },
  { key: "shipping.items.food", icon: Apple },
  { key: "shipping.items.money", icon: Banknote },
  { key: "shipping.items.fuel", icon: Droplets }
];

export default function ShippingItemsPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24 font-sans flex flex-col">
      
      {/* Top Section - Title and Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12 text-center flex-shrink-0">
        <div className="flex items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto mb-4">
          <div className="h-[2px] bg-gradient-to-r from-transparent to-[#022f4b] flex-grow rounded-full"></div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#022f4b] tracking-tight whitespace-nowrap">
            {t('shipping.title')}
          </h1>
          <div className="h-[2px] bg-gradient-to-l from-transparent to-[#022f4b] flex-grow rounded-full"></div>
        </div>
        
        <div className="inline-block bg-[#e12229] text-white px-6 py-2 rounded-full mb-10 shadow-md">
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest flex items-center gap-2">
            <Ban size={20} strokeWidth={2.5} />
            {t('shipping.subtitle')}
          </h2>
        </div>

        <div className="flex justify-center mb-6">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <Image 
              src="/prohibited_guy.png" 
              alt="Interdit" 
              fill 
              className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom Section - List of Items */}
      <div className="w-full flex-grow relative overflow-hidden py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forbiddenItemsKeys.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex items-center gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 text-[#e12229] relative mt-0.5">
                    <Icon size={26} strokeWidth={2} />
                    {/* Small prohibition badge */}
                    <div className="absolute -top-1.5 -right-1.5 bg-white rounded-full">
                      <Ban size={14} className="text-[#e12229]" />
                    </div>
                  </div>
                  <span className="text-[#022f4b] font-bold text-sm md:text-base leading-tight uppercase">
                    {t(item.key)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}
