"use client";

import Image from 'next/image';
import { FileText, CalendarClock, Package, MapPinned } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const tipsKeys = [
  {
    id: 1,
    image: "/conseil_1.jpg",
    titleKey: "resources.tip1_title",
    descriptionKey: "resources.tip1_desc"
  },
  {
    id: 2,
    image: "/conseil_2.jpg",
    titleKey: "resources.tip2_title",
    descriptionKey: "resources.tip2_desc"
  },
  {
    id: 3,
    image: "/conseil_3.jpg",
    titleKey: "resources.tip3_title",
    descriptionKey: "resources.tip3_desc"
  },
  {
    id: 4,
    image: "/conseil_4.jpg",
    titleKey: "resources.tip4_title",
    descriptionKey: "resources.tip4_desc"
  }
];

const extraDetailsKeys = [
  {
    id: 1,
    titleKey: "resources.detail1_title",
    textKey: "resources.detail1_text",
    icon: FileText
  },
  {
    id: 2,
    titleKey: "resources.detail2_title",
    textKey: "resources.detail2_text",
    icon: CalendarClock
  },
  {
    id: 3,
    titleKey: "resources.detail3_title",
    textKey: "resources.detail3_text",
    icon: Package
  },
  {
    id: 4,
    titleKey: "resources.detail4_title",
    textKey: "resources.detail4_text",
    icon: MapPinned
  }
];

export default function ResourcesPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16 font-sans">
      
      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 text-center">
        <div className="flex items-center justify-center gap-4 md:gap-8 max-w-5xl mx-auto mb-4">
          <div className="h-[2px] bg-gradient-to-r from-transparent to-[#022f4b] flex-grow rounded-full opacity-70"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#022f4b] tracking-tight whitespace-nowrap">
            {t('resources.title')}
          </h2>
          <div className="h-[2px] bg-gradient-to-l from-transparent to-[#022f4b] flex-grow rounded-full opacity-70"></div>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto text-base mt-3">
          {t('resources.subtitle')}
        </p>
      </div>

      {/* Zig-Zag Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 md:space-y-16">
        {tipsKeys.map((tip, index) => {
          const isEven = index % 2 === 1;

          return (
            <div 
              key={tip.id} 
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center`}
            >
              
              {/* Image Container */}
              <div className={`w-full flex justify-center ${isEven ? 'md:order-2 md:justify-end' : 'md:order-1 md:justify-start'}`}>
                <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
                  <Image 
                    src={tip.image} 
                    alt={t(tip.titleKey)} 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>

              {/* Text Container */}
              <div className={`flex flex-col justify-center ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                <h3 className="text-xl md:text-2xl font-bold text-[#022f4b] mb-3">
                  {t(tip.titleKey)}
                </h3>
                
                {/* Underline matching the reference photo */}
                <div className="w-full h-[3px] bg-[#e12229] rounded-full mb-4 opacity-90"></div>
                
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {t(tip.descriptionKey)}
                </p>
              </div>

            </div>
          );
        })}
      </div>

      {/* Second Section: Details simples */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-32 mb-10 text-center">
        <div className="flex items-center justify-center gap-4 md:gap-8 max-w-5xl mx-auto mb-12">
          <div className="hidden md:block h-[2px] bg-gradient-to-r from-transparent to-[#022f4b] flex-grow rounded-full opacity-70"></div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#022f4b] tracking-tight max-w-2xl leading-snug">
            {t('resources.details_title')}
          </h2>
          <div className="hidden md:block h-[2px] bg-gradient-to-l from-transparent to-[#022f4b] flex-grow rounded-full opacity-70"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
          {extraDetailsKeys.map((detail) => {
            const Icon = detail.icon;
            return (
              <div key={detail.id} className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg border border-gray-100 transition-shadow flex items-start gap-5">
                <div className="text-[#022f4b] flex-shrink-0 mt-0.5">
                  <Icon size={26} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-[#022f4b] font-bold text-lg mb-2">{t(detail.titleKey)}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {t(detail.textKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
