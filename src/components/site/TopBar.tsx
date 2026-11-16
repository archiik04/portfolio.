import React, { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';
import { useActiveSection } from '../../hooks/useActiveSection';
import { playSwitch } from '../../lib/sound';

const NAV = [
  { label: 'work', id: 'work' },
  { label: 'built', id: 'built' },
  { label: 'side quests', id: 'side-quests' },
  { label: 'open source', id: 'oss' },
  { label: 'moments', id: 'moments' },
  { label: 'contact', id: 'say-hi' },
];

const SECTION_IDS = NAV.map(item => item.id);

/** Lenis owns the scroll, so anchors are driven through it rather than natively. */
const jumpTo = (id: string) => (e: React.MouseEvent) => {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  const lenis = (window as unknown as { lenis?: { scrollTo: (t: Element, o?: object) => void } }).lenis;
  if (lenis) lenis.scrollTo(el, { offset: -76 });
  else el.scrollIntoView({ behavior: 'smooth' });
  history.replaceState(null, '', `#${id}`);
};

type Theme = 'light' | 'dark';

const apply = (next: Theme) => {
  document.documentElement.classList.toggle('dark', next === 'dark');
  localStorage.setItem('theme', next);
};

export const TopBar: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Bar retreats as you scroll down and returns the moment you scroll back up
  const [hidden, setHidden] = useState(false);
  const [ring, setRing] = useState(0);
  const lastY = useRef(0);

  // Which section the reader is actually in, so the marker can follow them
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    apply(theme);
    // only syncs what the initial state resolved to; later changes go through toggle
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 260 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';

    playSwitch(next === 'dark');
    setRing(r => r + 1);

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const start = (document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> };
    }).startViewTransition;

    // No view transitions, or motion is turned down: just switch
    if (!start || reduced) {
      apply(next);
      setTheme(next);
      return;
    }

    // The new theme is revealed by a circle growing out of the button
    const box = e.currentTarget.getBoundingClientRect();
    const x = box.left + box.width / 2;
    const y = box.top + box.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = start.call(document, () => {
      flushSync(() => {
        apply(next);
        setTheme(next);
      });
    });

    void transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`],
        },
        {
          duration: 760,
          easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 no-print transition-transform duration-500 ease-out sm:pt-4 ${
        hidden ? '-translate-y-[160%]' : 'translate-y-0'
      }`}
    >
      {/* A floating island rather than a full-width bar, so the page still
          reads as one centred column with nothing spanning behind it. */}
      <nav
        aria-label="Sections"
        className="flex max-w-full items-center gap-1 rounded-full border border-line bg-paper/70 p-1 pl-3 shadow-[0_4px_24px_rgba(0,0,0,0.07)] backdrop-blur-xl sm:gap-1.5 sm:pl-4 dark:shadow-[0_4px_24px_rgba(0,0,0,0.55)]"
      >
        <a
          href="#top"
          onClick={jumpTo('top')}
          aria-label="back to top"
          className="shrink-0 text-ink transition-opacity duration-300 hover:opacity-60"
        >
          <Logo className="h-[9px] w-auto sm:h-[10px]" />
        </a>

        <span className="mx-1 hidden h-4 w-px bg-line sm:block" aria-hidden="true" />

        <div className="flex min-w-0 items-center gap-0.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {NAV.map(item => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={jumpTo(item.id)}
                aria-current={isActive ? 'true' : undefined}
                className={`relative shrink-0 whitespace-nowrap rounded-full px-2.5 py-1.5 font-mono text-[11px] transition-colors duration-300 sm:px-3 ${
                  isActive ? 'text-ink' : 'text-faint hover:text-muted'
                }`}
              >
                {/* One marker that slides from the old section to the new one */}
                {isActive && (
                  <motion.span
                    layoutId="nav-marker"
                    className="absolute inset-0 rounded-full bg-line/[0.55]"
                    transition={{ type: 'spring', stiffness: 340, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        <span className="mx-1 hidden h-4 w-px bg-line sm:block" aria-hidden="true" />

        <motion.button
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 24 }}
          aria-label={`switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          className="relative flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full text-faint transition-colors duration-300 hover:bg-line/[0.45] hover:text-ink"
        >
          {ring > 0 && (
            <span
              key={ring}
              aria-hidden="true"
              className="switch-ring pointer-events-none absolute inset-0 rounded-full border border-current"
            />
          )}

          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={theme}
              initial={{ rotate: -90, opacity: 0, scale: 0.55 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.55 }}
              transition={{ type: 'spring', stiffness: 240, damping: 26, mass: 0.8 }}
              className="absolute flex items-center justify-center"
            >
              {theme === 'light' ? (
                <Moon className="h-[14px] w-[14px]" />
              ) : (
                <Sun className="h-[14px] w-[14px]" />
              )}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </nav>
    </header>
  );
};
