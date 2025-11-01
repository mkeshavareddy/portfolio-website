import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const LoadingContainer = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  flex-direction: column;
  gap: 2rem;
`;

const Logo = styled(motion.div)`
  font-size: 4rem;
  font-weight: 800;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Space Grotesk', sans-serif;
`;

const LoadingBarContainer = styled.div`
  width: 200px;
  height: 4px;
  background: var(--bg-secondary);
  border-radius: 10px;
  overflow: hidden;
`;

const LoadingBar = styled(motion.div)`
  height: 100%;
  background: var(--accent-gradient);
  border-radius: 10px;
`;

const LoadingText = styled(motion.p)`
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 500;
`;

const LoadingScreen = () => {
  return (
    <LoadingContainer
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 200,
        }}
      >
        KR.
      </Logo>

      <LoadingBarContainer>
        <LoadingBar
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </LoadingBarContainer>

      <LoadingText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading amazing things...
      </LoadingText>
    </LoadingContainer>
  );
};

export default LoadingScreen;
