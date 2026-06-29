export interface LabItem {
  id: string;
  url: string;
  title: string;
  description: string;
  category: 'Hardware' | 'XR / Unity' | 'UI Labs' | 'Photography' | 'Design Study';
  aspectRatio: 'aspect-[3/4]' | 'aspect-[4/3]' | 'aspect-square';
}

export const labItems: LabItem[] = [
  {
    id: 'arduino-dial',
    url: 'https://images.unsplash.com/photo-1553406830-ef2513677841?auto=format&fit=crop&w=800&q=80',
    title: 'Analog Dial Controller',
    description: 'Connecting hardware dials (Arduino) to browser canvas graphs for tactile node control.',
    category: 'Hardware',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'unity-constellation',
    url: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80',
    title: 'Unity Node Constellation',
    description: 'Designing a 3D audio-reactive galaxy canvas where node distance controls synthesizer pitch.',
    category: 'XR / Unity',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: 'kyoto-film',
    url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    title: 'Kyoto Geometry',
    description: '35mm mechanical film snapshot capturing shadows and modular architecture patterns.',
    category: 'Photography',
    aspectRatio: 'aspect-square'
  },
  {
    id: 'fountain-pens',
    url: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80',
    title: 'Ink & Grid Studies',
    description: 'Handwriting coordinates and wiggling vectors on paper before coding the math in SVG.',
    category: 'Design Study',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'keystroke-haptic',
    url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    title: 'Haptic Keystroke Audio',
    description: 'Web Audio API experiment rendering low-latency mechanical sound triggers for text fields.',
    category: 'UI Labs',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: 'type-study',
    url: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
    title: 'Kinfolk Grid Study',
    description: 'Typography layout grids exploring serif sizes and negative whitespace structures.',
    category: 'Design Study',
    aspectRatio: 'aspect-square'
  }
];
