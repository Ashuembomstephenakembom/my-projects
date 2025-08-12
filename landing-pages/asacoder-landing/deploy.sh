#!/bin/bash

# 🚀 ASACODER Landing Page - Automated Deployment Script
# This script automates the deployment process for your landing page
# Run this script from the project root directory

echo "🚀 Starting ASACODER Landing Page Deployment..."
echo "================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Step 1: Check if we're in the right directory
print_status "Checking project structure..."
if [ ! -f "package.json" ] || [ ! -d "frontend" ] || [ ! -d "backend" ]; then
    print_error "Please run this script from the asacoder-landing project root directory"
    exit 1
fi
print_success "Project structure verified"

# Step 2: Install dependencies
print_status "Installing all dependencies..."
npm run setup
if [ $? -eq 0 ]; then
    print_success "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Step 3: Test backend connection
print_status "Testing backend connection..."
npm run test:backend
if [ $? -eq 0 ]; then
    print_success "Backend connection test passed"
else
    print_warning "Backend connection test failed - make sure backend is running"
fi

# Step 4: Build frontend for production
print_status "Building frontend for production..."
cd frontend
npm run build
if [ $? -eq 0 ]; then
    print_success "Frontend built successfully"
else
    print_error "Frontend build failed"
    exit 1
fi
cd ..

# Step 5: Check if git is initialized
print_status "Checking git status..."
if [ ! -d ".git" ]; then
    print_warning "Git repository not initialized. Initializing..."
    git init
    git add .
    git commit -m "Initial commit - ASACODER Landing Page"
    print_success "Git repository initialized"
else
    print_status "Git repository found"
fi

# Step 6: Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    print_status "Committing changes..."
    git add .
    git commit -m "Deploy: ASACODER Landing Page - $(date)"
    print_success "Changes committed"
else
    print_success "No uncommitted changes found"
fi

# Step 7: Deployment options
echo ""
echo "🎯 Choose your deployment option:"
echo "1. Vercel (Frontend) + Railway (Backend) - RECOMMENDED"
echo "2. Netlify (Frontend) + Heroku (Backend)"
echo "3. DigitalOcean App Platform (Full-stack)"
echo "4. Manual deployment instructions"
echo "5. Exit"
echo ""

read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        print_status "Deploying to Vercel + Railway..."
        echo ""
        echo "📋 Vercel + Railway Deployment Steps:"
        echo "====================================="
        echo ""
        echo "🌐 Frontend (Vercel):"
        echo "1. Go to https://vercel.com"
        echo "2. Sign up with GitHub"
        echo "3. Click 'New Project'"
        echo "4. Import your GitHub repository"
        echo "5. Set Root Directory to: landing-pages/asacoder-landing/frontend"
        echo "6. Set Build Command to: npm run build"
        echo "7. Set Output Directory to: dist"
        echo "8. Add environment variable: VITE_API_URL=https://your-backend-url.railway.app"
        echo "9. Click 'Deploy'"
        echo ""
        echo "⚙️ Backend (Railway):"
        echo "1. Go to https://railway.app"
        echo "2. Sign up with GitHub"
        echo "3. Click 'New Project'"
        echo "4. Choose 'Deploy from GitHub repo'"
        echo "5. Set Root Directory to: landing-pages/asacoder-landing/backend"
        echo "6. Add environment variables:"
        echo "   - NODE_ENV=production"
        echo "   - CORS_ORIGIN=https://your-frontend-url.vercel.app"
        echo "   - MONGODB_URI=your-mongodb-atlas-connection-string"
        echo "7. Deploy"
        echo ""
        print_success "Deployment instructions displayed"
        ;;
    2)
        print_status "Deploying to Netlify + Heroku..."
        echo ""
        echo "📋 Netlify + Heroku Deployment Steps:"
        echo "====================================="
        echo ""
        echo "🌐 Frontend (Netlify):"
        echo "1. Go to https://netlify.com"
        echo "2. Sign up and create account"
        echo "3. Drag and drop your frontend/dist folder"
        echo "4. Or connect GitHub repository for auto-deploy"
        echo "5. Add environment variable: VITE_API_URL=https://your-heroku-backend.herokuapp.com"
        echo ""
        echo "⚙️ Backend (Heroku):"
        echo "1. Install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli"
        echo "2. Run: heroku login"
        echo "3. Run: cd backend && heroku create your-asacoder-backend"
        echo "4. Set environment variables:"
        echo "   heroku config:set NODE_ENV=production"
        echo "   heroku config:set CORS_ORIGIN=https://your-netlify-site.netlify.app"
        echo "   heroku config:set MONGODB_URI=your-mongodb-atlas-connection-string"
        echo "5. Deploy: git push heroku main"
        echo ""
        print_success "Deployment instructions displayed"
        ;;
    3)
        print_status "Deploying to DigitalOcean App Platform..."
        echo ""
        echo "📋 DigitalOcean App Platform Deployment Steps:"
        echo "=============================================="
        echo ""
        echo "1. Go to https://digitalocean.com"
        echo "2. Create account and navigate to App Platform"
        echo "3. Connect your GitHub repository"
        echo "4. Create app.yaml configuration file (see DEPLOYMENT_GUIDE.md)"
        echo "5. Upload configuration and deploy"
        echo ""
        print_success "Deployment instructions displayed"
        ;;
    4)
        print_status "Showing manual deployment instructions..."
        echo ""
        echo "📋 Manual Deployment Steps:"
        echo "============================"
        echo ""
        echo "1. Build frontend: cd frontend && npm run build"
        echo "2. Test backend: npm run test:backend"
        echo "3. Push to GitHub: git push origin main"
        echo "4. Deploy frontend to your chosen platform"
        echo "5. Deploy backend to your chosen platform"
        echo "6. Set up environment variables"
        echo "7. Configure custom domain (optional)"
        echo ""
        print_success "Manual deployment instructions displayed"
        ;;
    5)
        print_status "Exiting deployment script..."
        exit 0
        ;;
    *)
        print_error "Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment preparation complete!"
echo "=================================="
echo ""
echo "📁 Your built files are ready:"
echo "   - Frontend: frontend/dist/"
echo "   - Backend: backend/"
echo ""
echo "🔗 Next steps:"
echo "1. Follow the deployment instructions above"
echo "2. Set up your MongoDB Atlas database"
echo "3. Configure environment variables"
echo "4. Test your live site"
echo "5. Set up custom domain (optional)"
echo ""
echo "📚 For detailed instructions, see: DEPLOYMENT_GUIDE.md"
echo "📞 For support, contact: ASACODER"
echo ""
print_success "Good luck with your deployment! 🚀"
