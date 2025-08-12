// Helper script to start ASACODER landing page with ngrok support
const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting ASACODER Landing Page for ngrok...');
console.log('📱 Your ngrok URL: https://1fd2e51e55f7.ngrok-free.app');
console.log('');

// Start backend server
console.log('🔧 Starting backend server...');
const backend = spawn('npm', ['run', 'dev'], {
  cwd: path.join(__dirname, 'backend'),
  stdio: 'inherit',
  shell: true
});

// Wait a moment for backend to start
setTimeout(() => {
  console.log('🎨 Starting frontend server for ngrok...');
  const frontend = spawn('npm', ['run', 'dev:ngrok'], {
    cwd: path.join(__dirname, 'frontend'),
    stdio: 'inherit',
    shell: true
  });

  frontend.on('close', (code) => {
    console.log(`Frontend server exited with code ${code}`);
    backend.kill();
  });
}, 3000);

backend.on('close', (code) => {
  console.log(`Backend server exited with code ${code}`);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down servers...');
  backend.kill();
  process.exit(0);
});

console.log('✅ Both servers are starting...');
console.log('🌐 Access your site at: https://1fd2e51e55f7.ngrok-free.app');
console.log('📧 Contact form will work with ngrok URL');
console.log('');
