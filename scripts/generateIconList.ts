import { readdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

async function ensureDirectoryExists(dirPath: string): Promise<void> {
  const { mkdir } = await import('fs/promises');
  try {
    await mkdir(dirPath, { recursive: true });
  } catch (error) {
    // Directory might already exist
  }
}

function componentNameToKebabCase(componentName: string): string {
  // Remove 'Icon' prefix and convert PascalCase to kebab-case
  const withoutIcon = componentName.replace(/^Icon/, '');

  return withoutIcon
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, ''); // Remove leading dash
}

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

    // Format as array with proper line breaks for readability
    content += 'export default [\n';

    // Group icons in lines of 5 for better readability
    const groupSize = 5;
    for (let i = 0; i < iconNames.length; i += groupSize) {
      const group = iconNames.slice(i, i + groupSize);
      const formattedGroup = group.map((name) => `"${name}"`).join(', ');
      content += `  ${formattedGroup}`;

      if (i + groupSize < iconNames.length) {
        content += ',';
      }
      content += '\n';
    }

    content += '];\n';

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
