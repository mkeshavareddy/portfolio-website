import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { contactAPI } from '../../utils/api';

const ContactSection = styled.section`
  padding: 8rem 2rem;
  background: var(--bg-secondary);
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled(motion.div)`
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: var(--transition-base);

  &:hover {
    transform: translateX(10px);
    border-color: var(--accent-primary);
    box-shadow: var(--shadow-lg);
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
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  p, a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.95rem;

    &:hover {
      color: var(--accent-primary);
    }
  }
`;

const ContactForm = styled(motion.form)`
  background: var(--bg-primary);
  padding: 3rem;
  border-radius: 25px;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-color);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 2px solid var(--border-color);
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 1rem;
  font-family: inherit;
  transition: var(--transition-base);

  &:focus {
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &::placeholder {
    color: var(--text-tertiary);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 2px solid var(--border-color);
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 1rem;
  font-family: inherit;
  min-height: 150px;
  resize: vertical;
  transition: var(--transition-base);

  &:focus {
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &::placeholder {
    color: var(--text-tertiary);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1.2rem 2rem;
  border-radius: 50px;
  border: none;
  background: var(--accent-gradient);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  transition: var(--transition-base);
  margin-top: 1rem;

  &:hover {
    box-shadow: 0 6px 25px rgba(99, 102, 241, 0.5);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await contactAPI.sendMessage(formData);
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
    <ContactSection id="contact" ref={ref}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionTitle variants={itemVariants}>
            Get In <span className="gradient">Touch</span>
          </SectionTitle>
          <SectionSubtitle variants={itemVariants}>
            Let's collaborate and build something amazing together
          </SectionSubtitle>

          <ContentGrid>
            <ContactInfo variants={itemVariants}>
              <InfoCard whileHover={{ x: 10 }}>
                <IconWrapper>
                  <FiMail />
                </IconWrapper>
                <InfoContent>
                  <h4>Email</h4>
                  <a href="mailto:reddykeshav807@gmail.com">
                    reddykeshav807@gmail.com
                  </a>
                </InfoContent>
              </InfoCard>

              <InfoCard whileHover={{ x: 10 }}>
                <IconWrapper>
                  <FiPhone />
                </IconWrapper>
                <InfoContent>
                  <h4>Phone</h4>
                  <a href="tel:+916303564740">+91 6303564740</a>
                </InfoContent>
              </InfoCard>

              <InfoCard whileHover={{ x: 10 }}>
                <IconWrapper>
                  <FiMapPin />
                </IconWrapper>
                <InfoContent>
                  <h4>Location</h4>
                  <p>Hyderabad, Telangana, India</p>
                </InfoContent>
              </InfoCard>
            </ContactInfo>

            <ContactForm
              variants={itemVariants}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FormGroup>
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Your Email *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message *</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? 'Sending...' : 'Send Message'}
                <FiSend />
              </SubmitButton>
            </ContactForm>
          </ContentGrid>
        </motion.div>
      </Container>
    </ContactSection>
  );
};

export default Contact;
