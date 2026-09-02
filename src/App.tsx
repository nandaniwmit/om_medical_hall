import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { ScrollToTop } from './components/ScrollToTop';
import { SEOHead } from './components/SEOHead';

// Lazy loaded page components for optimal performance
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Login = lazy(() => import('./pages/Login').then(m => ({ default: m.Login })));

// Loading spinner fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-3">
    <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
      Loading OM MEDICAL HALL...
    </span>
  </div>
);

export function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [initialMedicine, setInitialMedicine] = useState('');

  const handleOpenOrderModal = (medicineName?: string) => {
    setInitialMedicine(medicineName || '');
    setOrderModalOpen(true);
  };

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <SEOHead />
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
          {/* Main Navigation Header */}
          <Navbar onOpenOrderModal={handleOpenOrderModal} />

          {/* Main Content Router */}
          <main className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route
                  path="/"
                  element={<Home onOpenOrderModal={handleOpenOrderModal} />}
                />
                <Route
                  path="/about"
                  element={<About onOpenOrderModal={() => handleOpenOrderModal()} />}
                />
                <Route
                  path="/services"
                  element={<Services onOpenOrderModal={handleOpenOrderModal} />}
                />
                <Route
                  path="/gallery"
                  element={<Gallery onOpenOrderModal={() => handleOpenOrderModal()} />}
                />
                <Route
                  path="/contact"
                  element={<Contact />}
                />
                <Route
                  path="/login"
                  element={<Login />}
                />
                {/* Fallback route */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>

          {/* Mandatory Global Footer */}
          <Footer />

          {/* Floating Actions (WhatsApp, Call, Back to Top, Sticky mobile bar) */}
          <FloatingActions onOpenOrderModal={() => handleOpenOrderModal()} />

          {/* WhatsApp Order Modal */}
          <WhatsAppOrderModal
            isOpen={orderModalOpen}
            onClose={() => setOrderModalOpen(false)}
            initialMedicine={initialMedicine}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
