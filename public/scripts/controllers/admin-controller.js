myApp.controller('AdminController', ['$scope', '$mdDialog', '$mdMedia', 'SchoolsFactory', 'InstrumentsFactory', function($scope, $mdDialog, $mdMedia, SchoolsFactory, InstrumentsFactory, AddSchoolController) {



}]);


myApp.controller('ListController', ['$scope', 'dataFactory', function($scope, dataFactory) {
    $scope.dataFactory = dataFactory;
    $scope.userID = dataFactory.userID;
    $scope.loggedIn = dataFactory.loggedIn;

    var getParkData = function () {
        dataFactory.getParks().then(function() {
            $scope.parkTable = dataFactory.parksList();
        })
    };

    getParkData();

    $scope.visitPark = function(parkID) {
        dataFactory.updateMyParks(parkID).then(function() {
            getParkData();
        });
    };
}]);