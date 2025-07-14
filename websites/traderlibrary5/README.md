# TraderLibrary5 - Forex Trading Educational Platform

## Project Overview
TraderLibrary5 is a comprehensive educational platform designed for forex traders at all levels - from beginners to seasoned professionals. The platform provides easy access to quality trading resources, empowering global traders with knowledge to succeed in the forex market.

## Features
- **Educational Content**: Ebooks, tutorials, and trading strategies
- **ASATConcept Strategy**: Custom trading strategy developed by the platform
- **Premium Content**: VIP blog and exclusive trading resources
- **Community**: User insights and community features
- **Referral System**: Broker and prop firm referral links
- **Monetization**: Premium content access and Google AdSense integration

## Tech Stack
- **Frontend**: React + Vite + Plain CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Authentication**: JWT tokens

## Project Structure
```
traderlibrary5/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   └── src/
│       ├── components/    # Reusable UI components
│       ├── pages/         # Main page components
│       ├── context/       # React context for state management
│       ├── hooks/         # Custom React hooks
│       ├── utils/         # Helper functions
│       ├── styles/        # CSS files
│       └── assets/        # Images, icons, etc.
├── server/                # Node.js backend
│   ├── controllers/       # Route handlers
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── utils/           # Helper functions
│   └── config/          # Configuration files
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd traderlibrary5
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   cp .env.example .env
   # Edit .env with your MongoDB URI and JWT secret
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd client
   npm install
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## Development Phases

### Phase 1: Project Setup & Basic Structure ✅
- [x] Initialize project structure
- [x] Setup React frontend with Vite
- [x] Setup Node.js backend with Express
- [x] Configure MongoDB connection
- [x] Create basic routing

### Phase 2: Core Features
- [ ] User authentication (signup/signin)
- [ ] Basic layout and navigation
- [ ] Homepage with featured content
- [ ] User dashboard

### Phase 3: Content Management
- [ ] Blog system
- [ ] VIP blog (premium content)
- [ ] Ebooks and resources section
- [ ] ASATConcept strategy section

### Phase 4: Advanced Features
- [ ] Community insights
- [ ] Referral system
- [ ] Premium content access control
- [ ] Admin panel

### Phase 5: Monetization & Polish
- [ ] Payment integration
- [ ] Google AdSense setup
- [ ] SEO optimization
- [ ] Performance optimization

## Contributing
This is a personal project for educational purposes. Feel free to use this as a reference for your own projects.

## License
This project is for educational purposes only. 