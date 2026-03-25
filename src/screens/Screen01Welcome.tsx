import { motion } from 'framer-motion';
import GlobeAnimation from '../components/GlobeAnimation';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

interface ScreenProps {
  isActive: boolean;
}

export default function Screen01Welcome({ isActive }: ScreenProps) {
  return (
    <div
      className="slide-section flex items-center justify-center px-10 md:px-20 lg:px-32 relative"
      style={{ background: '#0A0A0A' }}
    >
      {/* Subtle globe in corner */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20 pointer-events-none">
        <GlobeAnimation size="mini" />
      </div>

      {/* Decorative line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(to bottom, transparent, #F5A623, transparent)' }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? 'visible' : 'hidden'}
        className="max-w-3xl"
      >
        <motion.p
          variants={itemVariants}
          className="text-gold text-xs tracking-[0.3em] uppercase mb-6"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          Bem-vindo ao Atmosfera
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="text-white font-light leading-tight mb-8"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
            letterSpacing: '0.01em',
          }}
        >
          Um ecossistema de inteligência com mais de{' '}
          <span className="text-gold">20 anos de expertise</span>, dezenas de profissionais
          e uma cultura obcecada por excelência.
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="w-16 h-px bg-gold mb-8"
        />

        <motion.p
          variants={itemVariants}
          className="text-gray-secondary leading-relaxed"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            maxWidth: '560px',
          }}
        >
          Nos próximos minutos, você vai entender por que as empresas mais inteligentes
          do mercado escolheram o Atmosfera para estruturar seu marketing.
        </motion.p>
      </motion.div>
    </div>
  );
}
