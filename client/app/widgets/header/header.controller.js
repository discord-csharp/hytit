(function () {
    'use strict';

    angular.module('hytit.header').
        controller('HeaderController', ['$scope', '$location',
            function ($scope, $location) {
                $scope.isNavItemActive = function (navPath) {
                    return navPath === $location.path();
                };
            }]);
})();