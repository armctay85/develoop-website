const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logoDir = path.join(__dirname, '../public/logo');

async function convertSvgToPng(inputFile, outputFile, width, height) {
  const inputPath = path.join(logoDir, inputFile);
  const outputPath = path.join(logoDir, outputFile);
  
  try {
    const svgBuffer = fs.readFileSync(inputPath);
    await sharp(svgBuffer)
      .resize(width, height)
      .png()
      .toFile(outputPath);
    console.log(`✓ Created ${outputFile}`);
  } catch (error) {
    console.error(`✗ Failed to create ${outputFile}:`, error.message);
  }
}

async function main() {
  console.log('Converting logo SVGs to PNGs...\n');
  
  // Favicon sizes
  await convertSvgToPng('favicon-16x16.svg', 'favicon-16x16.png', 16, 16);
  await convertSvgToPng('favicon-32x32.svg', 'favicon-32x32.png', 32, 32);
  await convertSvgToPng('apple-touch-icon.svg', 'apple-touch-icon.png', 180, 180);
  
  // Additional logo sizes for different uses
  await convertSvgToPng('develoop-logo-light.svg', 'develoop-logo-500.png', 500, 100);
  await convertSvgToPng('develoop-logo-light.svg', 'develoop-logo-200.png', 200, 40);
  
  console.log('\nDone!');
}

main().catch(console.error);
