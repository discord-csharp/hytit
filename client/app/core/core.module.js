(function () {
    'use strict';

    angular.module('hytit', [
        'ui.router',
        'ui.bootstrap',

        'hytit.common',
        'hytit.header',
        'hytit.task'
    ])
        .config(function ($urlRouterProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/');
        });
})();