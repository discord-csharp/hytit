(function () {
    'use strict';

    angular.module('hytit.task')
        .controller('AddTaskController', ['$scope', '$uibModalInstance', 'tasks', function ($scope, $uibModalInstance, tasks) {
            $scope.tasks = tasks;
            $scope.selected = {
                task: $scope.tasks[0]
            };

            $scope.ok = function () {
                $uibModalInstance.close($scope.selected.task);
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }]);
})();