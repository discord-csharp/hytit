(function () {
    'use strict';

    angular.module('hytit.task')
        .config(function ($stateProvider) {
            $stateProvider
                .state('list', {
                    url: '/',
                    templateUrl: 'task/tasks.html',
                    controller: 'TasksController'
                });
        });
})();