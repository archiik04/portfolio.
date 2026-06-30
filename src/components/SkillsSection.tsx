import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { revealVariants, revealContainerVariants } from '../hooks/useReveal';
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
  PostmanIcon,
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
  { name: 'Postman', icon: PostmanIcon },
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
      className="py-20 md:py-24 bg-bg-paper text-text-primary scroll-mt-12 text-left"
    >
      <Container>
        
        {/* Title Matching Section Header Style */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="font-serif-editorial text-[30px] md:text-[38px] font-medium text-text-primary leading-none">
            Skills & Technologies
          </h2>
          
          {/* Symmetrical dotted line divider */}
          <div className="w-full h-px border-t border-dotted border-border-warm/80 pt-1" />
        </motion.div>

        {/* Symmetrical flex wrapping grid of badges */}
        <motion.div
          variants={revealContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap gap-3.5 mt-8 justify-start select-none"
        >
          {skillsData.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={idx}
                variants={revealVariants}
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="px-4 py-2 rounded-xl border border-border-warm bg-white-warm dark:bg-white-warm/8 hover:bg-[#FAF8F4] dark:hover:bg-white-warm/15 shadow-sm text-text-primary hover:border-text-secondary/20 transition-colors duration-200 flex items-center gap-2.5"
              >
                <Icon className="w-4 h-4 object-contain flex-shrink-0" />
                <span className="font-sans font-medium text-[13.5px] tracking-wide text-text-primary">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Live GitHub Contributions calendar block */}
        <GithubContributions />

      </Container>
    </section>
  );
};
