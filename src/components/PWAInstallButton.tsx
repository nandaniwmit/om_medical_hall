import React from 'react';
import { Smartphone, Check } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { IOSInstallGuide } from './IOSInstallGuide';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'nav' | 'hero' | 'banner' | 'compact';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  className = '',
  variant = 'nav',
}) => {
  const {
    isInstallable,
    isInstalled,
    showIOSGuide,
    setShowIOSGuide,
    installSuccessMessage,
    triggerInstall,
  } = usePWAInstall();

  if (isInstalled && !installSuccessMessage) {
    return null;
  }

  return (
    <>
      {installSuccessMessage ? (
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 text-xs font-semibold rounded-full border border-emerald-300 dark:border-emerald-800">
          <Check className="w-3.5 h-3.5" />
          <span>App Installed</span>
        </div>
      ) : isInstallable ? (
        <button
          onClick={triggerInstall}
          id="pwa-add-to-home-btn"
          aria-label="Add OM MEDICAL HALL to Home Screen"
          className={`group relative inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
            variant === 'nav'
              ? 'px-3 py-1.5 text-xs rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-950/70 dark:hover:bg-emerald-900/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/60 shadow-sm'
              : variant === 'compact'
              ? 'px-2.5 py-1 text-xs rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white'
              : 'px-4 py-2.5 text-sm rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md hover:shadow-lg hover:from-emerald-700 hover:to-teal-700'
          } ${className}`}
        >
          <span className="text-base animate-bounce">📲</span>
          <span className="whitespace-nowrap">Add to Home</span>
        </button>
      ) : null}

      <IOSInstallGuide
        isOpen={showIOSGuide}
        onClose={() => setShowIOSGuide(false)}
      />
    </>
  );
};
