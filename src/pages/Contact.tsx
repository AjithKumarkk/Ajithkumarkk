import React, { useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Link,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email, SportsEsports } from '@mui/icons-material';
import { pageVariants, containerVariants, itemVariants, glowVariants, scanlineEffect } from '../animations/pageTransitions';

const Contact = () => {
  useEffect(() => {
    document.title = 'Ajith Kumar';
  }, []);

  const socialLinks = [
    { icon: <GitHub />, url: 'https://github.com/AjithKumarkk', label: 'GitHub' },
    { icon: <LinkedIn />, url: 'https://linkedin.com/in/ajithkumarkk', label: 'LinkedIn' },
    { icon: <SportsEsports />, url: 'https://ajithkumarkk.itch.io/', label: 'itch.io' },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Container maxWidth="md" sx={{ ...scanlineEffect }}>
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
            <motion.div variants={glowVariants}>
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
                }}
              >
                Let's Connect
              </Typography>
            </motion.div>
          </Box>

          <motion.div variants={itemVariants}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3,
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
              <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
                Connect With Me
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 1,
                    color: 'text.primary',
                  }}
                >
                  <Email sx={{ mr: 1, color: 'primary.main' }} /> 
                  ajithkumaran000@gmail.com
                </Typography>
              </Box>
              <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                Social Media
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconButton
                      component={Link}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        color: 'primary.main',
                        '&:hover': {
                          color: '#4ecca3',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      {link.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Contact; 