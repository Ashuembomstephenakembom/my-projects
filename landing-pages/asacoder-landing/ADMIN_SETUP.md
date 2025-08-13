# 🛠️ ASACODER Admin Panel Setup Guide

## 📋 Overview

The ASACODER Admin Panel allows you to:
- View all contact form submissions
- Reply to messages via email
- Manage message status (new, read, replied)
- Search and filter messages
- Access from both desktop and mobile devices

## 🚀 Quick Start

### 1. **Access the Admin Panel**

**Option A: Direct URL**
```
http://localhost:3000/admin
```

**Option B: Hidden Link**
- Scroll to the bottom of your website
- Look for a small "Admin" link in the footer (very subtle)

### 2. **Login Credentials**
- **Password**: `asacoder2025`
- **Note**: Change this password in production!

## ⚙️ Email Configuration

### For Gmail Setup:

1. **Enable 2-Factor Authentication** on your Gmail account

2. **Generate App Password**:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"

3. **Update Environment Variables**:
   ```bash
   # In backend/.env file
   EMAIL_USER=stephen@asaofficial.org
   EMAIL_PASS=your-16-character-app-password
   ```

### For Other Email Providers:
Update the transporter configuration in `backend/routes/adminRoutes.js`:

```javascript
const transporter = nodemailer.createTransporter({
  service: 'outlook', // or 'yahoo', 'hotmail', etc.
  auth: {
    user: 'your-email@domain.com',
    pass: 'your-password'
  }
});
```

## 🔧 Backend Setup

### 1. **Install Dependencies**
```bash
cd backend
npm install nodemailer
```

### 2. **Environment Variables**
Copy `env.example` to `.env` and configure:
```bash
cp env.example .env
```

### 3. **Start Backend Server**
```bash
npm start
# or
npm run dev
```

## 📱 Mobile Access

The admin panel is fully responsive and works on:
- ✅ iPhone (Safari, Chrome)
- ✅ Android (Chrome, Firefox)
- ✅ iPad/Tablets
- ✅ All desktop browsers

### Mobile Features:
- Touch-friendly buttons
- Responsive design
- Optimized for small screens
- Easy navigation

## 🔐 Security Features

### Current Security:
- ✅ Password protection
- ✅ Session management
- ✅ CORS protection
- ✅ Input validation

### Recommended for Production:
1. **Change Default Password**:
   ```javascript
   // In AdminPanel.jsx and adminRoutes.js
   // Change 'asacoder2025' to a strong password
   ```

2. **Use Environment Variables**:
   ```javascript
   // In adminRoutes.js
   const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'asacoder2025';
   ```

3. **Enable HTTPS**:
   - Use SSL certificate
   - Force HTTPS redirects

4. **Rate Limiting**:
   ```javascript
   // Add to server.js
   const rateLimit = require('express-rate-limit');
   const loginLimiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 5 // limit each IP to 5 requests per windowMs
   });
   app.use('/api/admin', loginLimiter);
   ```

## 📊 Admin Panel Features

### Dashboard Statistics:
- Total messages
- New messages
- Read messages
- Replied messages

### Message Management:
- **View**: Read full message content
- **Reply**: Send email responses
- **Mark as Read**: Update status
- **Delete**: Remove messages
- **Search**: Find specific messages
- **Filter**: By status (new, read, replied)
- **Sort**: By date, name, or status

### Email Replies:
- Professional HTML templates
- Include original message
- ASACODER branding
- Contact information footer

## 🎨 Customization

### Change Admin Password:
1. **Frontend** (`AdminPanel.jsx`):
   ```javascript
   if (adminPassword === 'your-new-password') {
   ```

2. **Backend** (`adminRoutes.js`):
   ```javascript
   if (!adminPassword || adminPassword !== 'your-new-password') {
   ```

### Customize Email Template:
Edit the HTML template in `adminRoutes.js`:
```javascript
const mailOptions = {
  // ... other options
  html: `
    <div style="font-family: Arial, sans-serif;">
      <!-- Your custom email template -->
    </div>
  `
};
```

### Change Admin URL:
1. **Frontend** (`App.jsx`):
   ```javascript
   <Route path="/your-admin-url" element={<AdminPanel />} />
   ```

2. **Footer** (`Footer.jsx`):
   ```javascript
   <a href="/your-admin-url">Admin</a>
   ```

## 🚨 Troubleshooting

### Common Issues:

1. **Email Not Sending**:
   - Check email credentials
   - Verify 2FA is enabled
   - Check app password is correct
   - Test with different email provider

2. **Admin Panel Not Loading**:
   - Check backend server is running
   - Verify React Router is installed
   - Check browser console for errors

3. **Messages Not Loading**:
   - Check MongoDB connection
   - Verify database has data
   - Check network connectivity

4. **Mobile Issues**:
   - Clear browser cache
   - Try different browser
   - Check responsive design

### Debug Mode:
Enable console logging in `AdminPanel.jsx`:
```javascript
console.log('Backend URL:', backendUrl);
console.log('Messages:', messages);
console.log('Error:', error);
```

## 📞 Support

If you need help:
- **Email**: stephen@asaofficial.org
- **WhatsApp**: +237 653 180 273
- **Telegram**: @ASACODER

## 🔄 Updates

To update the admin panel:
1. Pull latest changes
2. Restart backend server
3. Clear browser cache
4. Test functionality

---

**Last Updated**: January 27, 2025
**Version**: 1.0.0
