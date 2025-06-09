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
        py: 8,
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
              mb: 4,
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
              <Paper
                key={index}
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  bgcolor: 'background.paper',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'primary.main',
                    mb: 2,
                    borderBottom: '2px solid',
                    borderColor: 'primary.main',
                    pb: 1,
                  }}
                >
                  {category.title}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {category.skills.map((skill, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        bgcolor: 'background.default',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                      }}
                    >
                      {skill}
                    </Typography>
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

export default Skills; 