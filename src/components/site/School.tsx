import React from 'react';
import { Section } from './Section';
import { Row } from './Row';

export const School: React.FC = () => (
  <Section id="school" label="school" caption="the formal bit.">
    <Row
      title="kalinga institute of industrial technology"
      meta="jul 2023 - jul 2027"
      subtitle="b.tech, computer science & engineering · bhubaneswar, india"
    >
      <p className="text-[13px] leading-[1.7] text-muted">cgpa 8.19 / 10</p>
    </Row>
  </Section>
);
