import React from 'react';
import { AppBar, Toolbar, Box, Button, useMediaQuery, useTheme, IconButton } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SportsEsports, Person, Work, Mail } from '@mui/icons-material';

const Navigation = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navItems = [
    { path: '/', label: 'Home', icon: <SportsEsports /> },
    { path: '/portfolio', label: 'Projects', icon: <Work /> },
    { path: '/resume', label: 'Stats', icon: <Person /> },
    { path: '/contact', label: 'Connect', icon: <Mail /> },
  ];

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'center', gap: { xs: 1, sm: 2 } }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobile ? (
                <IconButton
                  component={Link}
                  to={item.path}
                  sx={{
                    color: isActive ? '#4ecca3' : '#ffffff',
                    position: 'relative',
                    transition: 'all 0.3s ease-in-out',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: isActive ? '100%' : '0%',
                      height: '2px',
                      background: 'linear-gradient(90deg, #4ecca3, #ff6b6b, #4e54ff)',
                      transition: 'width 0.3s ease-in-out',
                    },
                    '&:hover': {
                      color: '#7efff5',
                      '&::before': {
                        width: '100%',
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: '140%',
                      height: '140%',
                      borderRadius: '50%',
                      transform: 'translate(-50%, -50%)',
                      border: isActive ? '1px solid rgba(78, 204, 163, 0.3)' : 'none',
                      boxShadow: isActive ? '0 0 15px rgba(78, 204, 163, 0.2), 0 0 10px rgba(255, 107, 107, 0.1)' : 'none',
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              ) : (
                <Button
                  component={Link}
                  to={item.path}
                  startIcon={item.icon}
                  sx={{
                    color: isActive ? '#4ecca3' : '#ffffff',
                    position: 'relative',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 'bold',
                    px: 2,
                    py: 1.5,
                    background: isActive ? 'linear-gradient(45deg, rgba(78, 204, 163, 0.1), rgba(78, 84, 255, 0.1))' : 'transparent',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: isActive ? '100%' : '0%',
                      height: '2px',
                      background: 'linear-gradient(90deg, #4ecca3, #ff6b6b, #4e54ff)',
                      transition: 'width 0.3s ease-in-out',
                    },
                    '&:hover': {
                      background: 'linear-gradient(45deg, rgba(78, 204, 163, 0.1), rgba(78, 84, 255, 0.1))',
                      color: '#7efff5',
                      '&::before': {
                        width: '100%',
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: '120%',
                      height: '120%',
                      borderRadius: '4px',
                      transform: 'translate(-50%, -50%)',
                      border: isActive ? '1px solid rgba(78, 204, 163, 0.3)' : 'none',
                      boxShadow: isActive ? '0 0 15px rgba(78, 204, 163, 0.2), 0 0 10px rgba(255, 107, 107, 0.1)' : 'none',
                    },
                  }}
                >
                  {item.label}
                </Button>
              )}
            </motion.div>
          );
        })}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation; 