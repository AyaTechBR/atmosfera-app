import { motion } from 'framer-motion';

interface ScreenProps {
  isActive: boolean;
}

const pillars = [
  {
    title: 'TALENTO',
    icon: '◈',
    text: 'O talento é a base. É o que faz tudo girar. Sem gente boa, nada acontece. A Atmosfera é um eixo gravitacional — um campo que atrai mentes criativas, curiosas e inquietas. Nosso papel é magnetizar pessoas extraordinárias para gerar resultados extraordinários.',
  },
  {
    title: 'INTELIGÊNCIA',
    icon: '◉',
    text: 'Ao longo de 20 anos, aprendemos que inteligência não é só acumular conhecimento — é saber transferi-lo. Somos uma máquina viva de aprendizado e compartilhamento. O que aprendemos, aplicamos. O que aplicamos, ensinamos.',
  },
  {
    title: 'MÉTODO',
    icon: '◎',
    text: 'O sucesso não é acaso — é método. Acreditamos que toda excelência nasce de um framework bem construído. Criamos método para tudo o que fazemos, porque ele garante eficiência, consistência e qualidade. A liberdade criativa existe, mas dentro de um sistema que funciona.',
  },
];

export default function Screen05Pillars({ isActive }: ScreenProps) {
  return (
    <div
      className="slide-section flex flex-col justify-center px-10 md:px-16 lg:px-20 relative"
      style={{ background: '#0A0A0A' }}
    >
      {/* Top accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, #F5A623, transparent)',
          transformOrigin: 'left',
        }}
      />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-12 md:mb-16"
      >
        <p
          className="text-gold text-xs tracking-[0.3em] uppercase mb-3"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          NOSSOS PILARES
        </p>
        <div className="w-12 h-px bg-gold" />
      </motion.div>

      {/* Pillars grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.4 + i * 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative pr-8 md:pr-12"
            style={{
              borderRight: i < 2 ? '1px solid #222222' : 'none',
              paddingLeft: i > 0 ? '2rem' : '0',
            }}
          >
            {/* Icon */}
            <div
              className="text-gold mb-4 text-2xl"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              {pillar.icon}
            </div>

            {/* Title */}
            <h3
              className="text-gold text-xs tracking-[0.25em] uppercase mb-5 font-semibold"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              {pillar.title}
            </h3>

            {/* Text */}
            <p
              className="text-gray-secondary leading-relaxed"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
                lineHeight: '1.85',
              }}
            >
              {pillar.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
