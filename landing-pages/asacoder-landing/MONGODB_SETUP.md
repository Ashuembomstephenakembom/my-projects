# 🗄️ MongoDB Setup Guide for ASACODER Landing Page

## 📍 Where to Put Your MongoDB Connection String

### 1. Create Environment File
Create a `.env` file in the `backend` directory:

```bash
# Navigate to backend directory
cd landing-pages/asacoder-landing/backend

# Create .env file
touch .env
```

### 2. Add Your MongoDB Connection String
Add this to your `backend/.env` file:

```env
# Backend Configuration
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000

# MongoDB Configuration
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/asacoder?retryWrites=true&w=majority

# Optional: MongoDB Database Name (if not in URI)
MONGODB_DB_NAME=asacoder
```

## 🔗 MongoDB Connection String Examples

### MongoDB Atlas (Cloud)
```env
MONGODB_URI=mongodb+srv://username:password@cluster0.abc123.mongodb.net/asacoder?retryWrites=true&w=majority
```

### Local MongoDB
```env
MONGODB_URI=mongodb://localhost:27017/asacoder
```

### MongoDB Atlas with Authentication Database
```env
MONGODB_URI=mongodb+srv://username:password@cluster0.abc123.mongodb.net/asacoder?authSource=admin&retryWrites=true&w=majority
```

## 🚀 How to Get Your MongoDB Connection String

### Option 1: MongoDB Atlas (Recommended)
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a free account or sign in
3. Create a new cluster (free tier available)
4. Click "Connect" on your cluster
5. Choose "Connect your application"
6. Copy the connection string
7. Replace `<username>`, `<password>`, and `<dbname>` with your values

### Option 2: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Use: `mongodb://localhost:27017/asacoder`

## 📦 Install Dependencies

After adding your MongoDB connection string, install the new dependencies:

```bash
# From project root
npm run setup

# Or from backend directory
cd backend
npm install
```

## ✅ Test Your MongoDB Connection

### 1. Start the Backend
```bash
npm run dev
```

### 2. Check Console Output
You should see:
```
🚀 Server running on port 5000
📊 MongoDB: Configured
✅ MongoDB Connected: your-cluster.mongodb.net
```

### 3. Test the API
```bash
npm run test:backend
```

## 🗂️ Database Structure

Your MongoDB will automatically create these collections:

### `contacts` Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  message: String,
  status: String, // 'new', 'read', 'replied', 'archived'
  ipAddress: String,
  userAgent: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🔧 API Endpoints

### Contact Form Submission
```http
POST http://localhost:5000/api/contact/submit
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project."
}
```

### Get All Contacts (Admin)
```http
GET http://localhost:5000/api/contact/all
```

### Update Contact Status
```http
PATCH http://localhost:5000/api/contact/:id/status
Content-Type: application/json

{
  "status": "read"
}
```

## 🛡️ Security Best Practices

### 1. Environment Variables
- Never commit your `.env` file to git
- Add `.env` to your `.gitignore` file

### 2. MongoDB Atlas Security
- Use strong passwords
- Enable IP whitelist (add your IP address)
- Use MongoDB Atlas built-in security features

### 3. Connection String Security
```env
# ✅ Good - Use environment variables
MONGODB_URI=mongodb+srv://${DB_USER}:${DB_PASS}@cluster.mongodb.net/asacoder

# ❌ Bad - Don't hardcode credentials
MONGODB_URI=mongodb+srv://myuser:mypassword123@cluster.mongodb.net/asacoder
```

## 🐛 Troubleshooting

### Connection Refused
```bash
# Check if MongoDB is running
mongosh

# Check connection string format
echo $MONGODB_URI
```

### Authentication Failed
- Verify username and password
- Check if user has proper permissions
- Ensure IP is whitelisted (MongoDB Atlas)

### Network Issues
- Check firewall settings
- Verify internet connection
- Try different network

## 📊 Monitoring Your Database

### MongoDB Atlas Dashboard
- Monitor database performance
- View connection statistics
- Check storage usage

### Application Logs
```bash
# Check backend logs
cd backend
npm run dev

# Look for MongoDB connection messages
```

## 🚀 Production Deployment

### Environment Variables for Production
```env
NODE_ENV=production
MONGODB_URI=your-production-mongodb-uri
CORS_ORIGIN=https://yourdomain.com
```

### Database Backup
- Enable MongoDB Atlas automated backups
- Set up regular backup schedules
- Test restore procedures

## 📝 Example .env File

```env
# Backend Configuration
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000

# MongoDB Configuration
MONGODB_URI=mongodb+srv://asacoder:your-secure-password@cluster0.abc123.mongodb.net/asacoder?retryWrites=true&w=majority

# Optional: Email Configuration (for future use)
# EMAIL_SERVICE=gmail
# EMAIL_USER=contact@asacoder.com
# EMAIL_PASS=your-app-password

# Security
JWT_SECRET=your-super-secret-jwt-key
```

## 🎯 Next Steps

1. **Add your MongoDB connection string** to `backend/.env`
2. **Install dependencies**: `npm run setup`
3. **Test connection**: `npm run test:backend`
4. **Start development**: `npm run dev`
5. **Submit a test contact form** to verify data is saved

Your ASACODER landing page will now store all contact form submissions in MongoDB! 🎉

