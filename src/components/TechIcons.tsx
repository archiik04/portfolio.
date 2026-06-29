import React from 'react';

interface TechIconProps {
  tech: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ tech }) => {
  const normalized = tech.toLowerCase();

  switch (normalized) {
    case 'nextjs':
      return (
        <div className="w-5 h-5 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white select-none" title="Next.js">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="#000" />
            <path d="M 75,70 L 40,25 Q 38,22 35,25 L 35,75 L 42,75 L 42,38 L 72,75 Z" fill="#FFF" />
          </svg>
        </div>
      );
    case 'react':
      return (
        <div className="w-5 h-5 rounded-full border border-border-warm bg-white flex items-center justify-center text-text-secondary select-none" title="React">
          <svg className="w-3.5 h-3.5 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
            <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(30 12 12)" />
            <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(90 12 12)" />
            <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(150 12 12)" />
            <circle cx="12" cy="12" r="1.5" className="fill-current stroke-none" />
          </svg>
        </div>
      );
    case 'typescript':
      return (
        <div className="w-5 h-5 rounded bg-[#3178C6] flex items-center justify-center text-white font-sans font-bold text-[8.5px] select-none" title="TypeScript">
          TS
        </div>
      );
    case 'tailwind':
      return (
        <div className="w-5 h-5 rounded-full border border-border-warm bg-white flex items-center justify-center text-text-secondary select-none" title="Tailwind CSS">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 6.09c-1.39-1.92-3.6-3.09-6.09-3.09-2.49 0-4.7 1.17-6.09 3.09 1.39 1.92 3.6 3.09 6.09 3.09 2.49 0 4.7-1.17 6.09-3.09zm0 5.91c-1.39-1.92-3.6-3.09-6.09-3.09-2.49 0-4.7 1.17-6.09 3.09 1.39 1.92 3.6 3.09 6.09 3.09 2.49 0 4.7-1.17 6.09-3.09zm0 5.91c-1.39-1.92-3.6-3.09-6.09-3.09-2.49 0-4.7 1.17-6.09 3.09 1.39 1.92 3.6 3.09 6.09 3.09 2.49 0 4.7-1.17 6.09-3.09z" className="opacity-0" />
            <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 12c-4 0-6 2-6 6s2 6 6 6 6-2 6-6-2-6-6-6z" fill="none" stroke="currentColor" strokeWidth="1.2" className="opacity-40" />
            <path d="M12 4.5C8 4.5 5.5 7 5.5 11.5S8 16 12 16s6.5-2 6.5-6.5S16 4.5 12 4.5z" fill="currentColor" opacity="0.8" />
          </svg>
        </div>
      );
    case 'framer-motion':
      return (
        <div className="w-5 h-5 rounded-full border border-border-warm bg-white flex items-center justify-center text-text-primary select-none" title="Framer Motion">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
            <path d="M 0,0 L 24,0 L 12,12 L 0,12 Z M 0,12 L 12,12 L 24,24 L 0,24 Z" />
          </svg>
        </div>
      );
    case 'threejs':
      return (
        <div className="w-5 h-5 rounded-full border border-border-warm bg-white flex items-center justify-center text-text-primary select-none" title="Three.js">
          <svg className="w-3 h-3 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
            <polygon points="12,2 2,20 22,20" />
            <circle cx="12" cy="12" r="1.5" className="fill-current stroke-none" />
          </svg>
        </div>
      );
    case 'openai':
      return (
        <div className="w-5 h-5 rounded-full border border-border-warm bg-white flex items-center justify-center text-text-secondary select-none" title="OpenAI">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
            <path d="M21.2 12.3c0-.3-.1-.6-.2-.9.1-.4.2-.8.2-1.3 0-2.3-1.9-4.2-4.2-4.2-.3 0-.7.1-1 .2C15.3 4 12.8 2 10 2 6.9 2 4.4 4.5 4.4 7.6c0 .4.1.7.2 1.1C3.5 9 2 10.7 2 12.8c0 2.3 1.9 4.2 4.2 4.2.3 0 .7-.1 1-.2C8.3 19.4 10.9 21 14 21c3.1 0 5.6-2.5 5.6-5.6 0-.4-.1-.7-.2-1.1 1.1-.4 1.8-1.4 1.8-2.6v.6z" />
          </svg>
        </div>
      );
    case 'rust':
      return (
        <div className="w-5 h-5 rounded-full border border-border-warm bg-white flex items-center justify-center text-text-secondary select-none" title="Rust">
          <svg className="w-3 h-3 stroke-current fill-none stroke-[2.2]" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="7" />
            <path d="M12 2 L12 5 M12 19 L12 22 M2 12 L5 12 M19 12 L22 12" />
          </svg>
        </div>
      );
    case 'unity':
      return (
        <div className="w-5 h-5 rounded-full border border-border-warm bg-white flex items-center justify-center text-text-primary select-none" title="Unity">
          <svg className="w-3 h-3 fill-none stroke-current stroke-[2.2]" viewBox="0 0 24 24">
            {/* Center coordinates */}
            <path d="M12 12L12 3 M12 12L4.2 16.5 M12 12L19.8 16.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Outer box */}
            <path d="M12 3L19.8 7.5V16.5L12 21L4.2 16.5V7.5L12 3Z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case 'csharp':
      return (
        <div className="w-5 h-5 rounded bg-[#390099] flex items-center justify-center text-white font-sans font-extrabold text-[8.5px] select-none" title="C#">
          C#
        </div>
      );
    case 'vr':
      return (
        <div className="w-5 h-5 rounded-full border border-border-warm bg-white flex items-center justify-center text-text-primary select-none" title="VR">
          <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
            {/* Headset visor */}
            <path d="M2 10a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4z" strokeLinecap="round" strokeLinejoin="round" />
            {/* Nose bridge cutout */}
            <path d="M10 17c.5-1 1.5-1.5 2-1.5s1.5.5 2 1.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Visor eyes */}
            <circle cx="7.5" cy="11.5" r="1.2" className="fill-current stroke-none" />
            <circle cx="16.5" cy="11.5" r="1.2" className="fill-current stroke-none" />
          </svg>
        </div>
      );
    default:
      return (
        <div className="w-5 h-5 rounded-full bg-border-warm flex items-center justify-center text-text-secondary font-mono text-[8px] uppercase select-none">
          {tech.slice(0, 2)}
        </div>
      );
  }
};
