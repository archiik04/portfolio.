import React from 'react';
import { Section } from './Section';
import { Row } from './Row';
import { Tags } from './Tags';
import { experiences } from '../../data/experience';

const lower = (s: string) => s.toLowerCase();

export const Work: React.FC = () => (
  <Section id="work" label="work" caption="places i've built things.">
    <div className="space-y-9">
      {experiences.map(item => (
        <Row
          key={item.id}
          title={lower(item.organization)}
          meta={lower(item.duration)}
          subtitle={`${lower(item.role)} · ${lower(item.location)}`}
        >
          <div className="space-y-2 text-[13px] leading-[1.7] text-muted">
            {item.responsibilities.map((line, i) => (
              <p key={i}>{lower(line)}</p>
            ))}
          </div>
          <Tags items={item.technologies.map(lower)} />
        </Row>
      ))}
    </div>
  </Section>
);
