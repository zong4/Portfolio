import { motion } from 'motion/react';

interface DynamicBackgroundProps {
  accentColor?: string;
  variant?: 'subtle' | 'ambient' | 'gradient' | 'pattern';
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

export function DynamicBackground({ accentColor = '#8B5CF6', variant = 'ambient' }: DynamicBackgroundProps) {
  const rgb = hexToRgb(accentColor);

  if (variant === 'subtle') {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            background: `linear-gradient(135deg, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3) 0%, transparent 60%)`,
          }}
        />
      </div>
    );
  }

  if (variant === 'ambient') {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Top right ambient glow */}
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full blur-3xl opacity-[0.08]"
          style={{
            background: `radial-gradient(circle, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.4) 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Bottom left ambient glow */}
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full blur-3xl opacity-[0.06]"
          style={{
            background: `radial-gradient(circle, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3) 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.06, 0.1, 0.06],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    );
  }

  if (variant === 'gradient') {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg,
              rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.03) 0%,
              transparent 40%,
              transparent 60%,
              rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.02) 100%)`,
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    );
  }

  if (variant === 'pattern') {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            background: `radial-gradient(circle at 30% 20%, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.4) 0%, transparent 50%)`,
          }}
        />
      </div>
    );
  }

  return null;
}
