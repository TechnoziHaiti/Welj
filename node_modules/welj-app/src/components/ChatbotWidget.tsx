"use client";

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { X, Send, ChevronDown } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  isBot: boolean;
};

export default function ChatbotWidget() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'faq' | 'ai'>('faq');
  
  // AI Chat state
  const [aiMessages, setAiMessages] = useState<Message[]>([
    { id: 1, text: t('chatbot.ai_intro'), isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const aiEndRef = useRef<HTMLDivElement>(null);

  // FAQ Chat state
  const [faqMessages, setFaqMessages] = useState<Message[]>([
    { id: 1, text: t('chatbot.faq_intro'), isBot: true }
  ]);
  const faqEndRef = useRef<HTMLDivElement>(null);

  // Dynamic FAQ list state
  const [availableFaqs, setAvailableFaqs] = useState<string[]>(['q4', 'q5', 'q6', 'q7']);
  const [visibleFaqs, setVisibleFaqs] = useState<string[]>(['q1', 'q2', 'q3']);

  // Auto-scroll to bottom of chats
  useEffect(() => {
    if (activeTab === 'ai') aiEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (activeTab === 'faq') faqEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [aiMessages, faqMessages, activeTab, isOpen]);

  const handleSendAi = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;
    
    // Add user message
    const newUserMsg = { id: Date.now(), text: inputValue, isBot: false };
    setAiMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    
    // Simulate AI thinking (for later)
    setTimeout(() => {
      setAiMessages(prev => [...prev, { id: Date.now(), text: "Désolé, l'intelligence artificielle est actuellement en cours de maintenance. Veuillez nous contacter via la page Contact.", isBot: true }]);
    }, 1000);
  };

  const handleFaqClick = (questionKey: string) => {
    const answerKey = questionKey.replace('q', 'a');
    
    // Get translations
    const qText = t(`chatbot.faq.${questionKey}` as any);
    const aText = t(`chatbot.faq.${answerKey}` as any);
    
    // Add question as user message
    setFaqMessages(prev => [
      ...prev, 
      { id: Date.now(), text: qText, isBot: false }
    ]);
    
    // Add answer immediately
    setTimeout(() => {
      setFaqMessages(prev => [
        ...prev, 
        { id: Date.now() + 1, text: aText, isBot: true }
      ]);
    }, 300);

    // Remove clicked question from visible list
    const newVisible = visibleFaqs.filter(q => q !== questionKey);
    
    // Pull next question from available pool if possible
    if (availableFaqs.length > 0) {
      const nextQ = availableFaqs[0];
      setAvailableFaqs(prev => prev.slice(1));
      setVisibleFaqs([...newVisible, nextQ]);
    } else {
      setVisibleFaqs(newVisible);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'} attention-shake`}>
        <style>{`
          /* Animation for shaking every 1 minute (60s) */
          @keyframes attentionShake {
            0%, 96% { transform: rotate(0deg) scale(1); }
            97% { transform: rotate(-10deg) scale(1.1); }
            98% { transform: rotate(10deg) scale(1.1); }
            99% { transform: rotate(-10deg) scale(1.1); }
            100% { transform: rotate(0deg) scale(1); }
          }
          .attention-shake {
            animation: attentionShake 60s infinite ease-in-out;
          }
        `}</style>
        
        {/* The Button */}
        <div 
          className="relative w-16 h-16 bg-gradient-to-br from-[#021f3a] via-[#1E63FF] to-[#0A84FF] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(30,99,255,0.5)] cursor-pointer border border-white/30 hover:shadow-[0_10px_40px_rgba(30,99,255,0.7)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Ouvrir le Chatbot"
        >
          {/* Glass glare effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-full pointer-events-none"></div>
          
          <div className="relative flex items-center justify-center w-full h-full p-2.5">
            <img 
              src="/icon welj_bot.png" 
              alt="WELJ Bot" 
              className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-110"
              style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2)) brightness(0) invert(1)' }}
            />
          </div>
        </div>
      </div>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-[90vw] sm:w-[380px] h-[600px] max-h-[85vh] bg-white/95 backdrop-blur-xl border border-white/40 shadow-[0_15px_40px_rgba(0,0,0,0.15)] rounded-2xl flex flex-col overflow-hidden transition-all duration-400 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100 visible' : 'scale-50 opacity-0 invisible pointer-events-none'}`}
      >
        {/* Header with Tabs integrated */}
        <div className="bg-white px-4 pt-4 pb-3 shrink-0 border-b border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="WELJ Logo" className="h-8 object-contain" />
              <div>
                <h3 className="font-bold text-[15px] text-[#022f4b] leading-tight">{t('chatbot.title')}</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-[11px] text-gray-400 font-medium">En ligne</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Tab Bar — sliding pill effect */}
          <div className="relative flex bg-slate-200/70 p-1 rounded-full">
            {/* Sliding white pill */}
            <div
              className="absolute top-1 left-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out"
              style={{ transform: activeTab === 'ai' ? 'translateX(100%)' : 'translateX(0)' }}
            />
            <button 
              onClick={() => setActiveTab('faq')}
              className={`relative flex-1 py-1.5 text-[13px] font-bold rounded-full flex items-center justify-center z-10 transition-colors duration-300 ${
                activeTab === 'faq' ? 'text-[#022f4b]' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {t('chatbot.tab_faq')}
            </button>
            <button 
              onClick={() => setActiveTab('ai')}
              className={`relative flex-1 py-1.5 text-[13px] font-bold rounded-full flex items-center justify-center z-10 transition-colors duration-300 ${
                activeTab === 'ai' ? 'text-[#022f4b]' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {t('chatbot.tab_ai')}
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden relative bg-[#f8fafc]">
          
          {/* FAQ Tab Content */}
          <div className={`absolute inset-0 flex flex-col h-full transition-all duration-300 ${activeTab === 'faq' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'}`}>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {faqMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div 
                    className={`max-w-[85%] p-3 text-[13px] leading-relaxed shadow-sm ${msg.isBot ? 'bg-white text-gray-700 rounded-2xl rounded-tl-sm border border-gray-100' : 'bg-[#022f4b] text-white rounded-2xl rounded-tr-sm'}`}
                    dangerouslySetInnerHTML={{ __html: msg.text }}
                  />
                </div>
              ))}
              
              {/* FAQ Options */}
              <div className="pt-2 pb-4 space-y-2">
                {visibleFaqs.map((qKey) => (
                  <button
                    key={qKey}
                    onClick={() => handleFaqClick(qKey)}
                    className="w-full text-left p-3 bg-white border border-[#022f4b]/20 hover:border-[#1E63FF] rounded-xl text-[13px] text-[#022f4b] font-medium shadow-sm hover:shadow-md transition-all duration-200 group flex items-center justify-between"
                  >
                    <span>{t(`chatbot.faq.${qKey}` as any)}</span>
                    <ChevronDown size={14} className="text-[#1E63FF] opacity-0 group-hover:opacity-100 -rotate-90 transition-all" />
                  </button>
                ))}
              </div>
              <div ref={faqEndRef} />
            </div>
          </div>

          {/* AI Tab Content */}
          <div className={`absolute inset-0 flex flex-col h-full transition-all duration-300 ${activeTab === 'ai' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {aiMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div 
                    className={`max-w-[85%] p-3 text-[13px] leading-relaxed shadow-sm ${msg.isBot ? 'bg-white text-gray-700 rounded-2xl rounded-tl-sm border border-gray-100' : 'bg-[#022f4b] text-white rounded-2xl rounded-tr-sm'}`}
                    dangerouslySetInnerHTML={{ __html: msg.text }}
                  />
                </div>
              ))}
              <div ref={aiEndRef} />
            </div>
            
            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100 shrink-0">
              <form onSubmit={handleSendAi} className="flex items-center gap-2 relative">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={t('chatbot.placeholder')}
                  className="flex-1 bg-[#f4f6f8] border-none rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E63FF]/30 transition-all text-gray-700"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-9 bg-[#1E63FF] text-white rounded-full flex items-center justify-center hover:bg-blue-600 disabled:opacity-50 disabled:bg-gray-300 transition-colors"
                  aria-label={t('chatbot.send')}
                >
                  <Send size={14} className="ml-0.5" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
