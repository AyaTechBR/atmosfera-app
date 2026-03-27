import { motion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

interface DeliveryScreenProps {
  isActive: boolean;
  tagNumber: string;
  tagLabel: string;
  title: string;
  body: string | React.ReactNode;
  highlight?: string;
  imagePlaceholder?: string;
  imageSrc?: string;
  imagePosition?: string;
  showImage?: boolean;
  children?: React.ReactNode;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function DeliveryScreen({
  isActive,
  tagNumber,
  tagLabel,
  title,
  body,
  highlight,
  imagePlaceholder = 'Imagem',
  imageSrc,
  imagePosition = 'center',
  showImage = true,
  children,
}: DeliveryScreenProps) {
  return (
    <div
      className="slide-section flex items-stretch"
      style={{ background: '#0A0A0A' }}
    >
      {/* Left content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? 'visible' : 'hidden'}
        className="flex flex-col justify-center px-10 md:px-14 lg:px-20 py-16"
        style={{ flex: showImage ? '0 0 55%' : '1', maxWidth: showImage ? '55%' : '100%' }}
      >
        {/* Tag */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="gold-tag">
            {tagNumber} · {tagLabel}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-white font-light leading-tight mb-6"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.8rem)',
            letterSpacing: '0.01em',
          }}
        >
          {title}
        </motion.h2>

        <motion.div variants={itemVariants} className="w-10 h-px bg-gold mb-6" />

        {/* Body */}
        <motion.div variants={itemVariants}>
          {typeof body === 'string' ? (
            <p
              className="text-gray-secondary leading-relaxed"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(0.82rem, 1.2vw, 0.95rem)',
                lineHeight: '1.85',
              }}
            >
              {body}
            </p>
          ) : (
            body
          )}
        </motion.div>

        {/* Highlight */}
        {highlight && (
          <motion.div
            variants={itemVariants}
            className="mt-6 border-l-2 border-gold pl-5 py-1"
          >
            <p
              className="text-gold leading-relaxed"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(0.8rem, 1.1vw, 0.9rem)',
                lineHeight: '1.75',
                fontStyle: 'italic',
              }}
            >
              {highlight}
            </p>
          </motion.div>
        )}

        {children}
      </motion.div>

      {/* Right image */}
      {showImage && (
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="hidden md:flex flex-1 items-stretch overflow-hidden"
          style={{ background: '#0D0D0D', borderLeft: '1px solid #1A1A1A' }}
        >
          <ImagePlaceholder
            aspectRatio="full"
            label={imagePlaceholder}
            src={imageSrc}
            objectPosition={imagePosition}
            className="w-full"
          />
        </motion.div>
      )}
    </div>
  );
}
