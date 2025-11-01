const mongoose = require('mongoose');
require('dotenv').config();
const Project = require('../models/Project');

const projects = [
  {
    title: 'Plant Disease Detection & Pesticide Recommendation System',
    description: 'AI-powered Flask application for real-time plant disease detection with intelligent pesticide recommendations',
    longDescription: 'Developed an intelligent agricultural solution that leverages deep learning to identify plant diseases and provide targeted pesticide recommendations. The system uses state-of-the-art computer vision techniques to analyze plant images and deliver actionable insights to farmers.',
    technologies: ['Python', 'Flask', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Pandas', 'PyTesseract'],
    features: [
      'Real-time plant disease detection using deep learning models',
      'Intelligent pesticide recommendation engine',
      'User-friendly web interface for easy image upload and analysis',
      'Image preprocessing pipeline for optimal disease classification',
      'Comprehensive database of plant diseases and treatment methods'
    ],
    githubUrl: 'https://github.com/mkeshavareddy',
    imageUrl: '/images/plant-disease.jpg',
    category: 'ai-ml',
    featured: true,
    startDate: '2024-01-01',
    endDate: '2024-04-01',
    order: 1,
    status: 'completed'
  },
  {
    title: 'Professional MERN Stack Portfolio',
    description: 'A stunning, interactive portfolio website featuring 3D animations and modern web technologies',
    longDescription: 'Created a cutting-edge portfolio website that showcases projects and skills through immersive 3D experiences and smooth animations. Built with performance and user experience as top priorities.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Three.js', 'Framer Motion', 'GSAP', 'Styled Components'],
    features: [
      '3D interactive hero section with Three.js',
      'Smooth scroll animations and parallax effects',
      'Dynamic project showcase with modal details',
      'Fully responsive design for all devices',
      'Contact form with backend integration',
      'Dark/Light mode with smooth transitions',
      'SEO optimized for better visibility'
    ],
    demoUrl: 'https://keshavareddy.dev',
    githubUrl: 'https://github.com/mkeshavareddy/portfolio',
    imageUrl: '/images/portfolio.jpg',
    category: 'fullstack',
    featured: true,
    startDate: '2025-01-01',
    endDate: '2025-01-15',
    order: 0,
    status: 'completed'
  }
];

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('Connected to MongoDB');

  // Clear existing projects
  await Project.deleteMany({});
  console.log('Cleared existing projects');

  // Insert new projects
  await Project.insertMany(projects);
  console.log('Projects seeded successfully');

  process.exit(0);
})
.catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
