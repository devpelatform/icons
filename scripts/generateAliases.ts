import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { ensureDirectoryExists, getComponentName } from './utils/shared.ts';

interface AliasMapping {
  outline?: { [aliasName: string]: string };
  filled?: { [aliasName: string]: string };
  [aliasName: string]: any;
}

async function generateAliases(): Promise<void> {
  console.log('🚀 Starting aliases generation...');

  const aliasesPath = join('sources', 'aliases.json');
  const outputPath = join('src', 'aliases.ts');

  // Check if aliases.json exists
  if (!existsSync(aliasesPath)) {
    console.log('⚠️  aliases.json not found, creating empty aliases file...');

    // Create empty aliases file
    const emptyContent = `// Auto-generated aliases file
// No aliases defined yet

export {};
`;

    await ensureDirectoryExists('src');
    await writeFile(outputPath, emptyContent, 'utf-8');
    console.log('✅ Empty aliases.ts generated');
    return;
  }

  try {
    // Read aliases mapping
    const aliasesContent = await readFile(aliasesPath, 'utf-8');
    const aliases: AliasMapping = JSON.parse(aliasesContent);

    // Combine outline and filled aliases
    const allAliases: { [key: string]: string } = {};

    if (aliases.outline) {
      Object.entries(aliases.outline).forEach(([alias, target]) => {
        allAliases[alias] = target;
      });
    }

    if (aliases.filled) {
      Object.entries(aliases.filled).forEach(([alias, target]) => {
        // Add -filled suffix to target if not already present
        const targetWithSuffix = target.endsWith('-filled')
          ? target
          : `${target}-filled`;
        allAliases[`${alias}-filled`] = targetWithSuffix;
      });
    }

    console.log(`📊 Found ${Object.keys(allAliases).length} aliases`);

    // Generate aliases content
    let content = '// Auto-generated aliases file\n\n';

    const sortedAliases = Object.keys(allAliases).sort();

    for (const aliasName of sortedAliases) {
      const iconName = allAliases[aliasName];
      const componentName = getComponentName(iconName);
      const aliasComponentName = getComponentName(aliasName);

      content += `export { default as ${aliasComponentName} } from './icons/${componentName}';\n`;
    }

    if (sortedAliases.length === 0) {
      content += '\nexport {};\n';
    }

    // Write aliases file
    await ensureDirectoryExists('src');
    await writeFile(outputPath, content, 'utf-8');

    console.log('✅ Aliases generation completed successfully!');
    console.log(`📂 Aliases file generated: ${outputPath}`);
    console.log(`📝 Generated ${sortedAliases.length} alias exports`);
  } catch (error) {
    console.error('❌ Error generating aliases:', error);
    process.exit(1);
  }
}

// Run the script
generateAliases().catch((error) => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
