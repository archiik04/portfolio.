import React, { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';
import { playSwitch } from '../../lib/sound';

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
  const [solid, setSolid] = useState(false);
  const [ring, setRing] = useState(0);
  const lastY = useRef(0);

  useEffect(() => {
    apply(theme);
    // only syncs what the initial state resolved to; later changes go through toggle
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
          duration: 620,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

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
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.86 }}
            transition={{ type: 'spring', stiffness: 500, damping: 18 }}
            aria-label={`switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="relative flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full text-muted transition-colors duration-300 hover:text-ink"
          >
            {/* A ring leaves the button each time it is pressed */}
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
                initial={{ rotate: -120, opacity: 0, scale: 0.4 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 120, opacity: 0, scale: 0.4 }}
                transition={{ type: 'spring', stiffness: 320, damping: 20 }}
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
        </div>
      </div>
    </header>
  );
};
