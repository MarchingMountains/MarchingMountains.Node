myApp.controller('AccountController', ['$scope', '$http', '$window', '$routeParams', function($scope, $http, $window, $routeParams) {

    // $scope.userID = $routeParams.id;
    $scope.userID = 1;
    $scope.showForm = true;
    $scope.showList = false;
    $scope.showChangePassword = false;
    $scope.editedPassword = false;
    $scope.states = [];
    $scope.selectedState = '';

    // hard coding this for now
    // retrieveUser($scope.userID);
    retrieveUser(1);
    getStates();

    function getStates() {
        $http.get('/states/').then(function(response) {
            if (response.data) {
                $scope.states = response.data;
            } else {
                console.log('failed to get state route');
                $window.location.href = '/';
            }
        })
    }

    function retrieveUser(id) {
        $http.get('/account/' + id).then(function(response) {
            if (response.data) {
                $scope.user = response.data[0];
            } else {
                console.log('failed to get account route');
                $window.location.href = '/';
            }
        }, function(response) {
            //$location.path('/unauthorized');
        });
    }

    $scope.submitAccountForm = function(isValid) {
        $scope.submitted = true;
        if (isValid) {

            $scope.edited = false;
            $scope.showForm = true;
            var id = $scope.userID;

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

            $http.put('/account/' + id, data).then(function(response){
                $scope.edited = true;
                $scope.showList = true;
                $scope.showForm = false;
                retrieveUser($scope.userID);
            });
        }
    };

    $scope.changePassword = function() {
        $scope.showChangePassword = true;
        $scope.showForm = false;
        $scope.showList = false;
    };

    $scope.submitPasswordForm = function(isValid) {

        if(isValid) {

            var id = $scope.userID;

            var data = {
                password: $scope.password
            };

            $http.put('/account/password/' + id, data).then(function(response){
                $scope.editedPassword = true;
            });
        }
    };

    $scope.accountToForm = function() {
        $scope.edited = false;
        $scope.showForm = true;
        $scope.showList = false;
    };

}]);
