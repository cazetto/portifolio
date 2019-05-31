import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import collectSass from 'rollup-plugin-collect-sass';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'iife'
  },
  plugins: [
    copy({
      targets: [
        'src/index.html',
        'src/index.css'
      ],
      outputFolder: 'dist'
    }),
    postcss({
      extensions: [ '.css' ],
      extract: true
    }),
    
    serve({
      contentBase: 'dist',
      open: true,
      host: 'localhost',
      port: 10001,
    })
  ]
};
