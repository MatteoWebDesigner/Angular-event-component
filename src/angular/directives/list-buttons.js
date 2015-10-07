angular
.module('app')
.directive('listButtons', function (mediatorManger) {
    return {
        restrict: 'E',
        scope: {
            values: '=',
            eventChannel: '=',
            type: '@' // template
        },
        template: '<ul><li ng-repeat="item in values"><button ng-click="action(item)" class="btn">{{item.name}}</button></li></ul>',
        link: function (scope, element, attrs) {
            scope.values = scope.values !== undefined ? scope.values : [];

            scope.action = function (item) {
                scope.eventChannel.emit('BUTTON_UPDATE',item);
            }
        }
    };
});
