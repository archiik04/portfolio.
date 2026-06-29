import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Moon, Sun, ArrowUpRight } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
}

const mockPosts: BlogPost[] = [
  {
    title: 'Building tactile, context-aware web interfaces in 2026',
    excerpt: 'Exploring how fine-grained gesture micro-interactions, responsive physics springs, and spatial cues elevate visual layouts from flat static mockups to highly engaging tactile systems.',
    date: 'Jun 12, 2026',
    readTime: '6 min read',
    tag: 'Web Dev'
  },
  {
    title: 'The evolution of procedural VR puzzle mechanics',
    excerpt: 'An architectural review of randomized corridor layout generation and optimizing GPU frame times in Unity to prevent motion sickness during long player play sessions.',
    date: 'May 04, 2025',
    readTime: '9 min read',
    tag: 'Virtual Reality'
  }
];

export const Blogs: React.FC = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-paper text-text-primary transition-colors duration-300 flex flex-col font-sans select-none">
      <div className="max-w-[1200px] w-full mx-auto px-6 sm:px-10 md:px-12 pt-12 pb-24 flex-grow">
        
        {/* Custom Header matching resume viewer styling */}
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="p-2.5 rounded-full border border-border-warm bg-white-warm dark:bg-white-warm/5 text-text-secondary hover:text-text-primary transition-all duration-200 cursor-pointer active:scale-90"
              aria-label="Back to home page"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex flex-col text-left">
              <h1 className="font-serif-editorial text-[25px] sm:text-[28px] text-text-primary font-normal leading-tight">
                Blogs
              </h1>
            </div>
          </div>

          {/* Right Wing (Theme Toggle only) */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-border-warm bg-white-warm dark:bg-white-warm/5 text-text-secondary hover:text-text-primary transition-all duration-200 cursor-pointer active:scale-90"
              aria-label="Toggle color theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* Separator Dashed Divider */}
        <div className="w-full h-px border-t border-dashed border-border-warm/80 my-8" />

        {/* Blog Postings Grid */}
        <main className="max-w-[760px] mx-auto text-left mt-12 space-y-12">
          {mockPosts.map((post, idx) => (
            <article 
              key={idx}
              className="group border border-border-warm rounded-2xl p-6 sm:p-8 bg-white-warm/30 dark:bg-white-warm/2 hover:bg-white-warm/60 dark:hover:bg-white-warm/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Tag & Meta */}
                <div className="flex items-center justify-between">
                  <span className="font-mono-tag text-[10px] font-bold text-accent-cyan uppercase tracking-widest px-2.5 py-1 bg-accent-cyan/10 rounded-md">
                    {post.tag}
                  </span>
                  <div className="flex items-center space-x-2 text-[12px] text-text-secondary font-mono">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="font-serif-editorial text-xl sm:text-2xl text-text-primary group-hover:text-accent-cyan transition-colors duration-200 font-normal leading-snug">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-text-secondary leading-relaxed font-sans">
                  {post.excerpt}
                </p>
              </div>

              {/* Action Indicator */}
              <div className="flex items-center gap-1 mt-6 text-xs text-text-secondary group-hover:text-text-primary transition-colors font-sans font-medium">
                <span>Read article</span>
                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
};
