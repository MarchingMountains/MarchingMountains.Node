(function() {
'use strict';

angular.module('myApp').controller('DonorsController', ['$scope', 'DonationsFactory', '$sessionStorage',
  function($scope, DonationsFactory, $sessionStorage) {

    $scope.DonationsFactory = DonationsFactory;
    $scope.currentUser = $sessionStorage.CurrentUser;

    if ($scope.currentUser !== undefined) {
        $scope.DonationsFactory.factoryGetCurrentUserDonations().then(function() {
            $scope.currentUserDonations = $scope.DonationsFactory.currentUserDonations;
        });
    } else {
        $scope.currentUserDonations = null;
    }

  }]);
})();
