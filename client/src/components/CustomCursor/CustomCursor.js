import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CursorDot = styled.div`
  width: 8px;
  height: 8px;
  background: var(--accent-primary);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.15s ease;
  transform: translate(-50%, -50%);

  ${props => props.$clicking && `
    transform: translate(-50%, -50%) scale(0.8);
  `}

  @media (max-width: 768px) {
    display: none;
  }
`;

const CursorOutline = styled.div`
  width: 35px;
  height: 35px;
  border: 2px solid var(--accent-primary);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transition: all 0.2s ease;
  transform: translate(-50%, -50%);
  opacity: 0.5;

  ${props => props.$hovering && `
    width: 50px;
    height: 50px;
    opacity: 1;
    background: rgba(99, 102, 241, 0.1);
  `}

  ${props => props.$clicking && `
    width: 25px;
    height: 25px;
  `}

  @media (max-width: 768px) {
    display: none;
  }
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [outlinePosition, setOutlinePosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      setTimeout(() => {
        setOutlinePosition({ x: e.clientX, y: e.clientY });
      }, 80);
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        setHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        setHovering(false);
      }
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <CursorDot
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        $clicking={clicking}
      />
      <CursorOutline
        style={{ left: `${outlinePosition.x}px`, top: `${outlinePosition.y}px` }}
        $hovering={hovering}
        $clicking={clicking}
      />
    </>
  );
};

export default CustomCursor;
