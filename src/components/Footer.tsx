import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleScrollTo = (id: string) => {
    if (id === 'resume') {
      navigate('/resume');
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#241A17] text-[#F8F6F2] py-16 transition-colors duration-300 no-print select-none border-t border-[#F8F6F2]/10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 md:px-12 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-6 text-left">
        
        {/* Left Side: Calligraphic Brand Logo & Copyright */}
        <div className="flex flex-col items-start space-y-4">
          <button
            onClick={() => handleScrollTo('hero')}
            className="cursor-pointer hover:opacity-85 select-none text-[#F8F6F2] flex items-center justify-center py-1"
            aria-label="Scroll to top"
          >
            <svg 
              className="w-20 h-8 stroke-current fill-none stroke-[4.5]" 
              viewBox="0 0 85 24"
            >
              {/* a */}
              <path d="M 20,13 C 20,9 16,7 13,9 C 10,11 10,15 13,17 C 16,19 20,17 20,13 M 20,9 L 20,17" strokeLinecap="round" strokeLinejoin="round" />
              {/* r */}
              <path d="M 28,10 L 28,17 M 28,12 C 30,9 33,9 35,10" strokeLinecap="round" strokeLinejoin="round" />
              {/* c */}
              <path d="M 49,10 C 47,8 43,8 43,13 C 43,17 47,18 49,15" strokeLinecap="round" strokeLinejoin="round" />
              {/* h */}
              <path d="M 56,4 L 56,17 M 56,11 C 58,8 62,8 62,12 L 62,17" strokeLinecap="round" strokeLinejoin="round" />
              {/* i */}
              <path d="M 70,10 L 70,17" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="70" cy="4" r="2.2" className="fill-current stroke-none" />
            </svg>
          </button>
          
          <div className="flex flex-col space-y-1">
            <span className="text-[12px] font-sans text-[#F8F6F2]/60 select-text">
              © {currentYear} Archi. All Rights Reserved.
            </span>
          </div>
        </div>

        {/* Right Side: Dual Directory Columns */}
        <div className="grid grid-cols-2 gap-8 sm:gap-14 md:gap-20">
          
          {/* Column 1: Connect */}
          <div className="space-y-4">
            <span className="font-mono-tag text-[10px] font-bold text-[#F8F6F2]/50 uppercase tracking-widest block">
              Connect
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-[#F8F6F2]/80">
              <li>
                <a href="mailto:archikanungo2004@gmail.com" className="hover:text-white transition-colors cursor-pointer">
                  Send a Message
                </a>
              </li>
              <li>
                <a href="mailto:archikanungo2004@gmail.com?subject=Schedule%20a%20Call" className="hover:text-white transition-colors cursor-pointer">
                  Schedule a Call
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/archi-kanungo/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: About */}
          <div className="space-y-4">
            <span className="font-mono-tag text-[10px] font-bold text-[#F8F6F2]/50 uppercase tracking-widest block">
              About
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-[#F8F6F2]/80">
              <li>
                <button onClick={() => handleScrollTo('hero')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('resume')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Resume
                </button>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
};
