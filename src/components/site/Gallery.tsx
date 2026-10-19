import React from 'react';
import { Section } from './Section';
import { galleryItems } from '../../data/gallery';

export const Gallery: React.FC = () => (
  <Section id="gallery" label="off the clock" caption="pics, mostly unplanned.">
    <div className="grid auto-rows-[92px] grid-cols-4 gap-1.5 sm:auto-rows-[128px] sm:gap-2">
      {galleryItems.map(item => (
        <figure
          key={item.src}
          className={`${item.span} group relative overflow-hidden rounded-[6px] bg-raise`}
        >
          <img
            src={item.src}
            alt={item.caption}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3">
            <p className="font-mono text-[9px] leading-snug text-white/90 sm:text-[10px]">
              {item.caption}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  </Section>
);
