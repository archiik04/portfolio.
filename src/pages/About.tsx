import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { revealVariants } from '../hooks/useReveal';
import { Highlights } from '../components/Highlights';
import { ArrowLeft, Moon, Sun, Calendar, Mail, FileText } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import avatarImg from '../assets/avatar.jpg';

export const About: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
      }}
      className="min-h-screen bg-bg-paper text-text-primary pt-24 pb-20 select-none"
    >
      <div className="max-w-[800px] mx-auto px-6 sm:px-10 md:px-12 w-full">

        {/* Header Row */}
        <div className="flex items-center justify-between mb-10 w-full select-none">
          <div className="flex items-center gap-4 text-left">
            <button
              onClick={() => navigate('/')}
              className="w-10 h-10 rounded-xl bg-white-warm dark:bg-white-warm/5 border border-border-warm flex items-center justify-center cursor-pointer shadow-sm hover:bg-white-warm/85 transition-all duration-200 active:scale-95 text-text-secondary hover:text-text-primary"
              title="Go back home"
              aria-label="Go back home"
            >
              <ArrowLeft className="w-4.5 h-4.5" />
            </button>
            <h1 className="font-serif-editorial text-[25px] sm:text-[28px] text-text-primary font-normal leading-tight">
              About
            </h1>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-border-warm bg-white-warm dark:bg-white-warm/5 text-text-secondary hover:text-text-primary transition-all duration-200 cursor-pointer active:scale-90"
            aria-label="Toggle color theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>

        {/* Who Am I */}
        <div className="w-full text-left">
          <motion.div
            variants={revealVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 mb-6"
          >
            <h2 className="font-serif-editorial text-[22px] md:text-[32px] font-medium text-text-primary leading-none uppercase tracking-[0.04em]">
              Who Am I
            </h2>
            <div className="w-full h-px border-t border-dotted border-border-warm/80 pt-1" />
          </motion.div>

          <motion.div
            variants={revealVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border-warm select-none">
              <img
                src={avatarImg}
                alt="Archi Portrait"
                className="w-full h-full object-cover brightness-[0.98]"
              />
            </div>

            <div className="font-mono-tag text-[15px] sm:text-[16px] text-text-primary/90 leading-[1.9] tracking-normal select-text space-y-5">
              <p>
                Product Engineer / XR Developer. I love building, breaking, and shipping things.
              </p>
              <ul className="space-y-2.5 list-disc pl-5">
                <li>AI, XR, and open source are what get me out of bed.</li>
                <li>I believe in shipping — from hackathon finals to production RAG systems handling real traffic.</li>
                <li>
                  Currently building <strong className="font-bold text-text-primary">Docsy</strong> and{' '}
                  <strong className="font-bold text-text-primary">EmailBrain</strong>, and exploring immersive AI experiences in XR.
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 select-none">
              <a
                href="https://calendly.com/archi_k/youth-mentorship"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-accent-brown hover:brightness-110 text-bg-paper font-sans font-medium text-[14px] flex items-center gap-2 shadow-sm dark:shadow-[0_8px_24px_-6px_rgba(196,196,201,0.3)] transition-all duration-200 cursor-pointer active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                Book an intro call
              </a>
              <a
                href="mailto:archikanungo2004@gmail.com"
                className="px-5 py-2.5 rounded-xl border border-border-warm hover:border-accent-brown/60 bg-white-warm dark:bg-white-warm/8 hover:bg-[#FAF8F4] dark:hover:bg-white-warm/15 text-text-secondary hover:text-text-primary font-sans font-medium text-[14px] flex items-center gap-2 shadow-sm dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] transition-all duration-200 cursor-pointer active:scale-[0.98]"
              >
                <Mail className="w-4 h-4" />
                Send an email
              </a>
            </div>

            <div className="space-y-3 pt-2 text-left">
              <p className="font-sans text-[14.5px] text-text-secondary select-none">
                Here are my <span className="font-bold text-text-primary">socials</span>
              </p>

              <div className="flex flex-wrap gap-2.5 select-none">
                <a href="https://github.com/archiik04" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg border border-border-warm hover:border-accent-brown/60 bg-white-warm dark:bg-white-warm/8 hover:bg-[#FAF8F4] dark:hover:bg-white-warm/15 text-text-secondary hover:text-text-primary font-sans font-medium text-[12px] flex items-center gap-1.5 shadow-sm dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] transition-all duration-200 cursor-pointer">
                  <Github className="w-3 h-3" />
                  GitHub
                </a>
                <a href="https://x.com/archi_twt" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg border border-border-warm hover:border-accent-brown/60 bg-white-warm dark:bg-white-warm/8 hover:bg-[#FAF8F4] dark:hover:bg-white-warm/15 text-text-secondary hover:text-text-primary font-sans font-medium text-[12px] flex items-center gap-1.5 shadow-sm dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] transition-all duration-200 cursor-pointer">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Twitter
                </a>
                <a href="https://www.linkedin.com/in/archi-kanungo/" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg border border-border-warm hover:border-accent-brown/60 bg-white-warm dark:bg-white-warm/8 hover:bg-[#FAF8F4] dark:hover:bg-white-warm/15 text-text-secondary hover:text-text-primary font-sans font-medium text-[12px] flex items-center gap-1.5 shadow-sm dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] transition-all duration-200 cursor-pointer">
                  <Linkedin className="w-3 h-3" />
                  LinkedIn
                </a>
                <a href="https://discord.com/users/archi_arsenic04" target="_blank" rel="noopener noreferrer" title="Discord Username: archi_arsenic04" className="px-3 py-1.5 rounded-lg border border-border-warm hover:border-accent-brown/60 bg-white-warm dark:bg-white-warm/8 hover:bg-[#FAF8F4] dark:hover:bg-white-warm/15 text-text-secondary hover:text-text-primary font-sans font-medium text-[12px] flex items-center gap-1.5 shadow-sm dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] transition-all duration-200 cursor-pointer">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 127.14 96.36">
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.4,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c.9-.65,1.76-1.34,2.58-2.07a75.79,75.79,0,0,0,75.76,0c.82.73,1.68,1.42,2.58,2.07a68.43,68.43,0,0,1-10.5,5A77.7,77.7,0,0,0,95.14,85.51a105.73,105.73,0,0,0,31.06-18.83C129,54.65,123.5,31.58,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.88,46,53.88,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.12,46,96.12,53,91,65.69,84.69,65.69Z" />
                  </svg>
                  Discord
                </a>
                <button onClick={() => navigate('/resume')} className="px-3 py-1.5 rounded-lg border border-border-warm hover:border-accent-brown/60 bg-white-warm dark:bg-white-warm/8 hover:bg-[#FAF8F4] dark:hover:bg-white-warm/15 text-text-secondary hover:text-text-primary font-sans font-medium text-[12px] flex items-center gap-1.5 shadow-sm dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] transition-all duration-200 cursor-pointer">
                  <FileText className="w-3 h-3" />
                  Resume
                </button>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      <Highlights maxWidthClassName="max-w-[800px]" />
    </motion.div>
  );
};
