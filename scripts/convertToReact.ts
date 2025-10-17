import { readdir, readFile, writeFile, mkdir, rm } from 'fs/promises';
import { join, basename } from 'path';
import { existsSync } from 'fs';
import { transform } from '@svgr/core';

interface ConversionStats {
  totalCategories: number;
  totalIcons: number;
  convertedIcons: number;
  errors: string[];
  iconNames: string[];
}

interface SvgrConfig {
  icon: boolean;
  typescript: boolean;
  replaceAttrValues: {
    [key: string]: string;
  };
  svgProps: {
    [key: string]: string;
  };
  plugins: string[];
  jsxRuntime: string;
}

async function ensureDirectoryExists(dirPath: string): Promise<void> {
  if (!existsSync(dirPath)) {
    await mkdir(dirPath, { recursive: true });
  }
}

async function cleanSrcIconsDirectory(): Promise<void> {
  const srcIconsDir = join('src', 'icons');
  if (existsSync(srcIconsDir)) {
    await rm(srcIconsDir, { recursive: true, force: true });
  }
  await ensureDirectoryExists(srcIconsDir);
}

function getSvgrConfig(): SvgrConfig {
  return {
    icon: true,
    typescript: true,
    replaceAttrValues: {
      '#000': 'none',
      '1em': '16',
    },
    svgProps: {},
    plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
    jsxRuntime: 'automatic' as const,
  };
}

function getComponentName(fileName: string): string {
  // Convert kebab-case to PascalCase and add Icon prefix
  const pascalCase = fileName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
  return `Icon${pascalCase}`;
}

function getIconClassName(fileName: string): string {
  // Convert to kebab-case for CSS class
  return fileName.toLowerCase().replace(/[^a-z0-9]/g, '-');
}

function getComponentTemplate(
  componentName: string,
  iconClassName: string,
): string {
  return `import React from 'react';

interface ${componentName}Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const ${componentName}: React.FC<${componentName}Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\\bsize-\\w+\\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = \`pelatform-icons pelatform-icon-${iconClassName} \${defaultSize} \${userClassName}\`.trim();

  return (
    COMPONENT_CONTENT
  );
};

export default ${componentName};`;
}

