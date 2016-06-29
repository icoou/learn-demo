var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    minicss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload');

gulp.task('style', function() { //编译sass，合并，压缩加前缀
    return gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(autoprefixer('last 3 versions'))
        .pipe(minicss())
        .pipe(gulp.dest('stylesheet'));
});

gulp.task('script', function() { //合并js，合并压缩
    return gulp.src('js/*.js')
        .pipe(concat('js.js'))
        .pipe(uglify())
        .pipe(gulp.dest('javascripts/'));
})


gulp.task('watch', function() { //监视文件变化
    gulp.watch('sass/*.scss', ['default']);
    livereload.listen();
    gulp.watch(['stylesheet/app.css']).on('change', livereload.changed);
});

gulp.task('default', ['style', 'script']);
