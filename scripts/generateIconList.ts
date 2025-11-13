import { readdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import {
  ensureDirectoryExists,
  componentNameToKebabCase,
  formatItemsInGroups,
} from './utils/shared.ts';

async function generateIconList(): Promise<void> {
  console.log('🚀 Starting icon list generation...');

  const iconsDir = join('src', 'icons');
  const outputPath = join('src', 'icon-list.ts');

  if (!existsSync(iconsDir)) {
    console.error('❌ Icons directory not found:', iconsDir);
    process.exit(1);
  }

  try {
    // Read all icon files
    const files = await readdir(iconsDir);
    const iconFiles = files.filter(
      (file) => file.endsWith('.tsx') && file !== 'index.ts',
    );

    console.log(`📊 Found ${iconFiles.length} icon components`);

    // Generate icon list content
    let content = '// Auto-generated icon list file\n\n';

    const sortedFiles = iconFiles.sort();
    const iconNames: string[] = [];

    for (const file of sortedFiles) {
      const componentName = file.replace('.tsx', '');
      const kebabCase = componentNameToKebabCase(componentName);
      iconNames.push(kebabCase);
    }

    // Sort alphabetically
    iconNames.sort();

    // Use chunking for better IDE performance
    const chunkSize = 500;
    const totalChunks = Math.ceil(iconNames.length / chunkSize);

    content += '// Chunked for better IDE performance\n\n';

    // Generate chunks
    for (let i = 0; i < totalChunks; i++) {
      const chunkItems = iconNames.slice(i * chunkSize, (i + 1) * chunkSize);
      content += `const iconListChunk${i + 1} = [\n`;
      content += formatItemsInGroups(chunkItems, 5);
      content += '];\n\n';
    }

    // Merge all chunks
    content += 'export default [\n';
    const chunkNames = Array.from(
      { length: totalChunks },
      (_, i) => `  ...iconListChunk${i + 1}`,
    );
    content += chunkNames.join(',\n');
    content += '\n];\n';

    // Add type definition
    content += '\n// Type definition for icon names\n';
    content +=
      'export type IconName = typeof import("./icon-list").default[number];\n';

    // Write icon list file
    await ensureDirectoryExists('src');
    await writeFile(outputPath, content, 'utf-8');

    console.log('✅ Icon list generation completed successfully!');
    console.log(`📂 Icon list file generated: ${outputPath}`);
    console.log(`📝 Generated list with ${iconNames.length} icon names`);

    // Show some examples
    if (iconNames.length > 0) {
      console.log('\n📝 Icon name examples:');
      const examples = iconNames.slice(0, 10);
      examples.forEach((name) => {
        console.log(`   "${name}"`);
      });
      if (iconNames.length > 10) {
        console.log(`   ... and ${iconNames.length - 10} more icons`);
      }
    }
  } catch (error) {
    console.error('❌ Error generating icon list:', error);
    process.exit(1);
  }
}

// Run the script
generateIconList().catch((error) => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
