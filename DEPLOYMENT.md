# Deployment Guide - Vercel

This guide will help you deploy your MERN stack portfolio to Vercel.

## Prerequisites

- Vercel account (sign up at https://vercel.com)
- MongoDB Atlas account for production database (https://mongodb.com/cloud/atlas)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

#### Step 1: Deploy Frontend

1. Go to https://vercel.com/new
2. Import your GitHub repository: `mkeshavareddy/portfolio-website`
3. Configure project:
   - **Framework Preset**: Create React App
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

4. Add Environment Variables:
   ```
   REACT_APP_API_URL=https://your-backend-url.vercel.app/api
   ```
   (You'll update this after deploying the backend)

5. Click **Deploy**

#### Step 2: Deploy Backend

1. Go to https://vercel.com/new again
2. Import the same repository
3. Configure project:
   - **Framework Preset**: Other
   - **Root Directory**: `server`
   - **Build Command**: Leave empty
   - **Output Directory**: `.`

4. Add Environment Variables:
   ```
   PORT=3000
   MONGODB_URI=your-mongodb-atlas-connection-string
   NODE_ENV=production
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=reddykeshav807@gmail.com
   CLIENT_URL=https://your-frontend-url.vercel.app
   ```

5. Click **Deploy**

#### Step 3: Update Frontend Environment Variable

1. Go to your frontend project settings on Vercel
2. Update `REACT_APP_API_URL` with your actual backend URL
3. Redeploy the frontend

### Option 2: Deploy via CLI

```bash
# Login to Vercel
vercel login

# Deploy Frontend
cd client
vercel --prod

# Deploy Backend
cd ../server
vercel --prod
```

## MongoDB Atlas Setup

1. Create account at https://mongodb.com/cloud/atlas
2. Create a new FREE cluster (M0)
3. Create a database user
4. Whitelist all IPs (0.0.0.0/0) for serverless functions
5. Get your connection string
6. Replace `<password>` with your database user password
7. Add to Vercel environment variables

## Environment Variables Checklist

### Frontend (.env)
```env
REACT_APP_API_URL=https://your-backend.vercel.app/api
```

### Backend (.env)
```env
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
NODE_ENV=production
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=reddykeshav807@gmail.com
CLIENT_URL=https://your-frontend.vercel.app
```

## Post-Deployment

1. Test all features on production
2. Update GitHub repository description with live URL
3. Add production URL to your resume
4. Monitor Vercel logs for any issues

## Troubleshooting

### CORS Errors
- Ensure `CLIENT_URL` in backend matches your frontend Vercel URL
- Check that CORS is configured in `server/server.js`

### Database Connection
- Verify MongoDB Atlas connection string
- Ensure IP whitelist includes 0.0.0.0/0
- Check database user permissions

### Build Failures
- Check Vercel build logs
- Ensure all dependencies are in package.json
- Verify build commands are correct

## Custom Domain (Optional)

1. Go to your Vercel project settings
2. Navigate to **Domains**
3. Add your custom domain
4. Update DNS records as instructed
5. Update environment variables with new domain

---

Made with ❤️ using MERN Stack
