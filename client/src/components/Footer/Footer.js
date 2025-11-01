import React from 'react';
import styled from 'styled-components';
import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const FooterSection = styled.footer`
  background: var(--bg-primary);
  padding: 3rem 2rem 2rem;
  border-top: 1px solid var(--border-color);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  font-size: 1.2rem;
  transition: var(--transition-base);
  border: 2px solid transparent;

  &:hover {
    background: var(--accent-gradient);
    color: white;
    transform: translateY(-5px) rotate(10deg);
    box-shadow: var(--shadow-md);
  }
`;

const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .heart {
    color: #e74c3c;
    animation: heartbeat 1.5s ease-in-out infinite;
  }

  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.2);
    }
    50% {
      transform: scale(1);
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <Container>
        <SocialLinks>
          <SocialLink
            href="https://github.com/mkeshavareddy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/m-keshava-reddy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </SocialLink>
          <SocialLink
            href="mailto:reddykeshav807@gmail.com"
            aria-label="Email"
          >
            <FiMail />
          </SocialLink>
        </SocialLinks>

        <Copyright>
          © {currentYear} Mudumal Keshava Reddy. Built with{' '}
          <FiHeart className="heart" /> using MERN Stack
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;
