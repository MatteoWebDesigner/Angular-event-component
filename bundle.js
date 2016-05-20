"use strict";

var config = {
    jsLibs: [
        'bower_components/lodash/lodash.js',
        'bower_components/moment/moment.js',
        'bower_components/rxjs/rx.lite.js',
        'bower_components/angular/angular.js'
    ],
    js: [
        'client/app/app.js',
        'client/app/**/*.js'
    ],
    css: [
        'client/app/core/core.css'
    ]
};

module.exports = config;