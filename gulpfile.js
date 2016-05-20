"use strict";

var
    gulp         = require('gulp'),
    _            = require('lodash'),
    babel        = require("gulp-babel"),
    concat       = require("gulp-concat"),
    runSequence  = require('run-sequence'),
    sourcemaps   = require("gulp-sourcemaps"),
    livereload   = require('gulp-livereload'),

    // html
    // css
    postcss              = require('gulp-postcss'),
    postcssInlineComment = require('postcss-inline-comment'),
    
    // js

    config       = require("./config.js"),

    bundle       = require("./bundle.js")
;

gulp.task('cssVendor', function() {
    return gulp.src(bundle.cssLibs)
        .pipe(concat("vendor.css"))
        .pipe(gulp.dest("server/public"));
});

gulp.task('css', function() {
    return gulp.src(bundle.css)
        .pipe(postcss([ 
            postcssInlineComment()
        ]))
        .pipe(concat("app.css"))
        .pipe(gulp.dest("server/public"));
});

gulp.task('jsVendor', () => {    
    return gulp.src(bundle.jsLibs)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("vendor.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("server/public"));
});

gulp.task('js', () => {    
    return gulp.src(bundle.js)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("app.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("server/public"));
});

gulp.task('watch', () => {
    // gulp.watch('index.html', ['html']);
    gulp.watch(config.cssFiles, ['css']);
    gulp.watch(config.jsFiles, ['js']);
});

gulp.task('default', () => {
    runSequence(
        // 'clean',
        // 'css-stylelint',
        // ['fonts','html','jade','cssVendor','css','jsVendor','js'],
        // ['css-deprecated'],
        'css',
        'jsVendor',
        'js',
        'watch'
    );
});
