myApp.controller('AddSchoolController', ['$scope', 'SchoolsFactory',
    '$mdDialog', '$mdMedia', function($scope, SchoolsFactory, $mdDialog, $mdMedia) {
        $scope.states = [{name: 'Minnesota', id: 1}, {name: 'Florida', id: 2}];

        $scope.name = '';
        $scope.website = '';
        $scope.address_line1 = '';
        $scope.address_line2 = '';
        $scope.city = '';
        $scope.state_id = '';
        $scope.zip = '';
        $scope.phone = '';
        $scope.instructions = '';
        $scope.user_id = '';

        var clearForm = function() {
            $scope.name = '';
            $scope.website = '';
            $scope.address_line1 = '';
            $scope.address_line2 = '';
            $scope.city = '';
            $scope.state_id = '';
            $scope.zip = '';
            $scope.phone = '';
            $scope.instructions = '';
        };

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

            console.log('school: ', school);

            SchoolsFactory.postDirectorSchool(school).then(function() {
                clearForm();
                $mdDialog.hide();
                SchoolsFactory.getDirectorSchools().then(function() {
                    $scope.schools = SchoolsFactory.schoolsList();
                    console.log($scope.schools);
                });
            });
        };
    }]);