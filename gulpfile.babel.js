// Gulp file configuration

const gulp = require( 'gulp' );
const plugins = require( 'gulp-load-plugins' )({
  rename: {
    'gulp-ruby-sass': 'scss',
    'gulp-cssnano': 'minify'
  }
});

gulp.task( 'scss', require( './gulpTasks/scss' )( gulp, plugins ));

gulp.task( 'default', ['scss']);
