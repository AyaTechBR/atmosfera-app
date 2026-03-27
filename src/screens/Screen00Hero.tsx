import { useRef } from 'react';
import { motion } from 'framer-motion';
import GlobeAnimation from '../components/GlobeAnimation';

interface Screen00HeroProps {
  onEnter: () => void;
}

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: 0.8 + i * 0.12,
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const words = ['O', 'futuro', 'se', 'constrói', 'hoje.'];

export default function Screen00Hero({ onEnter }: Screen00HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden grain-overlay"
      style={{ background: '#0A0A0A' }}
    >
      {/* Globe background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-80">
          <GlobeAnimation size="full" className="w-full h-full" />
        </div>
      </div>

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(10,10,10,0.7) 60%, rgba(10,10,10,0.95) 100%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-10"
        >
          <img
            src="/atmosfera-app/images/logo-atmosfera.webp"
            alt="Atmosfera"
            style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
          />
        </motion.div>

        {/* Main headline word by word */}
        <h1
          className="text-white font-light leading-tight mb-12"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(2.5rem, 7vw, 6rem)',
            letterSpacing: '0.02em',
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          onClick={onEnter}
          className="group flex items-center gap-3 cursor-pointer"
          style={{ background: 'none', border: 'none', padding: 0 }}
        >
          <span
            className="text-gray-secondary text-xs tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-gold"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Navegar pela jornada
          </span>
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-gold"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.span>
        </motion.button>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <p
          className="text-gray-text text-[0.55rem] tracking-[0.3em] uppercase"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          WEBELIEVE · BLVR GROUP · 2026
        </p>
      </motion.footer>
    </div>
  );
}
