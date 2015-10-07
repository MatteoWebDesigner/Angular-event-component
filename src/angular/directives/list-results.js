angular
.module('app')
.directive('listResults', function () {
    return {
        restrict: 'E',
        scope: {
            values: '=',
            eventChannel: '='
        },
        template: '<div ng-result="item in values">{{item.name}}</div>',
        link: function (scope, element, attrs) {
            scope.values = scope.values !== undefined ? scope.values : [];
            
            if (scope.eventChannel) {
                scope.eventChannel.subscribe('UPDATE_RESULTS', function (){
                    debugger;
                });
            }

        }
    };
});
