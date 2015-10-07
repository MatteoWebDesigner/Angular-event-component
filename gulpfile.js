"use strict";

var gulp         = require('gulp'),
    gulpSass     = require('gulp-sass'),
    gulpConnect  = require('gulp-connect'),
    gulpOpen     = require('gulp-open')
;

var
    server = {
        port: 8000
    },
    assetsPath = {
        sass: 'src/assets/**/*.scss',
        //mainSass: 'src/assets/main.scss',
        js: 'src/angular/**/*.js',
        dist: 'dist/'
    }
;

// gulp.task('sass', function () {
//   gulp.src('./sass/**/*.scss')
//     .pipe(sass.sync().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });
//
//
// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });

// gulp.task('buildStyles', function() {
//     gulp.src(assetsPath.sass)
//         .pipe(gulpSass())
//         .pipe(gulp.dest(assetsPath.dist))
//         .pipe(connect.reload());
// });

// gulp.task('watch', function() {
//     gulp.watch('styles/*.less', ['less']);
// })


gulp.task('webserver', function() {
    gulpConnect.server({
        livereload: true,
        port: server.port
    });
});


gulp.task('openBrowser', function() {
    gulp
    .src(__filename)
    .pipe(
        gulpOpen({
            uri: 'http://localhost:' + server.port
        })
    );
});

gulp.task('buildHtml', function() {
    gulp.src('index.html')
        .pipe(gulpConnect.reload());
});

gulp.task('buildStyle', function() {
    gulp.src(assetsPath.sass)
        .pipe(gulpConnect.reload());
});

gulp.task('buildScript', function() {
    gulp.src(assetsPath.js)
        .pipe(gulpConnect.reload());
});

gulp.task('watch', function() {
    gulp.watch('index.html', ['buildHtml']);
    gulp.watch(assetsPath.sass, ['buildStyle']);
    gulp.watch(assetsPath.js, ['buildScript']);
});


gulp.task('default', ['webserver', 'openBrowser','watch']);
