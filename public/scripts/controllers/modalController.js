myApp.controller('ModalController', ['$scope','$location',
    '$mdDialog', '$mdMedia', function($scope, $location, $mdDialog, $mdMedia) {
        console.log('inside Modal Controller');

        $scope.openModal = function(ev) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

            $mdDialog.show({
                templateUrl: '../views/templates/login.html',
                controller: 'LoginController',
                controllerAs: 'lc',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: useFullScreen

                });
            }


    }]);
