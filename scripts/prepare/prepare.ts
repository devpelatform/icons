import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(exec);

async function main() {
  try {
    console.log('▶️ Running remove all...');
    await run('rimraf icons && rimraf out && rimraf sources/filled-suffix');

    console.log('▶️ Running checkSource...');
    await run('bun scripts/prepare/checkSource.ts');

    console.log('▶️ Running buildFilled...');
    await run('bun scripts/prepare/buildFilled.ts');

    console.log('▶️ Running buildCategory...');
    await run('bun scripts/prepare/buildCategory.ts');

    console.log('▶️ Running organize...');
    await run('bun scripts/prepare/organize.ts');

    console.log('▶️ Running iconStats...');
    await run('bun scripts/prepare/iconStats.ts');

    console.log('✅ All scripts completed successfully.');
  } catch (error) {
    console.error('❌ Script failed:', error);
    process.exit(1);
  }
}

main();
