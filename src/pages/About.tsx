import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Calendar, 
  MessageCircle,
  Phone,
  Building2,
  Sparkles,
  ThermometerSnowflake,
  FileCheck
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface AboutProps {
  onOpenOrderModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenOrderModal }) => {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Integrity & Genuineness',
      desc: 'We never compromise on drug quality. 100% of our products are procured directly from certified distributors.'
    },
    {
      icon: Heart,
      title: 'Patient-First Compassion',
      desc: 'Treating every customer with patience, warmth, and reliable healthcare counseling.'
    },
    {
      icon: ThermometerSnowflake,
      title: 'Cold-Chain Excellence',
      desc: 'Dedicated pharmaceutical refrigeration ensuring optimal temperature for insulins, vaccines, and eye drops.'
    },
    {
      icon: FileCheck,
      title: 'Strict Rx Compliance',
      desc: 'Responsible dispensing with verification of prescriptions and dosage instructions.'
    }
  ];

  const timeline = [
    {
      year: 'Foundation',
      title: 'Inception in Kothwara Bazar, Manpur',
      desc: 'Established as a trusted community retail pharmacy near the sacred Hanuman Mandir landmark.'
    },
    {
      year: 'Growth',
      title: 'Expanded Healthcare Equipment & Surgical Range',
      desc: 'Introduced high-accuracy digital BP machines, glucometers, nebulizers, and orthopedic rehabilitation aids.'
    },
    {
      year: 'Modernization',
      title: 'Cold-Chain Storage & Inventory Digitalization',
      desc: 'Upgraded to medical-grade temperature-monitored refrigeration and automated inventory management.'
    },
    {
      year: 'Present Day',
      title: 'Digital Prescription & WhatsApp Delivery Support',
      desc: 'Serving thousands of families in Manpur and Gaya with online stock checking and swift home delivery.'
    }
  ];

  const achievements = [
    { number: '10,000+', label: 'Prescriptions Dispensed' },
    { number: '100%', label: 'Genuine Products Guaranteed' },
    { number: '5,000+', label: 'Medicines & Surgical Items' },
    { number: '15+ Hrs', label: 'Daily Service (7:30 AM – 10:30 PM)' }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              <span>About OM MEDICAL HALL</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              A Legacy of Trust, Genuine Care & Community Health
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Serving the residents of Manpur, Kothwara Bazar, and Gaya, Bihar with genuine pharmaceuticals, essential medical supplies, and compassionate healthcare guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Business Story & Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <span>Our Story</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Rooted in the Heart of Manpur, Gaya
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>OM MEDICAL HALL</strong> was established with a singular, vital purpose: to ensure that every resident and family in Manpur, Gaya has immediate access to 100% genuine, authentic, and properly stored medicines when they need them most.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Located adjacent to the landmark <strong>Hanuman Mandir in Kothwara Bazar</strong>, our pharmacy has grown from a humble neighborhood dispensary into a full-scale healthcare store stocking thousands of life-saving antibiotics, cardiac and diabetic formulations, pediatric essentials, maternal care products, and surgical instruments.
            </p>
            
            <div className="p-4 bg-emerald-50/70 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="font-bold text-slate-900 dark:text-white">Store Location:</span> {SITE_CONFIG.address.full}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80"
                alt="Pharmacist dispensing medicines at OM Medical Hall"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Certified Drug License</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Compliant with State & Central Pharmacy Standards</p>
                </div>
                <ShieldCheck className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-100/80 dark:bg-slate-900/50 py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To dispense uncompromised, 100% genuine medications, healthcare consumables, and medical equipment with professional integrity, fast service, transparent pricing, and personalized care for every individual and family in Gaya district.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To be the most dependable and progressive community pharmacy in Bihar, seamlessly bridging traditional patient relationships with modern digital ordering, instant inventory checking, and reliable doorstep medicine fulfillment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
            <span>Our Principles</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Core Values
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
            The guiding commitments behind every prescription we fulfill and every patient we advise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Owner / Lead Pharmacist Message */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-700 shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-2xl">
              ❝
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Message from the Pharmacist Desk
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
              "Healthcare is not just about selling a strip of tablets; it is about saving lives, offering genuine medicines with proper storage, and giving clear instructions to the patient on how and when to take their doses. At OM MEDICAL HALL, our promise to every family in Manpur and Gaya is total honesty, authentic medicines, and constant availability."
            </p>
            <div className="pt-4 border-t border-slate-700 flex items-center justify-between">
              <div>
                <p className="font-bold text-white text-sm">Owner & Managing Pharmacist</p>
                <p className="text-xs text-emerald-400">OM MEDICAL HALL, Kothwara Bazar, Gaya</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400">Helpline</p>
                <p className="font-bold text-sm text-emerald-400">{SITE_CONFIG.displayPhone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Timeline / Journey */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
            <span>Our Journey</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Evolution of OM MEDICAL HALL
          </h2>
        </div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col sm:flex-row items-start ${
                idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
              } gap-6`}
            >
              {/* Center Dot */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-900 z-10" />

              {/* Content Box */}
              <div className="ml-10 sm:ml-0 sm:w-1/2 p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs">
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 mb-1">
                  {item.year}
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Numbers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-600 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {achievements.map((ach, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-3xl sm:text-5xl font-black">{ach.number}</p>
                <p className="text-xs sm:text-sm text-emerald-100 font-medium">{ach.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
