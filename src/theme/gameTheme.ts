import { createTheme } from '@mui/material';

export const gameTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4ecca3',
      light: '#7efff5',
      dark: '#2c9c7c',
    },
    secondary: {
      main: '#ff6b6b',
      light: '#ff8e8e',
      dark: '#cc5555',
    },
    info: {
      main: '#4e54ff',
      light: '#787dff',
      dark: '#3a3fcc',
    },
    warning: {
      main: '#ffd93d',
      light: '#ffe584',
      dark: '#ccad31',
    },
    background: {
      default: '#0a192f',
      paper: 'rgba(16, 32, 61, 0.9)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.85)',
    },
  },
  typography: {
    fontFamily: '"Rajdhani", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '3.5rem',
      },
      '@media (min-width:960px)': {
        fontSize: '4rem',
      },
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:960px)': {
        fontSize: '3rem',
      },
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '0.05em',
      fontSize: '1.75rem',
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '0.05em',
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #0a192f 0%, #162a45 100%)',
          minHeight: '100vh',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          '@media (max-width:600px)': {
            paddingLeft: '1rem',
            paddingRight: '1rem',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(16, 32, 61, 0.9)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(78, 204, 163, 0.2)',
          transition: 'all 0.4s ease-in-out',
          background: 'linear-gradient(135deg, rgba(16, 32, 61, 0.9) 0%, rgba(22, 42, 69, 0.9) 100%)',
          '&:hover': {
            boxShadow: '0 0 25px rgba(78, 204, 163, 0.3), 0 0 15px rgba(255, 107, 107, 0.2), 0 0 10px rgba(78, 84, 255, 0.2)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '4px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 0 15px rgba(78, 204, 163, 0.4)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #4ecca3 30%, #7efff5 90%)',
          color: '#0a192f',
          fontWeight: 600,
          '&:hover': {
            background: 'linear-gradient(45deg, #7efff5 30%, #4ecca3 90%)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          transition: 'all 0.2s ease-in-out',
          background: 'linear-gradient(45deg, rgba(78, 204, 163, 0.2) 30%, rgba(78, 84, 255, 0.2) 90%)',
          border: '1px solid rgba(78, 204, 163, 0.3)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 0 10px rgba(78, 204, 163, 0.3), 0 0 5px rgba(78, 84, 255, 0.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(180deg, rgba(10, 25, 47, 0.95) 0%, rgba(16, 32, 61, 0.95) 100%)',
          boxShadow: '0 0 20px rgba(78, 204, 163, 0.2), 0 0 10px rgba(255, 107, 107, 0.1)',
          '&::before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #4ecca3, #ff6b6b, #4e54ff, transparent)',
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          '@media (min-width: 600px)': {
            minHeight: '64px',
          },
          '@media (max-width: 599px)': {
            padding: '0.5rem',
            minHeight: '56px',
          },
        },
      },
    },
  },
}); 