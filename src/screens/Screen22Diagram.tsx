import { motion } from 'framer-motion';

interface ScreenProps {
  isActive: boolean;
}

export default function Screen22Diagram({ isActive }: ScreenProps) {
  const connections = [
    'Métodos e Frameworks',
    'Infraestrutura Compartilhada',
    'Tecnologia e AI',
    'Experiência Compartilhada',
  ];

  const companyTalents = ['Talento A', 'Talento B', 'Talento C', 'Talento D'];
  const atmosMentors = ['Mentor Performance', 'Mentor IA', 'Mentor Design', 'Gerente de Projeto'];

  return (
    <div
      className="slide-section flex flex-col justify-center px-10 md:px-16 relative overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8 text-center"
      >
        <p
          className="text-gold text-xs tracking-[0.3em] uppercase mb-2"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          COMO TUDO SE CONECTA
        </p>
      </motion.div>

      {/* Diagram */}
      <div className="flex items-center justify-center gap-8 md:gap-16 relative">
        {/* Company node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-col items-center"
        >
          {/* Talents */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {companyTalents.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                className="w-12 h-12 rounded-full flex items-center justify-center text-center"
                style={{
                  border: '1px solid #333',
                  background: '#111',
                  fontSize: '0.5rem',
                  color: '#999',
                  fontFamily: 'Sora, sans-serif',
                  letterSpacing: '0.05em',
                }}
              >
                {t}
              </motion.div>
            ))}
          </div>

          {/* Company circle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-24 h-24 rounded-full flex items-center justify-center"
            style={{
              border: '2px solid #333',
              background: 'rgba(255,255,255,0.03)',
            }}
          >
            <span
              className="text-white text-xs font-semibold tracking-widest text-center"
              style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.6rem', letterSpacing: '0.15em' }}
            >
              EMPRESA
            </span>
          </motion.div>

          {/* Result */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-4 text-center"
          >
            <div className="w-px h-6 bg-gray-border mx-auto mb-2" />
            <span
              className="text-gold text-[0.6rem] tracking-widest uppercase"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Resultado Real
            </span>
          </motion.div>
        </motion.div>

        {/* Connection lines */}
        <div className="flex flex-col gap-2 items-center">
          {connections.map((conn, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isActive ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              className="flex items-center gap-2"
              style={{ transformOrigin: 'left' }}
            >
              <div className="w-8 h-px bg-gold opacity-40" />
              <span
                className="text-gray-text text-center"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '0.5rem',
                  letterSpacing: '0.08em',
                  whiteSpace: 'nowrap',
                  color: '#666',
                }}
              >
                {conn}
              </span>
              <div className="w-8 h-px bg-gold opacity-40" />
            </motion.div>
          ))}
        </div>

        {/* Atmosfera node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-col items-center"
        >
          {/* Mentors */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {atmosMentors.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                className="w-14 h-14 rounded-full flex items-center justify-center text-center"
                style={{
                  border: '1px solid rgba(245,166,35,0.3)',
                  background: 'rgba(245,166,35,0.05)',
                  fontSize: '0.45rem',
                  color: '#F5A623',
                  fontFamily: 'Sora, sans-serif',
                  letterSpacing: '0.03em',
                  padding: '4px',
                }}
              >
                {m}
              </motion.div>
            ))}
          </div>

          {/* Atmosfera circle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-28 h-28 rounded-full flex items-center justify-center relative"
            style={{
              border: '2px solid #F5A623',
              background: 'rgba(245,166,35,0.06)',
              boxShadow: '0 0 30px rgba(245,166,35,0.1)',
            }}
          >
            <span
              className="text-gold text-xs font-semibold tracking-widest text-center"
              style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em' }}
            >
              ATMOSFERA
            </span>
          </motion.div>

          {/* Outer rings labels */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-4 text-center space-y-1"
          >
            {['INTELIGÊNCIA COLETIVA', 'ORÁCULO / IA', 'CONEXÃO'].map((label, i) => (
              <div
                key={i}
                className="text-center"
                style={{
                  color: i === 0 ? '#F5A623' : '#555',
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '0.5rem',
                  letterSpacing: '0.15em',
                }}
              >
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom: ecosystem labels */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="flex justify-center gap-6 mt-8"
      >
        {['Whoopee', 'AYA Tech', 'Match', 'Rede de Parceiros'].map((item, i) => (
          <span
            key={i}
            className="text-gray-text"
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              borderBottom: '1px solid rgba(245,166,35,0.2)',
              paddingBottom: '2px',
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
