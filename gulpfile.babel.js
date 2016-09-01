// Gulp file configuration
import browserSync from 'browser-sync';
const gulp = require( 'gulp' );
const clean = require( 'del' );
const reload = browserSync.reload;
const plugins = require( 'gulp-load-plugins' )({
  rename: {
    'gulp-ruby-sass': 'scss',
    'gulp-cssnano': 'minify'
  }
});

function getTasks( task ) {
  // eslint-disable-next-line global-require
  return require( `./gulpTasks/tasks/${task}` );
}

gulp.task( 'clean', getTasks( 'clean' )( gulp, plugins, clean ));
// gulp.task( 'scss', ['clean'], getTasks( 'scss' )( gulp, plugins ));
gulp.task( 'build', ['clean'], getTasks( 'build' )( gulp, plugins ));
gulp.task( 'serve', ['build'], getTasks( 'serve' )( browserSync ));
gulp.task( 'watch', ['serve'], getTasks( 'watch' )( gulp, plugins, reload ));

gulp.task( 'default', ['watch']);
