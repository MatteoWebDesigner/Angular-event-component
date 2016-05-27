"use strict";

var config = {
    cssLibs: [
        'client/app/core/style/setting/theme.css',
        'client/app/core/style/generic/*.css',
        'client/app/core/style/extension/*.css'
    ],
    css: [
        // Core
        'client/app/core/style/setting/theme.css',
        'client/app/core/style/tool/*.css',
        
        'client/app/core/style/base/*.css',
        'client/app/core/style/object/*.css',
        'client/app/core/style/component/*.css',
        
        // Section
        'client/app/core/style/section/*.css',
        'client/app/core/component/**/*.css',
        
        'client/app/product_1/style/section/*.css',
        'client/app/product_1/component/**/*.css',
        
        // Trump
        'client/app/core/style/trump/*.css',
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