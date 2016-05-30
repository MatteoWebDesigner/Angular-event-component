angular
    .module('app.product_1')
    .constant('CoreComponentEvents',{
        INIT: 'CoreComponentInit'
    })
    .component('coreComponent', {
        bindings: {
            fromAttribute: '@'
        },
        templateUrl: 'product_1/component/component_1/core.html',
        controller: function($http) {
            this.data = {};
            this.list = [];
            
            this.handleGet = () => {
                $http
                    .get('/api/movies/')
                    .then((res) => {
                        this.list = res.data;
                    });
            };
            
            this.handleSave = () => {
                $http
                    .post('/api/movies/', this.data )
                    .then((res) => {
                        this.list.push(res.data);
                        
                        // clear input
                        this.data = {}; 
                    });
            };
            
            this.handleDelete = (item,index) => {
                this.list.splice(index,1);
                
                $http.delete(`/api/movies/${item._id}`);
            };
            
            this.$onInit = () => {
                this.handleGet();
            };
        }
    });