myApp.controller('AdminController', ['$scope', '$mdMedia', '$mdDialog', 'AdminFactory', 'InstrumentsFactory',
    function($scope, $mdMedia, $mdDialog, AdminFactory, InstrumentsFactory) {
    $scope.adding = false;

    var getDonations = function() {
        AdminFactory.getAllDonations().then(function() {
            $scope.donationsTable = AdminFactory.allDonations;
        });
    };

    var getSchools = function() {
        AdminFactory.getAllSchools().then(function() {
            $scope.schoolsTable = AdminFactory.allSchools;
        });
    };

    var getUsers = function() {
        AdminFactory.getAllUsers().then(function() {
            $scope.usersTable = AdminFactory.allUsers;
        });
    };

    var getInstruments = function() {
        InstrumentsFactory.factoryGetInstrumentsList().then(function() {
            $scope.instruments = InstrumentsFactory.instruments;
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
        AdminFactory.currentSchool = school;
    };

    $scope.editInstrument = function(currentInstrument) {
        var instrument = {instrument: currentInstrument.instrument, instrument_id: currentInstrument.instrument_id};
        InstrumentsFactory.putInstrument(instrument).then(function() {
            $scope.instruments = InstrumentsFactory.instruments;
        });
    };

    $scope.showAdd = function() {
        $scope.adding = true;
    };

    $scope.addInstrument = function() {
        var newInstrument = $scope.newInstrument;
        console.log('newinstrument', $scope.newInstrument, $scope.adding);
        $scope.adding = false;
        console.log('newinstrument', newInstrument, $scope.adding);

        InstrumentsFactory.postInstrument(newInstrument).then(function() {
            $scope.instruments = InstrumentsFactory.instruments;
        });
        $scope.newInstrument = '';
    };

    $scope.deleteInstrument = function(instrumentID) {
        InstrumentsFactory.deleteInstrument(instrumentID).then(function() {
            $scope.instruments = InstrumentsFactory.instruments;
        });
    };

    getDonations();
    getSchools();
    getUsers();
    getInstruments();
}]);