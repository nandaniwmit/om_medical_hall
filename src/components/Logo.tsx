import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', showTagline = true }) => {
  return (
    <Link to="/" className={`flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Brand Icon */}
      <div className="relative flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 p-0.5 shadow-md group-hover:shadow-emerald-500/20 transition-all duration-300">
        <div className="w-full h-full bg-emerald-600 rounded-[10px] flex items-center justify-center text-white relative overflow-hidden">
          {/* Subtle pulse ring */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Medical Cross SVG */}
          <svg
            className="w-6 h-6 text-white drop-shadow-sm transform group-hover:scale-110 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
          </svg>
          
          {/* Heartbeat accent */}
          <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className="text-lg md:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
          <span>OM MEDICAL</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-black">HALL</span>
        </span>
        {showTagline && (
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400/90 -mt-0.5">
            Pharmacy & Healthcare • Manpur
          </span>
        )}
      </div>
    </Link>
  );
};
