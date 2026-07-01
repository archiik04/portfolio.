import React from 'react';

interface TechIconProps {
  tech: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ tech }) => {
  const normalized = tech.toLowerCase();

  switch (normalized) {
    case 'nextjs':
      return (
        <div className="w-5 h-5 flex items-center justify-center select-none" title="Next.js">
          <svg className="w-[18px] h-[18px]" viewBox="0 0 180 180" fill="none">
            <circle cx="90" cy="90" r="90" fill="#000" />
            <path d="M149.508 157.52L69.142 54H54v72h14.4V68.219l68.79 88.08a90 90 0 0012.318-8.779zM126 126h14.4V54H126v72z" fill="#FFF"/>
          </svg>
        </div>
      );
    case 'react':
      return (
        <div className="w-5 h-5 flex items-center justify-center select-none" title="React">
          <svg className="w-[18px] h-[18px]" viewBox="-11.5 -10.23 23 20.46" fill="none" stroke="#61DAFB" strokeWidth="1.2">
            <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
            <g stroke="#61DAFB" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
        </div>
      );
    case 'typescript':
      return (
        <div className="w-5 h-5 flex items-center justify-center select-none" title="TypeScript">
          <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
            <rect width="24" height="24" rx="4" fill="#3178C6"/>
            <text x="70%" y="80%" fontSize="9.5" fontWeight="900" fill="#FFF" fontFamily="sans-serif">TS</text>
          </svg>
        </div>
      );
    case 'tailwind':
      return (
        <div className="w-5 h-5 flex items-center justify-center select-none" title="Tailwind CSS">
          <svg className="w-[18px] h-[18px]" viewBox="0 0 128 128">
            <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"/>
          </svg>
        </div>
      );
    case 'framer-motion':
      return (
        <div className="w-5 h-5 flex items-center justify-center select-none" title="Framer Motion">
          <svg className="w-[15px] h-[15px] fill-current text-text-primary dark:text-[#F8F6F2]" viewBox="0 0 24 24">
            <path d="M 0,0 L 24,0 L 12,12 L 0,12 Z M 0,12 L 12,12 L 24,24 L 0,24 Z" />
          </svg>
        </div>
      );
    case 'threejs':
      return (
        <div className="w-5 h-5 flex items-center justify-center select-none" title="Three.js">
          <svg className="w-[15px] h-[15px] fill-none stroke-current text-text-primary dark:text-[#F8F6F2] stroke-[1.8]" viewBox="0 0 24 24">
            <polygon points="12,2 2,20 22,20" />
            <circle cx="12" cy="12" r="1.5" className="fill-current stroke-none" />
          </svg>
        </div>
      );
    case 'openai':
      return (
        <div className="w-5 h-5 flex items-center justify-center select-none" title="OpenAI">
          <svg className="w-[15px] h-[15px] fill-none stroke-[#10a37f] stroke-[1.8]" viewBox="0 0 24 24">
            <path d="M21.2 12.3c0-.3-.1-.6-.2-.9.1-.4.2-.8.2-1.3 0-2.3-1.9-4.2-4.2-4.2-.3 0-.7.1-1 .2C15.3 4 12.8 2 10 2 6.9 2 4.4 4.5 4.4 7.6c0 .4.1.7.2 1.1C3.5 9 2 10.7 2 12.8c0 2.3 1.9 4.2 4.2 4.2.3 0 .7-.1 1-.2C8.3 19.4 10.9 21 14 21c3.1 0 5.6-2.5 5.6-5.6 0-.4-.1-.7-.2-1.1 1.1-.4 1.8-1.4 1.8-2.6v.6z" />
          </svg>
        </div>
      );
    case 'rust':
      return (
        <div className="w-5 h-5 flex items-center justify-center select-none" title="Rust">
          <svg className="w-[15px] h-[15px] stroke-[#DEA584] dark:stroke-[#E2B79A] fill-none stroke-[2]" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="6" />
            <path d="M12 2 L12 4 M12 20 L12 22 M2 12 L4 12 M20 12 L22 12 M5 5 L6.5 6.5 M17.5 17.5 L19 19 M5 19 L6.5 17.5 M17.5 6.5 L19 5" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      );
    case 'unity':
      return (
        <div className="w-5 h-5 flex items-center justify-center select-none" title="Unity">
          <svg className="w-[18px] h-[18px]" viewBox="0 0 128 128">
            <rect width="128" height="128" rx="24" fill="#222222"/>
            <g transform="translate(19.2, 19.2) scale(0.7)" fill="#FFFFFF">
              <path d="m63.991 128 51.702-29.855-19.817-11.461-20.26 11.704a1.151 1.151 0 0 1-1.125-.009 1.145 1.145 0 0 1-.568-.975V69.608c0-.819.424-1.56 1.133-1.968L99.13 53.737a1.119 1.119 0 0 1 1.124.009c.352.195.572.564.576.966V78.11l19.83 11.454V29.855L63.99 62.566Zm0 0" />
              <path d="m52.397 98.401-20.27-11.718-19.832 11.46L63.991 128V62.566L7.34 29.854V89.56l19.825-11.45V54.714c.009-.401.225-.77.572-.966a1.13 1.13 0 0 1 1.13-.009L52.953 67.64a2.275 2.275 0 0 1 1.133 1.97v27.8a1.156 1.156 0 0 1-.565.98 1.131 1.131 0 0 1-1.124.012"/>
              <path d="M68.959 0v22.9L89.22 34.597c.348.203.555.576.555.984 0 .403-.212.772-.555.975L65.137 50.468a2.302 2.302 0 0 1-2.27 0L38.791 36.556a1.122 1.122 0 0 1-.56-.975 1.127 1.127 0 0 1 .56-.984L59.048 22.9V0L7.339 29.855l56.652 32.711 56.665-32.71Zm0 0"/>
            </g>
          </svg>
        </div>
      );
    case 'csharp':
      return (
        <div className="w-5 h-5 flex items-center justify-center select-none" title="C#">
          <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
            <rect width="24" height="24" rx="4" fill="#390099"/>
            <text x="50%" y="65%" textAnchor="middle" fontSize="10.5" fontWeight="900" fill="#FFF" fontFamily="sans-serif">C#</text>
          </svg>
        </div>
      );
    case 'vr':
      return (
        <div className="w-5 h-5 flex items-center justify-center select-none" title="VR">
          <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="4" fill="#4B5563"/>
            <g transform="translate(3.6, 3.6) scale(0.7)" stroke="#FFFFFF" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7h18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
              <path d="M7 11.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0z" fill="#FFFFFF" />
              <path d="M14 11.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0z" fill="#FFFFFF" />
              <path d="M10 17a2 2 0 0 0 4 0" stroke="#FFFFFF"/>
            </g>
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
