import React from 'react';
import { Section } from './Section';
import { highlightsData } from '../../data/highlights';

const lower = (s: string) => s.toLowerCase();

export const Proof: React.FC = () => (
  <Section id="proof" label="proof" caption="receipts, mostly.">
    <div className="space-y-6">
      {highlightsData.map(item => {
        const body = (
          <>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
              <h3 className="text-[13.5px] font-medium tracking-[-0.01em] text-ink">
                {lower(item.title)}
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-faint">
                {item.tag}
              </span>
            </div>
            <p className="mt-1 text-[13px] leading-[1.7] text-muted">{lower(item.description)}</p>
            {item.linkLabel && (
              <span className="mt-2 inline-block font-mono text-[10.5px] text-faint transition-colors group-hover:text-ink">
                {lower(item.linkLabel)}
              </span>
            )}
          </>
        );

        return item.link ? (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            {body}
          </a>
        ) : (
          <div key={item.id} className="group">
            {body}
          </div>
        );
      })}
    </div>
  </Section>
);
