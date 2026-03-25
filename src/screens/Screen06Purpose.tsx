import { motion } from 'framer-motion';

interface ScreenProps {
  isActive: boolean;
}

export default function Screen06Purpose({ isActive }: ScreenProps) {
  return (
    <div
      className="slide-section flex items-center px-10 md:px-16 lg:px-20 relative"
      style={{ background: '#0A0A0A' }}
    >
      {/* Background number */}
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 text-[18rem] font-black leading-none pointer-events-none select-none"
        style={{ color: 'rgba(245,166,35,0.025)', fontFamily: 'Sora, sans-serif' }}
      >
        06
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative z-10">
        {/* Propósito */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="w-full h-px bg-gold mb-6" />
          <p
            className="text-gold text-xs tracking-[0.25em] uppercase mb-6 font-semibold"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            PROPÓSITO
          </p>
          <p
            className="text-white leading-relaxed"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
              lineHeight: '1.85',
              color: '#CCCCCC',
            }}
          >
            Estruturar, capacitar e acompanhar equipes para que elas entreguem o melhor
            desempenho possível. Combinando pessoas certas, método sólido, estrutura de ponta
            e tecnologia avançada — tudo dentro de um ecossistema vivo, colaborativo e em
            constante evolução.
          </p>
        </motion.div>

        {/* Visão */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="w-full h-px bg-gold mb-6" />
          <p
            className="text-gold text-xs tracking-[0.25em] uppercase mb-6 font-semibold"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            VISÃO
          </p>
          <p
            className="text-white leading-relaxed"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
              lineHeight: '1.85',
              color: '#CCCCCC',
            }}
          >
            Ser um ecossistema rico em inteligência, colaboração e resultado. Acreditamos que
            o sucesso é reflexo direto do ambiente em que se está inserido. Criamos um ambiente
            onde o conhecimento é compartilhado, a experiência é aplicada e o resultado é
            consequência natural da soma entre pessoas, método e ambiente.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
