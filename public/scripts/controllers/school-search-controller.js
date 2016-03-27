myApp.controller('SearchSchoolController', ['$scope', '$http', '$location', '$mdDialog',
'InstrumentsFactory', 'SchoolsFactory', '$timeout', function($scope, $http, $location, $mdDialog,
  InstrumentsFactory, SchoolsFactory, $timeout) {

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

  $scope.goToSchoolPage = function(selectedSchoolId) {

  };

}]);
