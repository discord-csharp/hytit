(function () {
    'use strict';

    angular.module('hytit.task')
        .controller('TasksController', ['$scope', '$uibModal', function ($scope, $uibModal) {
            $scope.tasks = [
                {
                    title: 'foo',
                    description: 'Lorem ipsum'
                },
                {
                    title: 'bar',
                    description: 'Lorem ipsum'
                }
            ];

            $scope.completeTask = function (task) {
                task.completed = !task.completed;
            };

            $scope.deleteTask = function (task) {
                task.deleted = !task.deleted;
            };

            $scope.addTask = function () {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'task/add-task.html',
                    controller: 'AddTaskController'
                });

                modalInstance.result.then(function (task) {
                    $scope.tasks.push(task);
                }, function () {
                    // Do nothing.
                });
            };
        }]);
})();