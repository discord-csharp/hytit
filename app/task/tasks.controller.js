(function () {
    'use strict';

    angular.module('hytit.task')
        .controller('TasksController', ['$scope', function ($scope) {
            $scope.tasks = [
                {
                    title: 'foo'
                },
                {
                    title: 'bar'
                }
            ];

            $scope.completeTask = function (task) {
                task.completed = !task.completed;
            };

            $scope.deleteTask = function (task) {
                task.deleted = !task.deleted;
            };
        }]);
})();