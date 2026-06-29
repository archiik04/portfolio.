import React from 'react';
import { motion } from 'framer-motion';

export type DoodleType =
  | 'star'
  | 'arrow'
  | 'arrow-loop'
  | 'flower'
  | 'paper-plane'
  | 'robot'
  | 'sparkles'
  | 'coffee'
  | 'git-branch'
  | 'butterfly'
  | 'smiley'
  | 'xr-headset';

interface DoodleProps {
  type: DoodleType;
  className?: string;
  delay?: number;
  duration?: number;
}

export const Doodle: React.FC<DoodleProps> = ({
  type,
  className = '',
  delay = 0.2,
  duration = 1.8
}) => {
  const pathTransition = {
    duration,
    delay,
    ease: [0.25, 0.1, 0.25, 1] as any, // Organic slow stroke draw-in
  };

  const getDoodleData = () => {
    switch (type) {
      case 'star':
        return {
          viewBox: '0 0 100 100',
          paths: [
            'M 50,10 L 62,38 L 92,38 L 68,56 L 77,85 L 50,67 L 23,85 L 32,56 L 8,38 L 38,38 Z'
          ]
        };
      case 'arrow':
        return {
          viewBox: '0 0 100 60',
          paths: [
            // Shaft
            'M 10,25 C 35,15 65,45 85,20',
            // Head
            'M 70,12 C 77,15 84,18 88,21 C 82,28 78,35 76,42'
          ]
        };
      case 'arrow-loop':
        return {
          viewBox: '0 0 120 80',
          paths: [
            // Loop shaft
            'M 10,50 C 30,10 60,10 70,40 C 75,60 50,75 40,55 C 35,40 50,15 100,25',
            // Arrowhead
            'M 88,12 L 102,24 L 88,38'
          ]
        };
      case 'flower':
        return {
          viewBox: '0 0 80 80',
          paths: [
            // Stem
            'M 40,40 C 40,55 45,70 38,78',
            // Leaf
            'M 40,60 C 48,58 55,62 50,68 C 45,72 41,66 40,60',
            // Petals
            'M 40,40 C 32,32 20,38 25,48 C 28,52 36,44 40,40',
            'M 40,40 C 48,32 60,38 55,48 C 52,52 44,44 40,40',
            'M 40,40 C 32,48 20,42 25,32 C 28,28 36,36 40,40',
            'M 40,40 C 48,48 60,42 55,32 C 52,28 44,36 40,40',
            // Center
            'M 40,36 C 42,36 44,38 44,40 C 44,42 42,44 40,44 C 38,44 36,42 36,40 C 36,38 38,36 40,36 Z'
          ]
        };
      case 'paper-plane':
        return {
          viewBox: '0 0 100 80',
          paths: [
            // Main body triangle
            'M 10,38 L 88,15 L 42,65 Z',
            // Inside fold
            'M 88,15 L 42,48 L 10,38',
            // Under wing flap
            'M 42,48 L 42,65 L 56,53'
          ]
        };
      case 'robot':
        return {
          viewBox: '0 0 100 120',
          paths: [
            // Head
            'M 30,30 L 70,30 L 70,60 L 30,60 Z',
            // Body
            'M 20,65 L 80,65 L 80,105 L 20,105 Z',
            // Neck
            'M 45,60 L 45,65 M 55,60 L 55,65',
            // Eyes
            'M 42,42 A 4,4 0 1,1 38,42',
            'M 62,42 A 4,4 0 1,1 58,42',
            // Mouth
            'M 42,50 L 58,50',
            // Antenna
            'M 50,30 L 50,15 M 46,15 L 54,15 Z',
            // Arms
            'M 20,75 C 10,75 8,90 15,95',
            'M 80,75 C 90,75 92,90 85,95',
            // Legs
            'M 35,105 L 35,115 M 65,105 L 65,115'
          ]
        };
      case 'sparkles':
        return {
          viewBox: '0 0 80 80',
          paths: [
            // Sparkle 1
            'M 30,10 L 32,25 L 47,27 L 32,29 L 30,44 L 28,29 L 13,27 L 28,25 Z',
            // Sparkle 2
            'M 60,40 L 61,50 L 71,51 L 61,52 L 60,62 L 59,52 L 49,51 L 59,50 Z',
            // Dot sparkle
            'M 20,55 A 1.5,1.5 0 1,1 17,55',
            'M 55,20 A 1.5,1.5 0 1,1 52,20'
          ]
        };
      case 'coffee':
        return {
          viewBox: '0 0 100 100',
          paths: [
            // Cup
            'M 20,40 L 70,40 C 70,70 65,80 50,80 C 35,80 30,70 20,40 Z',
            // Handle
            'M 70,48 C 82,48 85,62 70,68',
            // Plate
            'M 12,85 C 30,92 70,92 88,85',
            // Steaming lines
            'M 32,32 C 30,22 36,18 34,10',
            'M 45,32 C 43,20 50,16 47,8',
            'M 58,32 C 56,22 62,18 60,10'
          ]
        };
      case 'git-branch':
        return {
          viewBox: '0 0 100 100',
          paths: [
            // Main branch
            'M 30,90 L 30,15',
            // Side branch
            'M 30,65 C 30,45 70,55 70,30',
            // Nodes (circles drawn sketchily)
            'M 30,80 A 4,4 0 1,1 26,80',
            'M 30,25 A 4,4 0 1,1 26,25',
            'M 70,30 A 4,4 0 1,1 66,30'
          ]
        };
      case 'butterfly':
        return {
          viewBox: '0 0 80 80',
          paths: [
            // Body
            'M 40,25 C 41,35 41,45 40,55',
            // Left wings
            'M 40,35 C 20,20 15,40 40,43 C 22,48 20,68 40,53',
            // Right wings
            'M 40,35 C 60,20 65,40 40,43 C 58,48 60,68 40,53',
            // Antennae
            'M 40,25 C 37,20 30,18 28,21',
            'M 40,25 C 43,20 50,18 52,21'
          ]
        };
      case 'smiley':
        return {
          viewBox: '0 0 80 80',
          paths: [
            // Face outline
            'M 40,10 C 56,10 70,24 70,40 C 70,56 56,70 40,70 C 24,70 10,56 10,40 C 10,24 24,10 40,10 Z',
            // Eyes
            'M 28,32 A 2.5,2.5 0 1,1 27.9,32',
            'M 52,32 A 2.5,2.5 0 1,1 51.9,32',
            // Smile
            'M 25,48 C 32,58 48,58 55,48'
          ]
        };
      case 'xr-headset':
        return {
          viewBox: '0 0 120 70',
          paths: [
            // Main visor
            'M 20,30 C 20,20 100,20 100,30 C 100,45 90,52 80,50 C 70,48 50,48 40,50 C 30,52 20,45 20,30 Z',
            // Headband
            'M 20,35 C 10,35 5,45 2,40 C 8,15 112,15 118,40 C 115,45 110,35 100,35',
            // Reflected highlight line
            'M 30,28 L 75,28',
            // Small mechanical details
            'M 45,40 L 45,44 M 75,40 L 75,44'
          ]
        };
      default:
        return { viewBox: '0 0 100 100', paths: [] };
    }
  };

  const doodle = getDoodleData();

  return (
    <svg
      viewBox={doodle.viewBox}
      className={`stroke-blue-ink fill-none ${className}`}
      style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}
    >
      {doodle.paths.map((d, index) => (
        <motion.path
          key={index}
          d={d}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={pathTransition}
        />
      ))}
    </svg>
  );
};
