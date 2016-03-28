myApp.controller('SchoolInfoController', ['$scope', '$http', '$location', '$mdDialog',
  'InstrumentsFactory', 'SchoolsFactory', function($scope, $http, $location, $mdDialog,
  InstrumentsFactory, SchoolsFactory) {

    console.log('SchoolInfoController loaded');

  $scope.InstrumentsFactory = InstrumentsFactory;
  $scope.SchoolsFactory = SchoolsFactory;

  $scope.selectedSchoolInfo = $scope.SchoolsFactory.selectedSchoolInfo.list;

  $scope.returnToSearchResults = function() {
    $location.url('/school-search');
  };

}]);
