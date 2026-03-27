import { motion } from 'framer-motion';
import ImagePlaceholder from '../components/ImagePlaceholder';
import GlobeAnimation from '../components/GlobeAnimation';

interface ScreenProps {
  isActive: boolean;
}

export function Screen23Team({ isActive }: ScreenProps) {
  const teamImages = [
    '/atmosfera-app/images/img-breno-reuniao.webp',
    '/atmosfera-app/images/img-reuniao-mesa.jpg',
    '/atmosfera-app/images/img-correndo-rua.jpg',
  ];

  const team = [
    {
      name: 'Breno Rabelo',
      role: 'CEO e Fundador',
      desc: '+20 anos em marketing, branding e inovação · Direção estratégica e criativa',
    },
    {
      name: 'Carol',
      role: 'COO',
      desc: 'Gestão executiva da operação · Governança e processos',
    },
    {
      name: '+ Dezenas de profissionais',
      role: 'O Ecossistema',
      desc: 'Designers, Desenvolvedores, Especialistas em IA, Performance, Conteúdo, Audiovisual',
    },
  ];

  return (
    <div
      className="slide-section flex flex-col justify-center px-10 md:px-16 lg:px-20 relative"
      style={{ background: '#0A0A0A' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-10"
      >
        <p
          className="text-gold text-xs tracking-[0.3em] uppercase mb-3"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          A INTELIGÊNCIA POR TRÁS DO PROGRAMA
        </p>
        <div className="w-12 h-px bg-gold" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.7 }}
            className="flex flex-col"
          >
            <ImagePlaceholder
              aspectRatio={i < 2 ? '1/1' : '16/9'}
              label={`Foto: ${member.name}`}
              src={teamImages[i]}
              objectPosition="center top"
              className="mb-4 rounded-sm"
            />
            <p
              className="text-white font-semibold mb-1"
              style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.95rem' }}
            >
              {member.name}
            </p>
            <p
              className="text-gold text-xs mb-2"
              style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '0.1em' }}
            >
              {member.role}
            </p>
            <p
              className="text-gray-text"
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', lineHeight: '1.6' }}
            >
              {member.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="border-l-2 border-gold pl-6 py-1"
      >
        <p
          className="text-gold"
          style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', lineHeight: '1.7', fontStyle: 'italic' }}
        >
          "O Atmosfera não depende de uma pessoa. Depende de uma cultura, um método e uma
          estrutura que são maiores do que qualquer indivíduo."
        </p>
      </motion.div>
    </div>
  );
}

