(function () {
    'use strict';

    angular.module('hytit.task')
        .factory('TaskService', ['$http', 'BASE_API_URL', function ($http, BASE_API_URL) {
            var service = {
                getTasks: getTasks,
                addTask: addTask
            };

            return service;

            function getTasks() {
                return $http.get(BASE_API_URL + 'tasks')
                    .then(function (response) {
                        return response.data;
                    });
            }

            function addTask(task) {
                return $http.post(BASE_API_URL + 'tasks', task)
                    .then(function (response) {
                        return response.data;
                    });
            }
        }]);
})();