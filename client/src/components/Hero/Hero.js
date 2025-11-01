import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  overflow: hidden;
`;

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  z-index: 2;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Greeting = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--accent-primary);
  font-weight: 500;
  letter-spacing: 1px;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0;

  .gradient {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 600;
  color: var(--text-secondary);
  margin: 0;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 600px;

  @media (max-width: 968px) {
    margin: 0 auto;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(motion.a)`
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition-base);
  border: 2px solid transparent;

  &.primary {
    background: var(--accent-gradient);
    color: white;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 25px rgba(99, 102, 241, 0.5);
    }
  }

  &.secondary {
    border: 2px solid var(--accent-primary);
    color: var(--accent-primary);
    background: transparent;

    &:hover {
      background: var(--accent-primary);
      color: white;
      transform: translateY(-3px);
    }
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 1.3rem;
  transition: var(--transition-base);
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    background: var(--accent-gradient);
    color: white;
    transform: translateY(-5px) rotate(5deg);
    box-shadow: var(--shadow-lg);
  }
`;

const CanvasContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;

  @media (max-width: 968px) {
    height: 400px;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  cursor: pointer;
  z-index: 3;

  &:hover {
    color: var(--accent-primary);
  }
`;

const AnimatedSphere = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 100]} scale={2.5}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Greeting variants={itemVariants}>
            Hi there! 👋 I'm
          </Greeting>

          <Title variants={itemVariants}>
            <span className="gradient">Keshava Reddy</span>
          </Title>

          <Subtitle variants={itemVariants}>
            Full Stack Developer & AI Enthusiast
          </Subtitle>

          <Description variants={itemVariants}>
            Crafting innovative digital experiences with the MERN stack and AI/ML.
            Passionate about building scalable applications that solve real-world problems
            and push the boundaries of what's possible on the web.
          </Description>

          <ButtonGroup variants={itemVariants}>
            <Button
              href="#projects"
              className="primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </Button>
            <Button
              href="#contact"
              className="secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </Button>
          </ButtonGroup>

          <SocialLinks variants={itemVariants}>
            <SocialIcon
              href="https://github.com/mkeshavareddy"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/m-keshava-reddy"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin />
            </SocialIcon>
            <SocialIcon
              href="mailto:reddykeshav807@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiMail />
            </SocialIcon>
          </SocialLinks>
        </HeroContent>

        <CanvasContainer>
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
              <AnimatedSphere />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Suspense>
          </Canvas>
        </CanvasContainer>
      </HeroContainer>

      <ScrollIndicator
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <span>Scroll Down</span>
        <FiArrowDown size={24} />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