export function Screen24Companies({ isActive }: ScreenProps) {
  const placeholders = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div
      className="slide-section flex flex-col justify-center px-10 md:px-16 lg:px-20 relative"
      style={{ background: '#0A0A0A' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-10"
      >
        <p
          className="text-gold text-xs tracking-[0.3em] uppercase mb-3"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          EMPRESAS LÍDERES DO MERCADO PARTICIPAM DO ATMOSFERA
        </p>
        <div className="w-12 h-px bg-gold" />
      </motion.div>

      <div className="grid grid-cols-4 md:grid-cols-6 gap-4 mb-8">
        {placeholders.map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
            className="aspect-video flex items-center justify-center"
            style={{
              border: '1px dashed rgba(255,255,255,0.1)',
              background: '#111',
            }}
          >
            <span
              style={{
                color: 'rgba(255,255,255,0.15)',
                fontFamily: 'Sora, sans-serif',
                fontSize: '0.5rem',
                letterSpacing: '0.1em',
              }}
            >
              LOGO
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="text-gray-text text-center"
        style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem' }}
      >
        Mais de 25 empresas fazem parte do ecossistema — incluindo algumas das maiores marcas do Espírito Santo.
      </motion.p>
    </div>
  );
}

export function Screen25Testimonials({ isActive }: ScreenProps) {
  return (
    <div
      className="slide-section flex flex-col justify-center px-10 md:px-16 lg:px-20 relative"
      style={{ background: '#0A0A0A' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-10"
      >
        <p
          className="text-gold text-xs tracking-[0.3em] uppercase mb-3"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          O QUE DIZEM SOBRE NÓS
        </p>
        <div className="w-12 h-px bg-gold" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {['Depoimento de Cliente', 'Depoimento de Profissional'].map((type, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4 + i * 0.2, duration: 0.7 }}
            className="flex flex-col p-8"
            style={{
              border: '1px solid #1A1A1A',
              background: '#0D0D0D',
            }}
          >
            {/* Quote icon */}
            <div
              className="text-gold mb-6"
              style={{ fontSize: '3rem', fontFamily: 'Georgia, serif', lineHeight: 1, opacity: 0.6 }}
            >
              "
            </div>

            {/* Placeholder */}
            <div
              className="flex-1 flex flex-col items-center justify-center gap-3 py-8"
              style={{ border: '1px dashed rgba(245,166,35,0.15)', background: 'rgba(245,166,35,0.02)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(245,166,35,0.3)" strokeWidth="1">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span
                style={{
                  color: 'rgba(245,166,35,0.3)',
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                {type}
                <br />
                <span style={{ opacity: 0.6 }}>será adicionado em breve</span>
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full"
                style={{ background: '#1A1A1A', border: '1px solid #333' }}
              />
              <div>
                <div className="w-20 h-2 rounded" style={{ background: '#1A1A1A' }} />
                <div className="w-14 h-1.5 rounded mt-1" style={{ background: '#141414' }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Screen26Closing({ isActive }: ScreenProps) {
  const words = ['Empresas', 'que', 'crescem', 'de', 'verdade', 'não', 'operam', 'no', 'improviso.', 'Elas', 'investem', 'em', 'estrutura.'];

  return (
    <div
      className="slide-section flex flex-col items-center justify-center px-8 md:px-16 relative"
      style={{ background: '#0A0A0A' }}
    >
      {/* Background number */}
      <div
        className="absolute right-8 bottom-8 text-[20rem] font-black leading-none pointer-events-none select-none"
        style={{ color: 'rgba(245,166,35,0.025)', fontFamily: 'Sora, sans-serif' }}
      >
        26
      </div>

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

        <h2
          className="text-white font-light leading-tight mb-8"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
            letterSpacing: '0.01em',
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={isActive
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : { opacity: 0, y: 20, filter: 'blur(4px)' }
              }
              transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="w-24 h-px bg-gold mx-auto mb-8"
          style={{ transformOrigin: 'center' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-gold"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
            letterSpacing: '0.1em',
          }}
        >
          Atmosfera 3.0 — O marketing que sua empresa deveria ter desde o começo.
        </motion.p>
      </div>
    </div>
  );
}

export function Screen27CTA({ isActive }: ScreenProps) {
  return (
    <div
      className="slide-section flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Globe background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] opacity-60">
          <GlobeAnimation size="full" />
        </div>
      </div>

      {/* Radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(10,10,10,0.8) 60%, rgba(10,10,10,0.98) 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-8">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
            <motion.circle
              cx="32" cy="32" r="28"
              stroke="#F5A623"
              strokeWidth="0.8"
              strokeDasharray="4 3"
              animate={isActive ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '32px 32px' }}
            />
            <motion.ellipse
              cx="32" cy="32" rx="28" ry="14"
              stroke="#F5A623"
              strokeWidth="0.8"
              opacity="0.5"
              animate={isActive ? { rotate: -360 } : { rotate: 0 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '32px 32px' }}
            />
            <circle cx="32" cy="32" r="4" fill="#F5A623" opacity="0.9" />
          </svg>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-white font-semibold tracking-[0.3em] uppercase mb-3"
          style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}
        >
          ATMOSFERA 3.0
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-gray-text mb-10"
          style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', letterSpacing: '0.08em' }}
        >
          Programa Corporativo de Estruturação de Marketing
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#agendar"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 px-10 py-4 mb-12"
          style={{
            background: '#F5A623',
            color: '#000000',
            fontFamily: 'Sora, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          AGENDAR UMA CONVERSA
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.a>

        {/* Footer tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {['+20 anos de expertise', 'Dezenas de profissionais', 'Arsenal tecnológico', 'Evolução mensurável'].map((item, i) => (
              <span
                key={i}
                className="text-gray-text text-[0.6rem] tracking-widest"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                {item}
                {i < 3 && <span className="ml-4 text-gray-border">·</span>}
              </span>
            ))}
          </div>
          <p
            className="text-gray-text text-[0.55rem] tracking-[0.3em] uppercase mt-2"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            We Believe Hub · Grupo BLVR · 2026
          </p>
        </motion.div>
      </div>
    </div>
  );
}
