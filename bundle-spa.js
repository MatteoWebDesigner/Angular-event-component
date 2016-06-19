"use strict";

var config = {
    cssLibs: [
        'bower_components/bootstrap/dist/css/bootstrap.css',    // Vendor
        'client/app-spa/core/style/vendor/*.css',
        'client/app-spa/core/style/extension/*.css'
    ],
    css: [
        'client/app-spa/core/style/setting/theme.css',          // Setting
        'client/app-spa/core/style/tool/*.css',
        'client/app-spa/core/style/base/*.css',                 // Core
        'client/app-spa/core/style/object/*.css',
        'client/app-spa/core/style/component/*.css',
        'client/app-spa/core/style/section/*.css',              // Section
        'client/app-spa/core/component/**/*.css',
        'client/app-spa/product_1/style/section/*.css',
        'client/app-spa/product_1/component/**/*.css',
        'client/app-spa/core/style/trump/*.css',                // Trump
    ],
    jsLibs: [
        'bower_components/lodash/lodash.js',
        'bower_components/moment/moment.js',
        'bower_components/rxjs/rx.lite.js',
        'bower_components/angular-ui-router/angular-ui-router.js',
        'bower_components/angular/angular.js'
    ],
    js: [
        '!client/app-spa/**/style/**/*.js', // avoid postcss js
        'client/app-spa/main.js',
        'client/app-spa/**/*.js'
    ]
};

module.exports = config;