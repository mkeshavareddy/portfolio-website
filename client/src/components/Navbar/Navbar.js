import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 2rem;
  backdrop-filter: blur(10px);
  background: ${props => props.$scrolled
    ? 'rgba(10, 10, 10, 0.9)'
    : 'transparent'};
  border-bottom: ${props => props.$scrolled
    ? '1px solid var(--border-color)'
    : '1px solid transparent'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.a)`
  font-size: 1.5rem;
  font-weight: 800;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  cursor: pointer;
  font-family: 'Space Grotesk', sans-serif;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.li)`
  a {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    position: relative;
    padding: 0.5rem 0;
    transition: var(--transition-base);

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--accent-gradient);
      transition: width 0.3s ease;
    }

    &:hover {
      color: var(--accent-primary);

      &:after {
        width: 100%;
      }
    }
  }
`;

const ThemeToggle = styled(motion.button)`
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-primary);
  font-size: 1.2rem;
  transition: var(--transition-base);

  &:hover {
    background: var(--accent-gradient);
    color: white;
    border-color: transparent;
    transform: rotate(15deg);
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1002;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background: var(--bg-primary);
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.3);
  padding: 6rem 2rem 2rem;
  z-index: 1001;
  overflow-y: auto;
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MobileNavLink = styled(motion.li)`
  a {
    color: var(--text-primary);
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    display: block;
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-color);
    transition: var(--transition-base);

    &:hover {
      color: var(--accent-primary);
      transform: translateX(10px);
    }
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Nav
        $scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavContainer>
          <Logo
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            KR.
          </Logo>

          <NavLinks>
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                  {item.name}
                </a>
              </NavLink>
            ))}
          </NavLinks>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ThemeToggle
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon /> : <FiSun />}
            </ThemeToggle>

            <MobileMenuButton
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </MobileMenuButton>
          </div>
        </NavContainer>
      </Nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <MobileNavLinks>
                {navItems.map((item, index) => (
                  <MobileNavLink
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                      {item.name}
                    </a>
                  </MobileNavLink>
                ))}
              </MobileNavLinks>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
