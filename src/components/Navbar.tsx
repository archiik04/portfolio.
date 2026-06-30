import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useActiveSection } from '../hooks/useActiveSection';
import { Sun, Moon, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const sectionIds = ['hero', 'projects', 'quest', 'experience', 'education', 'skills'];
  const activeSection = useActiveSection(sectionIds);

  // Sync theme
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Update browser URL hash dynamically to match the active viewport section
  useEffect(() => {
    if (location.pathname === '/') {
      if (activeSection && activeSection !== 'hero') {
        window.history.replaceState(null, '', `/#${activeSection}`);
      } else {
        window.history.replaceState(null, '', '/');
      }
    }
  }, [activeSection, location.pathname]);

  // Track scrolling status for background frosting
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Check initial scroll position immediately
    handleScroll();

    // Check again after a small timeout to account for anchor routing jumps
    const timer1 = setTimeout(handleScroll, 100);
    const timer2 = setTimeout(handleScroll, 300);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleScrollTo = (id: string) => {
    if (id === 'resume') {
      navigate('/resume');
      setMobileMenuOpen(false);
      return;
    }
    if (id === 'quest') {
      navigate('/quest');
      setMobileMenuOpen(false);
      return;
    }
    
    // If not on the homepage, navigate back with hash target
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      setMobileMenuOpen(false);
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
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Nav definitions
  const leftLinks = [
    { label: 'Projects', target: 'projects' },
    { label: 'Experience', target: 'experience' },
  ];

  const rightLinks = [
    { label: 'Skills', target: 'skills' },
    { label: 'Quest', target: 'quest' },
  ];

  const renderLink = (link: { label: string; target: string }) => {
    const isActive = activeSection === link.target;
    return (
      <button
        key={link.target}
        onClick={() => handleScrollTo(link.target)}
        className={`relative py-1.5 text-[14px] font-sans font-medium cursor-pointer select-none transition-colors duration-300 ${
          isActive 
            ? 'text-text-primary' 
            : 'text-text-secondary hover:text-text-primary'
        }`}
      >
        {link.label}
        {isActive && (
          <motion.div
            layoutId="nav-underline"
            className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent-brown rounded-full"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
      </button>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 no-print border-b ${
        isScrolled
          ? 'bg-bg-paper/80 backdrop-blur-md border-border-warm py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.01)]'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 md:px-12 flex items-center justify-between relative h-10">
        
        {/* Mobile View Header Wrapper */}
        <div className="flex md:hidden items-center justify-between w-full">
          <div className="w-8" /> {/* Spacer to help balance mobile logo */}
          
          <button
            onClick={() => handleScrollTo('hero')}
            className="cursor-pointer hover:opacity-85 select-none text-text-primary flex items-center justify-center py-1"
            aria-label="Scroll to top"
          >
            <svg 
              className="w-22 h-8.5 stroke-current fill-none stroke-[4.8]" 
              viewBox="0 0 85 24"
            >
              <path d="M 20,13 C 20,9 16,7 13,9 C 10,11 10,15 13,17 C 16,19 20,17 20,13 M 20,9 L 20,17" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 28,10 L 28,17 M 28,12 C 30,9 33,9 35,10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 49,10 C 47,8 43,8 43,13 C 43,17 47,18 49,15" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 56,4 L 56,17 M 56,11 C 58,8 62,8 62,12 L 62,17" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 70,10 L 70,17" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="70" cy="4" r="2.2" className="fill-current stroke-none" />
            </svg>
          </button>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-border-warm text-text-secondary hover:text-text-primary transition-all duration-200"
              aria-label="Toggle color theme"
            >
              {theme === 'light' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded border border-border-warm text-text-secondary hover:text-text-primary transition-colors"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Desktop View Symmetrical Layout */}
        <div className="hidden md:flex items-center justify-between w-full h-full">
          {/* Left Column: Left-aligned links */}
          <div className="flex items-center space-x-8 w-1/3 justify-start">
            {leftLinks.map(renderLink)}
          </div>
          
          {/* Center Column: Mathematically centered logo */}
          <div className="flex items-center justify-center w-1/3">
            <button
              onClick={() => handleScrollTo('hero')}
              className="cursor-pointer hover:opacity-85 select-none text-text-primary flex items-center justify-center py-1"
              aria-label="Scroll to top"
            >
              <svg 
                className="w-26 h-10 stroke-current fill-none stroke-[4.8]" 
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
          </div>
          
          {/* Right Column: Right-aligned links & theme toggle */}
          <div className="flex items-center w-1/3 justify-end">
            <div className="flex items-center space-x-8">
              {rightLinks.map(renderLink)}
            </div>
            
            {/* Divider line with custom margins to align circular button */}
            <div className="h-4 w-px bg-border-warm/75 ml-6 mr-5" />

            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-border-warm text-text-secondary hover:text-text-primary hover:bg-white-warm dark:hover:bg-white-warm/10 transition-all duration-200 cursor-pointer"
              aria-label="Toggle color theme"
            >
              {theme === 'light' ? (
                <Moon className="w-3.5 h-3.5" />
              ) : (
                <Sun className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden w-full bg-bg-paper border-b border-border-warm px-6 py-5 space-y-4"
        >
          <div className="flex flex-col space-y-3.5">
            {[...leftLinks, ...rightLinks].map(link => (
              <button
                key={link.target}
                onClick={() => handleScrollTo(link.target)}
                className="text-left py-1 text-[15px] font-sans font-medium text-text-secondary hover:text-text-primary cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};
