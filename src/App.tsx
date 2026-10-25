import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLenis } from './hooks/useLenis';
import { TopBar } from './components/site/TopBar';
import { Intro } from './components/site/Intro';
import { Work } from './components/site/Work';
import { Built } from './components/site/Built';
import { SideQuests } from './components/site/SideQuests';
import { Gallery } from './components/site/Gallery';
import { OpenSource } from './components/site/OpenSource';
import { Stack } from './components/site/Stack';
import { Education } from './components/site/Education';
import { SiteFooter } from './components/site/SiteFooter';
import { ProjectDetail } from './pages/ProjectDetail';
import { ResumeViewer } from './pages/ResumeViewer';
import { OpenSourceAll } from './pages/OpenSourceAll';

function Home() {
  return (
    <>
      <TopBar />
      <main className="mx-auto w-full max-w-column px-6">
        <Intro />
        <Work />
        <Built />
        <SideQuests />
        <OpenSource />
        <Stack />
        <Education />
        <Gallery />
        <SiteFooter />
      </main>
    </>
  );
}

/** Pages lift in and sink out, with a sweep of the paper colour behind them. */
const PAGE = {
  initial: { opacity: 0, y: 18, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -12, filter: 'blur(6px)' },
};

function App() {
  useLenis();
  const location = useLocation();

  // Reset scroll on route change
  useEffect(() => {
    const lenis = (window as any).lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [location.pathname]);

  // Smooth-scroll to anchors
  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (!el) return;
    const t = setTimeout(() => {
      const lenis = (window as any).lenis;
      if (lenis) lenis.scrollTo(el, { offset: -56 });
      else el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(t);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          variants={PAGE}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
            <Route path="/resume" element={<ResumeViewer />} />
            <Route path="/open-source" element={<OpenSourceAll />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
