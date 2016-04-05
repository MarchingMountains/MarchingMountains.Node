myApp.controller('SchoolSearchController', ['$scope', '$http', '$location',
'$mdDialog', '$mdMedia', 'InstrumentsFactory', 'SchoolsFactory', function($scope,
  $http, $location, $mdDialog, $mdMedia, InstrumentsFactory, SchoolsFactory,
  DonateNowController) {

  $scope.InstrumentsFactory = InstrumentsFactory;
  $scope.SchoolsFactory = SchoolsFactory;

  $scope.schoolSearchResults = $scope.SchoolsFactory.schoolSearchResults.list;
  $scope.selectedInstrument = $scope.SchoolsFactory.selectedInstrument.list;

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
    $scope.SchoolsFactory.factorySetSelectedSchoolInfo(selectedSchool);

    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

    $mdDialog.show({
      templateUrl: '../views/modals/donate-now-modal.html',
      controller: 'DonateNowController',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen,
    });
  };

}]);
