myApp.controller('AddSchoolController', ['$scope', 'SchoolsFactory', 'InstrumentsFactory',
    '$mdDialog', '$mdMedia', function($scope, SchoolsFactory, InstrumentsFactory, $mdDialog, $mdMedia) {
        $scope.states = [{name: 'Minnesota', id: 1}, {name: 'Florida', id: 2}];
        $scope.schools = SchoolsFactory.allSchools;
        $scope.currentSchool = false;
        console.log()
        var factoryCurrentSchool = SchoolsFactory.currentSchool.school_name;
        console.log(factoryCurrentSchool);

        if(factoryCurrentSchool != undefined) {
            $scope.currentSchool = true;
            $scope.name = SchoolsFactory.currentSchool.school_name;
            $scope.website = SchoolsFactory.currentSchool.website;
            $scope.address_line1 = SchoolsFactory.currentSchool.address_line1;
            $scope.address_line2 = SchoolsFactory.currentSchool.address_line2;
            $scope.city = SchoolsFactory.currentSchool.city;
            $scope.state_id = SchoolsFactory.currentSchool.state_id;
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
                state_id: state.id,
                zip: $scope.zip,
                phone: $scope.phone,
                instructions: $scope.instructions
            };

            SchoolsFactory.postDirectorSchool(school).then(function() {
                $scope.schools = SchoolsFactory.schoolsList();
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
                state_id: state.id,
                zip: $scope.zip,
                phone: $scope.phone,
                instructions: $scope.instructions
            };

            SchoolsFactory.putDirectorSchool(school).then(function() {
                $scope.schools = SchoolsFactory.schoolsList();
            });
            $mdDialog.hide();
        };
    }
]);