"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function PricingPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4 text-center mt-20">
      <h1 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">{t('pricing.title')}</h1>
      <p className="text-gray-500 max-w-md">{t('pricing.dev_msg')}</p>
    </div>
  );
}
