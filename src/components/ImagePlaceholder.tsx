interface ImagePlaceholderProps {
  className?: string;
  label?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'full';
  src?: string;
  objectPosition?: string;
}

export default function ImagePlaceholder({
  className = '',
  label = 'Imagem',
  aspectRatio = '16/9',
  src,
  objectPosition = 'center',
}: ImagePlaceholderProps) {
  const aspectClass = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    'full': 'h-full w-full',
  }[aspectRatio];

  if (src) {
    return (
      <div
        className={`img-placeholder ${aspectClass} ${className} overflow-hidden`}
        style={{ position: 'relative' }}
      >
        <img
          src={src}
          alt={label}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition,
            display: 'block',
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={`img-placeholder ${aspectClass} ${className}`}
      style={{
        background: '#111111',
        border: '1px dashed rgba(245, 166, 35, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(245,166,35,0.3)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
      <span
        style={{
          color: 'rgba(245,166,35,0.3)',
          fontSize: '0.6rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontFamily: 'Sora, sans-serif',
        }}
      >
        {label}
      </span>
    </div>
  );
}
