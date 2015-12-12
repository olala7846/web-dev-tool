var gulp = require('gulp');
var bs = require('browser-sync').create();

gulp.task('css', function() {
  return gulp.src('./**/*.css')
    .pipe(bs.stream());
});

gulp.task('serve', function() {

  bs.init({
    server: {
      baseDir: './'
    }  
  });

  gulp.watch('./**/*.html').on('change', bs.reload);
  gulp.watch('./**/*.js').on('change', bs.reload);
  gulp.watch('./**/*.css', ['css']);

});

gulp.task('default', ['serve']);


