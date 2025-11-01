import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { FiCode, FiCpu, FiZap, FiAward } from 'react-icons/fi';

const AboutSection = styled.section`
  padding: 8rem 2rem;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;

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
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 5rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutText = styled(motion.div)`
  p {
    font-size: 1.1rem;
    line-height: 1.9;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  transition: var(--transition-base);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-primary);
  }
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0.5rem 0;
`;

const StatLabel = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const HighlightCard = styled(motion.div)`
  background: var(--bg-primary);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  transition: var(--transition-base);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--accent-gradient);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);

    &:before {
      transform: scaleX(1);
    }
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: var(--accent-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  margin-bottom: 1.5rem;
`;

const HighlightTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const HighlightText = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
`;

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const highlights = [
    {
      icon: <FiCode />,
      title: 'Full Stack Development',
      text: 'Expertise in building scalable web applications using MERN stack with modern best practices and clean architecture.',
    },
    {
      icon: <FiCpu />,
      title: 'AI & Machine Learning',
      text: 'Developing intelligent solutions with LLMs, RAG techniques, and deep learning frameworks like TensorFlow and Keras.',
    },
    {
      icon: <FiZap />,
      title: 'Performance Focused',
      text: 'Obsessed with creating lightning-fast, responsive applications with optimal user experience and accessibility.',
    },
    {
      icon: <FiAward />,
      title: 'Published Researcher',
      text: 'Published research on Plant Disease Detection using deep learning, combining academic rigor with practical applications.',
    },
  ];

  return (
    <AboutSection id="about" ref={ref}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionTitle variants={itemVariants}>
            About <span className="gradient">Me</span>
          </SectionTitle>
          <SectionSubtitle variants={itemVariants}>
            Passionate developer turning ideas into elegant solutions
          </SectionSubtitle>

          <Content>
            <AboutText variants={itemVariants}>
              <p>
                Hey! I'm <strong>Keshava Reddy</strong>, a passionate full-stack developer
                currently pursuing my B.Tech in Computer Science at Woxxen University, Hyderabad.
                With a strong foundation in both <strong>web development</strong> and{' '}
                <strong>artificial intelligence</strong>, I love creating digital experiences
                that are not just functional, but delightful.
              </p>
              <p>
                My journey in tech has been driven by curiosity and a desire to solve
                real-world problems. From building intelligent AI systems that help farmers
                detect plant diseases to crafting seamless user interfaces with React, I'm
                always exploring the intersection of design and technology.
              </p>
              <p>
                When I'm not coding, you'll find me participating in hackathons, contributing
                to open-source projects, or diving deep into the latest tech trends. I believe
                in continuous learning and pushing boundaries to create innovative solutions.
              </p>
            </AboutText>

            <StatsGrid variants={itemVariants}>
              <StatCard whileHover={{ scale: 1.05 }}>
                <StatNumber>2+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </StatCard>
              <StatCard whileHover={{ scale: 1.05 }}>
                <StatNumber>10+</StatNumber>
                <StatLabel>Projects Completed</StatLabel>
              </StatCard>
              <StatCard whileHover={{ scale: 1.05 }}>
                <StatNumber>5+</StatNumber>
                <StatLabel>Technologies Mastered</StatLabel>
              </StatCard>
              <StatCard whileHover={{ scale: 1.05 }}>
                <StatNumber>1</StatNumber>
                <StatLabel>Research Published</StatLabel>
              </StatCard>
            </StatsGrid>
          </Content>

          <HighlightsGrid>
            {highlights.map((highlight, index) => (
              <HighlightCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <IconWrapper>{highlight.icon}</IconWrapper>
                <HighlightTitle>{highlight.title}</HighlightTitle>
                <HighlightText>{highlight.text}</HighlightText>
              </HighlightCard>
            ))}
          </HighlightsGrid>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About;
