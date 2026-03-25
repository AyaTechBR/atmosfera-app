import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavDotsProps {
  sections: string[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function NavDots({ sections, currentIndex, onNavigate }: NavDotsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2.5 hidden md:flex">
      {sections.map((name, i) => (
        <div
          key={i}
          className="relative flex items-center justify-end"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Label on hover */}
          <AnimatePresence>
            {hoveredIndex === i && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-10 text-xs whitespace-nowrap pr-2"
                style={{
                  color: currentIndex === i ? '#F5A623' : '#999999',
                  fontFamily: 'Sora, sans-serif',
                  letterSpacing: '0.08em',
                  fontSize: '0.6rem',
                  textTransform: 'uppercase',
                }}
              >
                {name}
              </motion.span>
            )}
          </AnimatePresence>

          {/* Dot */}
          <button
            onClick={() => onNavigate(i)}
            className="relative cursor-pointer transition-all duration-300"
            style={{
              width: '6px',
              height: currentIndex === i ? '24px' : '6px',
              borderRadius: currentIndex === i ? '3px' : '50%',
              background: currentIndex === i ? '#F5A623' : (hoveredIndex === i ? 'rgba(245,166,35,0.5)' : '#333333'),
              transition: 'all 0.3s ease',
              border: 'none',
              padding: 0,
              outline: 'none',
            }}
            aria-label={`Navegar para ${name}`}
          />
        </div>
      ))}
    </div>
  );
}
