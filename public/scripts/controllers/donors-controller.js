myApp.controller('DonorsController', ['$scope', '$location',
'$mdDialog', '$mdMedia', 'DonationsFactory', 'UserService', function($scope,
  $location, $mdDialog, $mdMedia, DonationsFactory, UserService) {

   $scope.DonationsFactory = DonationsFactory;
   $scope.UserService = UserService;

   $scope.currentUser = 2;
  //  $scope.currentUser = $scope.UserService.askForCurrentUser();

   $scope.DonationsFactory.factoryGetCurrentUserDonations($scope.currentUser).then(function() {
     $scope.currentUserDonations = $scope.DonationsFactory.currentUserDonations.list;
     console.log('controller currentUserDonations: ', $scope.currentUserDonations);
   });

}]);
