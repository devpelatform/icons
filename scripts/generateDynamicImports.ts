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

async function generateDynamicImports(): Promise<void> {
  console.log('🚀 Starting dynamic imports generation...');

  const iconsDir = join('src', 'icons');
  const outputPath = join('src', 'dynamic-imports.ts');

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

    // Generate dynamic imports content
    let content = '// Auto-generated dynamic imports file\n\n';
    content += 'export default {\n';

    const sortedFiles = iconFiles.sort();
    const imports: string[] = [];

    for (const file of sortedFiles) {
      const componentName = file.replace('.tsx', '');
      const kebabCase = componentNameToKebabCase(componentName);

      imports.push(
        `  '${kebabCase}': () => import('./icons/${componentName}')`,
      );
    }

    content += imports.join(',\n');
    content += '\n};\n';

    // Add type definition
    content += '\n// Type definition for dynamic imports\n';
    content +=
      'export type IconImportKey = keyof typeof import("./dynamic-imports").default;\n';

    // Write dynamic imports file
    await ensureDirectoryExists('src');
    await writeFile(outputPath, content, 'utf-8');

    console.log('✅ Dynamic imports generation completed successfully!');
    console.log(`📂 Dynamic imports file generated: ${outputPath}`);
    console.log(`📝 Generated ${iconFiles.length} dynamic import entries`);

    // Show some examples
    if (iconFiles.length > 0) {
      console.log('\n📝 Dynamic import examples:');
      const examples = sortedFiles.slice(0, 5);
      examples.forEach((file) => {
        const componentName = file.replace('.tsx', '');
        const kebabCase = componentNameToKebabCase(componentName);
        console.log(`   '${kebabCase}' -> ${componentName}`);
      });
      if (sortedFiles.length > 5) {
        console.log(`   ... and ${sortedFiles.length - 5} more imports`);
      }
    }
  } catch (error) {
    console.error('❌ Error generating dynamic imports:', error);
    process.exit(1);
  }
}

// Run the script
generateDynamicImports().catch((error) => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
