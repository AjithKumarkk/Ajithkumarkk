import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { gameTheme } from './theme/gameTheme';
import Navigation from './components/Navigation';
import Prologue from './pages/Prologue';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// Wrapper component to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Box sx={{ pt: '64px' }}> {/* Add padding to account for fixed navbar */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Prologue />} />
          <Route path="/AjithkumarkkTest" element={<Prologue />} />
          <Route path="/AjithkumarkkTest/portfolio" element={<Portfolio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/AjithkumarkkTest/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/AjithkumarkkTest/resume" element={<Resume />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Box>
    </AnimatePresence>
  );
};

const App = () => {
  const basename = process.env.NODE_ENV === 'development' ? '/' : '/AjithkumarkkTest';
  
  return (
    <ThemeProvider theme={gameTheme}>
      <CssBaseline />
      <Router basename={basename}>
        <Navigation />
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
