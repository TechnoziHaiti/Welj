"use client";
import { ShieldCheck, Clock, Globe, ThumbsUp, Zap, HeartHandshake } from 'lucide-react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t, lang } = useLanguage();
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 text-center">
        
        {/* Title Framed by Two Horizontal Lines */}
        <div className="text-center mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto mb-4">
            <div className="h-[2px] bg-gradient-to-r from-transparent to-[#022f4b] flex-grow rounded-full"></div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#022f4b] tracking-tight whitespace-nowrap">
              {t('about.title')}
            </h1>
            <div className="h-[2px] bg-gradient-to-l from-transparent to-[#022f4b] flex-grow rounded-full"></div>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center text-left">
          
          {/* Left Side: Video Player (Wider) */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.15)] border border-gray-100 bg-black relative group w-full">
            <video 
              className="w-full h-auto aspect-video object-cover"
              controls
              preload="metadata"
            >
              <source src="/video%20welj_Annie%20Alerte.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>

          {/* Right Side: Summary & Author Bubble (Smaller) */}
          <div className="lg:col-span-4 flex flex-col justify-center mt-4 lg:mt-0 pl-0">
            
            <div className="relative mt-12 mb-8">
              
              {/* The Red Trace (Bracket border framing the box) */}
              <div className="absolute -top-5 -right-5 -bottom-5 left-12 border-t-[8px] border-r-[8px] border-b-[8px] border-red-600 rounded-tr-3xl rounded-br-3xl z-0 pointer-events-none">
                {/* The U-Shape Tail on the bottom */}
                <div className="absolute top-[100%] right-[15%] w-14 h-12 border-r-[8px] border-b-[8px] border-l-[8px] border-red-600 rounded-b-2xl -mt-[8px]"></div>
              </div>

              <div className="relative bg-[#0a192f] p-8 md:p-10 rounded-2xl z-10 shadow-2xl">
                <div className="text-gray-100 text-base md:text-lg leading-relaxed font-semibold text-center tracking-wide min-h-[140px] flex items-center justify-center">
                  <Typewriter
                    key={lang} // Key forces Typewriter to remount when language changes
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(t('about.typewriter'))
                        .start();
                    }}
                    options={{
                      delay: 40,
                      cursor: ""
                    }}
                  />
                </div>
              </div>

              {/* Top Quotes covering the red line to create a gap */}
              <div className="absolute -top-10 left-16 text-[#0a192f] font-serif text-[5rem] leading-none z-0 bg-white px-2">“</div>
              
              {/* Bottom Quotes covering the red line to create a gap */}
              <div className="absolute -bottom-12 right-[35%] text-[#0a192f] font-serif text-[5rem] leading-none z-0 rotate-180 bg-white px-2">“</div>

            </div>

            <div className="mt-8 text-center md:text-right pr-4">
              <span className="text-[#022f4b] font-extrabold text-xl md:text-2xl block">Anie Alerte</span>
              <span className="text-gray-500 text-sm font-semibold">{t('about.author_title')}</span>
            </div>

          </div>
        </div>

        {/* --- Nouvelle Section : Pourquoi nous choisir --- */}
        <div className="mt-24 md:mt-32">
          {/* Title Framed by Two Horizontal Lines */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto mb-4">
              <div className="h-[2px] bg-gradient-to-r from-transparent to-[#022f4b] flex-grow rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#022f4b] tracking-tight whitespace-nowrap">
                {t('about.why_choose_us_title')}
              </h2>
              <div className="h-[2px] bg-gradient-to-l from-transparent to-[#022f4b] flex-grow rounded-full"></div>
            </div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {t('about.why_choose_us_subtitle')}
            </p>
          </div>

          {/* Alternating Image and Text Layout */}
          <div className="flex flex-col gap-16 md:gap-24 text-left mt-16 max-w-6xl mx-auto">
            
            {/* Section 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
              <div className="w-[75%] max-w-[280px] md:max-w-[400px] lg:max-w-none lg:w-1/3 mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-gray-400/60 border border-gray-100 transform -rotate-2">
                <Image 
                  src="/imaj WELJ 1.jpeg" 
                  alt="Expertise Welj" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover" 
                />
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#022f4b] mb-6 leading-tight">
                  {t('about.s1_title')}
                </h3>
                <ul className="space-y-4">
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.s1_b1') }} />
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.s1_b2') }} />
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.s1_b3') }} />
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-16">
              <div className="w-[75%] max-w-[280px] md:max-w-[400px] lg:max-w-none lg:w-1/3 mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-gray-400/60 border border-gray-100 transform rotate-2">
                <Image 
                  src="/imaj WELJ 2.jpeg" 
                  alt="Achetez partout avec Welj" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover" 
                />
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#022f4b] mb-6 leading-tight">
                  {t('about.s2_title')}
                </h3>
                <ul className="space-y-4">
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.s2_b1') }} />
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.s2_b2') }} />
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.s2_b3') }} />
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
              <div className="w-[75%] max-w-[280px] md:max-w-[400px] lg:max-w-none lg:w-1/3 mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-gray-400/60 border border-gray-100 transform -rotate-2">
                <Image 
                  src="/imaj-welj-3.png" 
                  alt="Transitaire de confiance" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover" 
                />
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#022f4b] mb-6 leading-tight">
                  {t('about.s3_title')}
                </h3>
                <ul className="space-y-4">
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.s3_b1') }} />
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.s3_b2') }} />
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.s3_b3') }} />
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
