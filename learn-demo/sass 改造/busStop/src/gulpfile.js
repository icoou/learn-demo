var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    minicss = require('gulp-minify-css'),
    livereload = require('gulp-livereload');

gulp.task('style', function() { //编译sass，合并，压缩加前缀
    return gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(autoprefixer('last 3 versions'))
        .pipe(minicss())
        .pipe(gulp.dest('../dist/stylesheet/'));
});

gulp.task('watch', function() { //监视文件变化
    gulp.watch('sass/*.scss', ['style']);
    livereload.listen();
    gulp.watch(['../dist/stylesheet/app.css']).on('change', livereload.changed);
});

gulp.task('default', ['style', 'watch']);
