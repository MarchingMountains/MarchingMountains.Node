myApp.controller('AdminController', ['$scope', '$mdMedia', '$mdDialog', 'SchoolsFactory', 'InstrumentsFactory', 'DonationsFactory', 'UserService',
    function($scope, $mdMedia, $mdDialog, SchoolsFactory, InstrumentsFactory, DonationsFactory, UserService) {

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

    $scope.approveSchoolModal = function(school, ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

        $mdDialog.show({
            templateUrl: '../views/modals/approve-school.html',
            controller: 'ApproveSchoolController',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        });
        SchoolsFactory.currentSchool = school;
    };

    $scope.editInstrument = function(currentInstrument) {
        console.log('editInstrument::', currentInstrument);
        var instrument = {instrument: currentInstrument.instrument, instrument_id: currentInstrument.instrument_id};
        InstrumentsFactory.putInstrument(instrument).then(function() {
            $scope.instruments = InstrumentsFactory.instruments.list;
        });
    };

    $scope.deleteInstrument = function(instrumentID) {
        InstrumentsFactory.deleteInstrument(instrumentID).then(function() {
            $scope.instruments = InstrumentsFactory.instruments.list;
        });
    };

    getDonations();
    getSchools();
    getUsers();
    getInstruments();
}]);