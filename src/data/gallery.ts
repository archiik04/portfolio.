export interface GalleryItem {
  src: string;
  caption: string;
}

/**
 * Laid out as masonry, so these keep their own aspect ratio and nothing gets
 * cropped. Order is roughly how they flow down the columns.
 */
export const galleryItems: GalleryItem[] = [
  { src: '/gallery/google-office.jpg', caption: 'the google office, finally on the inside.' },
  { src: '/gallery/ctf.jpg', caption: 'defcon 3301, capture the flag, whole team in.' },
  { src: '/gallery/mlsa-badge.jpg', caption: 'technical executive, mlsa.' },
  { src: '/gallery/beach-cleanup.jpg', caption: 'lake cleanup, gloves on, bags full.' },
  { src: '/gallery/talk-wide.jpg', caption: 'presenting web ar to a full room.' },
  { src: '/gallery/window.jpg', caption: 'found a window worth sitting in.' },
  { src: '/gallery/mun-denmark.jpg', caption: 'denmark, kiit model united nations.' },
  { src: '/gallery/mlsa-crew.jpg', caption: 'everyone who showed up, one frame.' },
  { src: '/gallery/sleepy-dog.jpg', caption: 'sleepy dog, pencil.' },
  { src: '/gallery/sparkler.jpg', caption: 'long exposure, short attention span.' },
  { src: '/gallery/mindscape.jpg', caption: 'mindscape, scratchboard.' },
  { src: '/gallery/headset.jpg', caption: 'headset, charged and waiting.' },
];
