import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';
import { ProjectDetail } from './pages/ProjectDetail';
import { ResumeViewer } from './pages/ResumeViewer';
import { Blogs } from './pages/Blogs';

function App() {
  // Initialize Lenis smooth inertial scrolling
  useLenis();
  const location = useLocation();

  // Track route changes to reset scroll position immediately
  useEffect(() => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // Handle smooth scrolls to anchors
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Wait briefly for Lenis to be ready
        setTimeout(() => {
          if ((window as any).lenis) {
            (window as any).lenis.scrollTo(element, { offset: -48 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <Routes>
      {/* 1. Landing View Route */}
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-bg-paper text-text-primary transition-colors duration-300 font-sans select-none flex flex-col relative overflow-x-hidden">
            {/* Navigation Header */}
            <Navbar />

            {/* Main Content Sections */}
            <main className="flex-grow pt-20">
              {/* Landing header view */}
              <Hero />
              
              {/* Content sections stack with uniform spacing */}
              <div>
                <Projects />

                <Experience />

                <Education />

                <SkillsSection />
                
              </div>
            </main>

            {/* Footer credits */}
            <Footer />
          </div>
        }
      />

      {/* 2. Case Study Route: Focused Detail View */}
      <Route path="/project/:projectId" element={<ProjectDetail />} />

      {/* 3. Resume Viewer Route */}
      <Route path="/resume" element={<ResumeViewer />} />

      {/* 4. Blogs Route */}
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}

export default App;
