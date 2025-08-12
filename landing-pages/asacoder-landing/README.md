# ASACODER Landing Page

A personal brand landing page for ASACODER (Ashuembom Stephen Akembom) showcasing skills, services, and contact information.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Setup

1. **Clone and navigate to the project:**
   ```bash
   cd landing-pages/asacoder-landing
   ```

2. **Install all dependencies:**
   ```bash
   npm run setup
   ```

3. **Start both frontend and backend:**
   ```bash
   npm run dev
   ```

4. **Access your application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
asacoder-landing/
├── backend/                    # Node.js backend for contact form
│   ├── server.js              # Express server
│   ├── routes/                # API routes
│   ├── controllers/           # Request handlers
│   ├── models/                # Data models
│   └── package.json           # Backend dependencies
├── frontend/                  # React + Vite frontend
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── App.jsx           # Main app component
│   │   └── main.jsx          # Entry point
│   ├── public/               # Static assets
│   └── package.json          # Frontend dependencies
└── package.json              # Root package.json for running both
```

## 🛠️ Available Scripts

### Root Level (from project root)
- `npm run dev` - Start both frontend and backend in development mode
- `npm run setup` - Install all dependencies for frontend and backend
- `npm run test:backend` - Test backend connection
- `npm run build` - Build frontend for production

### Frontend (from frontend directory)
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend (from backend directory)
- `npm run dev` - Start backend with nodemon (auto-restart)
- `npm start` - Start backend in production mode
- `node test-connection.js` - Test backend endpoints

## 🔧 Backend API

### Endpoints

- `GET /` - Health check endpoint
- `POST /api/contact/submit` - Submit contact form

### Contact Form Data Structure
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "message": "string (required)"
}
```

### Response Format
```json
{
  "success": true,
  "message": "Thank you for your message! I will get back to you soon.",
  "data": {
    "name": "string",
    "email": "string",
    "timestamp": "date"
  }
}
```

## 🌐 Frontend Features

- **Responsive Design** - Works on all devices
- **Smooth Animations** - Framer Motion animations
- **Contact Form** - Integrated with backend API
- **Social Links** - Direct links to your profiles
- **Professional Branding** - ASACODER logo and styling

## 🔗 Social Media Links

- **WhatsApp**: https://wa.me/237653180273
- **Telegram**: https://t.me/ASACODER
- **LinkedIn**: https://www.linkedin.com/in/ashuembom-stephen-akembom-b84302260/
- **GitHub**: https://github.com/Ashuembomstephenakembom

## 🐛 Troubleshooting

### Backend Connection Issues
1. Make sure backend is running: `cd backend && npm run dev`
2. Check if port 5000 is available
3. Test connection: `npm run test:backend`

### Frontend Issues
1. Make sure all dependencies are installed: `npm run setup`
2. Check if port 3000 is available
3. Clear browser cache and restart dev server

### CORS Issues
- Backend is configured to accept requests from http://localhost:3000
- If using different ports, update CORS_ORIGIN in backend/.env

## 📝 Environment Variables

Create a `.env` file in the backend directory:
```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `frontend/dist` folder

### Backend (Heroku/Railway)
1. Deploy the `backend` folder
2. Set environment variables
3. Update frontend API URL to production backend URL

## 📞 Contact

For support or questions about this project, contact ASACODER:
- Email: contact@asacoder.com
- WhatsApp: +237 653 180 273
- LinkedIn: Ashuembom Stephen Akembom
