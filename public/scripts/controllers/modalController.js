myApp.controller('ModalController', ['$scope','$location', 'UserService',
    '$mdDialog', '$mdMedia', function($scope, $location, $mdDialog, $mdMedia, UserService) {
        console.log('inside Modal Controller');

        $scope.UserService = UserService;

        $scope.openModal = function(ev) {
            //var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

            $mdDialog.show({
                templateUrl: '../views/templates/login.html',
                controller: 'LoginController',
                controllerAs: 'lc',
                scope: $scope.$new(),
                targetEvent: ev,
                clickOutsideToClose: true
                });
            }


    }]);
