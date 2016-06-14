(function () {
    'use strict';

    angular.module('hytit.header').
        controller('HeaderController', ['$scope', '$location', 'ezfb',
            function ($scope, $location, ezfb) {
                $scope.isAuthed = false;

                activate();

                function activate() {
                    var autoToJSON = ['loginStatus', 'apiMe'],
                        jsonSpaces = 2;

                    updateLoginStatus(updateApiMe);
                    angular.forEach(autoToJSON, function (varName) {
                        $scope.$watch(varName, function (val) {
                            $scope[varName + 'JSON'] = JSON.stringify(val, null, jsonSpaces);
                        }, true);
                    });
                }

                $scope.isNavItemActive = function (navPath) {
                    return navPath === $location.path();
                };

                $scope.login = function () {
                    ezfb.login(function (res) {
                        if (res.authResponse) {
                            updateLoginStatus(updateApiMe);
                        }
                    }, { scope: 'email,user_friends,public_profile' });
                };

                $scope.logout = function () {
                    ezfb.logout(function () {
                        updateLoginStatus(updateApiMe);
                    });
                };

                function updateLoginStatus(more) {
                    ezfb.getLoginStatus(function (res) {
                        $scope.loginStatus = res;
                        (more || angular.noop)();
                    });
                }

                function updateApiMe() {
                    ezfb.api('/me', function (res) {
                        $scope.apiMe = res;
                    });
                }
            }]);
})();