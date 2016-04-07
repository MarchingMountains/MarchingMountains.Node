myApp.controller('DonorsController', ['$scope', 'DonationsFactory', 'UserService',
  function($scope, DonationsFactory, UserService) {

  $scope.DonationsFactory = DonationsFactory;
  $scope.UserService = UserService;

  $scope.currentUser = $scope.UserService.askForCurrentUser().factoryUserId;

  if($scope.currentUser !== undefined) {
    $scope.DonationsFactory.factoryGetCurrentUserDonations($scope.currentUser).then(function() {
      $scope.currentUserDonations = $scope.DonationsFactory.currentUserDonations.list;
    });
  }

}]);
