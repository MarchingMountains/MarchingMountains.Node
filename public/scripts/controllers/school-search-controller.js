myApp.controller('SearchSchoolController', ['$scope', '$http', '$mdDialog',
  function($scope, $http, $mdDialog, $timeout, $q, $log) {

  console.log("SchoolSearchController is loaded");

  $scope.instrument = ['Guitar', 'Trumpet', 'Percussion', 'Flute', 'Trombone',
    'Snare Drum', 'Not Piano', 'Mayonaise', 'Triangle', 'Saxophone', 'Hammer'];

  $scope.searchSchool = function(selectedInstrument) {
    console.log(selectedInstrument);
  };
}]);
