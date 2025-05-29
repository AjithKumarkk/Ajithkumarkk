import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Link,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Twitter, Email, SportsEsports } from '@mui/icons-material';
import { pageVariants, containerVariants, itemVariants, glowVariants, scanlineEffect } from '../animations/pageTransitions';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { icon: <GitHub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <LinkedIn />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <Twitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
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

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            <motion.div variants={itemVariants}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3,
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
                  Contact Form
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(78, 204, 163, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(78, 204, 163, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#4ecca3',
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(78, 204, 163, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(78, 204, 163, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#4ecca3',
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    margin="normal"
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(78, 204, 163, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(78, 204, 163, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#4ecca3',
                        },
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{ 
                      mt: 2,
                      background: 'linear-gradient(45deg, #4ecca3 30%, #7efff5 90%)',
                      color: '#1a1a2e',
                      fontWeight: 'bold',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #7efff5 30%, #4ecca3 90%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 0 20px rgba(78, 204, 163, 0.4)',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </Paper>
            </motion.div>

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
                    email@example.com
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
                          color: '#4ecca3',
                          backgroundColor: 'rgba(78, 204, 163, 0.1)',
                          '&:hover': {
                            backgroundColor: 'rgba(78, 204, 163, 0.2)',
                            boxShadow: '0 0 15px rgba(78, 204, 163, 0.4)',
                          },
                        }}
                        aria-label={link.label}
                      >
                        {link.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Contact; 