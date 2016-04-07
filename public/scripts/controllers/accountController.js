myApp.controller('AccountController', ['$scope', '$http', '$window', 'UserService', function($scope, $http, $window, UserService) {

    $scope.UserService = UserService;
    $scope.showForm = true;
    $scope.showList = false;
    $scope.showChangePassword = false;
    $scope.editedPassword = false;
    $scope.states = [];
    $scope.selectedState = '';
    $scope.loggedInUser = $scope.UserService.watchCurrentUser();

    var id = $scope.loggedInUser.factoryUserId;
    console.log('id: ', id);
    //var id = 1;

    // antoinette's test code
    //var self = this; // because 'this' could be changed by an outside caller
    //self.data;

    // some instance data that we can test
    //self.testData = [
    //    {message: 'I love unit testing', status: true},
    //    {message: 'I will use this info for evil', status: false}
    //];

    // a function we can test
    //self.uselessMethod = function() {
    //    return 8;
    //};

    // an http request we can test via mocks
    //$http.get('/datRoute').then(function(response){
    //    self.data = response.data;
    //});

    //end of antoinette's test code

    retrieveUser(id);
    getStates();

    function getStates() {
        $http.get('/states/').then(function(response) {
            if (response.data) {
                $scope.states = response.data;
            } else {
                console.log('failed to get state route');
                $window.location.href = '/';
            }
        });
    }

    function retrieveUser(id) {
        //console.log('id: ', id);
        $http.get('/account/' + id).then(function(response) {
            console.log(response.data);
            if (response.data) {
                $scope.user = response.data[0];
                $scope.selectedState = response.data[0].state_id;
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
            //var id = $scope.loggedInUser.factoryUserId;

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
                if (response.data) {
                    $scope.edited = true;
                    $scope.showList = true;
                    $scope.showForm = false;
                    retrieveUser(id);
                } else {
                    console.log('failed to get account route');
                    $window.location.href = '/';
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

        if(isValid) {

            var data = {
                password: $scope.password
            };

            $http.put('/account/password/' + id, data).then(function(response){
                if (response.data) {
                    $scope.editedPassword = true;
                } else {
                console.log('failed to get account route');
                $window.location.href = '/';
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
