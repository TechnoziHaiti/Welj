"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { PackageSearch, MapPin, Store } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const procedures = [
  {
    id: 1,
    iconImage: "/icone_procedure_1.png",
    photo: "/a11.jpeg",
  },
  {
    id: 2,
    iconImage: "/icon_procedure_2.png",
    photo: "/a12.jpeg",
  },
  {
    id: 3,
    iconImage: "/icon_procedure_3_house_final.png",
    photo: "/a13.jpeg",
  }
];

const purchasingStepsKeys = [
  {
    id: 1,
    titleKey: "procedures.step1_title",
    descriptionKey: "procedures.step1_desc"
  },
  {
    id: 2,
    titleKey: "procedures.step2_title",
    descriptionKey: "procedures.step2_desc"
  },
  {
    id: 3,
    titleKey: "procedures.step3_title",
    descriptionKey: "procedures.step3_desc"
  },
  {
    id: 4,
    titleKey: "procedures.step4_title",
    descriptionKey: "procedures.step4_desc"
  }
];

export default function ProceduresPage() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(1);
  const [segmentTop, setSegmentTop] = useState<number>(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Find which step is closest to the middle of the viewport
      const viewportCenter = window.innerHeight / 2;
      let closestStep = 1;
      let minDistance = Infinity;

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(viewportCenter - elementCenter);
          
          if (distance < minDistance) {
            minDistance = distance;
            closestStep = index + 1;
          }
        }
      });

      setActiveStep(closestStep);

      // Update segment position
      const activeRef = sectionRefs.current[closestStep - 1];
      if (activeRef) {
        setSegmentTop(activeRef.offsetTop + activeRef.offsetHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      
      {/* ---------------- NEW TOP SECTION (WHITE) ---------------- */}
      <div className="bg-white text-gray-900 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 md:gap-8 max-w-5xl mx-auto mb-4">
              <div className="h-[2px] bg-gradient-to-r from-transparent to-[#022f4b] flex-grow rounded-full opacity-70"></div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#022f4b] tracking-tight whitespace-nowrap">
                {t('procedures.buy_title')}
              </h2>
              <div className="h-[2px] bg-gradient-to-l from-transparent to-[#022f4b] flex-grow rounded-full opacity-70"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              {t('procedures.buy_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left: 3D Guy Image */}
            <div className="flex justify-center lg:justify-end pt-8 lg:pt-24 animate-entrance">
              <div className="relative w-full max-w-xs sm:max-w-sm aspect-[3/4] animate-float">
                <Image 
                  src="/question_mark_guy.png" 
                  alt="Processus d'achat" 
                  fill 
                  className="object-contain drop-shadow-2xl" 
                />
              </div>
            </div>

            {/* Right: Steps List (Zig-Zag) */}
            <div className="flex flex-col space-y-4">
              {purchasingStepsKeys.map((step) => (
                <div key={step.id} className="relative w-full flex flex-col items-center">
                  
                  {/* Center Number and Title */}
                  <div className="flex flex-col items-center text-center z-10">
                    <span className="text-6xl md:text-[5.5rem] font-black text-[#e12229] leading-none mb-1 tracking-tighter">
                      0{step.id}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">{t(step.titleKey)}</h3>
                  </div>

                  {/* Description text offset (Left for Odd, Right for Even) */}
                  <div className="w-full max-w-lg flex mt-1">
                    {/* Left half */}
                    <div className="w-1/2 pr-2 sm:pr-4 flex justify-end">
                      {step.id % 2 === 1 && (
                        <p className="text-gray-500 text-xs sm:text-sm leading-snug text-right w-full sm:w-4/5">
                          {t(step.descriptionKey)}
                        </p>
                      )}
                    </div>
                    {/* Right half */}
                    <div className="w-1/2 pl-2 sm:pl-4 flex justify-start">
                      {step.id % 2 === 0 && (
                        <p className="text-gray-500 text-xs sm:text-sm leading-snug text-left w-full sm:w-4/5">
                          {t(step.descriptionKey)}
                        </p>
                      )}
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ---------------- EXISTING BOTTOM SECTION (DARK BLUE) ---------------- */}
      <div className="bg-[#022f4b] py-16 text-white overflow-hidden relative">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 text-center mb-12">
          <div className="flex items-center justify-center gap-4 md:gap-8 max-w-5xl mx-auto mb-4">
            <div className="h-[2px] bg-gradient-to-r from-transparent to-white flex-grow rounded-full opacity-50 hidden sm:block"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {t('procedures.pickup_title')}
            </h2>
            <div className="h-[2px] bg-gradient-to-l from-transparent to-white flex-grow rounded-full opacity-50 hidden sm:block"></div>
          </div>
          
        </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Central Vertical Line */}
        <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-2 bg-[#0a192f] border border-gray-700/30 -translate-x-1/2 rounded-full hidden sm:block"></div>

        {/* The Animated Glowing Segment on the Line */}
        <div 
          className="absolute left-[24px] md:left-1/2 w-2 bg-white -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-700 ease-out hidden sm:block shadow-[0_0_20px_rgba(255,255,255,1)]"
          style={{
            top: `${segmentTop}px`,
            height: '150px',
            opacity: activeStep > 0 ? 1 : 0
          }}
        ></div>

        <div className="space-y-12 md:space-y-16 relative z-10 py-12">
          {procedures.map((proc, index) => {
            const isActive = activeStep === proc.id;
            const isEven = index % 2 === 1;

            return (
              <div 
                key={proc.id} 
                ref={(el) => { sectionRefs.current[index] = el; }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-40 scale-95'}`}
              >
                
                {/* Small Icon (Now colored red via CSS Mask) */}
                <div className={`w-full flex justify-center ${isEven ? 'md:order-2 md:justify-start md:pl-16' : 'md:order-1 md:justify-end md:pr-16'} relative`}>
                  <div className={`relative transition-all duration-700 ${isActive ? 'transform scale-110 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]' : 'grayscale brightness-75 opacity-60'}`}>
                    <div 
                      className="w-24 h-24 sm:w-32 sm:h-32 bg-[#e12229]"
                      style={{
                        WebkitMaskImage: `url(${proc.iconImage})`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskImage: `url(${proc.iconImage})`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                      }}
                    />
                  </div>
                </div>

                {/* Large Photo */}
                <div className={`w-full flex justify-center ${isEven ? 'md:order-1 md:justify-end md:pr-16' : 'md:order-2 md:justify-start md:pl-16'}`}>
                  <div className={`transition-all duration-700 rounded-2xl md:rounded-3xl overflow-hidden relative w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[4/3] bg-white/5 ${isActive ? 'ring-4 ring-white ring-offset-8 ring-offset-[#022f4b] shadow-[0_0_30px_rgba(255,255,255,0.5)]' : 'shadow-2xl'}`}>
                    <Image 
                      src={proc.photo} 
                      alt={`Procédure ${proc.id}`} 
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
}
