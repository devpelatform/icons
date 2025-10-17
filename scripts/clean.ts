import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(exec);

async function main() {
  try {
    console.log('▶️ Running remove all prepare...');
    await run('rimraf icons && rimraf out && rimraf sources/filled-suffix');

    console.log('▶️ Running remove all prebuild...');
    await run(
      'rimraf dist && rimraf src/icons && rimraf src/aliases.ts && rimraf src/dynamic-imports.ts && rimraf src/icon-list.ts',
    );
  } catch (error) {
    console.error('❌ Script failed:', error);
    process.exit(1);
  }
}

main();
