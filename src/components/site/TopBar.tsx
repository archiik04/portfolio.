import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/** Lenis owns the scroll, so anchors are driven through it rather than natively. */
const scrollTo = (hash: string) => (e: React.MouseEvent) => {
  const el = document.getElementById(hash.slice(1));
  if (!el) return;
  e.preventDefault();
  const lenis = (window as unknown as { lenis?: { scrollTo: (t: Element, o?: object) => void } }).lenis;
  if (lenis) lenis.scrollTo(el, { offset: -56 });
  else el.scrollIntoView({ behavior: 'smooth' });
  history.replaceState(null, '', hash);
};

const NAV = [
  { label: 'work', href: '#work' },
  { label: 'built', href: '#built' },
  { label: 'open source', href: '#oss' },
  { label: 'stack', href: '#stack' },
  { label: 'proof', href: '#proof' },
  { label: 'say hi', href: '#say-hi' },
];

export const TopBar: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // The bar only grows its hairline once you have scrolled past the name
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 no-print bg-paper/85 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? 'border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-12 w-full max-w-column items-center justify-between gap-4 px-6">
        <Link
          to="/"
          className="text-[13px] font-medium tracking-[-0.02em] text-ink transition-opacity hover:opacity-60"
        >
          archi
        </Link>

        <nav className="hidden items-center gap-5 sm:flex">
          {NAV.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={scrollTo(item.href)}
              className="link-draw text-[12px] text-faint transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))}
          aria-label={`switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          className="font-mono text-[10.5px] text-faint transition-colors hover:text-ink cursor-pointer"
        >
          {theme === 'light' ? 'dark' : 'light'}
        </button>
      </div>
    </header>
  );
};
