var gulp = require('gulp');
var bs = require('browser-sync').create();

gulp.task('css', function() {
  return gulp.src('./**/*.css')
    .pipe(bs.stream());
});

gulp.task('serve', function() {

  bs.init({
    server: {
      baseDir: './src/'
    }  
  });

  gulp.watch('./src/**/*.html').on('change', bs.reload);
  gulp.watch('./src/**/*.js').on('change', bs.reload);
  gulp.watch('./src/**/*.css', ['css']);

});

gulp.task('default', ['serve']);


