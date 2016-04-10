myApp.controller('AddSchoolController', ['$scope', '$http', '$mdDialog', '$mdMedia', 'SchoolsFactory', 'InstrumentsFactory',
    function($scope, $http, $mdDialog, $mdMedia, SchoolsFactory, InstrumentsFactory) {
        var instrumentsList = InstrumentsFactory.instruments.list;
        var factoryCurrentSchool = SchoolsFactory.currentSchool.school_name;

        $scope.states = InstrumentsFactory.statesList;
        $scope.schools = SchoolsFactory.allSchools;
        $scope.currentSchool = false;
        $scope.chipInstruments = loadInstruments();
        $scope.selectedInstruments = [];
        $scope.autocompleteDemoRequireMatch = true;

        $scope.transformChip = function(chip) {
            InstrumentsFactory.currentInstruments = $scope.selectedInstruments;
            if (angular.isObject(chip)) {
                return chip;
            }
        };

        function loadInstruments() {
            return instrumentsList.map(function (musicThing) {
                musicThing._lowername = musicThing.instrument.toLowerCase();
                return musicThing;
            });
        }

        if(factoryCurrentSchool !== undefined) {
            $scope.currentSchool = true;
            $scope.name = SchoolsFactory.currentSchool.school_name;
            $scope.website = SchoolsFactory.currentSchool.website;
            $scope.address_line1 = SchoolsFactory.currentSchool.address_line1;
            $scope.address_line2 = SchoolsFactory.currentSchool.address_line2;
            $scope.city = SchoolsFactory.currentSchool.city;
            $scope.state = {state_id: SchoolsFactory.currentSchool.state_id, state: SchoolsFactory.currentSchool.state};
            $scope.selectedState = {state_id: SchoolsFactory.currentSchool.state_id, state: SchoolsFactory.currentSchool.state};
            $scope.zip = SchoolsFactory.currentSchool.zip;
            $scope.phone = SchoolsFactory.currentSchool.phone;
            $scope.instructions = SchoolsFactory.currentSchool.instructions;
            InstrumentsFactory.currentInstruments = SchoolsFactory.currentSchool.instruments;
            $scope.selectedInstruments = InstrumentsFactory.currentInstruments;
            console.log('currentinstruments', SchoolsFactory.currentSchool.instruments);
        } else if(factoryCurrentSchool === undefined) {
            $scope.currentSchool = false;
        }

        $scope.saveSchool = function(state, ev) {
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

            var emailMessage = {
                from: 'mail@marchingmountains.org',
                to: 'kcolestock17@gmail.com',
                subject: 'New School Added: ' + $scope.name,
                text: $scope.name + ' has been submitted for approval, please go to the admin dashboard to' +
                ' approve this school. \n\nDo not reply to this e-mail. Mailbox is no monitored.'
            };

            $http.post('/schools/email', emailMessage);

            $scope.status = '  ';
            $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('Success!')
                    .textContent('Your school has been submitted for approval. ' +
                        'Once approved it will show in the instrument search!')
                    .ariaLabel('Alert success')
                    .ok('OK')
                    .targetEvent(ev)
            );

            SchoolsFactory.postDirectorSchool(school).then(function() {
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
