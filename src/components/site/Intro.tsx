import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, FileText, Calendar } from 'lucide-react';
import { Github, Linkedin } from '../Icons';
import avatar from '../../assets/avatar.jpg';

const ACTIONS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/archi-kanungo/',
    icon: <Linkedin className="h-[15px] w-[15px]" />,
  },
  {
    label: 'Email',
    href: 'mailto:archikanungo2004@gmail.com',
    icon: <Mail className="h-[15px] w-[15px]" />,
  },
  {
    label: 'X',
    href: 'https://x.com/archi_twt',
    icon: (
      <svg className="h-[13px] w-[13px] fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/archiik04',
    icon: <Github className="h-[15px] w-[15px]" />,
  },
  {
    label: 'Calendly',
    href: 'https://calendly.com/archi_k/youth-mentorship',
    icon: <Calendar className="h-[15px] w-[15px]" />,
  },
];

const BUTTON =
  'flex h-10 w-10 items-center justify-center rounded-[10px] border border-line text-muted transition-all duration-300 hover:border-faint/60 hover:text-ink';

export const Intro: React.FC = () => (
  <section id="top" className="pt-14 pb-12 md:pt-20 md:pb-16">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
    >
      <img
        src={avatar}
        alt="Archi Kanungo"
        className="h-[106px] w-[106px] rounded-[18px] border border-line object-cover shadow-[0_2px_14px_rgba(0,0,0,0.08)]"
      />

      <h1 className="mt-7 text-[40px] font-medium leading-[1.05] tracking-[-0.045em] text-ink sm:text-[52px]">
        archi kanungo
      </h1>

      <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="flex flex-wrap items-baseline gap-x-2.5">
          <span className="font-mono text-[11px] text-faint">i am a</span>
          <span className="text-[17px] tracking-[-0.02em] text-ink sm:text-[19px]">
            product engineer building for ai and xr
          </span>
        </p>
        <span className="font-mono text-[11px] text-faint">bbsr/ind</span>
      </div>

      <p className="mt-8 text-justify text-[13.5px] leading-[1.8] text-muted sm:text-[14.5px]">
        hey! i&rsquo;m archi, a computer science undergrad at kiit who likes building, breaking and
        shipping things. right now i&rsquo;m a product engineer intern at{' '}
        <span className="text-ink">learning pathways</span>, building features end to end with react
        on the front and fastapi behind it. before that i shipped a production rag platform at{' '}
        <span className="text-ink">aashdit technologies</span>, doing semantic search across pdfs,
        docx and scanned documents at 10k+ concurrent documents and sub-200ms. alongside all of it
        i&rsquo;ve spent two years as a global youth advisor for google through{' '}
        <span className="text-ink">canvas8</span>, testing gemini in beta and speaking at leadership
        events on where young people and ai actually meet. i build in xr too: unity, vr, and an
        inclusion scholarship from xr bootcamp. and when i&rsquo;m not building? probably writing
        study notes that somehow earned &#8377;20,000+ on knowt.
      </p>

      <div className="mt-9 border-t border-line pt-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            {ACTIONS.map(action => (
              <a
                key={action.label}
                href={action.href}
                target={action.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={action.label}
                title={action.label}
                className={BUTTON}
              >
                {action.icon}
              </a>
            ))}
            <Link to="/resume" aria-label="Resume" title="Resume" className={BUTTON}>
              <FileText className="h-[15px] w-[15px]" />
            </Link>
          </div>

          <p className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px] leading-snug text-muted">
              open to internships and new-grad roles across product &amp; engineering.
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);
