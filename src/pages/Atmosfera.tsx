import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '../components/LoadingScreen';
import AtmosHeader from '../components/AtmosHeader';
import NavDots from '../components/NavDots';
import Screen00Hero from '../screens/Screen00Hero';
import Screen01Welcome from '../screens/Screen01Welcome';
import Screen02Truth from '../screens/Screen02Truth';
import Screen03Paradox from '../screens/Screen03Paradox';
import Screen04WhatIs from '../screens/Screen04WhatIs';
import Screen05Pillars from '../screens/Screen05Pillars';
import Screen06Purpose from '../screens/Screen06Purpose';
import Screen07Transition from '../screens/Screen07Transition';
import {
  Screen08IP,
  Screen09Team,
  Screen10Development,
  Screen11Frameworks,
  Screen12Technology,
  Screen13Oracle,
  Screen14Agent,
  Screen15Manager,
} from '../screens/DeliveryScreens';
import {
  Screen16Marketplace,
  Screen17BLVR,
  Screen18Mentors,
  Screen19Events,
  Screen20Infrastructure,
  Screen21AtmoSaaS,
} from '../screens/DeliveryScreens2';
import Screen22Diagram from '../screens/Screen22Diagram';
import {
  Screen23Team,
  Screen24Companies,
  Screen25Testimonials,
  Screen26Closing,
  Screen27CTA,
} from '../screens/FinalScreens';

const SECTION_NAMES = [
  'Bem-vindo',
  'A Verdade',
  'O Paradoxo',
  'O Atmosfera',
  'Nossos Pilares',
  'Propósito e Visão',
  'O que entregamos',
  'Prop. Intelectual',
  'Equipe Certa',
  'Desenvolvimento',
  'Frameworks',
  'Tecnologia',
  'Oráculo',
  'Agente Autônomo',
  'Gestão',
  'Marketplace',
  'Ecossistema BLVR',
  'Mentores',
  'Eventos',
  'Infraestrutura',
  'AtmoSaaS',
  'Como se Conecta',
  'Quem está por trás',
  'Empresas',
  'Depoimentos',
  'Fechamento',
  'Agendar',
];

export default function AtmosferaApp() {
  const [loading, setLoading] = useState(true);
  const [inPresentation, setInPresentation] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSlides = SECTION_NAMES.length;

  const navigateTo = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;
    if (index < 0 || index >= totalSlides) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning, currentIndex, totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    if (!inPresentation) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        navigateTo(currentIndex + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        navigateTo(currentIndex - 1);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [inPresentation, currentIndex, navigateTo]);

  // Wheel navigation
  useEffect(() => {
    if (!inPresentation) return;

    let wheelTimeout: ReturnType<typeof setTimeout>;
    let lastWheelTime = 0;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime < 800) return;
      lastWheelTime = now;

      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (e.deltaX > 30 || e.deltaY > 30) {
          navigateTo(currentIndex + 1);
        } else if (e.deltaX < -30 || e.deltaY < -30) {
          navigateTo(currentIndex - 1);
        }
      }, 50);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(wheelTimeout);
    };
  }, [inPresentation, currentIndex, navigateTo]);

  // Touch navigation
  useEffect(() => {
    if (!inPresentation) return;

    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const dx = touchStartX - e.changedTouches[0].clientX;
      const dy = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        navigateTo(dx > 0 ? currentIndex + 1 : currentIndex - 1);
      } else if (Math.abs(dy) > 50) {
        navigateTo(dy > 0 ? currentIndex + 1 : currentIndex - 1);
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [inPresentation, currentIndex, navigateTo]);

  const handleEnterPresentation = () => {
    setInPresentation(true);
    setCurrentIndex(0);
  };

  const isActive = (i: number) => i === currentIndex;

  // Slide offset for transform
  const slideOffset = -currentIndex * 100;

  return (
    <div className="w-screen h-screen overflow-hidden" style={{ background: '#0A0A0A' }}>
      {/* Loading */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Hero landing */}
      <AnimatePresence>
        {!loading && !inPresentation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-20"
          >
            <Screen00Hero onEnter={handleEnterPresentation} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Presentation */}
      <AnimatePresence>
        {!loading && inPresentation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-10"
          >
            {/* Header */}
            <AtmosHeader />

            {/* Nav dots */}
            <NavDots
              sections={SECTION_NAMES}
              currentIndex={currentIndex}
              onNavigate={navigateTo}
            />

            {/* Slides container */}
            <div
              ref={containerRef}
              className="w-full h-full overflow-hidden"
            >
              <motion.div
                className="flex h-full"
                animate={{ x: `${slideOffset}vw` }}
                transition={{
                  type: 'tween',
                  ease: [0.25, 0.1, 0.25, 1],
                  duration: 0.65,
                }}
                style={{ width: `${totalSlides * 100}vw` }}
              >
                <Screen01Welcome isActive={isActive(0)} />
                <Screen02Truth isActive={isActive(1)} />
                <Screen03Paradox isActive={isActive(2)} />
                <Screen04WhatIs isActive={isActive(3)} />
                <Screen05Pillars isActive={isActive(4)} />
                <Screen06Purpose isActive={isActive(5)} />
                <Screen07Transition isActive={isActive(6)} />
                <Screen08IP isActive={isActive(7)} />
                <Screen09Team isActive={isActive(8)} />
                <Screen10Development isActive={isActive(9)} />
                <Screen11Frameworks isActive={isActive(10)} />
                <Screen12Technology isActive={isActive(11)} />
                <Screen13Oracle isActive={isActive(12)} />
                <Screen14Agent isActive={isActive(13)} />
                <Screen15Manager isActive={isActive(14)} />
                <Screen16Marketplace isActive={isActive(15)} />
                <Screen17BLVR isActive={isActive(16)} />
                <Screen18Mentors isActive={isActive(17)} />
                <Screen19Events isActive={isActive(18)} />
                <Screen20Infrastructure isActive={isActive(19)} />
                <Screen21AtmoSaaS isActive={isActive(20)} />
                <Screen22Diagram isActive={isActive(21)} />
                <Screen23Team isActive={isActive(22)} />
                <Screen24Companies isActive={isActive(23)} />
                <Screen25Testimonials isActive={isActive(24)} />
                <Screen26Closing isActive={isActive(25)} />
                <Screen27CTA isActive={isActive(26)} />
              </motion.div>
            </div>

            {/* Bottom navigation arrows */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6">
              <button
                onClick={() => navigateTo(currentIndex - 1)}
                disabled={currentIndex === 0}
                className="flex items-center justify-center w-8 h-8 transition-all duration-300"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(10,10,10,0.8)',
                  color: currentIndex === 0 ? '#333' : '#999',
                  cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                  borderRadius: '2px',
                }}
                aria-label="Slide anterior"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <span
                className="text-gray-text text-[0.6rem] tracking-widest"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                {String(currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
              </span>

              <button
                onClick={() => navigateTo(currentIndex + 1)}
                disabled={currentIndex === totalSlides - 1}
                className="flex items-center justify-center w-8 h-8 transition-all duration-300"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(10,10,10,0.8)',
                  color: currentIndex === totalSlides - 1 ? '#333' : '#999',
                  cursor: currentIndex === totalSlides - 1 ? 'not-allowed' : 'pointer',
                  borderRadius: '2px',
                }}
                aria-label="Próximo slide"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Section name indicator */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-6 right-16 z-50"
            >
              <span
                className="text-gray-text text-[0.55rem] tracking-[0.15em] uppercase"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                {SECTION_NAMES[currentIndex]}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
