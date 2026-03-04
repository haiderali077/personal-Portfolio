import React from 'react';
import { Box, Container, Typography, Paper, Link, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'TSKFLO \u2013 Team Task Management System',
    description: 'Built a role-based task management web application with real-time updates, notifications, and messaging between team members. Focused on reliable workflows for administrators and users while maintaining clean deployment and collaboration practices.',
    features: [
      'Role-based authentication and protected routes',
      'Real-time notifications and messaging',
      'Email alerts using Nodemailer',
      'Docker Compose setup for consistent development environments',
      'CI pipeline with GitHub Actions and structured Git workflow',
    ],
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Docker', 'Nodemailer', 'GitHub Actions'],
    github: 'https://github.com/abdullahmoh21/TSKFLO',
    demo: '#',
  },
  {
    title: 'AI Smart Email Assistant',
    description: 'Developed an AI-powered email assistant that generates professional replies with adjustable tone. The system integrates a Chrome extension with a React interface and a Spring Boot backend for real-time response generation.',
    features: [
      'Gemini API integration for AI-generated responses',
      'React interface for prompt input and tone selection',
      'Chrome extension that extracts email content from Gmail',
      'Backend API handling requests and response generation',
      'Dockerized setup for reproducible development',
    ],
    technologies: ['React', 'Java', 'Spring Boot', 'Gemini API', 'Chrome Extension', 'Docker'],
    github: 'https://github.com/haiderali077/AI-Email-Assistant',
    demo: 'https://ai-smart-email-assistant.netlify.app/',
  },
  {
    title: 'Real-Time Messaging App',
    description: 'Built a full-stack chat application that supports real-time messaging, authentication, and profile management. The interface focuses on responsive design and modular components for managing conversations and user interactions.',
    features: [
      'Real-time communication using Socket.IO',
      'Authentication and user profile management',
      'Image and media sharing in conversations',
      'Zustand state management for chat and UI state',
      'Responsive UI built with Tailwind CSS and DaisyUI',
    ],
    technologies: ['React', 'Node.js', 'Socket.IO', 'MongoDB', 'Tailwind CSS', 'DaisyUI', 'Zustand'],
    github: 'https://github.com/haiderali077/whisper',
    demo: 'https://whisper-73xo.onrender.com/',
  },
  {
    title: 'NBA Stats Data Analytics',
    description: 'Analyzed NBA player and team statistics across multiple seasons to identify performance and gameplay trends. Created interactive visualizations and datasets to explore statistical patterns and comparisons.',
    features: [
      'Data collection and cleaning pipeline in Python',
      'Statistical analysis across multiple seasons',
      'Interactive visualizations for players and teams',
      'Trend comparisons between teams and seasons',
      'Exportable datasets for further analysis',
    ],
    technologies: ['Python', 'Pandas', 'Plotly', 'Matplotlib', 'Web Scraping'],
    github: 'https://github.com/haiderali077/VisualHoops',
    demo: '#',
  },
  {
    title: 'Concurrent TCP/UDP Messaging System',
    description: 'A real-time instant messaging system built in Java using low-level socket programming. The system combines TCP for reliable messaging and UDP for lightweight status updates. A multi-threaded server manages user registration and buddy lists while clients can establish peer-to-peer TCP connections for direct messaging.',
    features: [
      'Dual protocol communication using TCP and UDP',
      'Multi-threaded server handling concurrent client connections',
      'Peer-to-peer messaging between clients',
      'Real-time online/offline status monitoring',
      'Custom application-layer protocol with response codes',
    ],
    technologies: ['Java', 'TCP/IP', 'UDP', 'Socket Programming', 'Multithreading'],
    github: 'https://github.com/haiderali077/TCP-UDP-Messaging-',
    demo: '#',
  },
  {
    title: 'HTTP/1.1 Web Server From Scratch',
    description: 'A lightweight HTTP/1.1 web server implemented in Python using raw TCP sockets without relying on frameworks. The server parses HTTP requests, generates compliant responses, and serves static web content including HTML, CSS, JavaScript, JSON, and image files.',
    features: [
      'Raw TCP socket implementation using Python\'s socket module',
      'HTTP request parsing and response generation',
      'Conditional GET handling with 304 Not Modified responses',
      'MIME type detection for multiple file formats',
      'Path validation to prevent directory traversal attacks',
    ],
    technologies: ['Python', 'TCP Sockets', 'HTTP/1.1', 'Network Programming'],
    github: 'https://github.com/haiderali077/http-server-from-scratch',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3.5,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'background.default',
                    border: '1px solid',
                    borderColor: '#334155',
                    borderRadius: 3,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 8px 40px rgba(59, 130, 246, 0.15)',
                      borderColor: '#3B82F6',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" sx={{ color: 'primary.main', fontSize: '1.1rem' }}>
                      {project.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5, ml: 1, flexShrink: 0 }}>
                      {project.github !== '#' && (
                        <Link
                          href={project.github}
                          target="_blank"
                          sx={{
                            color: 'text.secondary',
                            transition: 'color 0.2s',
                            '&:hover': { color: 'primary.main' },
                          }}
                        >
                          <GitHubIcon fontSize="small" />
                        </Link>
                      )}
                      {project.demo !== '#' && (
                        <Link
                          href={project.demo}
                          target="_blank"
                          sx={{
                            color: 'text.secondary',
                            transition: 'color 0.2s',
                            '&:hover': { color: 'primary.main' },
                          }}
                        >
                          <LaunchIcon fontSize="small" />
                        </Link>
                      )}
                    </Box>
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
                    {project.description}
                  </Typography>
                  {'features' in project && project.features && (
                    <Box sx={{ mb: 2, flexGrow: 1 }}>
                      <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600, mb: 0.5 }}>
                        Highlights:
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, m: 0 }}>
                        {(project.features as string[]).map((feature: string, fIdx: number) => (
                          <Typography
                            key={fIdx}
                            component="li"
                            variant="body2"
                            sx={{ color: 'text.secondary', mb: 0.25, fontSize: '0.8rem' }}
                          >
                            {feature}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  )}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 'auto', pt: 1 }}>
                    {project.technologies.map((tech, idx) => (
                      <Chip
                        key={idx}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(51, 65, 85, 0.5)',
                          color: 'primary.main',
                          fontSize: '0.72rem',
                          height: 26,
                          border: '1px solid',
                          borderColor: '#334155',
                          '&:hover': {
                            bgcolor: 'primary.main',
                            color: '#0F172A',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 