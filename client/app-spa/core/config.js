angular.module('app.core', [])
    .config(function($stateProvider, $locationProvider) {
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: '/spa/core/views/index.html',
                controller: () => {
                    console.log('SPA index');
                }
            })
            .state('page1', {
                url: '/page1',
                templateUrl: '/spa/core/views/index.html',
                controller: () => {
                    console.log('SPA page1');
                }
            });
        
        $locationProvider.html5Mode(true);
    });