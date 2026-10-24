import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route path="/resume" element={<ResumeViewer />} />
        <Route path="/open-source" element={<OpenSourceAll />} />
      </Routes>
    </div>
  );
}

export default App;
