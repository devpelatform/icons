import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(exec);

async function main() {
  try {
    console.log('▶️ Running remove all...');
    await run('rimraf icons && rimraf out && rimraf sources/filled-suffix');

    console.log('▶️ Running checkSource...');
    await run('tsx scripts/prepare/checkSource.ts');

    console.log('▶️ Running buildFilled...');
    await run('tsx scripts/prepare/buildFilled.ts');

    console.log('▶️ Running buildCategory...');
    await run('tsx scripts/prepare/buildCategory.ts');

    console.log('▶️ Running organize...');
    await run('tsx scripts/prepare/organize.ts');

    console.log('▶️ Running iconStats...');
    await run('tsx scripts/prepare/iconStats.ts');

    console.log('✅ All scripts completed successfully.');
  } catch (error) {
    console.error('❌ Script failed:', error);
    process.exit(1);
  }
}

main();
