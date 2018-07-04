'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');

/* Set the title of the project */
fractal.set('project.title', 'UI Components');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

fractal.web.set('static.path', __dirname + '/src/static');

fractal.web.set('builder.dest', __dirname + '/dist');

const customTheme = mandelbrot({
  skin: 'navy',
  styles: [
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
    'default',
    '/css/theme-styles.css',
  ],
  nav: ['docs', 'components'],
  panels: ['html', 'info', 'resources'],
});

customTheme.addLoadPath(__dirname + '/src/theme-overrides');

fractal.web.theme(customTheme);