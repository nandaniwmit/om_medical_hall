import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Shield, 
  ChevronRight, 
  Heart, 
  ExternalLink,
  MessageCircle,
  FileText
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);

  // === STEP 11 MANDATORY GLOBAL TRACKING HOOK INTEGRATION ===
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }
    if (!cid) return;

    let visitorId =
      localStorage.getItem('wmit_visitor_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId =
      sessionStorage.getItem('wmit_session_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, '').split('/').pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init',
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change',
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], {
          type: 'application/json',
        });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: NodeJS.Timeout;
    let isIdle = false;
    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach((evt) =>
      document.addEventListener(evt, resetIdleTimer, { passive: true })
    );
    resetIdleTimer(); // Initialize idle timer

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };
    window.addEventListener('popstate', handleLocationChange);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach((evt) =>
        document.removeEventListener(evt, resetIdleTimer)
      );
      clearTimeout(idleTimer);
    };
  }, []);

  const openModal = (type: 'privacy' | 'terms' | 'disclaimer') => {
    if (type === 'privacy') {
      setModalContent({
        title: 'Privacy Policy',
        content: `At OM MEDICAL HALL, we prioritize the confidentiality and safety of our customers' health records, prescription uploads, and personal contact information. We strictly follow drug control and customer data privacy standards. All inquiries, prescriptions, and order information shared through WhatsApp or our website are used exclusively for medicine verification and fulfillment in Manpur, Gaya.`,
      });
    } else if (type === 'terms') {
      setModalContent({
        title: 'Terms of Service',
        content: `Medicines requiring a valid doctor's prescription (Schedule H, H1, X) will only be dispensed after pharmacist verification. Prices and stock availability shown on our Stock Checker are indicative based on our daily store inventory at Hanuman Mandir, Kothwara Bazar, Gaya. Payment is accepted via Cash, UPI, and Digital Cards upon verification.`,
      });
    } else {
      setModalContent({
        title: 'Medical Disclaimer',
        content: `The information provided on this website and our medicine stock checker is for general informational and purchasing convenience purposes only. It is not intended as medical advice or a substitute for professional clinical consultation. Always consult a registered medical practitioner or your doctor before starting any medication.`,
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 relative z-20">
      {/* Top Banner with Quick Actions */}
      <div className="bg-emerald-900/60 border-b border-emerald-800/60 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-emerald-700/60 border border-emerald-500/30 flex items-center justify-center text-white text-2xl">
              🏥
            </div>
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg">
                Need Medicines Urgently in Manpur, Gaya?
              </h4>
              <p className="text-emerald-200 text-xs sm:text-sm">
                Get genuine medicines delivered or ready for instant store pickup.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/91${SITE_CONFIG.whatsapp}?text=${encodeURIComponent('Hello OM Medical Hall, I want to inquire about medicines.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us: {SITE_CONFIG.whatsapp}</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm rounded-xl border border-slate-700 transition"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call: {SITE_CONFIG.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: About & Info */}
          <div className="space-y-4">
            <div className="bg-slate-800/80 p-3 rounded-2xl inline-block border border-slate-700/60">
              <Logo showTagline={false} />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Your most trusted retail pharmacy and medical supply store in Manpur, Gaya. 
              Dedicated to dispensing 100% genuine pharmaceutical drugs, baby products, medical devices, and daily health essentials.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-950/50 p-2.5 rounded-xl border border-emerald-900/60">
              <Shield className="w-4 h-4" />
              <span>Govt. Licensed Pharmacy • Reg. Pharmacist</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SITE_CONFIG.navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-emerald-400 flex items-center gap-2 transition"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services#stock-checker"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-2 transition"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Medicine Stock Checker 🔍</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories & Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Healthcare Range
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">•</span> Prescription & OTC Medicines
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">•</span> Blood Pressure & Glucose Monitors
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">•</span> Cardiac & Diabetic Care Drugs
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">•</span> Mother & Baby Health Essentials
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">•</span> Surgical Bandages & Antiseptics
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">•</span> Multivitamins & Health Supplements
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Working Hours */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Store Location & Hours
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  {SITE_CONFIG.address.landmark}, {SITE_CONFIG.address.street}, {SITE_CONFIG.address.bazar}, {SITE_CONFIG.address.area}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} - {SITE_CONFIG.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-emerald-400 transition">
                  {SITE_CONFIG.displayPhone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{SITE_CONFIG.workingHours.hours}</p>
                  <p className="text-xs text-slate-400">{SITE_CONFIG.workingHours.days}</p>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Policy Links */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => openModal('privacy')}
              className="hover:text-emerald-400 transition"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => openModal('terms')}
              className="hover:text-emerald-400 transition"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => openModal('disclaimer')}
              className="hover:text-emerald-400 transition"
            >
              Medical Disclaimer
            </button>
            <Link to="/contact" className="hover:text-emerald-400 transition">
              Help & Support
            </Link>
          </div>

          <div className="text-slate-500 text-xs">
            Serving Manpur, Kothwara Bazar, Gaya & nearby regions.
          </div>
        </div>

        {/* STEP 12 MANDATORY COPYRIGHT LINE WITH WMIT POPUP TRIGGER IN CENTER */}
        <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center">
          <div>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.businessName}. All rights reserved.
          </div>

          {/* EXACT MANDATORY WMIT POPUP TRIGGER */}
          <div className="py-1">
            <a href="#" className="wmit-popup-trigger font-medium text-emerald-400 hover:text-emerald-300 underline underline-offset-4">
              Developed by WMIT
            </a>
          </div>

          <div className="flex items-center gap-1 text-slate-500">
            <span>Genuine Healthcare Partner</span>
          </div>
        </div>
      </div>

      {/* Policy Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-slate-900 border border-slate-800 text-slate-200 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-400" />
              {modalContent.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {modalContent.content}
            </p>
            <button
              onClick={() => setModalContent(null)}
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs sm:text-sm transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
