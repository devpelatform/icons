import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, basename } from 'path';
import { existsSync } from 'fs';

interface IconMetadata {
  name: string;
  category: string;
  filled?: boolean;
}

interface CategoryMapping {
  [iconName: string]: IconMetadata;
}

interface OrganizeStats {
  foldersCreated: number;
  filesProcessed: number;
  filesCleaned: number;
  categoriesFound: Set<string>;
  filesPerCategory: { [category: string]: number };
  errors: string[];
}

async function ensureDirectoryExists(dirPath: string): Promise<void> {
  if (!existsSync(dirPath)) {
    await mkdir(dirPath, { recursive: true });
  }
}

async function loadCategoryMapping(): Promise<CategoryMapping> {
  try {
    const categoryPath = 'out/icon-category.json';
    const content = await readFile(categoryPath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    throw new Error(
      `Failed to load category mapping: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

function getUniqueCategories(mapping: CategoryMapping): string[] {
  const categories = new Set<string>();

  Object.values(mapping).forEach((icon) => {
    if (icon.category && icon.category.trim() !== '') {
      categories.add(icon.category);
    }
  });

  return Array.from(categories).sort();
}

async function createCategoryFolders(
  categories: string[],
  stats: OrganizeStats,
): Promise<void> {
  const iconsDir = 'icons';

  console.log('📁 Stage 1: Creating folder structure...');

  // Create main icons directory
  await ensureDirectoryExists(iconsDir);
  console.log(`   Created main directory: ${iconsDir}/`);

  // Create Other folder for uncategorized icons
  const otherDir = join(iconsDir, 'Other');
  await ensureDirectoryExists(otherDir);
  console.log(`   Created category folder: Other/`);
  stats.foldersCreated++;

  // Create folders for each category
  for (const category of categories) {
    const categoryDir = join(iconsDir, category);
    await ensureDirectoryExists(categoryDir);
    console.log(`   Created category folder: ${category}/`);
    stats.foldersCreated++;
  }

  console.log(`✅ Created ${stats.foldersCreated} category folders`);
}

async function cleanSvgContent(content: string): Promise<string> {
  // Remove comment blocks that contain metadata only
  const commentRegex = /<!--\s*[\s\S]*?-->\s*/g;
  let cleanedContent = content.replace(commentRegex, '');

  // Remove leading whitespace
  cleanedContent = cleanedContent.replace(/^\s+/, '');

  // Optimize SVG: convert to single line format
  cleanedContent = cleanedContent
    .replace(/\s+/g, ' ') // Replace multiple whitespace with single space
    .replace(/>\s+</g, '><') // Remove spaces between tags
    .replace(/\s+>/g, '>') // Remove spaces before closing >
    .replace(/\s+\/>/g, '/>') // Remove spaces before self-closing />
    .trim(); // Remove leading/trailing whitespace

  return cleanedContent;
}

async function copyAndCleanSvgFile(
  sourcePath: string,
  targetPath: string,
  stats: OrganizeStats,
): Promise<void> {
  try {
    // Read original file
    const content = await readFile(sourcePath, 'utf-8');

    // Clean the content
    const cleanedContent = await cleanSvgContent(content);

    // Write cleaned content to target
    await writeFile(targetPath, cleanedContent, 'utf-8');

    stats.filesCleaned++;
  } catch (error) {
    const errorMsg = `Failed to copy and clean ${sourcePath}: ${error instanceof Error ? error.message : String(error)}`;
    stats.errors.push(errorMsg);
    throw new Error(errorMsg);
  }
}

async function organizeFiles(
  mapping: CategoryMapping,
  stats: OrganizeStats,
): Promise<void> {
  console.log('\n📂 Stage 2: Copying and organizing SVG files...');

  const sourceOutlineDir = 'sources/outline';
  const sourceFilledDir = 'sources/filled-suffix';
  const iconsDir = 'icons';

  // Initialize category counters
  stats.filesPerCategory = {};

  // Process outline files
  console.log('   Processing outline files...');
  const outlineFiles = await readdir(sourceOutlineDir);
  const svgOutlineFiles = outlineFiles.filter((file) => file.endsWith('.svg'));

  for (let i = 0; i < svgOutlineFiles.length; i++) {
    const file = svgOutlineFiles[i];
    const iconName = basename(file, '.svg');

    try {
      const iconData = mapping[iconName];
      const category =
        iconData?.category && iconData.category.trim() !== ''
          ? iconData.category
          : 'Other';

      const sourcePath = join(sourceOutlineDir, file);
      const targetDir = join(iconsDir, category);
      const targetPath = join(targetDir, file);

      await copyAndCleanSvgFile(sourcePath, targetPath, stats);

      // Update counters
      stats.filesPerCategory[category] =
        (stats.filesPerCategory[category] || 0) + 1;
      stats.filesProcessed++;

      // Log progress every 500 files
      if ((i + 1) % 500 === 0) {
        console.log(
          `   Progress: ${i + 1}/${svgOutlineFiles.length} outline files processed`,
        );
      }
    } catch (error) {
      console.error(`❌ Error processing outline file ${file}:`, error);
    }
  }

  // Process filled-suffix files
  console.log('   Processing filled-suffix files...');
  if (existsSync(sourceFilledDir)) {
    const filledFiles = await readdir(sourceFilledDir);
    const svgFilledFiles = filledFiles.filter((file) => file.endsWith('.svg'));

    for (let i = 0; i < svgFilledFiles.length; i++) {
      const file = svgFilledFiles[i];
      // Remove -filled suffix to get original icon name for mapping lookup
      const iconName = basename(file, '.svg').replace('-filled', '');

      try {
        const iconData = mapping[iconName];
        const category =
          iconData?.category && iconData.category.trim() !== ''
            ? iconData.category
            : 'Other';

        const sourcePath = join(sourceFilledDir, file);
        const targetDir = join(iconsDir, category);
        const targetPath = join(targetDir, file);

        await copyAndCleanSvgFile(sourcePath, targetPath, stats);

        // Update counters
        stats.filesPerCategory[category] =
          (stats.filesPerCategory[category] || 0) + 1;
        stats.filesProcessed++;

        // Log progress every 100 files
        if ((i + 1) % 100 === 0) {
          console.log(
            `   Progress: ${i + 1}/${svgFilledFiles.length} filled files processed`,
          );
        }
      } catch (error) {
        console.error(`❌ Error processing filled file ${file}:`, error);
      }
    }
  }

  // Copy brand-pelatform.svg to Brand folder
  console.log('   Processing brand-pelatform.svg...');
  const brandPelatformPath = 'sources/brand-pelatform.svg';
  if (existsSync(brandPelatformPath)) {
    try {
      const brandTargetDir = join(iconsDir, 'Brand');
      const brandTargetPath = join(brandTargetDir, 'brand-pelatform.svg');

      await copyAndCleanSvgFile(brandPelatformPath, brandTargetPath, stats);

      // Update counters
      stats.filesPerCategory['Brand'] =
        (stats.filesPerCategory['Brand'] || 0) + 1;
      stats.filesProcessed++;

      console.log('   ✅ brand-pelatform.svg copied to Brand folder');
    } catch (error) {
      console.error(`❌ Error processing brand-pelatform.svg:`, error);
    }
  } else {
    console.log('   ⚠️ brand-pelatform.svg not found in source/');
  }

  console.log(`✅ Processed ${stats.filesProcessed} files total`);
}

async function organizeIcons(): Promise<void> {
  console.log('🚀 Starting organize process...');

  const stats: OrganizeStats = {
    foldersCreated: 0,
    filesProcessed: 0,
    filesCleaned: 0,
    categoriesFound: new Set(),
    filesPerCategory: {},
    errors: [],
  };

  try {
    // Load category mapping
    console.log('📖 Loading category mapping...');
    const mapping = await loadCategoryMapping();

    // Get unique categories
    const categories = getUniqueCategories(mapping);
    stats.categoriesFound = new Set(categories);

    console.log(`📊 Found ${categories.length} unique categories`);
    console.log(`📊 Total icons in mapping: ${Object.keys(mapping).length}`);

    // Create folder structure
    await createCategoryFolders(categories, stats);

    // Organize files
    await organizeFiles(mapping, stats);

    // Final results
    console.log('\n📋 Organization Results:');
    console.log(`   Folders created: ${stats.foldersCreated}`);
    console.log(`   Files processed: ${stats.filesProcessed}`);
    console.log(`   Files cleaned: ${stats.filesCleaned}`);
    console.log(`   Categories found: ${stats.categoriesFound.size}`);
    console.log(`   Errors: ${stats.errors.length}`);

    // Show files per category
    console.log('\n📁 Files per category:');
    const sortedCategories = Object.keys(stats.filesPerCategory).sort();
    sortedCategories.forEach((category) => {
      console.log(`   ${category}: ${stats.filesPerCategory[category]} files`);
    });

    if (stats.errors.length > 0) {
      console.log('\n❌ Errors encountered:');
      stats.errors.slice(0, 5).forEach((error) => console.log(`   - ${error}`));
      if (stats.errors.length > 5) {
        console.log(`   ... and ${stats.errors.length - 5} more errors`);
      }
    }

    console.log('\n✅ Organization completed successfully!');
    console.log(`📂 Icons organized in: icons/ directory`);
  } catch (error) {
    console.error('❌ Fatal error during organize process:', error);
    process.exit(1);
  }
}

// Run the script
organizeIcons().catch((error) => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
