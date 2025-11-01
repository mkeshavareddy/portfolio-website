const express = require('express');
const router = express.Router();

// Static skills data (can be moved to MongoDB if needed)
const skillsData = {
  programming: {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', level: 85, icon: 'java' },
      { name: 'Python', level: 80, icon: 'python' },
      { name: 'JavaScript', level: 90, icon: 'javascript' },
      { name: 'C++', level: 75, icon: 'cplusplus' },
      { name: 'C', level: 70, icon: 'c' }
    ]
  },
  web: {
    title: 'Web Technologies',
    skills: [
      { name: 'React.js', level: 90, icon: 'react' },
      { name: 'Node.js', level: 85, icon: 'nodejs' },
      { name: 'Express.js', level: 85, icon: 'express' },
      { name: 'React Native', level: 65, icon: 'react' },
      { name: 'MERN Stack', level: 88, icon: 'mongodb' }
    ]
  },
  databases: {
    title: 'Databases & Tools',
    skills: [
      { name: 'MongoDB', level: 85, icon: 'mongodb' },
      { name: 'PostgreSQL', level: 80, icon: 'postgresql' },
      { name: 'MySQL', level: 75, icon: 'mysql' },
      { name: 'Git', level: 90, icon: 'git' },
      { name: 'VS Code', level: 95, icon: 'vscode' }
    ]
  },
  aiml: {
    title: 'AI/ML & Frameworks',
    skills: [
      { name: 'TensorFlow', level: 75, icon: 'tensorflow' },
      { name: 'Keras', level: 75, icon: 'keras' },
      { name: 'OpenCV', level: 70, icon: 'opencv' },
      { name: 'NumPy', level: 80, icon: 'numpy' },
      { name: 'Pandas', level: 80, icon: 'pandas' }
    ]
  },
  other: {
    title: 'Other Skills',
    skills: [
      { name: 'Docker', level: 70, icon: 'docker' },
      { name: 'Spring Boot', level: 75, icon: 'spring' },
      { name: 'Postman', level: 85, icon: 'postman' },
      { name: 'OOP', level: 88, icon: 'code' },
      { name: 'REST APIs', level: 90, icon: 'api' }
    ]
  }
};

router.get('/', (req, res) => {
  res.json(skillsData);
});

module.exports = router;
