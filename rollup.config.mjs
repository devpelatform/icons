import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import esbuild from 'rollup-plugin-esbuild';
import filesize from 'rollup-plugin-filesize';

const entry = process.env.ENTRY || 'index';
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('rollup').RollupOptions} */
const config = {
  input: `src/${entry}.ts`,

  // External dependencies - don't bundle React
  external: (id) => {
    return /^react($|\/)|^react-dom($|\/)/.test(id);
  },

  // Advanced tree-shaking configuration
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
    tryCatchDeoptimization: false,
    correctVarValueBeforeDeclaration: false,
    manualPureFunctions: ['React.createElement', 'React.FC'],
  },

  plugins: [
    resolve({
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    }),
    commonjs({
      include: /node_modules/,
    }),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
      declarationMap: false,
      compilerOptions: {
        sourceMap: true,
      },
    }),
    esbuild({
      minify: isProd,
      target: 'es2018',
      treeShaking: true,
      legalComments: 'none',
      keepNames: false,
      pure: ['console.log', 'console.debug'],
    }),
    filesize({
      showMinifiedSize: true,
      showGzippedSize: true,
    }),
  ],

  output: [
    {
      file: `dist/esm/${entry}.mjs`,
      format: 'esm',
      sourcemap: isProd,
      inlineDynamicImports: entry === 'dynamic-imports',
      generatedCode: {
        preset: 'es2015',
        constBindings: true,
      },
      compact: isProd,
      preserveModules: false,
    },
    {
      file: `dist/cjs/${entry}.cjs`,
      format: 'cjs',
      sourcemap: isProd,
      inlineDynamicImports: entry === 'dynamic-imports',
      exports: 'auto',
      generatedCode: {
        preset: 'es2015',
        constBindings: true,
      },
      compact: isProd,
      preserveModules: false,
    },
    ...(entry === 'index'
      ? [
          {
            file: `dist/umd/${entry}.js`,
            format: 'umd',
            name: 'PelatformIcons',
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
            sourcemap: isProd,
            inlineDynamicImports: false,
            generatedCode: {
              preset: 'es2015',
              constBindings: true,
            },
            compact: isProd,
          },
        ]
      : []),
  ],

  // Performance optimizations
  maxParallelFileOps: 20,
  cache: true,
};

export default config;
