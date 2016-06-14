(function () {
    'use strict';

    angular.module('hytit', [
        'ezfb',
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',

        'hytit.common',
        'hytit.header',
        'hytit.task'
    ])
        .config(function ($urlRouterProvider, $locationProvider, ezfbProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/');
            ezfbProvider.setInitParams({
                appId: '191769244553921'
            });
        })
        .constant('BASE_API_URL', '/api/');
})();