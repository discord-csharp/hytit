(function () {
    'use strict';

    angular.module('hytit', [
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',

        'hytit.common',
        'hytit.header',
        'hytit.task'
    ])
        .config(function ($urlRouterProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/');
        })
        .constant('BASE_API_URL', '/api/');
})();