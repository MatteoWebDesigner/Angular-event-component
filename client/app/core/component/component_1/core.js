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
            this.data = {};
            this.list = [];
            
            this.handleGet = () => {
                $http
                    .get('/api/movies')
                    .then((res) => {
                        this.list = res.data;
                    });
            };
            
            this.handleSave = () => {
                $http
                    .post('/api/movies', this.data )
                    .then((res) => {
                        console.log(res);
                        
                        this.handleGet();
                    });
            };
            
            this.$onInit = () => {
                this.handleGet();
            };
        }
    });