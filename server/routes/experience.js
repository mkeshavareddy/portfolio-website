const express = require('express');
const router = express.Router();

// Static experience and education data
const experienceData = {
  experience: [
    {
      id: 'exp-1',
      title: 'AI Intern',
      company: 'Tech Bharth AI',
      location: 'Remote',
      type: 'Internship',
      startDate: '2025-09',
      endDate: 'Present',
      current: true,
      description: 'Developing and implementing cutting-edge AI solutions with focus on Large Language Models and Retrieval-Augmented Generation.',
      responsibilities: [
        'Developing AI models with focus on Large Language Models (LLMs)',
        'Implementing Retrieval-Augmented Generation (RAG) techniques to enhance model performance',
        'Contributing to real-time deployment and performance testing of AI applications',
        'Collaborating with cross-functional teams on innovative AI solutions'
      ],
      technologies: ['Python', 'LLMs', 'RAG', 'TensorFlow', 'PyTorch']
    },
    {
      id: 'exp-2',
      title: 'Frontend Developer Intern',
      company: 'Integrade Solutions',
      location: 'Hybrid',
      type: 'Internship',
      startDate: '2025-06',
      endDate: '2025-08',
      current: false,
      description: 'Built responsive user interfaces and integrated backend services in an agile development environment.',
      responsibilities: [
        'Developed dynamic user interfaces using React.js with modern hooks and state management',
        'Integrated PostgreSQL databases for efficient data management and backend services',
        'Collaborated in agile sprints to deliver features on tight deadlines',
        'Improved application performance and user experience through optimization techniques'
      ],
      technologies: ['React.js', 'PostgreSQL', 'REST APIs', 'Git', 'Agile']
    }
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Woxxen University',
      location: 'Hyderabad, Telangana',
      startDate: '2021',
      endDate: '2025',
      gpa: '3.0/4.0',
      description: 'Comprehensive computer science education with focus on software engineering, data structures, algorithms, and modern development practices.',
      highlights: [
        'Strong foundation in Object-Oriented Programming and Data Structures',
        'Completed advanced coursework in AI/ML, Database Systems, and Web Technologies',
        'Published research paper on Plant Disease Detection using Deep Learning',
        'Active participant in hackathons and coding competitions'
      ]
    },
    {
      id: 'edu-2',
      degree: 'Higher Secondary Education (SSC)',
      institution: 'Narayana Group of Institutes',
      location: 'Hyderabad, Telangana',
      startDate: '2019',
      endDate: '2021',
      gpa: '96.4%',
      description: 'Excelled in science and mathematics, building a strong foundation for engineering studies.',
      highlights: [
        'Secured 96.4% with distinction in Mathematics and Physics',
        'Developed strong analytical and problem-solving skills',
        'Participated in various science exhibitions and competitions'
      ]
    }
  ]
};

router.get('/', (req, res) => {
  res.json(experienceData);
});

router.get('/experience', (req, res) => {
  res.json(experienceData.experience);
});

router.get('/education', (req, res) => {
  res.json(experienceData.education);
});

module.exports = router;
