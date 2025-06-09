import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 8,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'primary.main',
              mb: 2,
              fontFamily: 'monospace',
            }}
          >
            Hi, my name is
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: 'text.primary',
              mb: 2,
              fontWeight: 'bold',
            }}
          >
            Haider Ali.
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: 'text.secondary',
              mb: 4,
              fontWeight: 'bold',
            }}
          >
            I build things for the web.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mb: 4,
            }}
          >
            I'm a Computer Science student at the University of British Columbia, passionate about full-stack development
            and building real-world applications. Currently focused on creating impactful software solutions and
            exploring new technologies.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 