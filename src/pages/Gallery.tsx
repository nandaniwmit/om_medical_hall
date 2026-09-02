import React, { useState } from 'react';
import { 
  X, 
  ZoomIn, 
  Filter, 
  MapPin, 
  ShieldCheck, 
  Building2, 
  Pill, 
  ThermometerSnowflake, 
  Activity,
  MessageCircle
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  caption: string;
}

interface GalleryProps {
  onOpenOrderModal: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenOrderModal }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Pharmacy Front View & Signage',
      category: 'Store Front',
      image: 'https://images.unsplash.com/photo-1586015554060-8dbdd6496526?auto=format&fit=crop&w=1000&q=80',
      caption: 'Main entrance of OM MEDICAL HALL near Hanuman Mandir, Kothwara Bazar, Manpur, Gaya.'
    },
    {
      id: 2,
      title: 'Organized Prescription Medicine Shelves',
      category: 'Medicine Shelves',
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1000&q=80',
      caption: 'Categorized pharmaceutical formulations arranged systematically for rapid and error-free dispensing.'
    },
    {
      id: 3,
      title: 'Temperature-Controlled Cold Storage',
      category: 'Cold Storage',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80',
      caption: 'Medical-grade refrigeration unit keeping insulins, biologicals, and vaccines between 2°C to 8°C.'
    },
    {
      id: 4,
      title: 'Healthcare Monitoring & Diagnostic Devices',
      category: 'Health Devices',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
      caption: 'Display section featuring Omron BP monitors, glucometers, pulse oximeters, and nebulizers.'
    },
    {
      id: 5,
      title: 'Consultation & Dispensing Counter',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80',
      caption: 'Pharmacist dispensing counter where prescriptions are carefully reviewed and explained to patients.'
    },
    {
      id: 6,
      title: 'Mother, Infant & Baby Care Section',
      category: 'Baby & Wellness',
      image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=1000&q=80',
      caption: 'Dedicated racks for baby nutrition, diapers, gentle washes, and nutritional supplements.'
    },
    {
      id: 7,
      title: 'First Aid & Surgical Supply Unit',
      category: 'Surgical & First Aid',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80',
      caption: 'Sterile surgical dressings, antiseptic solutions, cotton rolls, and orthopedic belts.'
    },
    {
      id: 8,
      title: 'Clean & Sanitized Store Interior',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1000&q=80',
      caption: 'Hygienic, well-lit, air-ventilated store premises maintained according to standard pharmaceutical guidelines.'
    }
  ];

  const filterCategories = [
    'All',
    'Store Front',
    'Medicine Shelves',
    'Interior',
    'Health Devices',
    'Cold Storage',
    'Baby & Wellness',
    'Surgical & First Aid'
  ];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              <span>Photo Gallery</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Inside OM MEDICAL HALL
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Take a virtual walkthrough of our store at Kothwara Bazar, Manpur. Explore our organized medicine shelves, cold-storage refrigeration, surgical instruments, and modern dispensing setup.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeFilter === cat
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="p-3 bg-emerald-600 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold rounded-md">
                  {item.category}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-fade-in">
          <div
            className="relative bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-800"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full transition"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative max-h-[65vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[65vh] w-full object-contain"
              />
            </div>

            <div className="p-6 bg-white dark:bg-slate-900">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {selectedImage.caption}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    onOpenOrderModal();
                  }}
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-xl whitespace-nowrap shadow-md flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order from Store</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
