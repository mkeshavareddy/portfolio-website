# Professional Portfolio Website - MERN Stack

A stunning, interactive portfolio website featuring 3D animations, smooth transitions, and modern design. Built with the MERN stack (MongoDB, Express.js, React, Node.js) and enhanced with Three.js, Framer Motion, and GSAP.

## Features

### Design & User Experience
- **3D Interactive Hero Section** - Powered by Three.js and React Three Fiber
- **Smooth Animations** - Using Framer Motion and GSAP
- **Custom Cursor** - Interactive cursor with hover effects
- **Dark/Light Mode** - Seamless theme switching with animations
- **Parallax Effects** - Scroll-triggered animations throughout
- **Glass Morphism** - Modern glassmorphic design elements
- **Responsive Design** - Fully optimized for all devices

### Sections
- **Hero** - 3D animated introduction with floating sphere
- **About** - Personal story with highlight cards and statistics
- **Skills** - Interactive skill visualization with progress bars
- **Projects** - Dynamic project showcase with modals and filtering
- **Experience** - Animated timeline for work experience and education
- **Contact** - Functional contact form with backend integration

### Technical Features
- **MERN Stack** - MongoDB, Express.js, React, Node.js
- **3D Graphics** - Three.js / React Three Fiber
- **Animations** - Framer Motion for React animations
- **Styled Components** - CSS-in-JS styling
- **API Integration** - RESTful backend with MongoDB
- **Email Service** - Contact form with Nodemailer
- **SEO Optimized** - Meta tags and React Helmet
- **Security** - Helmet.js, rate limiting, input validation

## Tech Stack

### Frontend
- **React** 18.2.0
- **React Three Fiber** - 3D graphics
- **@react-three/drei** - React Three Fiber helpers
- **Three.js** - 3D library
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations
- **Styled Components** - CSS-in-JS
- **Axios** - HTTP client
- **React Router** - Navigation
- **React Helmet** - SEO management
- **React Toastify** - Notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Nodemailer** - Email service
- **Express Validator** - Input validation
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - API protection

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### 1. Clone the Repository
```bash
git clone https://github.com/mkeshavareddy/portfolio.git
cd portfolio-website
```

### 2. Install Dependencies
```bash
# Install root dependencies (for concurrently)
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Environment Setup

Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development

# Email Configuration (Gmail example)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=reddykeshav807@gmail.com

# Frontend URL
CLIENT_URL=http://localhost:3000
```

**Email Setup (Gmail):**
1. Enable 2-factor authentication
2. Generate an app password: https://myaccount.google.com/apppasswords
3. Use the app password in `EMAIL_PASS`

Create a `.env` file in the `client` directory (optional):
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 4. MongoDB Setup

**Option 1: Local MongoDB**
```bash
# Install MongoDB locally and start the service
# MongoDB will run on mongodb://localhost:27017
```

**Option 2: MongoDB Atlas (Cloud)**
1. Create a free account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Get your connection string
4. Update `MONGODB_URI` in server/.env

### 5. Seed the Database (Optional)
```bash
cd server
node seeds/seedProjects.js
```

## Running the Application

### Development Mode

**Option 1: Run everything together (from root)**
```bash
npm run dev
```

**Option 2: Run separately**
```bash
# Terminal 1 - Run backend
cd server
npm run dev

# Terminal 2 - Run frontend
cd client
npm start
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

### Production Build

```bash
# Build frontend
cd client
npm run build

# The build folder will contain optimized production files
# Deploy the client/build folder to your hosting service
# Deploy the server folder to your backend hosting service
```

## Customization

### Personal Information

1. **Update Resume Data** in `server/routes/experience.js` and `server/routes/skills.js`
2. **Update Projects** by seeding the database or via API
3. **Update Contact Info** in components and backend
4. **Update Links** - GitHub, LinkedIn, etc.

### Styling

- **Theme Colors**: Edit CSS variables in `client/src/index.css`
- **Fonts**: Update Google Fonts in `client/public/index.html`
- **Animations**: Modify Framer Motion variants in components

### Content

- **Hero Section**: `client/src/components/Hero/Hero.js`
- **About Section**: `client/src/components/About/About.js`
- **Projects**: Add via MongoDB or edit seed file
- **Skills**: Update in `server/routes/skills.js`

## Deployment

### Frontend (Vercel/Netlify)

1. Build the client: `cd client && npm run build`
2. Deploy the `client/build` folder
3. Set environment variables in hosting dashboard

### Backend (Heroku/Railway/Render)

1. Push server folder to git
2. Set environment variables
3. Ensure MongoDB connection string is set
4. Deploy

### MongoDB Atlas

1. Use MongoDB Atlas for production database
2. Update connection string in production environment variables
3. Whitelist hosting server IP addresses

## API Endpoints

### Contact
- `POST /api/contact` - Send contact message
- `GET /api/contact` - Get all messages (admin)

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project

### Skills
- `GET /api/skills` - Get all skills

### Experience
- `GET /api/experience` - Get experience and education
- `GET /api/experience/experience` - Get only experience
- `GET /api/experience/education` - Get only education

## Performance Optimizations

- Lazy loading for 3D components
- Image optimization
- Code splitting
- Memoization of expensive components
- Efficient re-renders with React best practices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Troubleshooting

**MongoDB Connection Error:**
- Ensure MongoDB is running locally or Atlas connection string is correct
- Check firewall settings

**Email Not Sending:**
- Verify EMAIL_USER and EMAIL_PASS in .env
- Check Gmail app password settings
- Ensure 2FA is enabled for Gmail

**3D Scene Not Loading:**
- Check browser WebGL support
- Update graphics drivers
- Try different browser

**CORS Errors:**
- Verify CLIENT_URL in server .env
- Check CORS settings in server.js

## License

MIT License - feel free to use this for your own portfolio!

## Author

**Mudumal Keshava Reddy**
- Email: reddykeshav807@gmail.com
- LinkedIn: [linkedin.com/in/m-keshava-reddy](https://www.linkedin.com/in/m-keshava-reddy)
- GitHub: [github.com/mkeshavareddy](https://github.com/mkeshavareddy)

## Acknowledgments

- Inspired by Bruno Simon, Rauno Freiberg, and other creative developers
- Built with modern web technologies and best practices
- Designed to impress hiring managers and showcase technical skills

---

Made with ❤️ using MERN Stack | © 2025 Mudumal Keshava Reddy
