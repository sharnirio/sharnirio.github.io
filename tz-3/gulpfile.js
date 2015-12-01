"use strict";

var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify');

gulp.task('default', function () {
    gulp.src('css/*.css')
    .pipe(concatCss('bundle.css'))
    .pipe(gulp.dest('css/'))
    .pipe(notify('Done!!!'));

});

gulp.task('sass', function () {
  gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'))
    .pipe(notify('Done!!!'));
});

gulp.task('sass:watch', function () {
  gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('watch', function () {
	gulp.watch('css/*.css' , ['default']);
});


gulp.task('avto', function () {
    return gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'));
});
