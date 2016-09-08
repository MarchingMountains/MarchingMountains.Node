(function() {
'use strict';

angular.module('myApp').controller('AccountController', ['$scope', '$http', '$sessionStorage', '$location',
    function($scope, $http, $sessionStorage, $location) {

    $scope.showForm = true;
    $scope.showList = false;
    $scope.showChangePassword = false;
    $scope.editedPassword = false;
    $scope.states = [];
    $scope.selectedState = '';

    try {
        var id = $sessionStorage.CurrentUser.factoryUserId;
        retrieveUser(id);
        getStates();
    }
    catch(e) {
        $location.path("/");
    }

    function getStates() {
        $http.get('/api/states/').then(function(response) {
            if (response.data) {
                $scope.states = response.data;
            }
        });
    }

    function retrieveUser(id) {
        $http.get('/api/account/' + id).then(function(response) {
            if (response.data) {
                $scope.user = response.data[0];
                $scope.selectedState = response.data[0].state_id;
            }
        });
    }

    $scope.submitAccountForm = function(isValid) {
        $scope.submitted = true;

        if (isValid) {

            $scope.edited = false;
            $scope.showForm = true;

            var data = {
                email: $scope.user.email,
                password: $scope.user.password,
                first_name: $scope.user.first_name,
                last_name: $scope.user.last_name,
                address_line1: $scope.user.address_line1,
                address_line2: $scope.user.address_line2,
                city: $scope.user.city,
                state: $scope.selectedState,
                zip: $scope.user.zip,
                phone: $scope.user.phone
            };

            $http.put('/api/account/' + id, data).then(function(response) {
                if (response.data) {
                    $scope.edited = true;
                    $scope.showList = true;
                    $scope.showForm = false;
                    $sessionStorage.CurrentUser.first_name = $scope.user.first_name;
                    retrieveUser(id);
                }
            });
        }
    };

    $scope.changePassword = function() {
        $scope.showChangePassword = true;
        $scope.showForm = false;
        $scope.showList = false;
    };

    $scope.accountList = function() {
        $scope.showChangePassword = false;
        $scope.showForm = false;
        $scope.showList = true;
    };

    $scope.submitPasswordForm = function(isValid) {

        if (isValid) {

            var data = {
                password: $scope.password
            };

            $http.put('/api/account/password/' + id, data).then(function(response) {
                if (response.data) {
                    $scope.editedPassword = true;
                }
            });
        }
    };

    $scope.accountToForm = function() {
        $scope.edited = false;
        $scope.showForm = true;
        $scope.showList = false;
    };
}]);
})();
