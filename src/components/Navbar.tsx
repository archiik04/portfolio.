import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '../hooks/useActiveSection';
import { Sun, Moon, Mail, User, Layers, Code2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const sectionIds = ['hero', 'projects', 'experience', 'education', 'skills'];
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (location.pathname === '/') {
      if (activeSection && activeSection !== 'hero') {
        window.history.replaceState(null, '', `/#${activeSection}`);
      } else {
        window.history.replaceState(null, '', '/');
      }
    }
  }, [activeSection, location.pathname]);

  const handleScrollTo = (id: string) => {
    if (id === 'resume') {
      navigate('/resume');
      return;
    }
    if (id === 'about') {
      navigate('/about');
      return;
    }

    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo('#' + id, { duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const navLinks = [
    { label: 'abt me', target: 'about', icon: <User className="w-[15px] h-[15px]" /> },
    { label: 'work', target: 'projects', icon: <Layers className="w-[15px] h-[15px]" /> },
    { label: 'skills', target: 'skills', icon: <Code2 className="w-[15px] h-[15px]" /> },
  ];

  const socials = [
    { label: 'X', href: 'https://x.com/archi_twt', icon: (
      <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ) },
    { label: 'Email', href: 'mailto:archikanungo2004@gmail.com', icon: <Mail className="w-[18px] h-[18px]" /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/archi-kanungo/', icon: <Linkedin className="w-[18px] h-[18px]" /> },
    { label: 'GitHub', href: 'https://github.com/archiik04', icon: <Github className="w-[18px] h-[18px]" /> },
  ];

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 no-print px-4 w-auto max-w-[calc(100vw-2rem)]">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ y: -2 }}
        transition={{ type: 'spring', stiffness: 240, damping: 26, delay: 0.35 }}
        className="flex items-center gap-0.5 sm:gap-1 rounded-full px-2 py-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        border border-white/80 bg-white/45 [backdrop-filter:blur(28px)_saturate(180%)]
        shadow-[0_8px_32px_rgba(36,26,23,0.16),inset_0_1px_1px_rgba(255,255,255,0.95),inset_0_-1px_1px_rgba(255,255,255,0.4)]
        dark:border-white/10 dark:bg-white/[0.07]
        dark:shadow-[0_14px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.10)]">

        {navLinks.map(link => {
          const isActive =
            (link.target === 'about' && location.pathname === '/about') ||
            (location.pathname === '/' && activeSection === link.target);

          return (
            <motion.button
              key={link.target}
              onClick={() => handleScrollTo(link.target)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`relative shrink-0 flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full font-serif-editorial text-[13px] sm:text-[14px] tracking-wide cursor-pointer transition-colors duration-200 ${
                isActive
                  ? 'text-text-primary dark:text-white'
                  : 'text-text-primary/65 hover:text-text-primary dark:text-white/60 dark:hover:text-white'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="dock-pill"
                  className="absolute inset-0 rounded-full bg-white/70 border border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] dark:bg-white/[0.14] dark:border-white/16 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <motion.span
                className="relative z-10 flex items-center"
                whileHover={{ rotate: -8, scale: 1.18 }}
                transition={{ type: 'spring', stiffness: 500, damping: 12 }}
              >
                {link.icon}
              </motion.span>
              <span className="relative z-10">{link.label}</span>
            </motion.button>
          );
        })}

        <div className="h-6 w-px bg-text-primary/20 shrink-0 mx-1.5 sm:mx-2" />

        {socials.map(social => (
          <motion.a
            key={social.label}
            href={social.href}
            target={social.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={social.label}
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            className="group/social relative shrink-0 p-2 rounded-full text-text-primary/70 hover:text-text-primary transition-colors duration-200 cursor-pointer"
          >
            {social.icon}
            {/* Tooltip — these icons are unlabelled, so name them on hover */}
            <span
              className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap
                rounded-md px-2 py-1 font-mono-tag text-[10px] tracking-wide
                bg-text-primary text-bg-paper
                opacity-0 translate-y-1 scale-95
                group-hover/social:opacity-100 group-hover/social:translate-y-0 group-hover/social:scale-100
                transition-all duration-200 ease-out"
            >
              {social.label}
            </span>
          </motion.a>
        ))}

        <div className="h-6 w-px bg-text-primary/20 shrink-0 mx-1.5 sm:mx-2" />

        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.2, rotate: 12 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          className="shrink-0 p-2 rounded-full text-text-primary/70 hover:text-text-primary transition-colors duration-200 cursor-pointer"
          aria-label="Toggle color theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={theme}
              initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="block"
            >
              {theme === 'light' ? <Moon className="w-[18px] h-[18px]" /> : <Sun className="w-[18px] h-[18px]" />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </nav>
  );
};
