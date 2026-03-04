import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Zustand', 'Node.js', 'Express.js', 'Spring Boot', 'Tailwind CSS', 'Socket.IO', 'JWT'],
  },
  {
    title: 'Tools',
    skills: ['VS Code', 'IntelliJ IDEA', 'Jupyter Notebook', 'R Studio'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Data & Visualization',
    skills: ['pandas', 'NumPy', 'Plotly', 'Matplotlib', 'Seaborn', 'Tableau'],
  },
  {
    title: 'DevOps & Deployment',
    skills: ['Docker', 'CI/CD', 'Git', 'GitHub', 'RESTful API'],
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
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
            Skills
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 3,
            }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: '#334155',
                    borderRadius: 3,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 8px 40px rgba(59, 130, 246, 0.12)',
                      borderColor: '#3B82F6',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      pb: 1,
                      borderBottom: '2px solid',
                      borderColor: '#334155',
                      fontSize: '1rem',
                    }}
                  >
                    {category.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                    {category.skills.map((skill, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          color: 'text.secondary',
                          bgcolor: 'rgba(51, 65, 85, 0.5)',
                          border: '1px solid',
                          borderColor: '#334155',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1.5,
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          transition: 'all 0.2s',
                          '&:hover': {
                            bgcolor: 'rgba(59, 130, 246, 0.15)',
                            color: 'primary.main',
                            borderColor: '#3B82F6',
                          },
                        }}
                      >
                        {skill}
                      </Box>
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

export default Skills; 