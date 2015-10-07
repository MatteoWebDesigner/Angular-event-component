angular
.module('app')
.directive('mediatorFood', function () {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div ng-transclude></div>',
        controllerAs:'food',
        controller: function () {
            this.items = [{
                name: 'salad',
            },{
                name: 'pasta',
            }];
        }
    };
});