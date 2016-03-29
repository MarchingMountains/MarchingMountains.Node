myApp.controller('SchoolSearchController', ['$scope', '$http', '$location',
'$mdDialog', '$mdMedia', 'InstrumentsFactory', 'SchoolsFactory', function($scope,
  $http, $location, $mdDialog, $mdMedia, InstrumentsFactory, SchoolsFactory,
  DonateNowController) {

  console.log("SchoolSearchController is loaded");

  $scope.InstrumentsFactory = InstrumentsFactory;
  $scope.SchoolsFactory = SchoolsFactory;

  $scope.schoolSearchResults = $scope.SchoolsFactory.schoolSearchResults.list;
  $scope.selectedInstrument = $scope.SchoolsFactory.selectedInstrumentName.list;

  $scope.InstrumentsFactory.factoryGetInstrumentsList().then(function() {
    $scope.instruments = $scope.InstrumentsFactory.instruments.list;
  });

  $scope.indexSearchSchool = function(selectedInstrumentName, selectedInstrumentId) {
    $scope.SchoolsFactory.factoryGetSchoolsList(selectedInstrumentName, selectedInstrumentId).then(function() {
      $scope.selectedInstrument = $scope.SchoolsFactory.selectedInstrumentName.list;
      $scope.schoolSearchResults = $scope.SchoolsFactory.schoolSearchResults.list;
      $location.url('/school-search');
    });
  };

  $scope.searchSchool = function(selectedInstrumentName, selectedInstrumentId) {
    $scope.SchoolsFactory.factoryGetSchoolsList(selectedInstrumentName, selectedInstrumentId).then(function() {
      $scope.selectedInstrument = $scope.SchoolsFactory.selectedInstrumentName.list;
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
      templateUrl: '../views/templates/donate-now-modal.html',
      controller: 'DonateNowController',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen,
    });
  };

}]);
