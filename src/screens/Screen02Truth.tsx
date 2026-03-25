import { motion } from 'framer-motion';

interface ScreenProps {
  isActive: boolean;
}

const quoteWords = ['Toda', 'empresa', 'é,', 'no', 'fundo,', 'uma', 'empresa', 'de', 'marketing.'];

export default function Screen02Truth({ isActive }: ScreenProps) {
  return (
    <div
      className="slide-section flex flex-col items-center justify-center px-8 md:px-16 relative"
      style={{ background: '#0A0A0A' }}
    >
      {/* Background number */}
      <div
        className="absolute right-8 bottom-8 text-[20rem] font-black leading-none pointer-events-none select-none"
        style={{
          color: 'rgba(245,166,35,0.03)',
          fontFamily: 'Sora, sans-serif',
        }}
      >
        02
      </div>

      <div className="max-w-4xl text-center relative z-10">
        {/* Opening quote mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gold mb-6"
          style={{ fontSize: '5rem', fontFamily: 'Georgia, serif', lineHeight: 1 }}
        >
          "
        </motion.div>

        <h2
          className="text-white font-light leading-tight mb-8"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(1.8rem, 4.5vw, 4rem)',
            letterSpacing: '0.01em',
          }}
        >
          {quoteWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={isActive
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : { opacity: 0, y: 20, filter: 'blur(4px)' }
              }
              transition={{
                delay: 0.3 + i * 0.08,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="w-24 h-px bg-gold mx-auto mb-8"
          style={{ transformOrigin: 'left' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-gray-text"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
            letterSpacing: '0.05em',
          }}
        >
          Se o marketing é fraco, nenhuma outra competência compensa.
        </motion.p>
      </div>
    </div>
  );
}
