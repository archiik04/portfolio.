import React from 'react';
import { motion } from 'framer-motion';


export const Intro: React.FC = () => (
  <section id="top" className="pt-10 pb-12 md:pt-14 md:pb-16">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h1 className="text-[22px] font-medium tracking-[-0.03em] text-ink sm:text-[26px]">
          archi kanungo
        </h1>
        <span className="font-mono text-[10.5px] text-faint">bbsr/ind</span>
      </div>

      <p className="mt-1 text-[13px] text-faint">
        product engineer, building for ai and xr
      </p>

      <div className="mt-7 space-y-4 text-[13.5px] leading-[1.75] text-muted sm:text-[14px]">
        <p>
          hey! i&rsquo;m archi, a computer science undergrad at kiit who likes building, breaking
          and shipping things. right now i&rsquo;m a product engineer intern at{' '}
          <span className="text-ink">learning pathways</span>, building features end to end with
          react on the front and fastapi behind it.
        </p>
        <p>
          before that i shipped a production rag platform at{' '}
          <span className="text-ink">aashdit technologies</span> &mdash; semantic search across
          pdfs, docx and scanned documents, running at 10k+ concurrent documents and sub-200ms.
          alongside all of it i&rsquo;ve spent two years as a global youth advisor for google
          through <span className="text-ink">canvas8</span>, testing gemini in beta and speaking at
          leadership events on where young people and ai actually meet.
        </p>
        <p>
          i build in xr too &mdash; unity, vr, and an inclusion scholarship from xr bootcamp. when
          i&rsquo;m not building, i&rsquo;m probably writing study notes that somehow earned
          &#8377;20,000+ on knowt.
        </p>
      </div>

      <p className="mt-7 text-[13px] text-ink">
        open to internships and new-grad roles across product &amp; engineering.
      </p>

    </motion.div>
  </section>
);
