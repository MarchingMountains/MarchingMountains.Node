myApp.controller('AdminController', ['$scope', 'SchoolsFactory', 'InstrumentsFactory', 'DonationsFactory', 'UserService',
    function($scope, SchoolsFactory, InstrumentsFactory, DonationsFactory, UserService) {

    var getDonations = function() {
        DonationsFactory.getAllDonations().then(function() {
            $scope.donationsTable = DonationsFactory.allDonations.list;
        });
    };
    //
    var getSchools = function() {
        SchoolsFactory.getAllSchools().then(function() {
            $scope.schoolsTable = SchoolsFactory.allSchools.list;
        });
    };

    var getUsers = function() {
        UserService.getAllUsers().then(function() {
            $scope.usersTable = UserService.allUsers.list;
        });
    };

    var getInstruments = function() {
        InstrumentsFactory.factoryGetInstrumentsList().then(function() {
            $scope.instruments = InstrumentsFactory.instruments.list;
        });
    };

    getDonations();
    getSchools();
    getUsers();
    getInstruments();
}]);


//myApp.controller('ListController', ['$scope', 'dataFactory', function($scope, dataFactory) {
//    $scope.dataFactory = dataFactory;
//    $scope.userID = dataFactory.userID;
//    $scope.loggedIn = dataFactory.loggedIn;
//
//    var getParkData = function () {
//        dataFactory.getParks().then(function() {
//            $scope.parkTable = dataFactory.parksList();
//        })
//    };
//
//    getParkData();
//
//    $scope.visitPark = function(parkID) {
//        dataFactory.updateMyParks(parkID).then(function() {
//            getParkData();
//        });
//    };
//}]);