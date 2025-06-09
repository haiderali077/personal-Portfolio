import React from 'react';
import { Box, Container, Typography, Paper, Link, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'TSKFLO – Team Task Management System',
    description: 'Developed a role-based task management system with real-time notifications and in-app messaging using React, Redux, Node.js, and MongoDB. Dockerized frontend and backend using docker-compose to enable cross-environment deployment. Implemented admin locking, protected routes, and email-based alerts via Nodemailer. Collaborated with a 5-person Agile team, using GitHub Projects for sprint planning, Git flow for version control, and GitHub Actions for CI/CD automation.',
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Docker', 'Nodemailer', 'GitHub Actions'],
    github: 'https://github.com/abdullahmoh21/TSKFLO',
    demo: '#',
  },
  {
    title: 'AI Smart Email Assistant',
    description: 'Built a full-stack email reply assistant using React, Spring Boot (Java), and Gemini AI API with real-time tone customized suggestions. Created a Gmail-integrated Chrome Extension enabling seamless one-click AI response generation.',
    technologies: ['React', 'Spring Boot', 'Java', 'Gemini AI API', 'Docker', 'Chrome Extension'],
    github: 'https://github.com/haiderali077/AI-Email-Assistant',
    demo: 'https://ai-smart-email-assistant.netlify.app/',
  },
  {
    title: 'Real-Time Messaging App',
    description: 'Developed a full-stack real-time chat platform with user authentication, Socket.IO messaging, and media sharing. Designed Zustand-based frontend architecture with DaisyUI and TailwindCSS for responsive theming.',
    technologies: ['React', 'Node.js', 'Socket.IO', 'MongoDB', 'TailwindCSS', 'DaisyUI'],
    github: 'https://github.com/haiderali077/whisper',
    demo: 'https://whisper-73xo.onrender.com/',
  },
  {
    title: 'NBA Stats Data Analytics',
    description: 'Scraped and cleaned 10 seasons of NBA player statistics using Python, with anti-scraping measures for stability. Built interactive visualizations using Plotly, Seaborn, and Matplotlib to analyze decade-long trends.',
    technologies: ['Python', 'Pandas', 'Plotly', 'Seaborn', 'Matplotlib', 'Web Scraping'],
    github: 'https://github.com/haiderali077/VisualHoops',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
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
            Projects
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
            {projects.map((project, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.default',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography variant="h6" sx={{ color: 'primary.main' }}>
                    {project.title}
                  </Typography>
                  <Box>
                    <Link href={project.github} target="_blank" sx={{ color: 'text.secondary', mr: 1 }}>
                      <GitHubIcon />
                    </Link>
                    <Link href={project.demo} target="_blank" sx={{ color: 'text.secondary' }}>
                      <LaunchIcon />
                    </Link>
                  </Box>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, flexGrow: 1 }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.technologies.map((tech, idx) => (
                    <Chip
                      key={idx}
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: 'background.paper',
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: 'primary.main',
                          color: 'background.paper',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 