import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';

export default {
  entry: 'SvelteBulmaForms.js',
  dest: 'dist/index.js',
  format: 'cjs',
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    svelte({
      include: '/**/*.html'
    })
  ]
}
