import { motion } from 'framer-motion';
import ImagePlaceholder from '../components/ImagePlaceholder';

interface ScreenProps {
  isActive: boolean;
}

export default function Screen07Transition({ isActive }: ScreenProps) {
  return (
    <div
      className="slide-section relative overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Split background images */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="relative">
          <ImagePlaceholder aspectRatio="full" label="Ambiente de trabalho" className="absolute inset-0" />
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(10,10,10,0.6)' }}
          />
        </div>
        <div className="relative">
          <ImagePlaceholder aspectRatio="full" label="Profissionais em ação" className="absolute inset-0" />
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(10,10,10,0.6)' }}
          />
        </div>
      </div>

      {/* Center divider line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isActive ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute left-1/2 top-0 bottom-0 w-px"
        style={{
          background: 'linear-gradient(to bottom, transparent, #F5A623, transparent)',
          transformOrigin: 'top',
        }}
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-8">
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={isActive
            ? { opacity: 1, letterSpacing: '0.3em' }
            : { opacity: 0, letterSpacing: '0.5em' }
          }
          transition={{ delay: 0.4, duration: 0.9 }}
          className="text-gold text-xs uppercase mb-6"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          A PRÁTICA
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-white font-light text-center"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 4.5rem)',
            letterSpacing: '0.02em',
          }}
        >
          O que entregamos
          <br />
          <span className="text-gold">na prática.</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="w-24 h-px bg-gold mt-8"
          style={{ transformOrigin: 'center' }}
        />
      </div>
    </div>
  );
}
