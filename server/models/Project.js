const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  longDescription: String,
  technologies: [String],
  features: [String],
  demoUrl: String,
  githubUrl: String,
  imageUrl: String,
  images: [String],
  category: {
    type: String,
    enum: ['web', 'mobile', 'ai-ml', 'fullstack', 'other'],
    default: 'web'
  },
  featured: {
    type: Boolean,
    default: false
  },
  startDate: Date,
  endDate: Date,
  order: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['completed', 'in-progress', 'planned'],
    default: 'completed'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);
