let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('_scripts/main.js', 'assets/js')
   .js('_scripts/plugins.js', 'assets/js')
   .sass('_sass/vendor.scss', 'assets/css/')
   .sass('_sass/main.scss', 'assets/css/');
