import React from 'react';
import { Section } from './Section';
import { skillCategories } from '../../data/skills';

const lower = (s: string) => s.toLowerCase();

export const Stack: React.FC = () => (
  <Section id="stack" label="stack" caption="what i reach for.">
    <div className="space-y-6">
      {skillCategories.map(group => (
        <div
          key={group.id}
          className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-faint sm:w-[140px] sm:shrink-0">
            {group.title}
          </p>
          <p className="text-[13px] leading-[1.7] text-muted">
            {group.skills.map(lower).join(' · ')}
          </p>
        </div>
      ))}
    </div>
  </Section>
);
