myApp.controller('SchoolSearchController', ['$scope', '$http', '$location',
'$mdDialog', '$mdMedia', 'InstrumentsFactory', 'SchoolsFactory', 'UserService',function($scope,
  $http, $location, $mdDialog, $mdMedia, InstrumentsFactory, SchoolsFactory, UserService,
  DonateNowController) {

  $scope.InstrumentsFactory = InstrumentsFactory;
  $scope.SchoolsFactory = SchoolsFactory;
  $scope.UserService = UserService;

  $scope.schoolSearchResults = $scope.SchoolsFactory.schoolSearchResults.list;
  $scope.selectedInstrument = $scope.SchoolsFactory.selectedInstrument.list;

  $scope.currentUser = $scope.UserService.watchCurrentUser.factoryUserId;

  $scope.InstrumentsFactory.factoryGetInstrumentsList().then(function() {
    $scope.instruments = $scope.InstrumentsFactory.instruments.list;
  });

  $scope.indexSearchSchool = function(selectedInstrument) {
    $scope.SchoolsFactory.factoryGetSchoolsList(selectedInstrument).then(function() {
      $scope.selectedInstrument = $scope.SchoolsFactory.selectedInstrument.list;
      $scope.schoolSearchResults = $scope.SchoolsFactory.schoolSearchResults.list;
      $location.url('/donors');
    });
  };

  $scope.searchSchool = function(selectedInstrument) {
    $scope.SchoolsFactory.factoryGetSchoolsList(selectedInstrument).then(function() {
      $scope.selectedInstrument = $scope.SchoolsFactory.selectedInstrument.list;
      $scope.schoolSearchResults = $scope.SchoolsFactory.schoolSearchResults.list;
    });
  };

  $scope.goToSchoolPage = function(selectedSchool) {
    $scope.SchoolsFactory.factorySetSelectedSchoolInfo(selectedSchool);
    $location.url('/school-info');
  };

  $scope.donateNowModal = function(selectedSchool, ev) {
    $scope.currentUser = $scope.UserService.askForCurrentUser().factoryUserId;
    $scope.SchoolsFactory.factorySetSelectedSchoolInfo(selectedSchool);
    if($scope.currentUser !== undefined) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
      $mdDialog.show({
        templateUrl: '../views/modals/donate-now-modal.html',
        controller: 'DonateNowController',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen,
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
