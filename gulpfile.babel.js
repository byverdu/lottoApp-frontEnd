// Gulp file configuration

const gulp = require( 'gulp' );
const clean = require( 'del' );
const plugins = require( 'gulp-load-plugins' )({
  rename: {
    'gulp-ruby-sass': 'scss',
    'gulp-cssnano': 'minify',
    'gulp-connect': 'connect',
    'gulp-livereload': 'livereload'
  }
});

function getTasks( task ) {
  // eslint-disable-next-line global-require
  return require( `./gulpTasks/${task}` );
}

gulp.task( 'clean', getTasks( 'clean' )( clean ));
gulp.task( 'scss', getTasks( 'scss' )( gulp, plugins ));
gulp.task( 'watch', getTasks( 'watch' )( gulp, plugins ));

gulp.task( 'default', ['clean'], () => {
  gulp.start( 'scss', 'watch' );
});
