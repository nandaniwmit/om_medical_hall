import React, { useState } from 'react';
import { 
  Pill, 
  Activity, 
  Thermometer, 
  Baby, 
  Stethoscope, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle,
  HelpCircle,
  FileText,
  Clock,
  Search
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface ServicesProps {
  onOpenOrderModal: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenOrderModal }) => {
  const [activeCategoryTab, setActiveCategoryTab] = useState('All');

  const categories = [
    'All',
    'Prescription Medicines',
    'OTC Medicines',
    'Health Devices',
    'Medical Equipment',
    'Baby Care',
    'Supplements',
    'Home & Surgical Care',
  ];

  const serviceList = [
    {
      id: 'srv-1',
      category: 'Prescription Medicines',
      icon: Pill,
      title: 'Genuine Prescription Medications',
      description: 'Full range of acute and chronic medications for cardiology, diabetes, hypertension, neurology, gastroenterology, and oncology from reputed manufacturers.',
      features: [
        '100% Genuine batch verified formulations',
        'Valid prescription verification by licensed pharmacist',
        'Proper dosage & administration instructions provided',
        'Clear billing and authentic packaging'
      ],
      tag: 'Rx Verified'
    },
    {
      id: 'srv-2',
      category: 'OTC Medicines',
      icon: Activity,
      title: 'Over-The-Counter (OTC) Products',
      description: 'Everyday relief for fever, headache, indigestion, cold, acidity, pain, allergies, and oral rehydration salts available over the counter.',
      features: [
        'Paracetamol, Antacids & Digestive Syrups',
        'Cough syrups & Lozenges',
        'Pain relief sprays, balms & gels',
        'Oral rehydration salts (ORS) & electrolytes'
      ],
      tag: 'Daily Relief'
    },
    {
      id: 'srv-3',
      category: 'Health Devices',
      icon: Thermometer,
      title: 'Diagnostic & Monitoring Devices',
      description: 'Clinic-grade home healthcare monitoring equipment for accurate self-health assessment and continuous disease management.',
      features: [
        'Digital Blood Pressure (BP) Monitors (Omron, Dr. Morepen)',
        'Blood Glucose (Sugar) Testing Meters & Strips',
        'Pulse Oximeters & Digital Thermometers',
        'Mesh & Compressor Nebulizers for breathing relief'
      ],
      tag: 'Diagnostics'
    },
    {
      id: 'srv-4',
      category: 'Medical Equipment',
      icon: Stethoscope,
      title: 'Surgical Supplies & Disposables',
      description: 'Sterile clinical disposables, minor surgical instruments, and wound-care consumables for home clinics, nursing care, and family emergencies.',
      features: [
        'Sterile gauze, surgical cotton & adhesive bandages',
        'Antiseptic solutions (Betadine, Savlon, Spirit)',
        'IV infusion sets, syringes & surgical needles',
        'Sterile surgical gloves & 3-ply/N95 protective masks'
      ],
      tag: 'Surgical Essentials'
    },
    {
      id: 'srv-5',
      category: 'Baby Care',
      icon: Baby,
      title: 'Mother & Baby Healthcare',
      description: 'Pediatrician-approved infant nutrition formulas, baby skin wellness products, diaper rash creams, and maternity health essentials.',
      features: [
        'Infant formula milk & weaning cereals (Cerelac, Lactogen)',
        'Baby massage oils, gentle shampoos & lotions (Himalaya, Sebamed)',
        'Premium leak-proof baby diapers & wet wipes',
        'Teething gels, colic relief drops & gripe water'
      ],
      tag: 'Maternal & Baby'
    },
    {
      id: 'srv-6',
      category: 'Supplements',
      icon: Heart,
      title: 'Vitamins & Health Supplements',
      description: 'Comprehensive nutritional supplements to bolster immunity, support bone density, improve stamina, and replenish essential micronutrients.',
      features: [
        'Calcium + Vitamin D3 supplements',
        'B-Complex with Zinc & Vitamin C capsules',
        'Protein powders for adults, pregnant women & seniors',
        'Iron & Folic acid supplements'
      ],
      tag: 'Nutrition & Immunity'
    },
    {
      id: 'srv-7',
      category: 'Home & Surgical Care',
      icon: Sparkles,
      title: 'Orthopedic & Mobility Supports',
      description: 'Ergonomic orthopedic belts, braces, supports, and mobility aids designed to alleviate joint pain and speed up recovery.',
      features: [
        'Lumbosacral (L.S.) belts for lower back pain',
        'Knee caps, ankle binders & cervical collars',
        'Walking sticks, quadripods & commode chairs (on request)',
        'Hot water bottles & electric heating pads'
      ],
      tag: 'Rehab & Support'
    },
    {
      id: 'srv-8',
      category: 'Home & Surgical Care',
      icon: Truck,
      title: 'Express Doorstep Delivery in Gaya',
      description: 'Reliable medicine home delivery across Manpur and Gaya city for regular prescriptions, elderly patients, and emergency medical requirements.',
      features: [
        'Fast turnaround on WhatsApp prescription submission',
        'Temperature-controlled transit for delicate formulations',
        'Cash or UPI on delivery option',
        'Free delivery on qualifying prescription orders'
      ],
      tag: 'Doorstep Service'
    }
  ];

  const filteredServices = activeCategoryTab === 'All'
    ? serviceList
    : serviceList.filter((s) => s.category === activeCategoryTab || s.title.includes(activeCategoryTab));

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              <span>Our Healthcare Services</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Comprehensive Pharmacy & Healthcare Services
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore our wide selection of certified pharmaceuticals, healthcare equipment, baby care products, diagnostic machines, and local delivery services in Manpur, Gaya.
            </p>
          </div>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: MEDICINE STOCK CHECKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Interactive Search Engine
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Check Real-Time Medicine Availability
          </h2>
        </div>
        <MedicineStockChecker onOrderMedicine={(med) => onOpenOrderModal(med)} />
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Browse Services by Category
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
            Click a category to filter our specialized pharmaceutical departments.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveCategoryTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeCategoryTab === tab
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Detailed Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-xs rounded-full">
                      {srv.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    {srv.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {srv.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenOrderModal(srv.title)}
                    className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xs transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire / Order via WhatsApp</span>
                  </button>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="py-3 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center transition"
                  >
                    Call
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Prescription Processing Workflow */}
      <section className="bg-slate-100/80 dark:bg-slate-900/50 py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Simple 3-Step Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How WhatsApp Medicine Ordering Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-black text-lg flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                Send Prescription / List
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Snap a clear photo of your prescription or write down the required medicines on WhatsApp.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-black text-lg flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                Pharmacist Verification
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Our registered pharmacist reviews availability, checks dosage, confirms the total bill, and sends confirmation.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-black text-lg flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                Delivery or Instant Pickup
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Pick up at our Kothwara Bazar store near Hanuman Mandir or receive quick home delivery in Manpur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
