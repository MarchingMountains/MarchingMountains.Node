myApp.controller('DonateNowController', ['$scope', '$http', '$mdDialog', '$mdMedia',
'SchoolsFactory', function($scope, $http, $mdDialog, $mdMedia, SchoolsFactory) {

  $scope.SchoolsFactory = SchoolsFactory;

  $scope.selectedSchoolInfo = $scope.SchoolsFactory.selectedSchoolInfo.list;

  $scope.cancelDonation = function() {
    $mdDialog.hide();
  };

}]);
