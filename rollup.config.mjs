import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import filesize from 'rollup-plugin-filesize';
import { dts } from 'rollup-plugin-dts';

/** @type {import('rollup').RollupOptions[]} */
const config = [
  // Main bundle
  {
    input: 'src/index.ts',
    external: [/@babel\/runtime/, 'react'],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
        outDir: undefined,
      }),
      babel({
        babelHelpers: 'runtime',
        plugins: ['@babel/plugin-transform-runtime'],
        exclude: 'node_modules/**',
      }),
      filesize(),
    ],
    output: [
      {
        file: 'dist/esm/index.mjs',
        format: 'esm',
        plugins: [terser()],
      },
      {
        file: 'dist/cjs/index.cjs',
        format: 'cjs',
        plugins: [terser()],
      },
      {
        file: 'dist/umd/index.js',
        format: 'umd',
        plugins: [terser()],
        name: 'PelatformIcons',
        globals: {
          react: 'React',
          '@babel/runtime/helpers/extends': '_extends',
        },
      },
    ],
  },

  // Additional files
  {
    input: 'src/aliases.ts',
    external: [/@babel\/runtime/, 'react'],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
        outDir: undefined,
      }),
      babel({
        babelHelpers: 'runtime',
        plugins: ['@babel/plugin-transform-runtime'],
        exclude: 'node_modules/**',
      }),
    ],
    output: [
      {
        file: 'dist/esm/aliases.mjs',
        format: 'esm',
        plugins: [terser()],
      },
      {
        file: 'dist/cjs/aliases.cjs',
        format: 'cjs',
        plugins: [terser()],
      },
    ],
  },

  {
    input: 'src/dynamic-imports.ts',
    external: [/@babel\/runtime/, 'react'],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
        outDir: undefined,
      }),
      babel({
        babelHelpers: 'runtime',
        plugins: ['@babel/plugin-transform-runtime'],
        exclude: 'node_modules/**',
      }),
    ],
    output: [
      {
        file: 'dist/esm/dynamic-imports.mjs',
        format: 'esm',
        inlineDynamicImports: true,
        plugins: [terser()],
      },
      {
        file: 'dist/cjs/dynamic-imports.cjs',
        format: 'cjs',
        inlineDynamicImports: true,
        plugins: [terser()],
      },
    ],
  },

  {
    input: 'src/icon-list.ts',
    external: [/@babel\/runtime/, 'react'],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
        outDir: undefined,
      }),
      babel({
        babelHelpers: 'runtime',
        plugins: ['@babel/plugin-transform-runtime'],
        exclude: 'node_modules/**',
      }),
    ],
    output: [
      {
        file: 'dist/esm/icon-list.mjs',
        format: 'esm',
        plugins: [terser()],
      },
      {
        file: 'dist/cjs/icon-list.cjs',
        format: 'cjs',
        plugins: [terser()],
      },
    ],
  },

  {
    input: 'src/types.ts',
    external: [/@babel\/runtime/, 'react'],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
        outDir: undefined,
      }),
      babel({
        babelHelpers: 'runtime',
        plugins: ['@babel/plugin-transform-runtime'],
        exclude: 'node_modules/**',
      }),
    ],
    output: [
      {
        file: 'dist/esm/types.mjs',
        format: 'esm',
        plugins: [terser()],
      },
      {
        file: 'dist/cjs/types.cjs',
        format: 'cjs',
        plugins: [terser()],
      },
    ],
  },

  // TypeScript declarations
  {
    input: 'src/index.ts',
    external: [/@babel\/runtime/, 'react'],
    plugins: [dts()],
    output: {
      file: 'dist/types/index.d.ts',
      format: 'esm',
    },
  },

  {
    input: 'src/aliases.ts',
    external: [/@babel\/runtime/, 'react'],
    plugins: [dts()],
    output: {
      file: 'dist/types/aliases.d.ts',
      format: 'esm',
    },
  },

  {
    input: 'src/dynamic-imports.ts',
    external: [/@babel\/runtime/, 'react'],
    plugins: [dts()],
    output: {
      file: 'dist/types/dynamic-imports.d.ts',
      format: 'esm',
    },
  },

  {
    input: 'src/icon-list.ts',
    external: [/@babel\/runtime/, 'react'],
    plugins: [dts()],
    output: {
      file: 'dist/types/icon-list.d.ts',
      format: 'esm',
    },
  },

  {
    input: 'src/types.ts',
    external: [/@babel\/runtime/, 'react'],
    plugins: [dts()],
    output: {
      file: 'dist/types/types.d.ts',
      format: 'esm',
    },
  },
];

export default config;
