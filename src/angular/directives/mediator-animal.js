angular
.module('app')
.directive('mediatorAnimal', function () {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div ng-transclude></div>',
        controllerAs:'animal',
        controller: function () {
            this.items = [{
                name: 'frog',
            },{
                name: 'cat',
            },{
                name: 'dog',
            }];
        }
    };
});