angular
.module('app')
.directive('listResults', function () {
    return {
        restrict: 'E',
        scope: {
            values: '@'
        },
        template: '<div ng-result="item in values">{{item.name}}</div>',
        link: function (scope, element, attrs) {
            //debugger;
            scope.values = scope.values !== undefined ? scope.values : [];

            // Eventmanager.on('PRINT_RESULT',function(){})

        }
    };
});
