myApp.controller('SearchSchoolController', ['$scope', '$http', '$mdDialog',
'InstrumentsFactory', function($scope, $http, $mdDialog, InstrumentsFactory) {

  console.log("SchoolSearchController is loaded");

  $scope.InstrumentsFactory = InstrumentsFactory;

  $scope.instrument = ['Guitar', 'Trumpet', 'Percussion', 'Flute', 'Trombone',
    'Snare Drum', 'Not Piano', 'Mayonaise', 'Triangle', 'Saxophone', 'Hammer'];

  $scope.InstrumentsFactory.factoryGetInstrumentsList();

  $scope.searchSchool = function(selectedInstrument) {
    console.log(selectedInstrument);
  };

}]);
