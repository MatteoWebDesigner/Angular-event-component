"use strict";

var config = {
    cssLibs: [
        'bower_components/bootstrap/dist/css/bootstrap.css', // Vendor
        'client/app/core/style/vendor/*.css',
        'client/app/core/style/extension/*.css'
    ],
    css: [
        'client/app/core/style/setting/theme.css',          // Setting
        'client/app/core/style/tool/*.css',
        'client/app/core/style/base/*.css',                 // Core
        'client/app/core/style/object/*.css',
        'client/app/core/style/component/*.css',
        'client/app/core/style/section/*.css',              // Section
        'client/app/core/component/**/*.css',
        'client/app/product_1/style/section/*.css',
        'client/app/product_1/component/**/*.css',
        'client/app/core/style/trump/*.css',                // Trump
    ],
    jsLibs: [
        'bower_components/lodash/lodash.js',
        'bower_components/moment/moment.js',
        'bower_components/rxjs/rx.lite.js',
        'bower_components/angular/angular.js'
    ],
    js: [
        'client/app/main.js',
        'client/app/**/*.js'
    ]
};

module.exports = config;