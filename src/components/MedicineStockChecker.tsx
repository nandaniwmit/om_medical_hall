import React, { useState, useMemo } from 'react';
import { 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Filter, 
  RefreshCw, 
  ShoppingCart, 
  FileText, 
  Tag, 
  Info,
  Calendar
} from 'lucide-react';
import medicineData from '../data/medicineStock.json';
import { SITE_CONFIG } from '../config/siteConfig';

export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  composition: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock' | string;
  prescriptionRequired: boolean;
}

interface MedicineStockCheckerProps {
  onOrderMedicine?: (medicineName: string) => void;
  compact?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onOrderMedicine,
  compact = false,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const rawMedicines: MedicineItem[] = medicineData as MedicineItem[];

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(rawMedicines.map((m) => m.category)));
    return ['All', ...cats];
  }, [rawMedicines]);

  // Filter medicines
  const filteredMedicines = useMemo(() => {
    return rawMedicines.filter((item) => {
      const matchSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.composition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      const matchStatus =
        selectedStatus === 'All' || item.status === selectedStatus;

      return matchSearch && matchCategory && matchStatus;
    });
  }, [rawMedicines, searchTerm, selectedCategory, selectedStatus]);

  // Inventory stats
  const stats = useMemo(() => {
    const total = rawMedicines.length;
    const available = rawMedicines.filter((m) => m.status === 'Available').length;
    const limited = rawMedicines.filter((m) => m.status === 'Limited Stock').length;
    const outOfStock = rawMedicines.filter((m) => m.status === 'Out of Stock').length;
    return { total, available, limited, outOfStock };
  }, [rawMedicines]);

  const handleOrder = (name: string, brand: string) => {
    const itemString = `${name} (${brand})`;
    if (onOrderMedicine) {
      onOrderMedicine(itemString);
    } else {
      const text = encodeURIComponent(`Hello OM MEDICAL HALL, I want to check availability and order: ${itemString}`);
      window.open(`https://wa.me/91${SITE_CONFIG.whatsapp}?text=${text}`, '_blank');
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Available</span>
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Limited Stock</span>
          </span>
        );
      case 'Out of Stock':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
            <XCircle className="w-3.5 h-3.5" />
            <span>Out of Stock</span>
          </span>
        );
    }
  };

  return (
    <div id="stock-checker" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200 dark:border-emerald-800">
            <span>Live Pharmacy Inventory</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Medicine Stock & Availability Checker
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Search genuine branded & generic medicines in stock at our Kothwara Bazar store, Manpur.
          </p>
        </div>

        {/* Quick Stats Pill */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
            Total Catalog: <strong>{stats.total}</strong>
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-medium border border-emerald-200 dark:border-emerald-800">
            In Stock: <strong>{stats.available}</strong>
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 font-medium border border-amber-200 dark:border-amber-800">
            Limited: <strong>{stats.limited}</strong>
          </span>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="mt-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Main Search Input */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search medicine by name (e.g. Dolo, Augmentin, BP Monitor)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-slate-900 dark:text-white shadow-inner"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-2.5 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                ✕
              </button>
            )}
          </div>

          {/* Status Quick Filter */}
          <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
            {(['All', 'Available', 'Limited Stock', 'Out of Stock'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedStatus === st
                    ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs">
          <span className="text-slate-400 flex items-center gap-1 pl-1 pr-2 font-medium flex-shrink-0">
            <Filter className="w-3.5 h-3.5" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition font-medium flex-shrink-0 ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Note */}
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <span>
          Showing <strong>{filteredMedicines.length}</strong> items
        </span>
        <span className="flex items-center gap-1 text-[11px] text-emerald-700 dark:text-emerald-400">
          <Info className="w-3 h-3" />
          <span>Don't see your medicine? WhatsApp us directly for stock confirmation.</span>
        </span>
      </div>

      {/* Medicine Grid */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((med) => (
            <div
              key={med.id}
              className="bg-slate-50/70 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-xl p-4 transition-all duration-200 hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-700/60 px-2 py-0.5 rounded">
                    {med.category}
                  </span>
                  {getStatusBadge(med.status)}
                </div>

                <h4 className="font-bold text-slate-900 dark:text-white text-base leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                  {med.name}
                </h4>

                <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400 mt-0.5">
                  Brand: {med.brand}
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2">
                  <span className="font-medium text-slate-600 dark:text-slate-300">Composition:</span> {med.composition}
                </p>

                <div className="mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Exp: <strong>{med.expiry}</strong></span>
                  </div>
                  {med.prescriptionRequired && (
                    <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800">
                      Rx Required
                    </span>
                  )}
                </div>
              </div>

              {/* Price & Action */}
              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">MRP Price</span>
                  <span className="text-base font-extrabold text-slate-900 dark:text-white">
                    ₹{med.mrp.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => handleOrder(med.name, med.brand)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                    med.status === 'Out of Stock'
                      ? 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                  }`}
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>{med.status === 'Out of Stock' ? 'Request Item' : 'Order Now'}</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center bg-slate-50 dark:bg-slate-800/30 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
            <Search className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-2" />
            <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">
              No medicines matched "{searchTerm}"
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1">
              We stock hundreds of additional medicines in store. Please contact our pharmacist directly on WhatsApp to check availability!
            </p>
            <button
              onClick={() => {
                if (onOrderMedicine) {
                  onOrderMedicine(searchTerm);
                } else {
                  window.open(`https://wa.me/91${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(`Hello OM Medical Hall, is ${searchTerm} available in your store?`)}`, '_blank');
                }
              }}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow hover:bg-emerald-700 transition"
            >
              <span>Ask Pharmacist on WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
