myApp.controller('SchoolInfoController', ['$scope', '$http', '$location', '$mdDialog',
  '$mdMedia', 'SchoolsFactory', function($scope, $http, $location, $mdDialog, $mdMedia,
    SchoolsFactory, DonateNowController, tel) {

    console.log('SchoolInfoController loaded');

  // $scope.InstrumentsFactory = InstrumentsFactory;
  $scope.SchoolsFactory = SchoolsFactory;

  $scope.selectedSchoolInfo = $scope.SchoolsFactory.selectedSchoolInfo.list;

  $scope.returnToSearchResults = function() {
    $location.url('/school-search');
  };

  $scope.donateNowModal = function(ev) {

    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

    $mdDialog.show({
      templateUrl: '../views/templates/donate-now-modal.html',
      controller: 'DonateNowController',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen,
    });
  };

}]);
