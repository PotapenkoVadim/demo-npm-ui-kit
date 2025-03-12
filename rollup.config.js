import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/esm/index.js',
      format: 'esm'
    },
    external: ['react'],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          declaration: true,
          declarationDir: 'dist/esm',
        }
      }),
      postcss({
        extract: 'index.css',
        modules: true,
        use: ['sass'],
        minimize: true
      }),
      url(),
      svgr({icon: true}),
      terser()
    ]
  },
  // {
  //   input: 'dist/esm/index.d.ts',
  //   output: {
  //     file: 'dist/index.d.ts',
  //     format: 'esm'
  //   },
  //   external: [/\.(css|scss)$/],
  //   plugins: [dts()]
  // }
]