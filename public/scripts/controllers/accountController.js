myApp.controller('AccountController', ['$scope', '$http', '$window', '$location', '$routeParams', function($scope, $http, $window, $location, $routeParams) {

    // $scope.userID = $routeParams.id;
    $scope.userID = 1;
    $scope.showForm = true;
    $scope.showList = false;
    $scope.states = [];

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
        }, function(response) {
            //$location.path('/unauthorized');
        });
    };

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

    $scope.submitForm = function(isValid) {
        $scope.submitted = true;
        if (isValid) {

            console.log('our form is amazing');
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
                state: $scope.user.state_id,
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

    //$scope.editAccount = function(id) {
    //
    //
    //    //if($scope.user.email === null) {
    //    //    console.log('email blank');
    //    //    alert("please fill out email field");
    //    //} else {
    //
    //        $scope.edited = false;
    //        $scope.showForm = true;
    //        var data = {
    //            email: $scope.user.email,
    //            password: $scope.user.password,
    //            first_name: $scope.user.first_name,
    //            last_name: $scope.user.last_name,
    //            address_line1: $scope.user.address_line1,
    //            address_line2: $scope.user.address_line2,
    //            city: $scope.user.city,
    //            state: $scope.user.state_id,
    //            zip: $scope.user.zip,
    //            phone: $scope.user.phone
    //        };
    //
    //        $http.put('/account/' + id, data).then(function(response){
    //            $scope.edited = true;
    //            $scope.showList = true;
    //            $scope.showForm = false;
    //            retrieveUser($scope.userID);
    //        });
    //
    //    //}
    //
    //};

    $scope.accountToForm = function() {
        $scope.edited = false;
        $scope.showForm = true;
        $scope.showList = false;
    };

}]);
