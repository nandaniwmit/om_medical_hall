import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FloatingActionsProps {
  onOpenOrderModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons Container (Bottom Right) */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="pointer-events-auto p-3 bg-slate-900/90 dark:bg-slate-800 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          aria-label="Call OM MEDICAL HALL"
          className="pointer-events-auto hidden sm:flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus:outline-none"
        >
          <Phone className="w-4 h-4" />
          <span className="text-xs">Call 9939473076</span>
        </a>

        {/* Floating WhatsApp Button with pulse indicator */}
        <button
          onClick={onOpenOrderModal}
          aria-label="Order on WhatsApp"
          className="pointer-events-auto relative group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-[#25D366]"></span>
          </span>
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">WhatsApp Order</span>
        </button>
      </div>

      {/* Sticky Bottom Mobile Bar for instant access */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-3 py-2 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="flex-1 py-2.5 px-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-700"
        >
          <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Call Now</span>
        </a>

        <button
          onClick={onOpenOrderModal}
          className="flex-[1.5] py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/30"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Order on WhatsApp</span>
        </button>
      </div>
    </>
  );
};
