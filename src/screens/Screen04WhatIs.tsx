import { motion } from 'framer-motion';
import ImagePlaceholder from '../components/ImagePlaceholder';

interface ScreenProps {
  isActive: boolean;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Screen04WhatIs({ isActive }: ScreenProps) {
  return (
    <div
      className="slide-section flex items-center"
      style={{ background: '#0A0A0A' }}
    >
      {/* Left content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? 'visible' : 'hidden'}
        className="flex-1 flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20 md:py-0"
        style={{ maxWidth: '60%' }}
      >
        <motion.p
          variants={itemVariants}
          className="text-gold text-xs tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          O QUE É O ATMOSFERA
        </motion.p>

        <motion.div variants={itemVariants} className="w-12 h-px bg-gold mb-8" />

        <motion.p
          variants={itemVariants}
          className="text-white leading-relaxed mb-8"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
            lineHeight: '1.85',
            color: '#DDDDDD',
          }}
        >
          O Atmosfera é uma <strong className="text-white">plataforma corporativa de estruturação de marketing</strong> que
          transfere propriedade intelectual, metodologia, frameworks, inteligência artificial
          e direção estratégica para dentro da empresa-cliente — através do desenvolvimento
          dos profissionais de marketing do próprio cliente, incubados dentro do ecossistema{' '}
          <span className="text-gold">We Believe Hub</span>.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="border-l-2 border-gold pl-6 py-2"
        >
          <p
            className="text-gold leading-relaxed"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(0.85rem, 1.3vw, 1rem)',
              lineHeight: '1.8',
              fontStyle: 'italic',
            }}
          >
            Atuamos no desenvolvimento do marketing e na infraestrutura do marketing da empresa,
            para que o marketing da empresa não fique refém de profissional — e se torne
            independente e autônomo em todo o seu processo, em toda a sua jornada.
          </p>
        </motion.div>
      </motion.div>

      {/* Right image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
        transition={{ delay: 0.5, duration: 0.9 }}
        className="hidden md:flex flex-1 h-full items-center justify-center p-10"
        style={{ maxWidth: '40%' }}
      >
        <ImagePlaceholder
          aspectRatio="4/3"
          label="Ambiente Atmosfera / We Believe Hub"
          className="w-full rounded-sm"
        />
      </motion.div>
    </div>
  );
}
