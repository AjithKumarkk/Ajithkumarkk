import { Variants } from 'framer-motion';

export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    filter: 'blur(10px)',
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    filter: 'blur(10px)',
    transition: {
      duration: 0.3,
    },
  },
};

export const containerVariants: Variants = {
  hidden: { 
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { 
    y: 50, 
    opacity: 0, 
    scale: 0.9,
    rotate: -5,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export const glowVariants: Variants = {
  initial: { 
    opacity: 0.5,
    textShadow: '0 0 0px rgba(78, 204, 163, 0)',
  },
  animate: {
    opacity: 1,
    textShadow: '0 0 20px rgba(78, 204, 163, 0.5)',
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export const pixelateAnimation = {
  initial: { 
    filter: 'blur(10px) brightness(0)',
    opacity: 0,
  },
  animate: {
    filter: 'blur(0px) brightness(1)',
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    filter: 'blur(10px) brightness(0)',
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const scanlineEffect = {
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, transparent 50%, rgba(78, 204, 163, 0.05) 50%)',
    backgroundSize: '100% 4px',
    pointerEvents: 'none',
    animation: 'scanline 10s linear infinite',
  },
  '@keyframes scanline': {
    '0%': {
      transform: 'translateY(0)',
    },
    '100%': {
      transform: 'translateY(100%)',
    },
  },
}; 