myApp.controller('LoginController', ['$scope', 'UserService', function($scope, UserService) {

    console.log('inside login controller');
    $scope.UserService = UserService;
    $scope.username = '';
    $scope.password = '';
    $scope.loggedInUser = '';

    $scope.login = function() {
        console.log("inside login function");
        var user =  {
            username: $scope.username,
            password: $scope.password
        };
        $scope.UserService.postLogin(user)

    };

    $scope.$watch($scope.UserService.askForCurrentUser, function(newValue, oldValue){
        $scope.loggedInUser = $scope.UserService.askForCurrentUser();

    });

    var self = this;
    self.show_form = 'login';

    self.showRegister = function() {
        self.show_form = 'register';
        console.log('show register');
    };

    self.showLogin = function() {
        self.show_form = 'login';
        console.log('show login');
    };


}]);

//angular.module('dialogDemo', ['ngMaterial'])
//    .controller('AppCtrl', function($mdDialog, $log) {
//        var self = this;
//
//        self.login = function ($event) {
//            $mdDialog.show({
//                controller: 'dialogCtrl',
//                controllerAs: 'lc',
//                templateUrl: 'loginDialog.tmpl.html'
//            });
//        };
//    })
//    .controller('dialogCtrl', function($scope, $log) {
//        var self = this;
//        self.show_form = 'login';
//
//        self.showRegister = function() {
//            self.show_form = 'register';
//            console.log('show register');
//        };
//
//        self.showLogin = function() {
//            self.show_form = 'login';
//            console.log('show login');
//        };
//    });