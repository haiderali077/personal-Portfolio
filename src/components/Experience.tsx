import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'AllocAid — TA Allocation System',
    role: 'Software Developer – UBCO Capstone Project',
    location: 'Kelowna, British Columbia',
    date: 'May 2025 – August 2025',
    description: [
      'Developed responsive React front-end components with TypeScript and Tailwind for the student and admin dashboards',
      'Built RESTful APIs in Deno/Oak with JWT authentication and PostgreSQL integration for secure data management',
      'Implemented features like notification pagination, application deadlines, and accessibility improvements',
      'Collaborated with a 7-member team using GitHub flow, Docker Compose, and CI/CD for integration and deployment consistency',
    ],
   
  },
  {
    title: 'TSKFLO – Team Task Management System',
    role: 'Team Member – Course Project',
    location: 'Kelowna, British Columbia',
    date: 'Jan 2025 – April 2025',
    description: [
      'Developed a role-based task management system with real-time notifications and in-app messaging using React, Redux, Node.js, and MongoDB',
      'Dockerized frontend and backend using docker-compose to enable cross-environment deployment',
      'Implemented admin locking, protected routes, and email-based alerts via Nodemailer',
      'Collaborated with a 5-person Agile team, using GitHub Projects for sprint planning, Git flow for version control, and GitHub Actions for CI/CD automation',
    ],
    link: 'https://github.com/abdullahmoh21/TSKFLO',
  },
];

const Experience = () => {
  return (
    <Box
      id="experience"
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
                elevation={3}
                sx={{
                  p: 3,
                  bgcolor: 'background.default',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
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
                {experience.link && (
                  <Typography
                    component="a"
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'primary.main',
                      textDecoration: 'none',
                      display: 'inline-block',
                      mt: 2,
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    View Project →
                  </Typography>
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