(function() {
'use strict';

angular.module('myApp').controller('SchoolInfoController', ['$scope', '$http', '$location', '$mdDialog',
  '$mdMedia', 'SchoolsFactory', 'DonationsFactory', '$sessionStorage', function($scope, $http, $location,
    $mdDialog, $mdMedia, SchoolsFactory, DonationsFactory, $sessionStorage) {

    $scope.SchoolsFactory = SchoolsFactory;
    $scope.DonationsFactory = DonationsFactory;

    $scope.selectedSchoolInfo = $scope.SchoolsFactory.selectedSchoolInfo.list;
    if ($scope.selectedSchoolInfo !== undefined) {
        $scope.DonationsFactory.factoryGetSelectedSchoolDonations($scope.selectedSchoolInfo.school_id).then(function() {
            $scope.selectedSchoolDonations = $scope.DonationsFactory.selectedSchoolDonations.list;
        });
    } else {
        $location.url('/home');
    }

    $scope.returnToSearchResults = function() {
        $location.url('/donors');
    };

    $scope.donateNowModal = function(ev) {

        if ($sessionStorage.CurrentUser !== undefined) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
            $mdDialog.show({
                templateUrl: '../views/modals/donate-now-modal.html',
                controller: 'DonateNowController',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            });
        } else {
            $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
            $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Log in')
                .textContent('Please register or log in to donate.')
                .ariaLabel('Please log in.')
                .ok('OK')
                .targetEvent(ev)
            );
        }
    };
}]);
})();
