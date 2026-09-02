import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_CONFIG } from '../config/siteConfig';

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'OM MEDICAL HALL - Trusted Pharmacy & Healthcare in Manpur, Gaya',
    description: 'Providing genuine medicines, healthcare products, surgical supplies, baby care, and live medicine stock checker in Manpur, Gaya. Call/WhatsApp 9939473076.',
  },
  '/about': {
    title: 'About OM MEDICAL HALL - Our Story, Mission & Certified Pharmacy',
    description: 'Learn about OM MEDICAL HALL near Hanuman Mandir, Kothwara Bazar, Manpur, Gaya. 100% genuine medicines, licensed pharmacists, and cold-chain storage.',
  },
  '/services': {
    title: 'Healthcare Services & Medicine Stock Checker - OM MEDICAL HALL',
    description: 'Browse prescription medicines, OTC drugs, diagnostic BP & glucose monitors, baby care, surgical items, and check live stock availability.',
  },
  '/gallery': {
    title: 'Store Gallery & Walkthrough - OM MEDICAL HALL Manpur, Gaya',
    description: 'Explore photos of our organized medicine shelves, clean interior, cold-chain refrigeration units, and medical diagnostic equipment.',
  },
  '/contact': {
    title: 'Contact Us & Location Map - OM MEDICAL HALL Gaya',
    description: 'Get directions to Hanuman Mandir, Kothwara Bazar, Manpur, Gaya. Call 9939473076 or order medicines instantly on WhatsApp.',
  },
  '/login': {
    title: 'Patient & Staff Portal Login - OM MEDICAL HALL',
    description: 'Secure authentication portal for prescription refills, order tracking, and pharmacist management at OM MEDICAL HALL.',
  },
};

export const SEOHead: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname] || pageMeta['/'];
    document.title = meta.title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', meta.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', meta.title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', meta.description);
    }
  }, [location.pathname]);

  return null;
};
