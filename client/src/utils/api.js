import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactAPI = {
  sendMessage: (data) => api.post('/contact', data),
};

export const projectsAPI = {
  getAll: (params) => api.get('/projects', { params }),
  getById: (id) => api.get(`/projects/${id}`),
};

export const skillsAPI = {
  getAll: () => api.get('/skills'),
};

export const experienceAPI = {
  getAll: () => api.get('/experience'),
  getExperience: () => api.get('/experience/experience'),
  getEducation: () => api.get('/experience/education'),
};

export default api;
