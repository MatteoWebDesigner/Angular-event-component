angular.module('app', ['app.core']);
angular.module('app.core', []);
angular.module('app.core').constant('CoreComponentEvents', {
    INIT: 'CoreComponentInit'
}).component('coreComponent', {
    bindings: {
        fromAttribute: '@'
    },
    template: `
            <div class="c_CoreComponent">
                <div>{{$ctrl.fromAttribute}}</div>
                <div>{{$ctrl.fromController}}</div>
            </div>
        `,
    controller: function () {
        this.fromController = 'controller';

        this.$onInit = () => {};
    }
});
//# sourceMappingURL=app.js.map
