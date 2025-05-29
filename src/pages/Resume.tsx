import React from 'react';
import { Container, Typography, Paper, Box, Divider, List, ListItem, ListItemText, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { SportsEsports, Code, Speed, School, Download } from '@mui/icons-material';
import { pageVariants, containerVariants, itemVariants, glowVariants, scanlineEffect } from '../animations/pageTransitions';

const Resume = () => {
  const experiences = [
    {
      title: 'Game Developer',
      company: 'Epic Games Studio',
      period: '2021 - Present',
      icon: <SportsEsports />,
      responsibilities: [
        'Developed and optimized game mechanics using Unreal Engine',
        'Implemented advanced character animation systems',
        'Collaborated with artists and designers to create immersive gameplay experiences',
      ],
    },
    {
      title: 'Unity Developer',
      company: 'Indie Game Studio',
      period: '2020 - 2021',
      icon: <Code />,
      responsibilities: [
        'Created mobile games using Unity and C#',
        'Designed and implemented game UI systems',
        'Optimized game performance for mobile platforms',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Game Development',
      institution: 'DigiPen Institute of Technology',
      period: '2016 - 2020',
      icon: <School />,
      details: 'Specialized in game programming and interactive simulation. Created multiple game projects as part of the curriculum.',
    },
  ];

  const skills = {
    technical: ['Unity', 'Unreal Engine', 'C#', 'C++', 'Game Design', 'DirectX', 'OpenGL'],
    soft: ['Problem Solving', 'Team Leadership', 'Project Management', 'Game Optimization'],
  };

  const handleDownloadResume = () => {
    // The PDF file should be placed in public/assets/docs/resume.pdf
    const link = document.createElement('a');
    link.href = '/assets/docs/Ajith_Kumar.pdf';
    link.download = 'Ajith_Kumar.pdf'; // Name that will appear when downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Container sx={{ ...scanlineEffect }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Box sx={{ textAlign: 'center', mb: 6, position: 'relative' }}>
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
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
              <motion.div variants={glowVariants}>
                <Typography 
                  variant="h2" 
                  component="h1" 
                  sx={{ 
                    background: 'linear-gradient(45deg, #4ecca3 30%, #7efff5 90%)',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Game Dev Journey
                </Typography>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  startIcon={<Download />}
                  onClick={handleDownloadResume}
                  sx={{
                    background: 'linear-gradient(45deg, rgba(78, 204, 163, 0.2), rgba(78, 84, 255, 0.2))',
                    border: '1px solid rgba(78, 204, 163, 0.5)',
                    backdropFilter: 'blur(4px)',
                    color: '#4ecca3',
                    fontWeight: 'bold',
                    px: 3,
                    py: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(45deg, rgba(78, 204, 163, 0.3), rgba(78, 84, 255, 0.3))',
                      boxShadow: '0 0 20px rgba(78, 204, 163, 0.4)',
                      border: '1px solid rgba(78, 204, 163, 0.8)',
                    },
                  }}
                >
                  Download Resume
                </Button>
              </motion.div>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Experience Section */}
            <motion.div variants={itemVariants}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #4ecca3, transparent)',
                    animation: 'glow 2s linear infinite',
                  },
                }}
              >
                <Typography 
                  variant="h4" 
                  gutterBottom
                  sx={{ 
                    color: 'primary.main',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Quest Log
                </Typography>
                {experiences.map((exp, index) => (
                  <Box key={index} sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Box 
                          sx={{ 
                            color: 'primary.main',
                            mr: 2,
                            fontSize: '2rem',
                            filter: 'drop-shadow(0 0 5px rgba(78, 204, 163, 0.5))',
                          }}
                        >
                          {exp.icon}
                        </Box>
                      </motion.div>
                      <Box>
                        <Typography variant="h6" sx={{ color: 'primary.main' }}>
                          {exp.title}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: 'primary.light' }}>
                          {exp.company}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                          {exp.period}
                        </Typography>
                      </Box>
                    </Box>
                    <List>
                      {exp.responsibilities.map((resp, idx) => (
                        <ListItem key={idx} sx={{ pl: 2 }}>
                          <ListItemText 
                            primary={resp}
                            sx={{ 
                              '& .MuiListItemText-primary': { 
                                color: 'text.primary',
                              }
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                    {index < experiences.length - 1 && (
                      <Divider 
                        sx={{ 
                          my: 2,
                          borderColor: 'rgba(78, 204, 163, 0.2)',
                        }} 
                      />
                    )}
                  </Box>
                ))}
              </Paper>
            </motion.div>

            {/* Education Section */}
            <motion.div variants={itemVariants}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #4ecca3, transparent)',
                    animation: 'glow 2s linear infinite',
                  },
                }}
              >
                <Typography 
                  variant="h4" 
                  gutterBottom
                  sx={{ 
                    color: 'primary.main',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Training Grounds
                </Typography>
                {education.map((edu, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Box 
                        sx={{ 
                          color: 'primary.main',
                          mr: 2,
                          fontSize: '2rem',
                          filter: 'drop-shadow(0 0 5px rgba(78, 204, 163, 0.5))',
                        }}
                      >
                        {edu.icon}
                      </Box>
                    </motion.div>
                    <Box>
                      <Typography variant="h6" sx={{ color: 'primary.main' }}>
                        {edu.degree}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: 'primary.light' }}>
                        {edu.institution}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1 }}>
                        {edu.period}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.primary' }}>
                        {edu.details}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Paper>
            </motion.div>

            {/* Skills Section */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
              <motion.div variants={itemVariants}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 4,
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent, #4ecca3, transparent)',
                      animation: 'glow 2s linear infinite',
                    },
                  }}
                >
                  <Typography 
                    variant="h4" 
                    gutterBottom
                    sx={{ 
                      color: 'primary.main',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    Tech Tree
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skills.technical.map((skill, index) => (
                      <Typography
                        key={index}
                        sx={{
                          backgroundColor: 'rgba(78, 204, 163, 0.1)',
                          color: 'primary.light',
                          px: 2,
                          py: 1,
                          borderRadius: '4px',
                          border: '1px solid rgba(78, 204, 163, 0.3)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 0 10px rgba(78, 204, 163, 0.3)',
                            backgroundColor: 'rgba(78, 204, 163, 0.2)',
                          },
                        }}
                      >
                        {skill}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 4,
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent, #4ecca3, transparent)',
                      animation: 'glow 2s linear infinite',
                    },
                  }}
                >
                  <Typography 
                    variant="h4" 
                    gutterBottom
                    sx={{ 
                      color: 'primary.main',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    Character Stats
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skills.soft.map((skill, index) => (
                      <Typography
                        key={index}
                        sx={{
                          backgroundColor: 'rgba(78, 204, 163, 0.1)',
                          color: 'primary.light',
                          px: 2,
                          py: 1,
                          borderRadius: '4px',
                          border: '1px solid rgba(78, 204, 163, 0.3)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 0 10px rgba(78, 204, 163, 0.3)',
                            backgroundColor: 'rgba(78, 204, 163, 0.2)',
                          },
                        }}
                      >
                        {skill}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Resume; 