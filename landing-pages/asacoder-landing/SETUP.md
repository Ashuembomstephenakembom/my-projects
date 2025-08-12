# 🚀 ASACODER Landing Page - Quick Setup Guide

## ✅ Frontend & Backend Connection Setup

Your ASACODER landing page is now fully connected! Here's how to get everything running:

### 1. Install Dependencies
```bash
npm run setup
```

### 2. Start Both Servers
```bash
npm run dev
```

This will start:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

### 3. Test the Connection

#### Option A: Use the Test Script
```bash
npm run test:backend
```

#### Option B: Check the UI
- Look for the connection status indicator in the bottom-right corner
- Green checkmark = Connected ✅
- Red X = Disconnected ❌

#### Option C: Test the Contact Form
1. Go to http://localhost:3000
2. Scroll to the Contact section
3. Fill out and submit the form
4. Check the backend console for the message

### 4. What's Connected

✅ **Contact Form** - Sends data to backend API  
✅ **Form Validation** - Both frontend and backend validation  
✅ **Error Handling** - Proper error messages for users  
✅ **CORS Configuration** - Frontend can communicate with backend  
✅ **Real-time Status** - Connection indicator in development mode  

### 5. Backend Features

- **API Endpoint**: `POST /api/contact/submit`
- **Data Validation**: Name, email, and message validation
- **Response Format**: JSON with success/error status
- **Logging**: All form submissions logged to console
- **CORS**: Configured for localhost:3000

### 6. Frontend Features

- **Form Integration**: Axios for API calls
- **Loading States**: Spinner during form submission
- **Success/Error Messages**: User-friendly feedback
- **Connection Status**: Visual indicator of backend status
- **Timeout Handling**: 10-second timeout for API calls

### 7. Troubleshooting

#### Backend Won't Start
```bash
cd backend
npm install
npm run dev
```

#### Frontend Can't Connect
1. Make sure backend is running on port 5000
2. Check if port 5000 is available
3. Run `npm run test:backend` to verify

#### CORS Errors
- Backend is configured for http://localhost:3000
- If using different ports, update the CORS configuration

### 8. Next Steps

1. **Test the contact form** - Submit a test message
2. **Check the backend logs** - Verify data is received
3. **Customize the response** - Add email notifications
4. **Deploy to production** - Update API URLs for production

### 9. Development Workflow

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm run dev

# Terminal 3 - Test backend
npm run test:backend
```

🎉 **Your ASACODER landing page is now fully functional with a connected backend!**
