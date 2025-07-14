// ===========================================
// Authentication Routes
// ===========================================
// This file defines all authentication-related API routes
// It includes validation middleware and connects routes to controllers

const express = require('express');
const { body } = require('express-validator');
const { protect } = require('../middleware/auth');
const {
    register,
    login,
    logout,
    getMe,
    updateProfile,
    changePassword,
    forgotPassword
} = require('../controllers/authController');

// Create Express router
const router = express.Router();

// ===========================================
// VALIDATION MIDDLEWARE
// ===========================================

// Validation rules for user registration
const registerValidation = [
    body('username')
        .trim()
        .isLength({ min: 3, max: 30 })
        .withMessage('Username must be between 3 and 30 characters')
        .matches(/^[a-zA-Z0-9_]+$/)
        .withMessage('Username can only contain letters, numbers, and underscores'),
    
    body('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Please provide a valid email address'),
    
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .withMessage('Password must contain at least one lowercase letter, one uppercase letter, and one number'),
    
    body('firstName')
        .trim()
        .isLength({ min: 1, max: 50 })
        .withMessage('First name must be between 1 and 50 characters'),
    
    body('lastName')
        .trim()
        .isLength({ min: 1, max: 50 })
        .withMessage('Last name must be between 1 and 50 characters'),
    
    body('experienceLevel')
        .optional()
        .isIn(['beginner', 'intermediate', 'advanced', 'professional'])
        .withMessage('Invalid experience level'),
    
    body('referralCode')
        .optional()
        .trim()
        .isLength({ min: 1 })
        .withMessage('Referral code cannot be empty')
];

// Validation rules for user login
const loginValidation = [
    body('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Please provide a valid email address'),
    
    body('password')
        .notEmpty()
        .withMessage('Password is required')
];

// Validation rules for profile update
const updateProfileValidation = [
    body('firstName')
        .optional()
        .trim()
        .isLength({ min: 1, max: 50 })
        .withMessage('First name must be between 1 and 50 characters'),
    
    body('lastName')
        .optional()
        .trim()
        .isLength({ min: 1, max: 50 })
        .withMessage('Last name must be between 1 and 50 characters'),
    
    body('experienceLevel')
        .optional()
        .isIn(['beginner', 'intermediate', 'advanced', 'professional'])
        .withMessage('Invalid experience level'),
    
    body('preferences.notifications.email')
        .optional()
        .isBoolean()
        .withMessage('Email notification preference must be a boolean'),
    
    body('preferences.notifications.push')
        .optional()
        .isBoolean()
        .withMessage('Push notification preference must be a boolean'),
    
    body('preferences.notifications.marketing')
        .optional()
        .isBoolean()
        .withMessage('Marketing notification preference must be a boolean'),
    
    body('preferences.timezone')
        .optional()
        .isString()
        .withMessage('Timezone must be a string'),
    
    body('preferences.language')
        .optional()
        .isIn(['en', 'es', 'fr', 'de', 'pt'])
        .withMessage('Invalid language preference')
];

// Validation rules for password change
const changePasswordValidation = [
    body('currentPassword')
        .notEmpty()
        .withMessage('Current password is required'),
    
    body('newPassword')
        .isLength({ min: 6 })
        .withMessage('New password must be at least 6 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .withMessage('New password must contain at least one lowercase letter, one uppercase letter, and one number')
];

// Validation rules for forgot password
const forgotPasswordValidation = [
    body('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Please provide a valid email address')
];

// ===========================================
// AUTHENTICATION ROUTES
// ===========================================

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 * @body    {username, email, password, firstName, lastName, experienceLevel?, referralCode?}
 */
router.post('/register', registerValidation, register);

/**
 * @route   POST /api/auth/login
 * @desc    Login user
 * @access  Public
 * @body    {email, password}
 */
router.post('/login', loginValidation, login);

/**
 * @route   POST /api/auth/logout
 * @desc    Logout user
 * @access  Private
 */
router.post('/logout', logout);

/**
 * @route   GET /api/auth/me
 * @desc    Get current user profile
 * @access  Private
 */
router.get('/me', protect, getMe);

/**
 * @route   PUT /api/auth/update-profile
 * @desc    Update user profile
 * @access  Private
 * @body    {firstName?, lastName?, experienceLevel?, preferences?}
 */
router.put('/update-profile', protect, updateProfileValidation, updateProfile);

/**
 * @route   PUT /api/auth/change-password
 * @desc    Change user password
 * @access  Private
 * @body    {currentPassword, newPassword}
 */
router.put('/change-password', protect, changePasswordValidation, changePassword);

/**
 * @route   POST /api/auth/forgot-password
 * @desc    Forgot password
 * @access  Public
 * @body    {email}
 */
router.post('/forgot-password', forgotPasswordValidation, forgotPassword);

// ===========================================
// EXPORT ROUTER
// ===========================================

module.exports = router; 