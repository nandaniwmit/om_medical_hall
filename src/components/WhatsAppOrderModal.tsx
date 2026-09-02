import React, { useState } from 'react';
import { X, Send, Phone, Upload, CheckCircle2, FileText, Clock, MapPin, User, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  initialMedicine = '',
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState(initialMedicine);
  const [hasPrescription, setHasPrescription] = useState<'Yes' | 'No'>('No');
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [preferredTime, setPreferredTime] = useState('Standard (Within 2 Hours)');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Update initial medicine if passed
  React.useEffect(() => {
    if (initialMedicine) {
      setMedicineName(initialMedicine);
    }
  }, [initialMedicine]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError('File size must be under 10MB');
        return;
      }
      setPrescriptionFile(file);
      setHasPrescription('Yes');
      setError('');
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
    }
  };

  const handleRemoveFile = () => {
    setPrescriptionFile(null);
    setFilePreview(null);
    setHasPrescription('No');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim() || !medicineName.trim()) {
      setError('Please fill in required fields: Name, Phone Number, and Medicine Required.');
      return;
    }

    const prescriptionStatusText = prescriptionFile 
      ? `Yes (Prescription Attached: ${prescriptionFile.name})` 
      : hasPrescription;

    // Construct formatted WhatsApp message
    const formattedMessage = 
`Hello ${SITE_CONFIG.businessName}, Medicine Order
━━━━━━━━━━━━━━━━━━━━
👤 Customer Name: ${customerName.trim()}
📞 Phone: ${phone.trim()}
${email.trim() ? `✉️ Email: ${email.trim()}\n` : ''}💊 Medicine Required: ${medicineName.trim()}
📍 Address: ${address.trim() || 'Pickup at Store / Manpur'}
📋 Prescription: ${prescriptionStatusText}
⏰ Preferred Time: ${preferredTime}
${message.trim() ? `📝 Notes: ${message.trim()}\n` : ''}━━━━━━━━━━━━━━━━━━━━
Sent via OM Medical Hall Web Portal`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/91${SITE_CONFIG.whatsapp}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-xl my-8 shadow-2xl overflow-hidden relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-modal-title"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-xl font-bold">
              💊
            </div>
            <div>
              <h3 id="order-modal-title" className="text-xl font-bold tracking-tight">
                Order Medicines on WhatsApp
              </h3>
              <p className="text-xs text-emerald-100 mt-0.5">
                Quick home delivery or store pickup in Manpur, Gaya • WhatsApp: +91 {SITE_CONFIG.whatsapp}
              </p>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {error && (
            <div className="p-3 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 rounded-xl text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Customer Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Customer Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-slate-900 dark:text-white"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-slate-900 dark:text-white"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="yourname@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-slate-900 dark:text-white"
              />
            </div>

            {/* Preferred Delivery Time */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Time
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-slate-900 dark:text-white"
                >
                  <option value="Immediate (Urgent Order)">Immediate (Urgent Order)</option>
                  <option value="Within 2 Hours (Standard)">Within 2 Hours (Standard)</option>
                  <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                  <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
                  <option value="Self Store Pickup">Self Store Pickup</option>
                </select>
              </div>
            </div>
          </div>

          {/* Medicine Name / List */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Required & Quantity <span className="text-rose-500">*</span>
            </label>
            <textarea
              required
              rows={2}
              placeholder="e.g. Dolo 650 (1 Strip), Pan-D (1 Strip), Betadine 100ml..."
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-slate-900 dark:text-white"
            />
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address / Landmark
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="House No., Street, Near Hanuman Mandir / Kothwara Bazar, Manpur, Gaya"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Upload Prescription */}
          <div className="p-3.5 bg-emerald-50/50 dark:bg-emerald-950/30 border border-dashed border-emerald-300 dark:border-emerald-800 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-600" />
                Attach Doctor's Prescription (Optional / If Rx)
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">JPG, PNG, PDF &lt; 10MB</span>
            </div>

            {!prescriptionFile ? (
              <label className="flex flex-col items-center justify-center p-3 bg-white dark:bg-slate-800/80 rounded-lg cursor-pointer hover:bg-emerald-50/50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition group">
                <Upload className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-1 group-hover:scale-110 transition" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Click to select prescription photo
                </span>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            ) : (
              <div className="flex items-center justify-between p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-emerald-300 dark:border-emerald-700">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  {filePreview ? (
                    <img src={filePreview} alt="Preview" className="w-9 h-9 object-cover rounded" />
                  ) : (
                    <FileText className="w-6 h-6 text-emerald-600" />
                  )}
                  <span className="text-xs font-medium text-slate-800 dark:text-slate-200 truncate max-w-[200px]">
                    {prescriptionFile.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="text-xs text-rose-500 hover:text-rose-700 font-medium px-2 py-1"
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Additional Instructions / Notes
            </label>
            <input
              type="text"
              placeholder="e.g. Please bring change for 500, or call before coming"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-slate-900 dark:text-white"
            />
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-semibold rounded-xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="py-3 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold rounded-xl flex items-center justify-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
