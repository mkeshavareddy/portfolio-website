import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { skillsAPI } from '../../utils/api';
import {
  SiJavascript, SiPython, SiReact, SiNodedotjs, SiMongodb,
  SiPostgresql, SiTensorflow, SiDocker, SiGit
} from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 8rem 2rem;
  background: var(--bg-primary);
  position: relative;

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

const SkillsGrid = styled.div`
  display: grid;
  gap: 3rem;
`;

const CategoryCard = styled(motion.div)`
  background: var(--bg-secondary);
  padding: 3rem;
  border-radius: 25px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 1rem;

  &:before {
    content: '';
    width: 4px;
    height: 30px;
    background: var(--accent-gradient);
    border-radius: 2px;
  }
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillItem = styled(motion.div)`
  position: relative;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
`;

const SkillName = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const SkillLevel = styled.span`
  font-size: 0.95rem;
  color: var(--accent-primary);
  font-weight: 600;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: var(--bg-tertiary);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background: var(--accent-gradient);
  border-radius: 10px;
`;

const iconMap = {
  javascript: <SiJavascript />,
  python: <SiPython />,
  react: <SiReact />,
  nodejs: <SiNodedotjs />,
  mongodb: <SiMongodb />,
  postgresql: <SiPostgresql />,
  tensorflow: <SiTensorflow />,
  docker: <SiDocker />,
  git: <SiGit />,
};

const Skills = () => {
  const [skills, setSkills] = useState({});
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    skillsAPI.getAll()
      .then(res => setSkills(res.data))
      .catch(err => console.error('Error fetching skills:', err));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionTitle variants={itemVariants}>
            Skills & <span className="gradient">Expertise</span>
          </SectionTitle>
          <SectionSubtitle variants={itemVariants}>
            Technologies I work with to bring ideas to life
          </SectionSubtitle>

          <SkillsGrid>
            {Object.entries(skills).map(([key, category]) => (
              <CategoryCard key={key} variants={itemVariants}>
                <CategoryTitle>{category.title}</CategoryTitle>
                <SkillsList>
                  {category.skills?.map((skill, idx) => (
                    <SkillItem key={idx} variants={itemVariants}>
                      <SkillHeader>
                        <SkillName>
                          {iconMap[skill.icon]}
                          {skill.name}
                        </SkillName>
                        <SkillLevel>{skill.level}%</SkillLevel>
                      </SkillHeader>
                      <ProgressBar>
                        <Progress
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                        />
                      </ProgressBar>
                    </SkillItem>
                  ))}
                </SkillsList>
              </CategoryCard>
            ))}
          </SkillsGrid>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
