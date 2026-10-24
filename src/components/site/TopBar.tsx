import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';

const NAV = [
  { label: 'work', href: '#work' },
  { label: 'built', href: '#built' },
  { label: 'side quests', href: '#side-quests' },
  { label: 'open source', href: '#oss' },
  { label: 'gallery', href: '#gallery' },
  { label: 'contact', href: '#say-hi' },
];

/** Lenis owns the scroll, so anchors are driven through it rather than natively. */
const jumpTo = (hash: string) => (e: React.MouseEvent) => {
  const el = document.getElementById(hash.slice(1));
  if (!el) return;
  e.preventDefault();
  const lenis = (window as unknown as { lenis?: { scrollTo: (t: Element, o?: object) => void } }).lenis;
  if (lenis) lenis.scrollTo(el, { offset: -56 });
  else el.scrollIntoView({ behavior: 'smooth' });
  history.replaceState(null, '', hash);
};

export const TopBar: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Bar retreats as you scroll down and returns the moment you scroll back up
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 24);
      setHidden(y > 160 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 no-print transition-transform duration-500 ease-out ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div
        className={`border-b transition-colors duration-300 ${
          solid ? 'border-line bg-paper/85 backdrop-blur-md' : 'border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-14 max-w-column items-center gap-3 px-5 sm:gap-4 sm:px-6">
          <a
            href="#top"
            onClick={jumpTo('#top')}
            aria-label="back to top"
            className="shrink-0 text-ink transition-opacity duration-300 hover:opacity-60"
          >
            <Logo className="h-[9px] w-auto sm:h-[10px]" />
          </a>

          {/* Scrolls sideways when the links outrun the screen, and fades at the
              right edge so it is obvious there is more than fits. */}
          <nav
            className="flex min-w-0 flex-1 items-center justify-start gap-4 overflow-x-auto [scrollbar-width:none] sm:justify-end sm:gap-5 [&::-webkit-scrollbar]:hidden
              [mask-image:linear-gradient(to_right,#000_calc(100%-20px),transparent_100%)] sm:[mask-image:none]
              [-webkit-mask-image:linear-gradient(to_right,#000_calc(100%-20px),transparent_100%)] sm:[-webkit-mask-image:none]"
          >
            {NAV.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={jumpTo(item.href)}
                className="group relative shrink-0 whitespace-nowrap font-mono text-[11px] text-muted transition-colors duration-300 hover:text-ink"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Pinned outside the scroller so it is always reachable */}
          <button
            onClick={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))}
            aria-label={`switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="relative flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full text-muted transition-colors duration-300 hover:text-ink"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute flex items-center justify-center"
              >
                {theme === 'light' ? (
                  <Moon className="h-[14px] w-[14px]" />
                ) : (
                  <Sun className="h-[14px] w-[14px]" />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>
    </header>
  );
};
