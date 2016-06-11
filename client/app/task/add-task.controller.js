(function () {
    'use strict';

    angular.module('hytit.task')
        .controller('AddTaskController', ['$scope', '$uibModalInstance', function ($scope, $q, $uibModalInstance) {
            $scope.task = {};

            $scope.ok = function () {
                $uibModalInstance.close($scope.task);
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }]);
})();