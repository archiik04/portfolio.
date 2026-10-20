export interface HighlightItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
  thumbnail?: string;
  isVideo?: boolean;
  isLinkedIn?: boolean;
}

export const highlightsData: HighlightItem[] = [
  {
    id: 'openai-buildathon',
    tag: 'Hackathon',
    title: 'OpenAI Academy × NxtWave × IndiaAI Buildathon 2025',
    description: 'Top 15 National Finalist among 70,000+ participants.',
    link: 'https://drive.google.com/file/d/1ZTEmhZvCPijPTSmAKVvjYIWH-TJm0U7e/view?usp=sharing',
    linkLabel: 'View Certificate',
    thumbnail: 'https://drive.google.com/thumbnail?id=1ZTEmhZvCPijPTSmAKVvjYIWH-TJm0U7e&sz=w1000'
  },
  {
    id: 'et-ai-hackathon',
    tag: 'Hackathon',
    title: 'ET-AI Hackathon 2026',
    description: 'Advanced to the Semi-Finals among 54,000+ participants.',
    link: 'https://drive.google.com/file/d/1-qGnH10RotcTFFIGNwuGOc2twuNQOegV/view?usp=sharing',
    linkLabel: 'View Certificate',
    thumbnail: 'https://drive.google.com/thumbnail?id=1-qGnH10RotcTFFIGNwuGOc2twuNQOegV&sz=w1000'
  },
  {
    id: 'techfest-iitb',
    tag: 'Finalist',
    title: 'Techfest IIT Bombay Upskill India Challenge 2025',
    description: 'Selected as a National Finalist.',
    link: 'https://drive.google.com/file/d/1KywQlfGoachYNBniZYyChCWQ9FGEpHXO/view?usp=sharing',
    linkLabel: 'View Certificate',
    thumbnail: 'https://drive.google.com/thumbnail?id=1KywQlfGoachYNBniZYyChCWQ9FGEpHXO&sz=w1000'
  },
  {
    id: 'xr-bootcamp-scholar',
    tag: 'Scholarship',
    title: 'XR Bootcamp Inclusion Scholar',
    description: 'Awarded a competitive $7,800 scholarship for XR Bootcamp\'s Foundations & Prototyping Program.',
    link: 'https://www.linkedin.com/posts/archi-kanungo_xr-vr-mr-activity-7312029500236578817-X_FH',
    linkLabel: 'View Post',
  },
  {
    id: 'mlsa-lead',
    tag: 'Leadership',
    title: 'AR/VR & Game Dev Lead, MLSA KIIT',
    description: 'Organized 5+ campus-wide technical events and workshops on XR/VR development and game design, engaging 400+ attendees.',
    link: 'https://github.com/XR-KIIT',
    linkLabel: 'View Org',
    thumbnail: 'https://github.com/XR-KIIT.png'
  },
  {
    id: 'knowtaker',
    tag: 'Knowt',
    title: 'KnowTaker on Knowt',
    description: 'Created educational materials for the ed-tech startup Knowt. Content reached thousands of students, organically generating ₹20,000+, 3,174 note ratings (4.4 average), and 310 followers on the app.',
    link: 'https://knowt.com/u/archi.arsenic04',
    linkLabel: 'View Profile',
  },
  {
    id: 'global-innovation-trip',
    tag: 'Video',
    title: 'Global Innovation Field Trip 22',
    description: 'Gave a presentation on our idea Life-Leap at the Global Innovation Field Trip virtually.',
    link: 'https://www.youtube.com/watch?v=CZAn_Oxse90',
    linkLabel: 'Watch Video',
    thumbnail: 'https://img.youtube.com/vi/CZAn_Oxse90/hqdefault.jpg',
    isVideo: true
  }
];