async function convertSvgToReact(
  svgContent: string,
  componentName: string,
  iconClassName: string,
): Promise<string> {
  const config = getSvgrConfig();

  try {
    const jsxCode = await transform(svgContent, config as any, {
      componentName,
    });

    // Replace the generated component with our custom template
    const template = getComponentTemplate(componentName, iconClassName);
    let svgElement = jsxCode.match(/<svg[^>]*>[\s\S]*<\/svg>/)?.[0] || '';

    // Remove any existing width, height, and className attributes from SVG
    svgElement = svgElement.replace(/\s*(width|height|className)="[^"]*"/g, '');

    // Add custom attributes to SVG element
    svgElement = svgElement.replace(
      /<svg([^>]*)>/,
      `<svg$1 className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">`,
    );

    return template.replace('COMPONENT_CONTENT', svgElement);
  } catch (error) {
    throw new Error(
      `Failed to convert SVG to React: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

async function processCategory(
  categoryPath: string,
  categoryName: string,
  stats: ConversionStats,
): Promise<void> {
  const srcIconsDir = join('src', 'icons');

  const files = await readdir(categoryPath);
  const svgFiles = files.filter((file) => file.endsWith('.svg'));

  console.log(`   Processing ${categoryName}: ${svgFiles.length} icons`);

  for (const file of svgFiles) {
    try {
      const svgPath = join(categoryPath, file);
      const svgContent = await readFile(svgPath, 'utf-8');

      const fileName = basename(file, '.svg');
      const componentName = getComponentName(fileName);
      const iconClassName = getIconClassName(fileName);
      const reactCode = await convertSvgToReact(
        svgContent,
        componentName,
        iconClassName,
      );

      const outputPath = join(srcIconsDir, `${componentName}.tsx`);
      await writeFile(outputPath, reactCode, 'utf-8');

      stats.convertedIcons++;
      stats.iconNames.push(componentName);
    } catch (error) {
      const errorMsg = `Failed to convert ${file}: ${error instanceof Error ? error.message : String(error)}`;
      stats.errors.push(errorMsg);
      console.error(`❌ ${errorMsg}`);
    }
  }
}

async function generateMainIndex(iconNames: string[]): Promise<void> {
  let indexContent = '// Auto-generated main index\n\n';

  // Sort icon names alphabetically
  const sortedIconNames = iconNames.sort();

  // Generate exports
  sortedIconNames.forEach((iconName) => {
    indexContent += `export { default as ${iconName} } from './${iconName}';\n`;
  });

  // Add version export
  indexContent += "\nexport const version = '1.0.0';\n";

  const indexPath = join('src', 'icons', 'index.ts');
  await writeFile(indexPath, indexContent, 'utf-8');
}

async function convertIconsToReact(): Promise<void> {
  const iconsDir = 'icons';

  console.log('🚀 Starting SVG to React conversion...');
  console.log(`📂 Source directory: ${iconsDir}`);
  console.log(`📂 Output directory: src/icons/`);

  if (!existsSync(iconsDir)) {
    throw new Error(`Icons directory not found: ${iconsDir}`);
  }

  const stats: ConversionStats = {
    totalCategories: 0,
    totalIcons: 0,
    convertedIcons: 0,
    errors: [],
    iconNames: [],
  };

  try {
    // Clean src/icons directory
    console.log('🧹 Cleaning src/icons directory...');
    await cleanSrcIconsDirectory();

    // Get all categories
    const categories = await readdir(iconsDir);
    const categoryDirs: string[] = [];

    for (const item of categories) {
      const categoryPath = join(iconsDir, item);
      if (existsSync(categoryPath)) {
        const { stat } = await import('fs/promises');
        const statResult = await stat(categoryPath);
        if (statResult.isDirectory()) {
          categoryDirs.push(item);
        }
      }
    }

    stats.totalCategories = categoryDirs.length;
    console.log(`📊 Found ${stats.totalCategories} categories`);

    // Process each category
    for (let i = 0; i < categoryDirs.length; i++) {
      const category = categoryDirs[i];
      const categoryPath = join(iconsDir, category);

      await processCategory(categoryPath, category, stats);

      // Log progress every 10 categories
      if ((i + 1) % 10 === 0) {
        console.log(
          `⏳ Progress: ${i + 1}/${stats.totalCategories} categories processed`,
        );
      }
    }

    // Generate main index
    console.log('📝 Generating main index...');
    await generateMainIndex(stats.iconNames);

    // Final results
    console.log('\n📋 Conversion Results:');
    console.log(`   Total categories: ${stats.totalCategories}`);
    console.log(`   Total icons converted: ${stats.convertedIcons}`);
    console.log(`   Total icon components: ${stats.iconNames.length}`);
    console.log(`   Errors: ${stats.errors.length}`);

    if (stats.errors.length > 0) {
      console.log('\n❌ Errors encountered:');
      stats.errors.slice(0, 5).forEach((error) => console.log(`   - ${error}`));
      if (stats.errors.length > 5) {
        console.log(`   ... and ${stats.errors.length - 5} more errors`);
      }
    }

    console.log('\n✅ SVG to React conversion completed successfully!');
    console.log(`📂 React components generated in: src/icons/ directory`);

    // Show some examples
    if (stats.iconNames.length > 0) {
      console.log('\n📝 Icon examples:');
      stats.iconNames.slice(0, 5).forEach((iconName) => {
        console.log(`   ${iconName}`);
      });
      if (stats.iconNames.length > 5) {
        console.log(`   ... and ${stats.iconNames.length - 5} more icons`);
      }
    }
  } catch (error) {
    console.error('❌ Fatal error during conversion:', error);
    process.exit(1);
  }
}

// Run the script
convertIconsToReact().catch((error) => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
