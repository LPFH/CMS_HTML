//PLUGINS

var gulp = require('gulp');
var concat = require('gulp-concat');

//TASK

//Concat JS
gulp.task('concat', function () {
  gulp.src(['/partials/pre-head.html','/partials/panel-head.html','/partials/post-head.html'])
        .pipe(concat('head-built.html'))
        .pipe(gulp.dest('./html/'))
});


//WATCHERS

//Concat and min HTML, 
gulp.task('html', function () {
    gulp.watch('partials/*.html', ['concat']);


});