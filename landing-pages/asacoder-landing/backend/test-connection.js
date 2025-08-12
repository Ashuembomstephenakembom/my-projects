// Test script to verify backend connection
const axios = require('axios');

const testBackend = async () => {
  try {
    console.log('Testing backend connection...');
    
    // Test the root endpoint
    const rootResponse = await axios.get('http://localhost:5000/');
    console.log('✅ Root endpoint:', rootResponse.data);
    
    // Test the contact endpoint
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message from the connection test script.'
    };
    
    const contactResponse = await axios.post('http://localhost:5000/api/contact/submit', testData);
    console.log('✅ Contact endpoint:', contactResponse.data);
    
    console.log('🎉 Backend is working correctly!');
    
  } catch (error) {
    console.error('❌ Backend test failed:', error.message);
    if (error.code === 'ECONNREFUSED') {
      console.log('💡 Make sure the backend server is running on port 5000');
    }
  }
};

testBackend();
