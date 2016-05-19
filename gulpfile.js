"use strict";

var
    gulp         = require('gulp'),
    babel        = require("gulp-babel"),
    concat       = require("gulp-concat"),
    runSequence  = require('run-sequence'),
    sourcemaps   = require("gulp-sourcemaps"),
    livereload   = require('gulp-livereload'),

    // html
    // css
    postcss      = require('gulp-postcss'),
    // js

    config       = require("./config.js"),

    bundle       = require("./bundle.js")
;

// gulp.task('html', function() {
//     gulp.src('index.html');
// });

gulp.task('css', function() {
    gulp.src('');
});

gulp.task('js', () => {
    return gulp.src("client/app/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("app.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("server/public"));
});

// gulp.task('watch', () => {
//     gulp.watch('index.html', ['html']);
//     gulp.watch('', ['css']);
//     gulp.watch('', ['js']);
// });

gulp.task('default', () => {
    runSequence(
        'js'
        // 'clean',
        // 'css-stylelint',
        // ['fonts','html','jade','cssVendor','css','jsVendor','js'],
        // ['css-deprecated'],
        // 'watch'
    );
});
