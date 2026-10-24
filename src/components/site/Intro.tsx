import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, FileText, Calendar } from 'lucide-react';
import { Github, Linkedin } from '../Icons';
import avatar from '../../assets/avatar.jpg';
import avatarCat from '../../assets/avatar-cat.jpg';

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
  { label: 'Resume', to: '/resume', icon: <FileText className="h-[15px] w-[15px]" /> },
];

const BUTTON =
  'group/social relative flex h-10 w-10 items-center justify-center rounded-[10px] border border-line bg-paper text-muted hover:border-faint/60 hover:text-ink';

/** Buttons fade up in sequence once the intro has settled */
const ROW = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.35 } },
};

const ITEM = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 400, damping: 24 } },
};

const SPRING = { type: 'spring' as const, stiffness: 420, damping: 17 };

/** Icon-only buttons need a name on hover, and the nudge makes them feel alive */
const ButtonBody: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <>
    <motion.span
      className="flex items-center justify-center"
      whileHover={{ rotate: -8, scale: 1.18 }}
      transition={SPRING}
    >
      {children}
    </motion.span>
    <span
      className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 translate-y-1 scale-95 whitespace-nowrap
        rounded-md bg-ink px-2 py-1 font-mono text-[9px] tracking-wide text-paper opacity-0
        transition-all duration-200 ease-out
        group-hover/social:translate-y-0 group-hover/social:scale-100 group-hover/social:opacity-100"
    >
      {label.toLowerCase()}
    </span>
  </>
);

const FACE =
  'absolute inset-0 h-full w-full rounded-[16px] border border-line object-cover shadow-[0_2px_14px_rgba(0,0,0,0.08)] [backface-visibility:hidden] sm:rounded-[18px]';

/** Flips to the cat on hover, and on tap for anything without a pointer. */
const Avatar: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      onClick={() => setFlipped(f => !f)}
      aria-label="flip the portrait"
      className="group/avatar h-[72px] w-[72px] shrink-0 cursor-pointer [perspective:700px] sm:h-[92px] sm:w-[92px]"
    >
      <div
        className={`relative h-full w-full transition-transform duration-[650ms] ease-[cubic-bezier(0.215,0.61,0.355,1)] [transform-style:preserve-3d] group-hover/avatar:[transform:rotateY(180deg)] ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        <img src={avatar} alt="Archi Kanungo" className={FACE} />
        <img
          src={avatarCat}
          alt=""
          aria-hidden="true"
          className={`${FACE} [transform:rotateY(180deg)]`}
        />
      </div>
    </button>
  );
};

export const Intro: React.FC = () => (
  <section id="top" className="pt-24 pb-12 md:pt-32 md:pb-16">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {/* Portrait and name sit on one line, vertically centred on each other */}
      <div className="flex items-center gap-4 sm:gap-5">
        <Avatar />

        <div className="min-w-0 flex-1">
          <h1 className="text-[28px] font-medium leading-[1.05] tracking-[-0.045em] text-ink sm:text-[42px]">
            archi kanungo
          </h1>

          <div className="mt-1.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <p className="flex flex-wrap items-baseline gap-x-2 text-[15px] tracking-[-0.02em] text-ink sm:text-[19px]">
              <span>22</span>
              <span className="text-faint">&middot;</span>
              <span>engineer</span>
              <span className="text-faint">&middot;</span>
              <span>developer</span>
              <span className="text-faint">&middot;</span>
              <span>builder</span>
            </p>
            <span className="font-mono text-[11px] text-faint">bbsr/ind</span>
          </div>
        </div>
      </div>

      <p className="mt-7 text-[13.5px] leading-[1.7] text-muted sm:text-[14.5px]">
        final year computer science undergrad at kiit.
      </p>

      <ul className="mt-4 space-y-1.5 text-[13.5px] leading-[1.7] text-muted sm:text-[14.5px]">
        <li className="flex gap-2.5">
          <span className="text-faint">&middot;</span>
          <span>ai, xr and cool tech. also trying to do dsa, T..T</span>
        </li>
        <li className="flex gap-2.5">
          <span className="text-faint">&middot;</span>
          <span>
            ai &amp; youth opinions straight to <span className="text-ink">google</span> as an
            advisor.
          </span>
        </li>
      </ul>

      <div className="mt-9 border-t border-line pt-6">
        <p className="font-mono text-[10.5px] text-faint">here are my socials</p>

        <motion.div
          variants={ROW}
          initial="hidden"
          animate="visible"
          className="mt-3 flex flex-wrap items-center gap-2.5"
        >
          {ACTIONS.map(action => (
            <motion.div key={action.label} variants={ITEM}>
              <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.92 }} transition={SPRING}>
                {action.to ? (
                  <Link to={action.to} aria-label={action.label} className={BUTTON}>
                    <ButtonBody label={action.label}>{action.icon}</ButtonBody>
                  </Link>
                ) : (
                  <a
                    href={action.href}
                    target={action.href?.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={action.label}
                    className={BUTTON}
                  >
                    <ButtonBody label={action.label}>{action.icon}</ButtonBody>
                  </a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  </section>
);
