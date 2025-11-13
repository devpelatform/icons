import { execSync } from 'node:child_process';

const entries = ['index', 'aliases', 'dynamic-imports', 'icon-list', 'types'];

interface BuildResult {
  entry: string;
  success: boolean;
  error?: string;
  duration: number;
}

function buildEntry(entry: string): BuildResult {
  const startTime = Date.now();
  console.log(`\n📦 Building: ${entry} ...\n`);

  try {
    execSync(
      `NODE_OPTIONS="--max-old-space-size=8192" npx rollup -c ./rollup.config.mjs --environment ENTRY:${entry},NODE_ENV:production`,
      { stdio: 'inherit', shell: '/bin/bash' },
    );

    const duration = Date.now() - startTime;
    console.log(
      `\n✅ ${entry} built successfully in ${(duration / 1000).toFixed(2)}s\n`,
    );

    return { entry, success: true, duration };
  } catch (error) {
    const duration = Date.now() - startTime;
    const errorMsg = error instanceof Error ? error.message : String(error);

    console.error(`\n❌ ${entry} build failed: ${errorMsg}\n`);

    return { entry, success: false, error: errorMsg, duration };
  }
}

function buildAll(): void {
  console.log('🚀 Starting sequential builds for all entries...');
  console.log('⚠️  Building one at a time to avoid memory issues\n');
  const totalStartTime = Date.now();

  const results: BuildResult[] = [];

  // Build entries sequentially (one at a time)
  for (const entry of entries) {
    const result = buildEntry(entry);
    results.push(result);

    // Stop if build failed
    if (!result.success) {
      console.error(`❌ Stopping build process due to failure in: ${entry}`);
      process.exit(1);
    }
  }

  const totalDuration = Date.now() - totalStartTime;

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📋 Build Summary:');
  console.log('='.repeat(60));

  const successful = results.filter((r) => r.success);
  const failed = results.filter((r) => !r.success);

  console.log(`✅ Successful: ${successful.length}/${results.length}`);
  successful.forEach((result) => {
    console.log(
      `   ✓ ${result.entry} (${(result.duration / 1000).toFixed(2)}s)`,
    );
  });

  if (failed.length > 0) {
    console.log(`\n❌ Failed: ${failed.length}/${results.length}`);
    failed.forEach((result) => {
      console.log(`   ✗ ${result.entry}: ${result.error}`);
    });
  }

  console.log(`\n⏱️  Total time: ${(totalDuration / 1000).toFixed(2)}s`);
  console.log('='.repeat(60));

  if (failed.length > 0) {
    console.error('\n❌ Some builds failed. Please check the errors above.');
    process.exit(1);
  } else {
    console.log('\n✅ All builds completed successfully!');
  }
}

// Run the build
try {
  buildAll();
} catch (error) {
  console.error('❌ Unexpected error during build:', error);
  process.exit(1);
}
