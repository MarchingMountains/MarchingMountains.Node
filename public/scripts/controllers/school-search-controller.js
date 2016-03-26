myApp.controller('SearchSchoolController', ['$scope', '$http', '$mdDialog',
'InstrumentsFactory', 'SchoolsFactory', function($scope, $http, $mdDialog, InstrumentsFactory, SchoolsFactory) {

  console.log("SchoolSearchController is loaded");

  $scope.InstrumentsFactory = InstrumentsFactory;
  $scope.SchoolsFactory = SchoolsFactory;

  $scope.InstrumentsFactory.factoryGetInstrumentsList().then(function() {
    $scope.instruments = $scope.InstrumentsFactory.instruments.list;
    console.log('instruments from controller: ', $scope.instruments);
  });

  $scope.searchSchool = function(selectedInstrument) {
    console.log(selectedInstrument);
    $scope.SchoolsFactory.factoryGetSchoolsList(selectedInstrument).then(function() {
      console.log('schools form controller');
    });
  };

}]);
