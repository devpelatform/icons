import { readdir, writeFile, mkdir, stat } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

interface CategoryStats {
  total: number;
  filled: number;
  outline: number;
  filledIcons: string[];
  outlineIcons: string[];
}

interface IconStatsResult {
  summary: {
    totalIcons: number;
    totalFilled: number;
    totalOutline: number;
    totalCategories: number;
  };
  categories: {
    [categoryName: string]: CategoryStats;
  };
}

interface ProcessStats {
  totalCategories: number;
  totalIcons: number;
  totalFilled: number;
  totalOutline: number;
  errors: string[];
}

async function ensureDirectoryExists(dirPath: string): Promise<void> {
  if (!existsSync(dirPath)) {
    await mkdir(dirPath, { recursive: true });
  }
}

async function getCategoryFiles(
  categoryPath: string,
): Promise<{ filled: string[]; outline: string[] }> {
  try {
    const files = await readdir(categoryPath);
    const svgFiles = files.filter((file) => file.endsWith('.svg'));

    const filled: string[] = [];
    const outline: string[] = [];

    svgFiles.forEach((file) => {
      if (file.includes('-filled.svg')) {
        filled.push(file);
      } else {
        outline.push(file);
      }
    });

    return { filled: filled.sort(), outline: outline.sort() };
  } catch (error) {
    throw new Error(
      `Failed to read category directory ${categoryPath}: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

async function analyzeIconsFolder(): Promise<void> {
  const iconsDir = 'icons';
  const outputDir = 'out';
  const outputFile = 'icon-stats.json';

  console.log('🚀 Starting icon statistics analysis...');
  console.log(`📂 Analyzing icons directory: ${iconsDir}`);

  if (!existsSync(iconsDir)) {
    throw new Error(`Icons directory not found: ${iconsDir}`);
  }

  // Ensure output directory exists
  await ensureDirectoryExists(outputDir);

  const stats: ProcessStats = {
    totalCategories: 0,
    totalIcons: 0,
    totalFilled: 0,
    totalOutline: 0,
    errors: [],
  };

  const result: IconStatsResult = {
    summary: {
      totalIcons: 0,
      totalFilled: 0,
      totalOutline: 0,
      totalCategories: 0,
    },
    categories: {},
  };

  try {
    // Get all category directories
    const categories = await readdir(iconsDir);
    const categoryDirs: string[] = [];

    for (const item of categories) {
      const categoryPath = join(iconsDir, item);
      if (existsSync(categoryPath)) {
        const stats = await stat(categoryPath);
        if (stats.isDirectory()) {
          categoryDirs.push(item);
        }
      }
    }

    stats.totalCategories = categoryDirs.length;
    console.log(`📊 Found ${stats.totalCategories} categories`);

    // Process each category
    for (let i = 0; i < categoryDirs.length; i++) {
      const category = categoryDirs[i];

      try {
        const categoryPath = join(iconsDir, category);
        const { filled, outline } = await getCategoryFiles(categoryPath);

        const categoryStats: CategoryStats = {
          total: filled.length + outline.length,
          filled: filled.length,
          outline: outline.length,
          filledIcons: filled,
          outlineIcons: outline,
        };

        result.categories[category] = categoryStats;

        // Update totals
        stats.totalIcons += categoryStats.total;
        stats.totalFilled += categoryStats.filled;
        stats.totalOutline += categoryStats.outline;

        // Log progress every 10 categories
        if ((i + 1) % 10 === 0) {
          console.log(
            `⏳ Progress: ${i + 1}/${stats.totalCategories} categories processed`,
          );
        }
      } catch (error) {
        const errorMsg = `Failed to process category ${category}: ${error instanceof Error ? error.message : String(error)}`;
        stats.errors.push(errorMsg);
        console.error(`❌ ${errorMsg}`);
      }
    }

    // Update summary
    result.summary = {
      totalIcons: stats.totalIcons,
      totalFilled: stats.totalFilled,
      totalOutline: stats.totalOutline,
      totalCategories: stats.totalCategories,
    };

    // Write results to JSON file
    const outputPath = join(outputDir, outputFile);
    await writeFile(outputPath, JSON.stringify(result, null, 2), 'utf-8');

    // Final results
    console.log('\n📋 Analysis Results:');
    console.log(`   Total categories: ${stats.totalCategories}`);
    console.log(`   Total icons: ${stats.totalIcons}`);
    console.log(`   Total filled icons: ${stats.totalFilled}`);
    console.log(`   Total outline icons: ${stats.totalOutline}`);
    console.log(`   Errors: ${stats.errors.length}`);

    if (stats.errors.length > 0) {
      console.log('\n❌ Errors encountered:');
      stats.errors.slice(0, 5).forEach((error) => console.log(`   - ${error}`));
      if (stats.errors.length > 5) {
        console.log(`   ... and ${stats.errors.length - 5} more errors`);
      }
    }

    console.log(`\n✅ Statistics saved to: ${outputPath}`);

    // Show some category examples
    const categoryNames = Object.keys(result.categories).slice(0, 3);
    if (categoryNames.length > 0) {
      console.log('\n📝 Category examples:');
      categoryNames.forEach((name) => {
        const cat = result.categories[name];
        console.log(
          `   ${name}: ${cat.total} icons (${cat.filled} filled, ${cat.outline} outline)`,
        );
      });
      if (Object.keys(result.categories).length > 3) {
        console.log(
          `   ... and ${Object.keys(result.categories).length - 3} more categories`,
        );
      }
    }
  } catch (error) {
    console.error('❌ Fatal error during icon statistics analysis:', error);
    process.exit(1);
  }
}

// Run the script
analyzeIconsFolder().catch((error) => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
