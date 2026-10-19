export interface GalleryItem {
  src: string;
  /** Tailwind grid spans, matching a 4-column grid */
  span: string;
  caption: string;
}

/**
 * Photos cropped out of the scrapbook collage. Captions describe what is in
 * frame; rewrite them in your own voice whenever you like.
 */
export const galleryItems: GalleryItem[] = [
  {
    src: '/gallery/google-office.jpg',
    span: 'col-span-2 row-span-2',
    caption: 'the google office, finally on the inside.',
  },
  { src: '/gallery/duck.jpg', span: 'col-span-1 row-span-1', caption: 'this duck had places to be.' },
  { src: '/gallery/headset.jpg', span: 'col-span-1 row-span-1', caption: 'headset, charged and waiting.' },
  {
    src: '/gallery/ctf.jpg',
    span: 'col-span-2 row-span-1',
    caption: 'defcon 3301, capture the flag, whole team in.',
  },
  {
    src: '/gallery/mlsa-crew.jpg',
    span: 'col-span-2 row-span-1',
    caption: 'everyone who showed up, one frame.',
  },
  { src: '/gallery/window.jpg', span: 'col-span-1 row-span-1', caption: 'found a window worth sitting in.' },
  { src: '/gallery/sparkler.jpg', span: 'col-span-1 row-span-1', caption: 'long exposure, short attention span.' },
  {
    src: '/gallery/talk-wide.jpg',
    span: 'col-span-2 row-span-1',
    caption: 'presenting web ar to a full room.',
  },
  {
    src: '/gallery/books.jpg',
    span: 'col-span-2 row-span-1',
    caption: 'the stack that did not fit in the bag.',
  },
];
