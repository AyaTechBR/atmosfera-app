import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 600);
          }, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: '#0A0A0A' }}
        >
          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center gap-6"
          >
            {/* Animated globe icon */}
            <div className="relative w-16 h-16">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <motion.circle
                  cx="32" cy="32" r="28"
                  stroke="#F5A623"
                  strokeWidth="0.8"
                  strokeDasharray="4 3"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '32px 32px' }}
                />
                <motion.ellipse
                  cx="32" cy="32" rx="28" ry="14"
                  stroke="#F5A623"
                  strokeWidth="0.8"
                  opacity="0.5"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '32px 32px' }}
                />
                <circle cx="32" cy="32" r="4" fill="#F5A623" opacity="0.8" />
                <motion.circle
                  cx="32" cy="32" r="8"
                  stroke="#F5A623"
                  strokeWidth="0.5"
                  opacity="0.3"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ transformOrigin: '32px 32px' }}
                />
              </svg>
            </div>

            <div className="text-center">
              <p
                className="text-white text-xs tracking-[0.4em] uppercase mb-1"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 300 }}
              >
                A T M O S F E R A
              </p>
              <p
                className="text-gold text-[0.55rem] tracking-[0.25em] uppercase"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                3.0
              </p>
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48">
            <div className="w-full h-px bg-gray-border overflow-hidden">
              <motion.div
                className="h-full bg-gold"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p
              className="text-gray-text text-[0.55rem] tracking-widest text-center mt-3 uppercase"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Carregando
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
