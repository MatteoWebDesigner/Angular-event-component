"use strict";

var config = {
    cssLibs: [
        //'client/app/**/*.css'
    ],
    css: [
        // Core
        'client/app/core/style/setting/*.css',
        'client/app/core/style/tool/*.css',
        'client/app/core/style/generic/*.css',
        'client/app/core/style/extension/*.css',
        'client/app/core/style/base/*.css',
        'client/app/core/style/object/*.css',
        'client/app/core/style/component/*.css',
        
        // Section
        'client/app/core/component/**/*.css',
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
        'client/app/app.js',
        'client/app/**/*.js'
    ]
};

module.exports = config;