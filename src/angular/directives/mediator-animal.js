angular
.module('app')
.service('mediatorAnimalService',function(){
    var eventListeners = {};
    var subscribeListener = {};

    this.subscribe = function (eventName,callback) {
        debugger;
        subscribeListener[eventName] = callback;
    }

    this.emit = function (eventName,data) {
        eventListeners[eventName](data);
    }

    // relationship beetween components
    on('BUTTON_UPDATE', function (data) {
        alert('listening','BUTTON_UPDATE');
    });

    // function
    function on (eventName,callback) {
        eventListeners[eventName] = callback;
    }
})
.directive('mediatorAnimal', function (mediatorAnimalService) {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div ng-transclude></div>',
        controllerAs:'animal',
        controller: function () {

            this.eventChannel = mediatorAnimalService;
            this.items = [{
                name: 'frog'
            },{
                name: 'cat'
            },{
                name: 'dog'
            }];

        }
    };
});