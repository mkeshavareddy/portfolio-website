import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { projectsAPI } from '../../utils/api';

const ProjectsSection = styled.section`
  padding: 8rem 2rem;
  background: var(--bg-secondary);

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  text-align: center;
  margin-bottom: 1rem;

  .gradient {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 4rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: var(--bg-primary);
  border-radius: 25px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  cursor: pointer;
  transition: var(--transition-base);

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  background: var(--accent-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${ProjectCard}:hover &:after {
    opacity: 1;
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  padding: 0.4rem 1rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition-base);
  border: 2px solid var(--accent-primary);
  color: var(--accent-primary);

  &:hover {
    background: var(--accent-primary);
    color: white;
    transform: translateY(-2px);
  }

  &.primary {
    background: var(--accent-gradient);
    color: white;
    border: none;

    &:hover {
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
    }
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  backdrop-filter: blur(10px);
`;

const ModalContent = styled(motion.div)`
  background: var(--bg-primary);
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 25px;
  padding: 3rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: var(--bg-secondary);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-primary);
  font-size: 1.5rem;
  transition: var(--transition-base);

  &:hover {
    background: var(--accent-primary);
    color: white;
    transform: rotate(90deg);
  }
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    projectsAPI.getAll()
      .then(res => setProjects(res.data))
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <ProjectsSection id="projects" ref={ref}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionTitle variants={itemVariants}>
            Featured <span className="gradient">Projects</span>
          </SectionTitle>
          <SectionSubtitle variants={itemVariants}>
            Showcasing my best work and creative solutions
          </SectionSubtitle>

          <ProjectsGrid>
            {projects.map((project) => (
              <ProjectCard
                key={project._id}
                variants={itemVariants}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -10 }}
              >
                <ProjectImage>📱</ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack>
                    {project.technologies?.slice(0, 4).map((tech, idx) => (
                      <TechTag key={idx}>{tech}</TechTag>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    {project.githubUrl && (
                      <ProjectLink
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub /> Code
                      </ProjectLink>
                    )}
                    {project.demoUrl && (
                      <ProjectLink
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink /> Demo
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </motion.div>
      </Container>

      <AnimatePresence>
        {selectedProject && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setSelectedProject(null)}>
                <FiX />
              </CloseButton>
              <h2>{selectedProject.title}</h2>
              <p style={{ color: 'var(--text-secondary)', margin: '1rem 0 2rem' }}>
                {selectedProject.longDescription || selectedProject.description}
              </p>
              {selectedProject.features && (
                <>
                  <h3 style={{ marginBottom: '1rem' }}>Key Features:</h3>
                  <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', marginBottom: '2rem' }}>
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
              <h3 style={{ marginBottom: '1rem' }}>Technologies Used:</h3>
              <TechStack style={{ marginBottom: '2rem' }}>
                {selectedProject.technologies?.map((tech, idx) => (
                  <TechTag key={idx}>{tech}</TechTag>
                ))}
              </TechStack>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ProjectsSection>
  );
};

export default Projects;
