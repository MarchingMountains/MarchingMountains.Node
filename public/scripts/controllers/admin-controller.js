myApp.controller('AdminController', ['$scope', '$mdMedia', '$mdDialog', 'AdminFactory', 'InstrumentsFactory',
    function($scope, $mdMedia, $mdDialog, AdminFactory, InstrumentsFactory) {
    $scope.adding = false;

    var getDonations = function() {
        AdminFactory.getAllDonations().then(function() {
            $scope.donationsTable = AdminFactory.allDonations.list;
        });
    };

    var getSchools = function() {
        AdminFactory.getAllSchools().then(function() {
            $scope.schoolsTable = AdminFactory.allSchools.list;
        });
    };

    var getUsers = function() {
        AdminFactory.getAllUsers().then(function() {
            $scope.usersTable = AdminFactory.allUsers.list;
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
        AdminFactory.currentSchool = school;
    };

    $scope.editInstrument = function(currentInstrument) {
        console.log('editInstrument::', currentInstrument);
        var instrument = {instrument: currentInstrument.instrument, instrument_id: currentInstrument.instrument_id};
        InstrumentsFactory.putInstrument(instrument).then(function() {
            $scope.instruments = InstrumentsFactory.instruments.list;
        });
    };

    $scope.showAdd = function() {
        console.log('adding', $scope.adding);
        $scope.adding = true;
        console.log('adding', $scope.adding);
    };

    $scope.addInstrument = function() {
        var newInstrument = $scope.newInstrument;
        console.log('newinstrument', $scope.newInstrument, $scope.adding);
        $scope.adding = false;
        console.log('newinstrument', newInstrument, $scope.adding);

        InstrumentsFactory.postInstrument(newInstrument).then(function() {
            $scope.instruments = InstrumentsFactory.instruments.list;
        });
    };

    //$scope.deleteInstrument = function(instrumentID) {
    //    console.log('holyshit, no way::', instrumentID);
    //    InstrumentsFactory.deleteInstrument(instrumentID).then(function() {
    //        $scope.instruments = InstrumentsFactory.instruments.list;
    //    });
    //};

    getDonations();
    getSchools();
    getUsers();
    getInstruments();
}]);