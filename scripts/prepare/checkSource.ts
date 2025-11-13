import { readdir, writeFile, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync } from 'fs';

interface IconStats {
  totalIcons: number;
  filledIcons: number;
  outlineIcons: number;
  filledFiles: string[];
  outlineFiles: string[];
}

async function ensureDirectoryExists(dirPath: string): Promise<void> {
  if (!existsSync(dirPath)) {
    await mkdir(dirPath, { recursive: true });
  }
}

async function getIconFiles(dirPath: string): Promise<string[]> {
  try {
    const files = await readdir(dirPath);
    return files
      .filter((file) => extname(file).toLowerCase() === '.svg')
      .map((file) => basename(file, '.svg'))
      .sort();
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
    return [];
  }
}

async function checkSourceIcons(): Promise<void> {
  const sourceDir = 'sources';
  const filledDir = join(sourceDir, 'filled');
  const outlineDir = join(sourceDir, 'outline');
  const outputDir = 'out';

  console.log('🔍 Checking source icons...');

  // Ensure output directory exists
  await ensureDirectoryExists(outputDir);

  // Get icon files from both directories
  const filledFiles = await getIconFiles(filledDir);
  const outlineFiles = await getIconFiles(outlineDir);

  // Calculate statistics
  const stats: IconStats = {
    totalIcons: filledFiles.length + outlineFiles.length,
    filledIcons: filledFiles.length,
    outlineIcons: outlineFiles.length,
    filledFiles,
    outlineFiles,
  };

  // Create output data
  const outputData = {
    generatedAt: new Date().toISOString(),
    statistics: {
      totalIcons: stats.totalIcons,
      filledIcons: stats.filledIcons,
      outlineIcons: stats.outlineIcons,
    },
    icons: {
      filled: stats.filledFiles,
      outline: stats.outlineFiles,
    },
  };

  // Write to JSON file
  const outputPath = join(outputDir, 'icon-sources.json');
  await writeFile(outputPath, JSON.stringify(outputData, null, 2), 'utf-8');

  // Log results
  console.log('📊 Icon Statistics:');
  console.log(`   Total Icons: ${stats.totalIcons}`);
  console.log(`   Filled Icons: ${stats.filledIcons}`);
  console.log(`   Outline Icons: ${stats.outlineIcons}`);
  console.log(`\n✅ Results saved to: ${outputPath}`);

  // Log some examples
  if (stats.filledFiles.length > 0) {
    console.log(`\n📁 Filled Icons (first 5):`);
    stats.filledFiles
      .slice(0, 5)
      .forEach((file) => console.log(`   - ${file}`));
    if (stats.filledFiles.length > 5) {
      console.log(`   ... and ${stats.filledFiles.length - 5} more`);
    }
  }

  if (stats.outlineFiles.length > 0) {
    console.log(`\n📁 Outline Icons (first 5):`);
    stats.outlineFiles
      .slice(0, 5)
      .forEach((file) => console.log(`   - ${file}`));
    if (stats.outlineFiles.length > 5) {
      console.log(`   ... and ${stats.outlineFiles.length - 5} more`);
    }
  }
}

// Run the script
checkSourceIcons().catch((error) => {
  console.error('❌ Error checking source icons:', error);
  process.exit(1);
});
