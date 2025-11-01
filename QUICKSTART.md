# Quick Start Guide

Get your portfolio running in 5 minutes!

## Step 1: Install Dependencies (2 minutes)

```bash
# From the portfolio-website directory
npm install
cd server && npm install
cd ../client && npm install
cd ..
```

## Step 2: Setup MongoDB (1 minute)

**Easy Option - Use MongoDB Atlas (Free Cloud Database):**

1. Go to https://www.mongodb.com/cloud/atlas/register
2. Create a free account
3. Create a new FREE cluster (M0)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Update `server/.env` with your connection string:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

**OR Local MongoDB:**
- Install MongoDB locally and it will run on `mongodb://localhost:27017`

## Step 3: Setup Email (Optional - 1 minute)

For the contact form to send emails:

1. Use a Gmail account
2. Enable 2-factor authentication
3. Generate app password: https://myaccount.google.com/apppasswords
4. Update `server/.env`:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password-here
   EMAIL_TO=reddykeshav807@gmail.com
   ```

**Skip this:** Contact form will still save to database, just won't send emails.

## Step 4: Seed Sample Data (Optional - 30 seconds)

```bash
cd server
node seeds/seedProjects.js
cd ..
```

## Step 5: Run the App (30 seconds)

```bash
# From the root portfolio-website directory
npm run dev
```

This will start both frontend (http://localhost:3000) and backend (http://localhost:5000)!

## Step 6: Customize Your Portfolio

1. **Update your information:**
   - Edit `server/routes/experience.js` for your work experience
   - Edit `server/routes/skills.js` for your skills
   - Edit `server/seeds/seedProjects.js` for your projects

2. **Update contact details:**
   - Search for "reddykeshav807@gmail.com" and replace with your email
   - Search for "mkeshavareddy" and replace with your GitHub username
   - Update phone number in Contact component

3. **Customize theme colors:**
   - Edit `client/src/index.css` CSS variables section

## Troubleshooting

**Can't connect to MongoDB?**
- Check your connection string
- If using Atlas, whitelist your IP (0.0.0.0/0 for development)

**Port already in use?**
- Change PORT in `server/.env` to 5001 or another port
- Update `client/.env` REACT_APP_API_URL accordingly

**Email not working?**
- It's optional! Contact form still saves to database
- Verify Gmail app password is correct

## Next Steps

- Deploy to Vercel (frontend) and Railway/Render (backend)
- Add your own projects and content
- Customize colors and styling
- Add more sections if needed

---

Need help? Check the full README.md or reach out!
