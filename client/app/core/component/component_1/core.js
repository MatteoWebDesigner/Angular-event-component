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
        controller: function() {
            this.fromController = 'controller';
            
            this.$onInit = () => {};
        }
    });