import { motion } from 'framer-motion';

interface ScreenProps {
  isActive: boolean;
}

export default function Screen03Paradox({ isActive }: ScreenProps) {
  return (
    <div
      className="slide-section flex flex-col items-center justify-center px-8 md:px-16 relative"
      style={{ background: '#0A0A0A' }}
    >
      {/* Background number */}
      <div
        className="absolute left-8 bottom-8 text-[20rem] font-black leading-none pointer-events-none select-none"
        style={{
          color: 'rgba(245,166,35,0.03)',
          fontFamily: 'Sora, sans-serif',
        }}
      >
        03
      </div>

      {/* Decorative top line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(245,166,35,0.3), transparent)',
          transformOrigin: 'left',
        }}
      />

      <div className="max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gold mb-6"
          style={{ fontSize: '5rem', fontFamily: 'Georgia, serif', lineHeight: 1 }}
        >
          "
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-white font-light leading-tight mb-10"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(1.5rem, 3.5vw, 3rem)',
            letterSpacing: '0.01em',
          }}
        >
          Uma agência não faz tudo que precisa ser feito.{' '}
          <br className="hidden md:block" />
          E o marketing interno não sabe fazer tudo que precisa ser feito.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="w-24 h-px bg-gold mx-auto mb-8"
          style={{ transformOrigin: 'left' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-gold"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
            letterSpacing: '0.05em',
            fontStyle: 'italic',
          }}
        >
          Foi olhando para esse desafio que o Atmosfera nasceu.
        </motion.p>
      </div>
    </div>
  );
}
