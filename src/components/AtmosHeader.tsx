import { motion } from 'framer-motion';

export default function AtmosHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 h-14"
      style={{
        background: 'rgba(10, 10, 10, 0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(34, 34, 34, 0.8)',
      }}
    >
      {/* Logo Atmosfera */}
      <img
        src="/atmosfera-app/images/logo-atmosfera.webp"
        alt="Atmosfera"
        style={{ height: '28px', width: 'auto', objectFit: 'contain' }}
      />

      <span
        className="text-white text-xs font-semibold"
        style={{ letterSpacing: '0.12em', fontFamily: 'Sora, sans-serif' }}
      >
        BLVR GROUP
      </span>

      <span
        className="text-gray-text text-xs font-light"
        style={{ letterSpacing: '0.2em', fontFamily: 'Sora, sans-serif' }}
      >
        2026
      </span>
    </motion.header>
  );
}
