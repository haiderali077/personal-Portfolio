import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Teaching Assistant Allocation Platform',
    role: 'Software Developer',
    location: 'Kelowna, British Columbia',
    date: 'May 2025 – August 2025',
    format: 'paragraphs' as const,
    description: [
      'Worked with a development team to build a full-stack web application used by a university computer science department to manage teaching assistant applications and placements for over 100 TAs each term. The platform supports multiple user roles including students, professors, coordinators, and administrators, each with their own workflows for submitting applications and reviewing candidates.',
      'I helped develop the React and TypeScript frontend and contributed to a TypeScript REST API that handles applications, allocations, and user management. Authentication is implemented using JWT with role-based access control, and application data is stored in a PostgreSQL database with a relational schema of 15+ tables.',
      'Tech Stack: React, TypeScript, Node.js, PostgreSQL, Docker',
    ],
  },
];

const Experience = () => {
  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
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
              mb: 6,
              textAlign: 'center',
            }}
          >
            Experience
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {experiences.map((experience, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  bgcolor: 'background.default',
                  border: '1px solid',
                  borderColor: '#334155',
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'scale(1.01)',
                    boxShadow: '0 8px 40px rgba(59, 130, 246, 0.12)',
                    borderColor: '#3B82F6',
                  },
                }}
              >
                <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
                  {experience.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.primary', mb: 1 }}>
                  {experience.role}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  {experience.location} | {experience.date}
                </Typography>
                {'format' in experience && experience.format === 'paragraphs' ? (
                  <Box sx={{ pl: 0 }}>
                    {experience.description.map((item, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{ color: 'text.secondary', mb: 1.5 }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                ) : (
                  <Box component="ul" sx={{ pl: 2 }}>
                    {experience.description.map((item, idx) => (
                      <Typography
                        key={idx}
                        component="li"
                        variant="body2"
                        sx={{ color: 'text.secondary', mb: 1 }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                )}
              </Paper>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience; 