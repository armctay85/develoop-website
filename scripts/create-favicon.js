const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

async function createFavicon() {
  const logoDir = path.join(__dirname, '../public/logo');
  
  try {
    const files = [
      fs.readFileSync(path.join(logoDir, 'favicon-16x16.png')),
      fs.readFileSync(path.join(logoDir, 'favicon-32x32.png'))
    ];
    
    const buf = await toIco(files);
    fs.writeFileSync(path.join(logoDir, 'favicon.ico'), buf);
    console.log('✓ Created favicon.ico');
  } catch (error) {
    console.error('✗ Failed to create favicon.ico:', error.message);
    process.exit(1);
  }
}

createFavicon();
