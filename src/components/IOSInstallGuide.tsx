import React from 'react';
import { Share, PlusSquare, X } from 'lucide-react';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
  appName?: string;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({
  isOpen,
  onClose,
  appName = 'OM MEDICAL HALL',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ios-guide-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          aria-label="Close installation guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto mb-3 bg-emerald-50 dark:bg-emerald-950/60 rounded-2xl border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-2xl shadow-inner">
            📲
          </div>
          <h3 id="ios-guide-title" className="text-xl font-bold text-slate-900 dark:text-white">
            Install {appName}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Add to your iPhone / iPad home screen for 1-tap instant medicine ordering & stock checking.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
            <span className="flex-shrink-0 w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
              1
            </span>
            <div className="text-sm text-slate-700 dark:text-slate-300">
              Tap the <span className="font-semibold text-slate-900 dark:text-white inline-flex items-center gap-1">Share button <Share className="w-4 h-4 inline text-blue-500" /></span> at the bottom of your Safari browser bar.
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
            <span className="flex-shrink-0 w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
              2
            </span>
            <div className="text-sm text-slate-700 dark:text-slate-300">
              Scroll down and tap <span className="font-semibold text-slate-900 dark:text-white inline-flex items-center gap-1">"Add to Home Screen" <PlusSquare className="w-4 h-4 inline text-emerald-500" /></span>.
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
            <span className="flex-shrink-0 w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
              3
            </span>
            <div className="text-sm text-slate-700 dark:text-slate-300">
              Tap <span className="font-semibold text-slate-900 dark:text-white">"Add"</span> in the top-right corner to finish installing.
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition shadow-md"
        >
          Got it
        </button>
      </div>
    </div>
  );
};
