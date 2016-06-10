(function () {
    'use strict';

    angular.module('hytit.task')
        .controller('TasksController', ['$scope', '$uibModal', function ($scope, $uibModal) {
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

            $scope.addTask = function (size) {
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'task/add-task.tpl.html',
                    controller: 'AddTaskController',
                    size: size,
                    resolve: {
                        tasks: function () {
                            return $scope.tasks;
                        }
                    }
                });

                modalInstance.result.then(function (selectedItem) {
                    $scope.selected = selectedItem;
                }, function () {
                    console.log('dismissed');
                });
            };

            $scope.toggleAnimation = function () {
                $scope.animationsEnabled = !$scope.animationsEnabled;
            };
        }]);
})();