import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../components/Container';
import { ArrowLeft, ExternalLink, FileText, Download, Moon, Sun } from 'lucide-react';

export const ResumeViewer: React.FC = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sync theme local state for header button toggle
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      if (next === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Archi_Kanungo_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
      }}
      className="min-h-screen bg-bg-paper text-text-primary pt-24 pb-20 select-text"
    >
      <Container>
        
        {/* 1. Mockup Header Row */}
        <div className="flex items-center justify-between mb-8 w-full max-w-[800px] mx-auto select-none">
          {/* Left Wing */}
          <div className="flex items-center gap-4 text-left">
            <button
              onClick={() => navigate('/')}
              className="w-10 h-10 rounded-xl bg-white-warm dark:bg-white-warm/5 border border-border-warm flex items-center justify-center cursor-pointer shadow-sm hover:bg-white-warm/85 transition-all duration-200 active:scale-95 text-text-secondary hover:text-text-primary"
              title="Go back home"
              aria-label="Go back home"
            >
              <ArrowLeft className="w-4.5 h-4.5" />
            </button>
            
            <div className="flex flex-col text-left">
              <h1 className="font-serif-editorial text-[25px] sm:text-[28px] text-text-primary font-normal leading-tight">
                Resume
              </h1>
            </div>
          </div>

          {/* Right Wing (Theme Toggle only) */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-border-warm bg-white-warm dark:bg-white-warm/5 text-text-secondary hover:text-text-primary transition-all duration-200 cursor-pointer active:scale-90"
              aria-label="Toggle color theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* 2. Dashed Divider */}
        <div className="w-full max-w-[800px] mx-auto border-t border-dashed border-border-warm/60 my-6" />

        {/* 3. Document Action Card */}
        <div className="w-full max-w-[800px] mx-auto border border-border-warm rounded-2xl p-4 bg-white-warm/30 dark:bg-white-warm/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 text-left">
            <div className="p-3 rounded-xl border border-border-warm bg-white dark:bg-white-warm/5 flex items-center justify-center text-text-secondary shadow-sm">
              <FileText className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-semibold text-text-primary text-[15px]">
                Archi Kanungo Resume
              </span>
              <span className="font-sans text-[12.5px] text-text-secondary mt-0.5">
                PDF document
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border-warm bg-white dark:bg-white-warm/5 hover:bg-white-warm dark:hover:bg-white-warm/10 text-text-secondary hover:text-text-primary transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center shadow-sm"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={handleDownload}
              className="px-5 py-2.5 rounded-xl bg-[#241A17] dark:bg-[#F8F6F2] text-[#F8F6F2] dark:text-[#241A17] hover:bg-[#241A17]/90 dark:hover:bg-[#F8F6F2]/90 text-[13px] font-sans font-medium flex items-center gap-2 shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </button>
          </div>
        </div>

        {/* 4. Embedded PDF Document Frame */}
        <div className="w-full max-w-[800px] mx-auto rounded-2xl overflow-hidden border border-border-warm bg-white shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
          <iframe
            src="/resume.pdf#toolbar=1"
            className="w-full h-[1100px] border-none"
            title="Archi Kanungo Resume"
          >
            <div className="p-8 text-center">
              <p className="text-text-secondary font-sans text-sm mb-4">
                This browser doesn't support embedding PDF files.
              </p>
              <button
                onClick={handleDownload}
                className="px-4 py-2 rounded bg-[#241A17] dark:bg-[#F8F6F2] text-[#F8F6F2] dark:text-[#241A17] text-xs cursor-pointer"
              >
                Download Resume
              </button>
            </div>
          </iframe>
        </div>

      </Container>
    </motion.div>
  );
};
