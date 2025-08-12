@echo off
REM 🚀 ASACODER Landing Page - Windows Deployment Script
REM This script automates the deployment process for your landing page
REM Run this script from the project root directory

echo 🚀 Starting ASACODER Landing Page Deployment...
echo ================================================

REM Step 1: Check if we're in the right directory
echo [INFO] Checking project structure...
if not exist "package.json" (
    echo [ERROR] Please run this script from the asacoder-landing project root directory
    pause
    exit /b 1
)
if not exist "frontend" (
    echo [ERROR] Frontend directory not found
    pause
    exit /b 1
)
if not exist "backend" (
    echo [ERROR] Backend directory not found
    pause
    exit /b 1
)
echo [SUCCESS] Project structure verified

REM Step 2: Install dependencies
echo [INFO] Installing all dependencies...
call npm run setup
if %errorlevel% neq 0 (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)
echo [SUCCESS] Dependencies installed successfully

REM Step 3: Test backend connection
echo [INFO] Testing backend connection...
call npm run test:backend
if %errorlevel% neq 0 (
    echo [WARNING] Backend connection test failed - make sure backend is running
) else (
    echo [SUCCESS] Backend connection test passed
)

REM Step 4: Build frontend for production
echo [INFO] Building frontend for production...
cd frontend
call npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Frontend build failed
    pause
    exit /b 1
)
echo [SUCCESS] Frontend built successfully
cd ..

REM Step 5: Check if git is initialized
echo [INFO] Checking git status...
if not exist ".git" (
    echo [WARNING] Git repository not initialized. Initializing...
    git init
    git add .
    git commit -m "Initial commit - ASACODER Landing Page"
    echo [SUCCESS] Git repository initialized
) else (
    echo [INFO] Git repository found
)

REM Step 6: Check for uncommitted changes
git diff --quiet
if %errorlevel% neq 0 (
    echo [INFO] Committing changes...
    git add .
    git commit -m "Deploy: ASACODER Landing Page - %date% %time%"
    echo [SUCCESS] Changes committed
) else (
    echo [SUCCESS] No uncommitted changes found
)

REM Step 7: Deployment options
echo.
echo 🎯 Choose your deployment option:
echo 1. Vercel (Frontend) + Railway (Backend) - RECOMMENDED
echo 2. Netlify (Frontend) + Heroku (Backend)
echo 3. DigitalOcean App Platform (Full-stack)
echo 4. Manual deployment instructions
echo 5. Exit
echo.

set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" goto vercel_railway
if "%choice%"=="2" goto netlify_heroku
if "%choice%"=="3" goto digitalocean
if "%choice%"=="4" goto manual
if "%choice%"=="5" goto exit_script
echo [ERROR] Invalid choice. Please run the script again.
pause
exit /b 1

:vercel_railway
echo [INFO] Deploying to Vercel + Railway...
echo.
echo 📋 Vercel + Railway Deployment Steps:
echo =====================================
echo.
echo 🌐 Frontend (Vercel):
echo 1. Go to https://vercel.com
echo 2. Sign up with GitHub
echo 3. Click 'New Project'
echo 4. Import your GitHub repository
echo 5. Set Root Directory to: landing-pages/asacoder-landing/frontend
echo 6. Set Build Command to: npm run build
echo 7. Set Output Directory to: dist
echo 8. Add environment variable: VITE_API_URL=https://your-backend-url.railway.app
echo 9. Click 'Deploy'
echo.
echo ⚙️ Backend (Railway):
echo 1. Go to https://railway.app
echo 2. Sign up with GitHub
echo 3. Click 'New Project'
echo 4. Choose 'Deploy from GitHub repo'
echo 5. Set Root Directory to: landing-pages/asacoder-landing/backend
echo 6. Add environment variables:
echo    - NODE_ENV=production
echo    - CORS_ORIGIN=https://your-frontend-url.vercel.app
echo    - MONGODB_URI=your-mongodb-atlas-connection-string
echo 7. Deploy
echo.
echo [SUCCESS] Deployment instructions displayed
goto end

:netlify_heroku
echo [INFO] Deploying to Netlify + Heroku...
echo.
echo 📋 Netlify + Heroku Deployment Steps:
echo =====================================
echo.
echo 🌐 Frontend (Netlify):
echo 1. Go to https://netlify.com
echo 2. Sign up and create account
echo 3. Drag and drop your frontend/dist folder
echo 4. Or connect GitHub repository for auto-deploy
echo 5. Add environment variable: VITE_API_URL=https://your-heroku-backend.herokuapp.com
echo.
echo ⚙️ Backend (Heroku):
echo 1. Install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
echo 2. Run: heroku login
echo 3. Run: cd backend && heroku create your-asacoder-backend
echo 4. Set environment variables:
echo    heroku config:set NODE_ENV=production
echo    heroku config:set CORS_ORIGIN=https://your-netlify-site.netlify.app
echo    heroku config:set MONGODB_URI=your-mongodb-atlas-connection-string
echo 5. Deploy: git push heroku main
echo.
echo [SUCCESS] Deployment instructions displayed
goto end

:digitalocean
echo [INFO] Deploying to DigitalOcean App Platform...
echo.
echo 📋 DigitalOcean App Platform Deployment Steps:
echo ==============================================
echo.
echo 1. Go to https://digitalocean.com
echo 2. Create account and navigate to App Platform
echo 3. Connect your GitHub repository
echo 4. Create app.yaml configuration file (see DEPLOYMENT_GUIDE.md)
echo 5. Upload configuration and deploy
echo.
echo [SUCCESS] Deployment instructions displayed
goto end

:manual
echo [INFO] Showing manual deployment instructions...
echo.
echo 📋 Manual Deployment Steps:
echo ============================
echo.
echo 1. Build frontend: cd frontend && npm run build
echo 2. Test backend: npm run test:backend
echo 3. Push to GitHub: git push origin main
echo 4. Deploy frontend to your chosen platform
echo 5. Deploy backend to your chosen platform
echo 6. Set up environment variables
echo 7. Configure custom domain (optional)
echo.
echo [SUCCESS] Manual deployment instructions displayed
goto end

:end
echo.
echo 🎉 Deployment preparation complete!
echo ==================================
echo.
echo 📁 Your built files are ready:
echo    - Frontend: frontend/dist/
echo    - Backend: backend/
echo.
echo 🔗 Next steps:
echo 1. Follow the deployment instructions above
echo 2. Set up your MongoDB Atlas database
echo 3. Configure environment variables
echo 4. Test your live site
echo 5. Set up custom domain (optional)
echo.
echo 📚 For detailed instructions, see: DEPLOYMENT_GUIDE.md
echo 📞 For support, contact: ASACODER
echo.
echo [SUCCESS] Good luck with your deployment! 🚀
pause
exit /b 0

:exit_script
echo [INFO] Exiting deployment script...
pause
exit /b 0
