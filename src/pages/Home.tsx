import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  Navigation, 
  ShieldCheck, 
  Clock, 
  Truck, 
  Award, 
  HeartHandshake, 
  ChevronRight, 
  Star, 
  Plus, 
  Minus, 
  CheckCircle2, 
  Search, 
  Send,
  Pill,
  Thermometer,
  Activity,
  Baby,
  Sparkles,
  Stethoscope,
  ArrowRight
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface HomeProps {
  onOpenOrderModal: (medicine?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenOrderModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const featuredServices = [
    {
      icon: Pill,
      title: 'Genuine Prescription Medicines',
      desc: '100% authentic medicines sourced directly from authorized pharmaceutical distributors.',
      tag: 'Certified Rx'
    },
    {
      icon: Activity,
      title: 'Chronic Care & Diabetes Management',
      desc: 'Regular monthly refill packages for BP, diabetes, thyroid, and cardiac care.',
      tag: 'Monthly Care'
    },
    {
      icon: Thermometer,
      title: 'Medical Devices & Diagnostics',
      desc: 'Digital BP monitors, glucometers, nebulizers, pulse oximeters, and thermometers.',
      tag: 'Devices'
    },
    {
      icon: Baby,
      title: 'Mother & Baby Health',
      desc: 'Infant nutrition, diapers, skin lotions, gripe water, and pediatrician-recommended essentials.',
      tag: 'Baby Care'
    },
    {
      icon: Stethoscope,
      title: 'First Aid & Surgical Supplies',
      desc: 'Sterile dressings, antiseptic solutions, cotton, surgical gloves, and orthopaedic supports.',
      tag: 'First Aid'
    },
    {
      icon: Truck,
      title: 'Doorstep Medicine Delivery',
      desc: 'Prompt delivery of urgent and routine medications across Manpur and Gaya areas.',
      tag: 'Fast Delivery'
    }
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: '100% Genuine Drugs',
      desc: 'Every batch is sourced from top licensed pharma houses like Cipla, Sun Pharma, Abbott, and Alkem.'
    },
    {
      icon: Clock,
      title: 'Open 7 Days (7:30 AM - 10:30 PM)',
      desc: 'Extended operating hours to serve your family and emergency health needs without delays.'
    },
    {
      icon: Award,
      title: 'Qualified Pharmacist On-Duty',
      desc: 'Professional dosage guidance, drug interaction checks, and patient-first counseling.'
    },
    {
      icon: HeartHandshake,
      title: 'Cold-Chain Refrigeration',
      desc: 'Temperature-controlled specialized storage for insulins, vaccines, eye drops, and biologicals.'
    }
  ];

  const featuredProducts = [
    {
      name: 'Accu-Chek Active Blood Glucose Monitor',
      category: 'Diagnostic Devices',
      price: '₹1,599',
      image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=600&q=80',
      badge: 'Popular'
    },
    {
      name: 'Omron Digital Automatic BP Monitor',
      category: 'Healthcare Equipment',
      price: '₹2,150',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
      badge: 'Best Seller'
    },
    {
      name: 'Himalaya Complete Baby Care Gift Pack',
      category: 'Mother & Baby',
      price: '₹540',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
      badge: 'Essential'
    },
    {
      name: 'Multivitamin & Zinc Daily Immunity Pack',
      category: 'Health Supplements',
      price: '₹280',
      image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=600&q=80',
      badge: 'Immunity'
    }
  ];

  const customerReviews = [
    {
      name: 'Amit Kumar Verma',
      location: 'Kothwara Bazar, Manpur',
      review: 'OM Medical Hall has been our family pharmacy for years. They always have the exact prescribed medicines for my mother’s diabetes and cardiac condition at fair prices.',
      rating: 5,
      date: 'Local Customer'
    },
    {
      name: 'Pooja Kumari',
      location: 'Manpur, Gaya',
      review: 'Very cooperative staff and pharmacist. Ordered medicines on WhatsApp with prescription photo and received them quickly without hassle.',
      rating: 5,
      date: 'Verified Buyer'
    },
    {
      name: 'Rameshwar Singh',
      location: 'Near Hanuman Mandir, Gaya',
      review: 'Genuine medicines and proper billing. It is right next to Hanuman Mandir so very easy to find. Highly recommended for all healthcare needs in Manpur.',
      rating: 5,
      date: 'Regular Customer'
    }
  ];

  const faqs = [
    {
      q: 'Do you deliver medicines at home in Manpur and Gaya?',
      a: 'Yes, we provide swift delivery of genuine medicines, health equipment, and baby care items across Manpur, Kothwara Bazar, and adjacent localities in Gaya upon receiving your order on WhatsApp or call.'
    },
    {
      q: 'Can I order prescription medicines by uploading a photo?',
      a: 'Yes! You can easily upload or send a clear photo of your valid doctor’s prescription through our WhatsApp ordering modal or directly to 9939473076. Our pharmacist will verify and dispense the required dosage.'
    },
    {
      q: 'Are all medicines in your store 100% genuine and verified?',
      a: 'Absolutely. OM Medical Hall is a licensed pharmacy. We source all pharmaceutical formulations directly from authorized company CFA depots and licensed distributors with valid batch numbers and expiry dates.'
    },
    {
      q: 'What are your store timings and payment methods accepted?',
      a: 'We are open 7 days a week from 7:30 AM to 10:30 PM. We accept Cash, UPI (PhonePe, Google Pay, Paytm, BHIM), and debit cards.'
    }
  ];

  const healthTips = [
    {
      title: 'How to Properly Store Insulins and Syrups in Summer',
      category: 'Medicine Care',
      date: 'Healthcare Guide',
      excerpt: 'Keep temperature-sensitive drugs away from direct sunlight and store insulins between 2°C to 8°C before opening.',
      readTime: '3 min read'
    },
    {
      title: 'Managing Seasonal Viral Fevers & Staying Hydrated',
      category: 'Seasonal Health',
      date: 'Wellness Tip',
      excerpt: 'Recognize symptoms of monsoon viral infections, maintain electrolyte balance with ORS, and take paracetamol responsibly.',
      readTime: '4 min read'
    },
    {
      title: 'Daily Blood Sugar Monitoring: Tips for Accurate Readings',
      category: 'Diabetes Care',
      date: 'Diagnostic Advice',
      excerpt: 'Always wash and dry hands thoroughly before pricking, check strip expiration, and log fasting vs post-meal counts.',
      readTime: '3 min read'
    }
  ];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 5000);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 text-white pt-10 pb-20 sm:pb-28">
        {/* Background Subtle Overlay Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        {/* Radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Trusted Chemist & Pharmacy in Manpur, Gaya</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Your Trusted Medical Store for <span className="text-emerald-400">Genuine Medicines</span> & Healthcare
              </h1>

              {/* Description from prompt */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices.
              </p>

              {/* Hero Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                {/* Call Now */}
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/25 flex items-center gap-2.5 transition transform hover:-translate-y-0.5 active:scale-95 text-sm sm:text-base"
                >
                  <Phone className="w-5 h-5 text-slate-950" />
                  <span>Call Now: 9939473076</span>
                </a>

                {/* WhatsApp Order */}
                <button
                  onClick={() => onOpenOrderModal()}
                  className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl shadow-lg shadow-[#25D366]/20 flex items-center gap-2.5 transition transform hover:-translate-y-0.5 active:scale-95 text-sm sm:text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Order</span>
                </button>

                {/* Get Directions */}
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 flex items-center gap-2 transition text-sm sm:text-base"
                >
                  <Navigation className="w-4 h-4 text-emerald-400" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
                <div className="text-left">
                  <p className="text-xl sm:text-2xl font-black text-emerald-400">100%</p>
                  <p className="text-[11px] sm:text-xs text-slate-400">Genuine Medicines</p>
                </div>
                <div className="text-left">
                  <p className="text-xl sm:text-2xl font-black text-white">7:30 AM</p>
                  <p className="text-[11px] sm:text-xs text-slate-400">To 10:30 PM Daily</p>
                </div>
                <div className="text-left">
                  <p className="text-xl sm:text-2xl font-black text-emerald-400">Manpur</p>
                  <p className="text-[11px] sm:text-xs text-slate-400">Gaya, Bihar</p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Card / Pharmacy Highlights */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
                      🏥
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">OM MEDICAL HALL</h3>
                      <p className="text-xs text-slate-400">Kothwara Bazar, Gaya</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full border border-emerald-500/30">
                    Open Now
                  </span>
                </div>

                <div className="my-5 space-y-3.5">
                  <div className="p-3 bg-slate-800/60 rounded-xl flex items-center gap-3 border border-slate-700/50">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <p className="font-bold text-white">Instant Order & Quick Delivery</p>
                      <p className="text-slate-400">Send prescription photo on WhatsApp</p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-800/60 rounded-xl flex items-center gap-3 border border-slate-700/50">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <p className="font-bold text-white">All Top Brands In Stock</p>
                      <p className="text-slate-400">Cipla, Sun Pharma, Abbott, Alkem, GSK</p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-800/60 rounded-xl flex items-center gap-3 border border-slate-700/50">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <p className="font-bold text-white">24/7 Emergency Medicine Support</p>
                      <p className="text-slate-400">Emergency call support at 9939473076</p>
                    </div>
                  </div>
                </div>

                {/* Stock Checker Quick CTA Link */}
                <Link
                  to="/services#stock-checker"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition"
                >
                  <Search className="w-4 h-4" />
                  <span>Check Medicine Stock Online</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <span>About OM MEDICAL HALL</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                Dedicated to the Health & Well-being of Manpur & Gaya
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Located conveniently next to Hanuman Mandir at Kothwara Bazar, Manpur, <strong>OM MEDICAL HALL</strong> is a premier healthcare institution providing authentic medicines, wellness formulations, diagnostic devices, and mother-care supplies to local families.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Licensed Retailer</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Cold-Chain Maintained</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Fair & Transparent MRP</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Expert Consultation</span>
                </div>
              </div>
              <div className="pt-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:gap-3 transition-all text-sm"
                >
                  <span>Read Full Story & Mission</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1586015554060-8dbdd6496526?auto=format&fit=crop&w=800&q=80"
                  alt="OM Medical Hall Pharmacy Interior"
                  className="w-full h-72 sm:h-84 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-bold text-base sm:text-lg">Kothwara Bazar, Manpur</p>
                    <p className="text-xs text-slate-300">Hanuman Mandir Landmark, Gaya 823003</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (MAXIMUM 6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Our Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Complete Healthcare & Pharmacy Solutions
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:gap-2.5 transition-all"
          >
            <span>View All Services</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100/60 dark:bg-emerald-950 px-2.5 py-1 rounded-full">
                      {srv.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => onOpenOrderModal(srv.title)}
                    className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span>Inquire or Order</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="bg-slate-100/80 dark:bg-slate-900/60 py-16 sm:py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Setting the Gold Standard in Community Pharmacy
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              We focus on safety, genuine medicinal formulations, cold-chain assurance, and personalized guidance for every customer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-6 shadow-xs text-center sm:text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 mx-auto sm:mx-0 shadow-md shadow-emerald-600/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. MEDICINE STOCK CHECKER PREVIEW (EXCLUSIVE REQUIREMENT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicineStockChecker onOrderMedicine={(med) => onOpenOrderModal(med)} />
      </section>

      {/* 6. FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Popular Essentials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Health Devices & Daily Care
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:gap-2.5 transition-all"
          >
            <span>Explore All Products</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((prod, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition group flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm">
                  {prod.badge}
                </span>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    {prod.category}
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm mt-1 line-clamp-2">
                    {prod.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-base font-extrabold text-slate-900 dark:text-white">
                    {prod.price}
                  </span>
                  <button
                    onClick={() => onOpenOrderModal(prod.name)}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-xs transition"
                  >
                    Quick Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS PREVIEW */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-10 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-500/30">
              <span>Customer Satisfaction</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Trusted by Hundreds of Families in Manpur
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Authentic feedback from residents of Kothwara Bazar, Gaya, and surrounding neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerReviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    "{rev.review}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/80 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm">{rev.name}</h4>
                    <p className="text-[11px] text-emerald-400">{rev.location}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 bg-slate-700/60 px-2 py-0.5 rounded">
                    {rev.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Everything you need to know about purchasing medicines, prescriptions, and timings.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white text-sm sm:text-base hover:text-emerald-600 dark:hover:text-emerald-400 transition"
              >
                <span>{faq.q}</span>
                <span className="p-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500">
                  {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 9. LATEST HEALTH TIPS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Pharmacist Advice</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Latest Health & Wellness Tips
            </h2>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:gap-2.5 transition-all"
          >
            <span>Learn More About Us</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {healthTips.map((tip, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 mb-3">
                  <span>{tip.category}</span>
                  <span className="text-slate-400">{tip.readTime}</span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 leading-snug">
                  {tip.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tip.excerpt}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-medium text-slate-400">
                <span>Published by OM Medical Hall Care Desk</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Have a Doctor’s Prescription? Order in 1 Click!
            </h2>
            <p className="text-xs sm:text-base text-emerald-100 leading-relaxed">
              Send a photo of your prescription to our WhatsApp number <strong>9939473076</strong>. We will check availability, pack it securely, and have it ready for you.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenOrderModal()}
                className="px-6 py-3.5 bg-white hover:bg-emerald-50 text-emerald-900 font-bold rounded-xl shadow-lg transition"
              >
                Send Prescription on WhatsApp
              </button>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="px-6 py-3.5 bg-emerald-800/60 hover:bg-emerald-800 text-white font-semibold rounded-xl border border-emerald-400/40 transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store: {SITE_CONFIG.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. NEWSLETTER SUBSCRIPTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            Subscribe for Monthly Medicine Refill Reminders & Health Tips
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mt-1 mb-5">
            Get seasonal health advice and timely reminder alerts for chronic care medications.
          </p>

          {newsletterSuccess ? (
            <div className="p-3 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 rounded-xl text-xs font-semibold max-w-md mx-auto">
              Thank you! You have been registered for monthly health notifications.
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email or phone number"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-slate-900 dark:text-white"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-1.5"
              >
                <Send className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
