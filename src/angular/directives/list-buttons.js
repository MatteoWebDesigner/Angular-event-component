angular
.module('app')
.directive('listButtons', function () {
    return {
        restrict: 'E',
        scope: {
            values: '='
        },
        template: '<ul><li ng-repeat="item in values"><button class="btn">{{item.name}}</button></li></ul>',
        link: function (scope, element, attrs) {
            //debugger;
            scope.values = scope.values !== undefined ? scope.values : [];

            // scope.emitEvent = function () {
            //     console.log(scope.value);
            // }
        }
    };
});
