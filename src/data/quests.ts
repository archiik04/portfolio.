import gravityCover from '../assets/gravity_cover.png';
import vruiCover from '../assets/vrui_cover.png';
import artwork1 from '../assets/artwork1.jpg';
import artwork2 from '../assets/artwork2.jpg';
import teleportationCover from '../assets/teleportation_cover.png';
import ainpcCover from '../assets/ainpc_cover.png';

export interface QuestItem {
  id: string;
  url: string; // Cover image URL
  videoUrl?: string; // Optional YouTube embed or raw video URL
  title: string;
  description: string; // Short description
  longWriting: string; // The personal writing that opens in the modal
  category: 'Hardware' | 'XR / Unity' | 'UI Labs' | 'Photography' | 'Design Study' | 'Artwork';
  aspectRatio: 'aspect-[3/4]' | 'aspect-[4/3]' | 'aspect-square';
  date: string;
  disablePopup?: boolean;
}

export const questsData: QuestItem[] = [
  {
    id: 'gravity-manipulator',
    url: gravityCover,
    videoUrl: '/gravity manipulator.mp4',
    title: 'Gravity manipulator',
    description: 'A VR experience where you can push, pull, and combine the spheres whenever needed.',
    longWriting: 'A VR experience where you can push, pull, and combine the spheres whenever needed.',
    category: 'XR / Unity',
    aspectRatio: 'aspect-square',
    date: 'Jun 2026'
  },
  {
    id: 'vr-ui',
    url: vruiCover,
    videoUrl: '/vr ui.mp4',
    title: 'vr ui',
    description: 'A vr ui design interface where you can do basic ui interaction like change colors, drop boxes, change box layouts setup in a factory setup.',
    longWriting: 'A vr ui design interface where you can do basic ui interaction like change colors, drop boxes, change box layouts setup in a factory setup.',
    category: 'XR / Unity',
    aspectRatio: 'aspect-[4/3]',
    date: 'Jan 2026'
  },
  {
    id: 'teleportation',
    url: teleportationCover,
    videoUrl: '/teleportation.mp4',
    title: 'Teleportation',
    description: 'A vr experience where you teleport using the blue glowy boxes and through moving swords moving anticlockwise.',
    longWriting: 'A vr experience where you teleport using the blue glowy boxes and through moving swords moving anticlockwise.',
    category: 'XR / Unity',
    aspectRatio: 'aspect-square',
    date: 'Jun 2026'
  },
  {
    id: 'ai-npc',
    url: ainpcCover,
    videoUrl: '/ai npc .mp4',
    title: 'AI NPC',
    description: 'A VR marketplace simulation set in a retail environment, allowing users to converse with an AI NPC to query consumer demand and manage regional zone updates in real-time.',
    longWriting: 'A VR marketplace simulation set in a retail environment, allowing users to converse with an AI NPC to query consumer demand and manage regional zone updates in real-time.',
    category: 'XR / Unity',
    aspectRatio: 'aspect-square',
    date: 'Jun 2026'
  },
  {
    id: 'artwork-sleepy-dog',
    url: artwork1,
    title: 'Sleepy Dog',
    description: 'Pencil drawing capturing the soft form of a sleeping dog reading on a textbook.',
    longWriting: '',
    category: 'Artwork',
    aspectRatio: 'aspect-[3/4]',
    date: 'Jun 2026',
    disablePopup: true
  },
  {
    id: 'artwork-mindscape',
    url: artwork2,
    title: 'Mindscape',
    description: 'Scratchboard illustration exploring architectural thoughts, chains, and negative lines.',
    longWriting: '',
    category: 'Artwork',
    aspectRatio: 'aspect-square',
    date: 'Jun 2026',
    disablePopup: true
  }
];
