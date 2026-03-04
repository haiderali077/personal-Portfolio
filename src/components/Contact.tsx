import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  return (
    <Box
      id="contact"
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
            Get In Touch
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', md: '66.666%' },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 3,
                }}
              >
                <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 2 }}>
                  I'm currently looking for internship opportunities where I can keep learning, build cool stuff, and
                  grow as a developer. Feel free to reach out if you'd like to connect!
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Link
                    href="mailto:246067.haider@gmail.com"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: 'text.secondary',
                      textDecoration: 'none',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      transition: 'all 0.2s',
                      '&:hover': { color: 'primary.main', bgcolor: 'rgba(51, 65, 85, 0.5)' },
                    }}
                  >
                    <EmailIcon sx={{ mr: 1 }} />
                    <Typography>246067.haider@gmail.com</Typography>
                  </Link>
                  <Link
                    href="tel:+17783897887"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: 'text.secondary',
                      textDecoration: 'none',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      transition: 'all 0.2s',
                      '&:hover': { color: 'primary.main', bgcolor: 'rgba(51, 65, 85, 0.5)' },
                    }}
                  >
                    <PhoneIcon sx={{ mr: 1 }} />
                    <Typography>(778)-389-7887</Typography>
                  </Link>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton
                    href="https://github.com/haiderali077"
                    target="_blank"
                    sx={{
                      color: 'text.secondary',
                      transition: 'all 0.2s',
                      '&:hover': { color: 'primary.main', bgcolor: 'rgba(51, 65, 85, 0.5)' },
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    href="https://www.linkedin.com/in/haider-ali-398a59274/"
                    target="_blank"
                    sx={{
                      color: 'text.secondary',
                      transition: 'all 0.2s',
                      '&:hover': { color: 'primary.main', bgcolor: 'rgba(51, 65, 85, 0.5)' },
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 