import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import collectSass from 'rollup-plugin-collect-sass';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'iife'
  },
  plugins: [
    copy({
      targets: {
        'src/index.html': 'dist/index.html',
        'src/index.css': 'dist/index.css',
        'src/assets/images': 'dist/assets/images',
        'src/site.config.json': 'dist/site.config.json'
      },
      outputFolder: 'dist'
    }),
    postcss({
      extensions: [ '.css' ],
      extract: true
    }),

    // serve({
    //   contentBase: 'dist',
    //   open: true,
    //   host: 'localhost',
    //   port: 10001,
    // }),

  ]
};
