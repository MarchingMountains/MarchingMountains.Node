myApp.controller('AddSchoolController', ['$scope', 'SchoolsFactory', 'InstrumentsFactory',
    '$mdDialog', '$mdMedia', function($scope, SchoolsFactory, InstrumentsFactory, $mdDialog, $mdMedia) {
        $scope.states = InstrumentsFactory.statesList.list;
        $scope.schools = SchoolsFactory.allSchools;
        $scope.currentSchool = false;
        var factoryCurrentSchool = SchoolsFactory.currentSchool.school_name;

        if(factoryCurrentSchool != undefined) {
            $scope.currentSchool = true;
            $scope.name = SchoolsFactory.currentSchool.school_name;
            $scope.website = SchoolsFactory.currentSchool.website;
            $scope.address_line1 = SchoolsFactory.currentSchool.address_line1;
            $scope.address_line2 = SchoolsFactory.currentSchool.address_line2;
            $scope.city = SchoolsFactory.currentSchool.city;
            $scope.state = {state_id: SchoolsFactory.currentSchool.state_id, state: SchoolsFactory.currentSchool.state};
            $scope.selectedItem = {state_id: SchoolsFactory.currentSchool.state_id, state: SchoolsFactory.currentSchool.state};
            $scope.zip = SchoolsFactory.currentSchool.zip;
            $scope.phone = SchoolsFactory.currentSchool.phone;
            $scope.instructions = SchoolsFactory.currentSchool.instructions;
        } else if(factoryCurrentSchool == undefined) {
            $scope.currentSchool = false;
        }

        $scope.saveSchool = function(state) {
            var school = {
                name: $scope.name,
                website: $scope.website,
                address_line1: $scope.address_line1,
                address_line2: $scope.address_line2,
                city: $scope.city,
                state_id: state.state_id,
                zip: $scope.zip,
                phone: $scope.phone,
                instructions: $scope.instructions,
                instruments: InstrumentsFactory.currentInstruments
            };

            SchoolsFactory.postDirectorSchool(school).then(function() {
                //$scope.schools = SchoolsFactory.schoolsList();
                $scope.schools = SchoolsFactory.directorSchools;
                InstrumentsFactory.currentInstruments = [];
            });
            $mdDialog.hide();
        };

        $scope.updateSchool = function(state) {
            var school = {
                school_id: SchoolsFactory.currentSchool.school_id,
                user_id: SchoolsFactory.currentSchool.user_id,
                name: $scope.name,
                website: $scope.website,
                address_line1: $scope.address_line1,
                address_line2: $scope.address_line2,
                city: $scope.city,
                state_id: state.state_id,
                zip: $scope.zip,
                phone: $scope.phone,
                instructions: $scope.instructions,
                instruments: InstrumentsFactory.currentInstruments,
                approved: null
            };

            SchoolsFactory.putDirectorSchool(school).then(function() {
                $scope.schools = SchoolsFactory.schoolsList();
                InstrumentsFactory.currentInstruments = [];
            });
            $mdDialog.hide();
        };
    }
]);