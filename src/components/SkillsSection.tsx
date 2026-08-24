import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { SectionShell } from './SectionShell';
import { revealVariants } from '../hooks/useReveal';
import { GithubContributions } from './GithubContributions';
import {
  ReactIcon,
  NextIcon,
  ExpressIcon,
  NodeIcon,
  BunIcon,
  PostgreSQLIcon,
  MongoDBIcon,
  RedisIcon,
  PrismaIcon,
  TailwindIcon,
  ShadcnIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  PythonIcon,
  CPlusPlusIcon,
  SqlIcon,
  GitIcon,
  GithubIcon,
  DockerIcon,
  UnityIcon,
  ArIcon,
  VrIcon
} from './SkillIcons';

const skillsData = [
  { name: 'React', icon: ReactIcon },
  { name: 'Next', icon: NextIcon },
  { name: 'Express', icon: ExpressIcon },
  { name: 'Node', icon: NodeIcon },
  { name: 'Bun', icon: BunIcon },
  { name: 'PostgreSQL', icon: PostgreSQLIcon },
  { name: 'MongoDB', icon: MongoDBIcon },
  { name: 'Redis', icon: RedisIcon },
  { name: 'Prisma', icon: PrismaIcon },
  { name: 'Tailwind', icon: TailwindIcon },
  { name: 'shadcn', icon: ShadcnIcon },
  { name: 'Unity', icon: UnityIcon },
  { name: 'AR', icon: ArIcon },
  { name: 'VR', icon: VrIcon },
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'TypeScript', icon: TypeScriptIcon },
  { name: 'Python', icon: PythonIcon },
  { name: 'C/C++', icon: CPlusPlusIcon },
  { name: 'SQL', icon: SqlIcon },
  { name: 'Git', icon: GitIcon },
  { name: 'Github', icon: GithubIcon },
  { name: 'Docker', icon: DockerIcon },
];

export const SkillsSection: React.FC = () => {
  return (
    <section 
      id="skills" 
      className="py-14 md:py-16 bg-bg-paper text-text-primary scroll-mt-12 text-left"
    >
      <Container>
        <SectionShell>
        
        {/* Title Matching Section Header Style */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="font-serif-editorial text-[22px] md:text-[32px] font-medium text-text-primary leading-none uppercase tracking-[0.04em]">
            Skills & Technologies
          </h2>
          
          {/* Symmetrical dotted line divider */}
          <div className="w-full h-px border-t border-dotted border-border-warm/80 pt-1" />
        </motion.div>

        {/* Symmetrical flex wrapping grid of badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3.5 mt-8 select-none">
          {skillsData.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className="w-full px-4 py-2 rounded-xl border border-border-warm hover:border-accent-brown/60 bg-white-warm dark:bg-white-warm/8 hover:bg-[#FAF8F4] dark:hover:bg-white-warm/15 text-text-secondary hover:text-text-primary shadow-sm dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2.5"
              >
                <Icon className="w-4 h-4 object-contain flex-shrink-0" />
                <span className="font-sans font-medium text-[13.5px] tracking-wide">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Divider segregating skills from GitHub activity */}
        <div className="w-full h-px border-t border-dotted border-border-warm/80 mt-9" />

        {/* Live GitHub Contributions calendar block */}
        <GithubContributions />

      </SectionShell>
      </Container>
    </section>
  );
};
