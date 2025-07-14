# TraderLibrary5 - Manual Setup Instructions

## 🚀 Phase 1: Project Setup & Basic Structure

### Step 1: Create Project Structure

**Instructions:**
1. Navigate to your `websites/traderlibrary5` folder
2. Create the following folder structure manually:

```
traderlibrary5/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       ├── hooks/
│       ├── utils/
│       ├── styles/
│       └── assets/
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── config/
├── README.md
└── SETUP_INSTRUCTIONS.md
```

### Step 2: Initialize Client (React + Vite)

**Instructions:**
1. Open your terminal/command prompt
2. Navigate to the `client` folder: `cd client`
3. Run these commands:

```bash
# Initialize a new Vite project with React
npm create vite@latest . -- --template react

# Install dependencies
npm install

# Install additional packages we'll need
npm install react-router-dom axios
```

**What each command does:**
- `npm create vite@latest . -- --template react`: Creates a new Vite project with React template in the current directory
- `npm install`: Installs the basic dependencies
- `npm install react-router-dom axios`: Installs routing and HTTP client libraries

### Step 3: Initialize Server (Node.js + Express)

**Instructions:**
1. Navigate to the `server` folder: `cd ../server`
2. Run these commands:

```bash
# Initialize package.json
npm init -y

# Install dependencies
npm install express mongoose cors dotenv bcryptjs jsonwebtoken express-validator multer express-rate-limit

# Install development dependencies
npm install --save-dev nodemon
```

**What each package does:**
- `express`: Web framework for Node.js
- `mongoose`: MongoDB object modeling tool
- `cors`: Cross-Origin Resource Sharing middleware
- `dotenv`: Environment variables loader
- `bcryptjs`: Password hashing library
- `jsonwebtoken`: JWT token handling
- `express-validator`: Input validation
- `multer`: File upload handling
- `express-rate-limit`: Rate limiting for API protection
- `nodemon`: Development tool that automatically restarts server

### Step 4: Create Environment File

**Instructions:**
1. In the `server` folder, create a file named `.env`
2. Copy the contents from `env.example` to `.env`
3. Update the values with your actual configuration:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/traderlibrary5

# Authentication Configuration
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random
JWT_EXPIRE=86400

# Password Security
BCRYPT_ROUNDS=12

# CORS Configuration
CORS_ORIGIN=http://localhost:5173

# File Upload Configuration
MAX_FILE_SIZE=10485760
UPLOAD_DIR=uploads

# Rate Limiting
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW=900000
```

**Important Notes:**
- Generate a strong JWT_SECRET using: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`
- For MongoDB, you can use MongoDB Atlas (cloud) or install MongoDB locally
- The CORS_ORIGIN should match your React app URL

### Step 5: Install MongoDB (if using local)

**Option A: MongoDB Atlas (Cloud - Recommended for beginners)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Replace `MONGODB_URI` in your `.env` file

**Option B: Local MongoDB Installation**
1. Download MongoDB Community Server from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Install following the installation guide
3. Start MongoDB service
4. Your local connection string will be: `mongodb://localhost:27017/traderlibrary5`

### Step 6: Test the Setup

**Test Backend:**
1. Navigate to the `server` folder
2. Run: `npm run dev`
3. You should see:
   ```
   🚀 TraderLibrary5 Server Started!
   📍 Server running on port 5000
   🌍 Environment: development
   🔗 Health check: http://localhost:5000/api/health
   📚 Ready to serve forex trading knowledge!
   ```
4. Open your browser and go to: `http://localhost:5000/api/health`
5. You should see a JSON response confirming the server is running

**Test Frontend:**
1. Open a new terminal
2. Navigate to the `client` folder
3. Run: `npm run dev`
4. You should see the Vite development server starting
5. Open your browser and go to: `http://localhost:5173`
6. You should see the default Vite + React page

### Step 7: Create Uploads Directory

**Instructions:**
1. In the `server` folder, create a directory named `uploads`
2. This will be used for storing uploaded files (profile pictures, etc.)

```bash
mkdir uploads
```

## 📁 Files Created So Far

The following files have been created for you:

### Server Files:
- `server/package.json` - Dependencies and scripts
- `server/env.example` - Environment variables template
- `server/server.js` - Main server file with detailed comments
- `server/config/database.js` - Database configuration
- `server/models/User.js` - User model with comprehensive schema
- `server/middleware/auth.js` - Authentication middleware

### Documentation:
- `README.md` - Project overview and documentation
- `SETUP_INSTRUCTIONS.md` - This file

## 🔧 Next Steps

After completing this setup, you'll be ready for:

### Phase 2: Core Features
1. User authentication (signup/signin)
2. Basic layout and navigation
3. Homepage with featured content
4. User dashboard

### Phase 3: Content Management
1. Blog system
2. VIP blog (premium content)
3. Ebooks and resources section
4. ASATConcept strategy section

## 🐛 Troubleshooting

**Common Issues:**

1. **Port already in use:**
   - Change the PORT in `.env` file
   - Or kill the process using the port

2. **MongoDB connection failed:**
   - Check if MongoDB is running
   - Verify your connection string
   - Check network connectivity (for Atlas)

3. **Module not found errors:**
   - Run `npm install` in the respective folder
   - Check if all dependencies are installed

4. **CORS errors:**
   - Verify CORS_ORIGIN in `.env` matches your frontend URL
   - Check if the frontend is running on the correct port

## ✅ Verification Checklist

- [ ] Project structure created
- [ ] Client initialized with Vite + React
- [ ] Server initialized with Express
- [ ] Dependencies installed
- [ ] Environment file created and configured
- [ ] MongoDB connection established
- [ ] Backend server running on port 5000
- [ ] Frontend server running on port 5173
- [ ] Health check endpoint working
- [ ] Uploads directory created

Once you've completed all these steps, you'll have a solid foundation for building TraderLibrary5! 🎉

## 🚀 Ready for Phase 2?

When you're ready to continue, let me know and I'll guide you through creating the authentication system and basic user interface! 