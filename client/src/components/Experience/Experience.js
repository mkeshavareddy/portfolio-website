import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { FiBriefcase, FiBook, FiMapPin, FiCalendar } from 'react-icons/fi';
import { experienceAPI } from '../../utils/api';

const ExperienceSection = styled.section`
  padding: 8rem 2rem;
  background: var(--bg-primary);

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

const TabButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
`;

const TabButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: 2px solid ${props => props.$active ? 'transparent' : 'var(--accent-primary)'};
  background: ${props => props.$active ? 'var(--accent-gradient)' : 'transparent'};
  color: ${props => props.$active ? 'white' : 'var(--accent-primary)'};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: var(--transition-base);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: var(--accent-gradient);
    border-radius: 2px;

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-left: 50px;
  }

  &:nth-child(even) {
    .timeline-content {
      grid-column: 2;
    }

    @media (max-width: 768px) {
      .timeline-content {
        grid-column: 1;
      }
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--accent-gradient);
  border: 4px solid var(--bg-primary);
  z-index: 2;
  box-shadow: 0 0 0 4px var(--accent-primary);

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const TimelineContent = styled(motion.div)`
  background: var(--bg-secondary);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  position: relative;
  transition: var(--transition-base);

  &:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-primary);
  }
`;

const CompanyName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const JobTitle = styled.h4`
  font-size: 1.2rem;
  color: var(--accent-primary);
  margin-bottom: 1rem;
  font-weight: 600;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: var(--text-secondary);

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Description = styled.p`
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const Responsibilities = styled.ul`
  list-style: none;
  margin-bottom: 1.5rem;

  li {
    color: var(--text-secondary);
    line-height: 1.8;
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.8rem;

    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--accent-primary);
      font-weight: bold;
    }
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const TechTag = styled.span`
  padding: 0.4rem 1rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  font-size: 0.85rem;
  color: var(--accent-primary);
  font-weight: 500;
`;

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [data, setData] = useState({ experience: [], education: [] });
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    experienceAPI.getAll()
      .then(res => setData(res.data))
      .catch(err => console.error('Error fetching experience:', err));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const currentData = activeTab === 'experience' ? data.experience : data.education;

  return (
    <ExperienceSection id="experience" ref={ref}>
      <Container>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <SectionTitle variants={itemVariants}>
            My <span className="gradient">Journey</span>
          </SectionTitle>
          <SectionSubtitle variants={itemVariants}>
            Professional experience and educational background
          </SectionSubtitle>

          <TabButtons>
            <TabButton
              $active={activeTab === 'experience'}
              onClick={() => setActiveTab('experience')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiBriefcase /> Experience
            </TabButton>
            <TabButton
              $active={activeTab === 'education'}
              onClick={() => setActiveTab('education')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiBook /> Education
            </TabButton>
          </TabButtons>

          <Timeline>
            {currentData.map((item, index) => (
              <TimelineItem key={item.id} variants={itemVariants}>
                <TimelineDot />
                <TimelineContent className="timeline-content">
                  <CompanyName>
                    {item.company || item.institution}
                  </CompanyName>
                  <JobTitle>
                    {item.title || item.degree}
                  </JobTitle>
                  <MetaInfo>
                    {item.location && (
                      <span>
                        <FiMapPin /> {item.location}
                      </span>
                    )}
                    <span>
                      <FiCalendar />
                      {item.startDate} - {item.current ? 'Present' : item.endDate}
                    </span>
                    {item.gpa && <span>GPA: {item.gpa}</span>}
                  </MetaInfo>
                  <Description>{item.description}</Description>
                  {item.responsibilities && (
                    <Responsibilities>
                      {item.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </Responsibilities>
                  )}
                  {item.highlights && (
                    <Responsibilities>
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </Responsibilities>
                  )}
                  {item.technologies && (
                    <TechStack>
                      {item.technologies.map((tech, idx) => (
                        <TechTag key={idx}>{tech}</TechTag>
                      ))}
                    </TechStack>
                  )}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
