import { readdir, copyFile, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync } from 'fs';

interface CopyFilled {
  totalFiles: number;
  copiedFiles: number;
  errors: string[];
}

async function ensureDirectoryExists(dirPath: string): Promise<void> {
  if (!existsSync(dirPath)) {
    await mkdir(dirPath, { recursive: true });
    console.log(`📁 Created directory: ${dirPath}`);
  }
}

async function copyFilledIcons(): Promise<void> {
  const sourceDir = 'sources/filled';
  const targetDir = 'sources/filled-suffix';

  console.log('🚀 Starting buildFilledName process...');
  console.log(`📂 Source: ${sourceDir}`);
  console.log(`📂 Target: ${targetDir}`);

  // Ensure target directory exists
  await ensureDirectoryExists(targetDir);

  const result: CopyFilled = {
    totalFiles: 0,
    copiedFiles: 0,
    errors: [],
  };

  try {
    // Read all files from source directory
    const files = await readdir(sourceDir);
    const svgFiles = files.filter(
      (file) => extname(file).toLowerCase() === '.svg',
    );

    result.totalFiles = svgFiles.length;
    console.log(`📊 Found ${result.totalFiles} SVG files to process`);

    // Process each SVG file
    for (const file of svgFiles) {
      try {
        const sourcePath = join(sourceDir, file);
        const fileName = basename(file, '.svg');
        const newFileName = `${fileName}-filled.svg`;
        const targetPath = join(targetDir, newFileName);

        // Copy file with new name
        await copyFile(sourcePath, targetPath);
        result.copiedFiles++;

        // Log progress every 100 files
        if (result.copiedFiles % 100 === 0) {
          console.log(
            `⏳ Progress: ${result.copiedFiles}/${result.totalFiles} files copied`,
          );
        }
      } catch (error) {
        const errorMsg = `Failed to copy ${file}: ${error instanceof Error ? error.message : String(error)}`;
        result.errors.push(errorMsg);
        console.error(`❌ ${errorMsg}`);
      }
    }

    // Final results
    console.log('\n📋 Build Results:');
    console.log(`   Total files found: ${result.totalFiles}`);
    console.log(`   Successfully copied: ${result.copiedFiles}`);
    console.log(`   Errors: ${result.errors.length}`);

    if (result.errors.length > 0) {
      console.log('\n❌ Errors encountered:');
      result.errors.forEach((error) => console.log(`   - ${error}`));
    }

    if (result.copiedFiles > 0) {
      console.log(
        `\n✅ Successfully created ${result.copiedFiles} filled-suffix icons in ${targetDir}`,
      );
      console.log('📝 Example transformations:');

      // Show first 3 examples
      const examples = svgFiles.slice(0, 3);
      examples.forEach((file) => {
        const fileName = basename(file, '.svg');
        console.log(`   ${file} → ${fileName}-filled.svg`);
      });

      if (svgFiles.length > 3) {
        console.log(`   ... and ${svgFiles.length - 3} more files`);
      }
    }
  } catch (error) {
    console.error('❌ Fatal error during buildFilledName process:', error);
    process.exit(1);
  }
}

// Run the script
copyFilledIcons().catch((error) => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
