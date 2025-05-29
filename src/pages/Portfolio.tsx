import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Box, IconButton, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch, SportsEsports } from '@mui/icons-material';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  platform: string;
}

const projects: Project[] = [
  {
    title: 'Escape Room',
    description: 'A challenging VR escape room experience where players solve intricate puzzles and uncover mysteries in a beautifully crafted virtual environment.',
    image: 'https://via.placeholder.com/300x200',
    technologies: ['Unity', 'C#', 'VR SDK', 'ProBuilder', 'HDRP'],
    githubUrl: 'https://github.com/yourusername/escape-room',
    liveUrl: 'https://store.steampowered.com/yourname/escape-room',
    platform: 'VR / PC'
  },
  {
    title: 'Match 3',
    description: 'A colorful and addictive match-3 puzzle game with unique power-ups, special combinations, and progressive difficulty levels.',
    image: 'https://via.placeholder.com/300x200',
    technologies: ['Unity', 'C#', 'DOTween', 'PlayFab', 'Firebase'],
    githubUrl: 'https://github.com/yourusername/match3',
    liveUrl: 'https://play.google.com/store/apps/yourname/match3',
    platform: 'Mobile'
  },
  {
    title: 'Puzzle Odyssey',
    description: 'An enchanting puzzle adventure game featuring mind-bending challenges, beautiful art style, and an immersive storyline.',
    image: 'https://via.placeholder.com/300x200',
    technologies: ['Unity', 'C#', 'Shader Graph', 'Cinemachine', 'Post Processing'],
    githubUrl: 'https://github.com/yourusername/puzzle-odyssey',
    liveUrl: 'https://store.steampowered.com/yourname/puzzle-odyssey',
    platform: 'PC / Console'
  },
  {
    title: 'Superdash No Wifi Game',
    description: 'An offline endless runner with unique dash mechanics, perfect for quick gaming sessions without internet connection.',
    image: 'https://via.placeholder.com/300x200',
    technologies: ['Unity', 'C#', 'SQLite', '2D Animation', 'Addressables'],
    githubUrl: 'https://github.com/yourusername/superdash',
    liveUrl: 'https://play.google.com/store/apps/yourname/superdash',
    platform: 'Mobile'
  },
  {
    title: 'Rogue Runner',
    description: 'A roguelike platformer combining procedural level generation with intense running mechanics and unique power-up system.',
    image: 'https://via.placeholder.com/300x200',
    technologies: ['Unity', 'C#', 'Procedural Generation', 'Unity Physics', 'JSON.NET'],
    githubUrl: 'https://github.com/yourusername/rogue-runner',
    liveUrl: 'https://store.steampowered.com/yourname/rogue-runner',
    platform: 'PC'
  },
  {
    title: 'Joy Runner',
    description: 'A vibrant and joyful endless runner featuring dynamic obstacles, collectible power-ups, and cheerful art style.',
    image: 'https://via.placeholder.com/300x200',
    technologies: ['Unity', 'C#', 'Google Play Services', 'AdMob', 'Unity Analytics'],
    githubUrl: 'https://github.com/yourusername/joy-runner',
    liveUrl: 'https://play.google.com/store/apps/yourname/joy-runner',
    platform: 'Mobile'
  },
  {
    title: 'Tetris 3D',
    description: 'A modern take on the classic Tetris game with 3D mechanics, special blocks, and innovative gameplay modes.',
    image: 'https://via.placeholder.com/300x200',
    technologies: ['Unity', 'C#', '3D Mathematics', 'Mirror Networking', 'Custom Shaders'],
    githubUrl: 'https://github.com/yourusername/tetris-3d',
    liveUrl: 'https://store.steampowered.com/yourname/tetris-3d',
    platform: 'PC / VR'
  }
];

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <Container maxWidth="lg" sx={{ 
      py: 8,
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #1a1a2e, #16213e)',
      borderRadius: 0,
    }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Box sx={{ textAlign: 'center', mb: 8, position: 'relative' }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <SportsEsports sx={{ 
              fontSize: 60, 
              color: '#4ecca3',
              mb: 2,
              filter: 'drop-shadow(0 0 10px #4ecca3)'
            }} />
          </motion.div>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              mb: 2,
              background: 'linear-gradient(45deg, #4ecca3 30%, #7efff5 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textShadow: '0 0 20px rgba(78, 204, 163, 0.3)',
            }}
          >
            Game Projects
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#eeeeee',
              opacity: 0.8,
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Crafting immersive digital experiences through code and creativity
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(2, 1fr)'
            },
            gap: 6,
            px: { xs: 2, md: 4 }
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(30, 41, 59, 0.9)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(78, 204, 163, 0.2)',
                  transition: 'all 0.4s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: '0 0 25px rgba(78, 204, 163, 0.3)',
                    '& .project-overlay': {
                      opacity: 1,
                    },
                    '& .project-image': {
                      transform: 'scale(1.1)',
                    }
                  },
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={project.image}
                    alt={project.title}
                    className="project-image"
                    sx={{
                      transition: 'transform 0.4s ease-in-out',
                    }}
                  />
                  <Box
                    className="project-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 2,
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      background: 'linear-gradient(to top, rgba(30, 41, 59, 0.9), transparent)',
                    }}
                  >
                    {project.githubUrl && (
                      <IconButton
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          color: '#4ecca3',
                          backgroundColor: 'rgba(30, 41, 59, 0.8)',
                          '&:hover': { 
                            transform: 'scale(1.1) rotate(360deg)',
                            backgroundColor: 'rgba(78, 204, 163, 0.2)'
                          },
                          transition: 'all 0.3s ease-in-out'
                        }}
                      >
                        <GitHub />
                      </IconButton>
                    )}
                    {project.liveUrl && (
                      <IconButton
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          color: '#4ecca3',
                          backgroundColor: 'rgba(30, 41, 59, 0.8)',
                          '&:hover': { 
                            transform: 'scale(1.1) rotate(360deg)',
                            backgroundColor: 'rgba(78, 204, 163, 0.2)'
                          },
                          transition: 'all 0.3s ease-in-out'
                        }}
                      >
                        <Launch />
                      </IconButton>
                    )}
                  </Box>
                </Box>
                <CardContent 
                  sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    backgroundColor: 'rgba(30, 41, 59, 0.9)',
                  }}
                >
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      color: '#4ecca3',
                      textShadow: '0 0 10px rgba(78, 204, 163, 0.3)',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography 
                    variant="body2"
                    sx={{ 
                      color: '#eeeeee',
                      opacity: 0.8,
                      mb: 2 
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ mt: 'auto' }}>
                    <Chip
                      label={project.platform}
                      size="small"
                      sx={{
                        mb: 2,
                        backgroundColor: 'rgba(78, 204, 163, 0.2)',
                        color: '#4ecca3',
                        border: '1px solid #4ecca3',
                      }}
                    />
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(30, 41, 59, 0.9)',
                            color: '#eeeeee',
                            border: '1px solid rgba(78, 204, 163, 0.3)',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 0 10px rgba(78, 204, 163, 0.3)',
                              backgroundColor: 'rgba(78, 204, 163, 0.1)',
                            },
                            transition: 'all 0.2s ease-in-out',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
};

export default Portfolio; 