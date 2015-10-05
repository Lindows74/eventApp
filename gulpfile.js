var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task("watch", function(){
  watch('www/css/**/*.sass', function (e) {
    console.log(e.path);
    gulp.src('www/css/**/*.sass')
    .pipe(sass({
      includePaths: require('node-reset-scss').includePath,
      outFile: 'www/css/style.css' 
    }))
    .pipe(gulp.dest('www/css/'));
  });
});


gulp.task("default", ["watch"]);


