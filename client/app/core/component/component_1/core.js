angular
    .module('app.core')
    .constant('CoreComponentEvents',{
        INIT: 'CoreComponentInit'
    })
    .component('coreComponent', {
        bindings: {
            fromAttribute: '@'
        },
        templateUrl: 'core/component/component_1/core.html',
        controller: function($http) {
            this.fromController = 'controller';
            
            this.$onInit = () => {
                $http.get('/api/movies').then(function(){
                    console.log(arguments)
                })
            };
        }
    });