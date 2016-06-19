// Credit to Daniel Eden https://daneden.me
var gulp         = require('gulp'),
	sass = require('gulp-sass'),
	postcss      = require('gulp-postcss'),
	cssnext      = require('postcss-cssnext'),
	nano         = require('gulp-cssnano'),
	shell        = require('gulp-shell'),
	atImport     = require('postcss-import'),
	stylelint = require("stylelint"),
	autoprefixer = require('autoprefixer'),
	reporter = require("postcss-reporter"),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync  = require('browser-sync').create();

var processors = [
	atImport,
	cssnext({
		'browsers': ['last 2 version'],
	    'features': {
	      'customProperties': {
	        preserve: true,
	        appendVariables: true
	      },
	      'colorFunction': true,
	      'customSelectors': true,
	      'sourcemap': true,
	      'rem': false
	    }
	})
];

gulp.task('styles', function() {
  return gulp.src('./_assets/_sass/style.scss')
  .pipe(sass({
  	includePaths: require('node-bourbon').includePaths,
    includePaths: require('node-neat').includePaths
   }).on('error', sass.logError))
  .pipe(postcss([
    // http://stylelint.io/?docs/user-guide/rules.md
    stylelint({ /* options located in ./.stylelintrc */ }),
    reporter({ clearMessages: true }),
    autoprefixer({ browsers: ['last 3 versions'] }) // Autoprefix applicable CSS
  ]))
  .pipe(nano({discardComments: {removeAll: true}}))
  .pipe(gulp.dest('./_includes/'));
});

gulp.task('browser-sync', function() {
	browserSync.init({
		proxy: "localhost:4000",
		port: 5000,
		open: false,
		injectChanges: true
	});
});

gulp.task('jekyll-build', shell.task(['bundle exec jekyll build --incremental --watch']));
gulp.task('jekyll-build-once', shell.task(['bundle exec jekyll build --incremental']));

gulp.task('jekyll-serve', function () {
	browserSync.init({ server: { baseDir: '_site/'}});
	gulp.watch('./_assets/src/*.scss', ['styles']);
	gulp.watch('_site/**/*.*').on('change', browserSync.reload);
	gulp.watch('_includes/style.css').on('change', browserSync.reload);
})

gulp.task('default', ['jekyll-build', 'jekyll-serve', 'styles']);
gulp.task('build', ['styles', 'jekyll-build-once']);