import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              color: 'text.primary',
              mb: 4,
              textAlign: 'center',
            }}
          >
            About Me
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: 4,
            }}
          >
            <Box>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                I'm a third-year Computer Science student at the University of British Columbia with a passion for
                full-stack development and building real-world applications. My academic journey has been marked by
                excellence, maintaining a 3.95/4.33 GPA and earning recognition on the Dean's List.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                My technical expertise spans across modern web technologies, including React, Node.js, and MongoDB,
                complemented by strong foundations in data structures, algorithms, and software engineering principles.
                I'm particularly interested in creating scalable, user-friendly applications that solve real-world
                problems.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Beyond coding, I'm actively involved in the Pakistani Student Association, where I help organize
                cultural events and build community among students. I'm always eager to learn new technologies and
                take on challenging projects that push my boundaries.
              </Typography>
            </Box>
            <Box>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  bgcolor: 'background.default',
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
                  Education
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                  University of British Columbia
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                  B.S. in Computer Science
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  Expected Graduation: May 2026
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  • GPA: 3.95/4.33, Dean's List
                  <br />
                  • Deputy Vice Chancellor (DVC) Scholarship
                  <br />
                  • Concentrations: Software Engineering
                </Typography>
              </Paper>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 