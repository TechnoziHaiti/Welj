"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { dictionaries, Language, Dictionary } from '@/locales/dictionaries';

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('FR');

  // Helper to get nested object property by string path (e.g., "nav.home")
  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = dictionaries[lang];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation key not found: ${path} in ${lang}`);
        return path;
      }
      current = current[key];
    }
    
    return current as string;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
