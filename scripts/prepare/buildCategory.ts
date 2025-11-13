import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync } from 'fs';

interface IconMetadata {
  name: string;
  category: string;
  filled?: boolean;
}

interface CategoryResult {
  [iconName: string]: IconMetadata;
}

interface ProcessStats {
  totalOutlineFiles: number;
  totalFilledFiles: number;
  iconsWithCategory: number;
  iconsWithFilled: number;
  errors: string[];
}

async function ensureDirectoryExists(dirPath: string): Promise<void> {
  if (!existsSync(dirPath)) {
    await mkdir(dirPath, { recursive: true });
  }
}

async function extractCategoryFromSVG(filePath: string): Promise<string> {
  try {
    const content = await readFile(filePath, 'utf-8');

    // Look for comment block with metadata
    const commentRegex = /<!--\s*([\s\S]*?)\s*-->/;
    const match = content.match(commentRegex);

    if (match) {
      const commentContent = match[1];

      // Extract category value
      const categoryRegex = /category:\s*([^\n\r]+)/i;
      const categoryMatch = commentContent.match(categoryRegex);

      if (categoryMatch) {
        return categoryMatch[1].trim().replace(/['"]/g, '');
      }
    }

    return '';
  } catch (error) {
    throw new Error(
      `Failed to read file ${filePath}: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

async function getIconFiles(dirPath: string): Promise<string[]> {
  try {
    if (!existsSync(dirPath)) {
      return [];
    }

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

async function buildCategoryMapping(): Promise<void> {
  const outlineDir = 'sources/outline';
  const filledSuffixDir = 'sources/filled-suffix';
  const outputDir = 'out';
  const outputFile = 'icon-category.json';

  console.log('🚀 Starting buildCategory process...');
  console.log(`📂 Scanning outline icons: ${outlineDir}`);
  console.log(`📂 Scanning filled icons: ${filledSuffixDir}`);

  // Ensure output directory exists
  await ensureDirectoryExists(outputDir);

  const stats: ProcessStats = {
    totalOutlineFiles: 0,
    totalFilledFiles: 0,
    iconsWithCategory: 0,
    iconsWithFilled: 0,
    errors: [],
  };

  const result: CategoryResult = {};

  try {
    // Get all icon files
    const outlineFiles = await getIconFiles(outlineDir);
    const filledFiles = await getIconFiles(filledSuffixDir);

    stats.totalOutlineFiles = outlineFiles.length;
    stats.totalFilledFiles = filledFiles.length;

    console.log(`📊 Found ${stats.totalOutlineFiles} outline icons`);
    console.log(`📊 Found ${stats.totalFilledFiles} filled-suffix icons`);

    // Create a set of filled icon names for quick lookup
    const filledIconNames = new Set(
      filledFiles.map((file) => file.replace('-filled', '')),
    );

    // Process outline icons
    console.log('⏳ Processing outline icons...');
    for (let i = 0; i < outlineFiles.length; i++) {
      const iconName = outlineFiles[i];

      try {
        const filePath = join(outlineDir, `${iconName}.svg`);
        const category = await extractCategoryFromSVG(filePath);

        const iconData: IconMetadata = {
          name: iconName,
          category: category,
        };

        // Check if this icon has a filled version
        if (filledIconNames.has(iconName)) {
          iconData.filled = true;
          stats.iconsWithFilled++;
        }

        if (category) {
          stats.iconsWithCategory++;
        }

        result[iconName] = iconData;

        // Log progress every 500 files
        if ((i + 1) % 500 === 0) {
          console.log(
            `⏳ Progress: ${i + 1}/${stats.totalOutlineFiles} outline icons processed`,
          );
        }
      } catch (error) {
        const errorMsg = `Failed to process ${iconName}: ${error instanceof Error ? error.message : String(error)}`;
        stats.errors.push(errorMsg);
        console.error(`❌ ${errorMsg}`);
      }
    }

    // Write results to JSON file
    const outputPath = join(outputDir, outputFile);
    await writeFile(outputPath, JSON.stringify(result, null, 2), 'utf-8');

    // Final results
    console.log('\n📋 Build Results:');
    console.log(`   Total outline icons: ${stats.totalOutlineFiles}`);
    console.log(`   Total filled-suffix icons: ${stats.totalFilledFiles}`);
    console.log(`   Icons with category: ${stats.iconsWithCategory}`);
    console.log(`   Icons with filled version: ${stats.iconsWithFilled}`);
    console.log(`   Errors: ${stats.errors.length}`);

    if (stats.errors.length > 0) {
      console.log('\n❌ Errors encountered:');
      stats.errors.slice(0, 5).forEach((error) => console.log(`   - ${error}`));
      if (stats.errors.length > 5) {
        console.log(`   ... and ${stats.errors.length - 5} more errors`);
      }
    }

    console.log(`\n✅ Category mapping saved to: ${outputPath}`);

    // Show some examples
    const exampleIcons = Object.entries(result).slice(0, 3);
    if (exampleIcons.length > 0) {
      console.log('\n📝 Example entries:');
      exampleIcons.forEach(([name, data]) => {
        const filledText = data.filled ? ' (has filled version)' : '';
        const categoryText = data.category
          ? `category: "${data.category}"`
          : 'no category';
        console.log(`   ${name}: ${categoryText}${filledText}`);
      });
    }
  } catch (error) {
    console.error('❌ Fatal error during buildCategory process:', error);
    process.exit(1);
  }
}

// Run the script
buildCategoryMapping().catch((error) => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
