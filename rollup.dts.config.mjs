import { dts } from 'rollup-plugin-dts';

const entry = process.env.ENTRY || 'index';

/** @type {import('rollup').RollupOptions} */
export default {
  input: `src/${entry}.ts`,
  plugins: [dts()],
  output: {
    file: `dist/types/${entry}.d.ts`,
    format: 'esm',
  },
};
