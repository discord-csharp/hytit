(function () {
    'use strict';

    angular.module('hytit.task')
        .controller('TasksController', ['$scope', '$q', '$uibModal', 'TaskService',
            function ($scope, $q, $uibModal, TaskService) {
                $scope.tasks = [];

                activate();

                function activate() {
                    var promises = [getTasks()];
                    $q.all(promises).then(function (response) {
                        // Do nothing.
                    });
                }

                function getTasks() {
                    $scope.isLoadingTasks = true;
                    return TaskService.getTasks()
                        .then(function (data) {
                            $scope.isLoadingTasks = false;
                            data.forEach(function (task) {
                                $scope.tasks.push(task);
                            }, this);
                        });
                }

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