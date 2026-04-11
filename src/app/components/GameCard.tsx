import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';

interface GameCardProps {
  title: string;
  role: string;
  description: string;
  imageUrl: string;
  tags: string[];
  year: string;
  accentColor: string;
  externalLink?: string;
  engine?: string;
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

export function GameCard({ title, role, description, imageUrl, tags, year, accentColor, externalLink, engine }: GameCardProps) {
  const rgb = hexToRgb(accentColor);

  const CardContent = (
    <div
      className="group bg-card rounded-lg overflow-hidden border-2 border-border hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative"
      style={{
        '--accent-color': accentColor,
        '--accent-rgb': `${rgb.r}, ${rgb.g}, ${rgb.b}`,
      } as React.CSSProperties}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accentColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '';
      }}
    >
      {/* Accent gradient overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none z-10"
        style={{
          background: `linear-gradient(135deg, ${accentColor}40 0%, transparent 100%)`,
        }}
      />

      <div className="aspect-video overflow-hidden bg-muted relative">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Year badge */}
        <div
          className="absolute top-3 right-3 px-3 py-1 rounded-full text-sm backdrop-blur-sm text-white transition-all duration-300"
          style={{
            backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.9)`,
          }}
        >
          {year}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow relative z-20">
        <div className="mb-2">
          <h3 className="text-foreground transition-colors duration-300 group-hover:opacity-90">{title}</h3>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <p
            className="text-sm transition-colors duration-300"
            style={{ color: accentColor }}
          >
            {role}
          </p>
          {engine && (
            <span
              className="px-2 py-0.5 rounded text-xs font-medium"
              style={{
                backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)`,
                color: accentColor,
                border: `1px solid rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)`,
              }}
            >
              {engine}
            </span>
          )}
        </div>
        <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-xs transition-all duration-300 group-hover:shadow-md"
              style={{
                backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`,
                color: accentColor,
                border: `1px solid rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (externalLink) {
    // Check if it's an internal link (starts with /)
    const isInternalLink = externalLink.startsWith('/');

    if (isInternalLink) {
      return (
        <Link to={externalLink} className="block h-full">
          {CardContent}
        </Link>
      );
    }

    return (
      <a href={externalLink} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
