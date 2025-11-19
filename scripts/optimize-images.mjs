import fs from "fs";
import path from "path";
import sharp from "sharp";

const imagesDir = path.resolve("public", "images");

const supportedExtensions = [".png", ".jpg", ".jpeg"];

async function convertImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!supportedExtensions.includes(ext)) {
    return;
  }

  const baseName = path.basename(filePath, ext);
  const dir = path.dirname(filePath);
  const relative = path.relative(imagesDir, filePath);
  const outputPath = path.join(dir, `${baseName}.webp`);

  try {
    await sharp(filePath)
      .webp({ quality: 85, nearLossless: true })
      .toFile(outputPath);
    fs.unlinkSync(filePath);
    console.log(`Optimized ${relative || filePath} → ${baseName}.webp`);
  } catch (error) {
    console.error(`Failed to optimize ${relative || filePath}`, error);
  }
}

function collectImageFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return collectImageFiles(fullPath);
    }
    return entry.isFile() ? [fullPath] : [];
  });
}

async function run() {
  if (!fs.existsSync(imagesDir)) {
    console.error("images directory not found");
    process.exit(1);
  }

  const files = collectImageFiles(imagesDir);
  await Promise.all(files.map(convertImage));
}

run();

