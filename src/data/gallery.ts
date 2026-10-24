export interface GalleryItem {
  src: string;
  caption: string;
  /** width / height, so columns can be balanced without measuring in the browser */
  ratio: number;
}

export const galleryItems: GalleryItem[] = [
  { src: '/gallery/google-office.jpg', ratio: 0.7525, caption: "ux immersion event '24" },
  { src: '/gallery/ctf.jpg', ratio: 1.5006, caption: 'defcon 3301, capture the flag, whole team in.' },
  { src: '/gallery/mlsa-badge.jpg', ratio: 0.75, caption: 'technical executive, mlsa.' },
  { src: '/gallery/beach-cleanup.jpg', ratio: 1.1444, caption: "nss plogging drive '25" },
  { src: '/gallery/talk-wide.jpg', ratio: 1.5035, caption: "project wing '26" },
  { src: '/gallery/window.jpg', ratio: 0.7273, caption: 'found a window worth sitting in.' },
  { src: '/gallery/mlsa-crew.jpg', ratio: 1.5006, caption: 'everyone who showed up, one frame.' },
  { src: '/gallery/sleepy-dog.jpg', ratio: 0.7024, caption: 'sleepy dog, pencil.' },
  { src: '/gallery/sparkler.jpg', ratio: 0.7255, caption: 'long exposure, short attention span.' },
  { src: '/gallery/mindscape.jpg', ratio: 1.0891, caption: 'mindscape, scratchboard.' },
  { src: '/gallery/headset.jpg', ratio: 1.0417, caption: 'headset, charged and waiting.' },
];
