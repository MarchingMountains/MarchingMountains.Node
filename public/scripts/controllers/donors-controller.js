myApp.controller('DonorsController', ['$scope', 'DonationsFactory', 'UserService',
  function($scope, DonationsFactory, UserService) {

  $scope.DonationsFactory = DonationsFactory;
  $scope.UserService = UserService;

  DonationsFactory.userID = UserService.askForCurrentUser().factoryUserId;
  $scope.currentUser = DonationsFactory.userID;

  if($scope.currentUser !== undefined) {
    $scope.DonationsFactory.factoryGetCurrentUserDonations().then(function() {
      $scope.currentUserDonations = $scope.DonationsFactory.currentUserDonations;
    });
  }
}]);
