const fs = require("fs");
const path = require("path");

async function createFavicon() {
  const pngToIco = (await import("png-to-ico")).default;
  const logoDir = path.join(__dirname, "../public/logo");

  try {
    const buf = await pngToIco([
      path.join(logoDir, "favicon-16x16.png"),
      path.join(logoDir, "favicon-32x32.png"),
    ]);
    fs.writeFileSync(path.join(logoDir, "favicon.ico"), buf);
    console.log("Created favicon.ico");
  } catch (error) {
    console.error("Failed to create favicon.ico:", error.message);
    process.exit(1);
  }
}

createFavicon();
