(function() {
'use strict';

angular.module('myApp').controller('ApproveSchoolController', 
    ['$scope', '$http', '$mdDialog', '$mdMedia',
    'AdminFactory', function($scope, $http, $mdDialog, $mdMedia, AdminFactory) {

        var schoolID = AdminFactory.currentSchool.school_id;
        var approvalStatus = '';
        $scope.school_name = AdminFactory.currentSchool.school_name;

        $scope.verifySchool = function(status) {
            var schoolStatus = {approved: status};
            AdminFactory.verifySchool(schoolID, schoolStatus).then(function() {});
            $mdDialog.hide();

            if (status === true) {
                approvalStatus = 'Congratulations! Your school has been approved with Marching Mountains. ' +
                'Your school will now show up in the donor search.';
            } else {
                approvalStatus = 'We\'re sorry to say that after a review, we couldn\'t add ' +
                'your school to Marching Mountains. Please contact us with any questions.';
            }

            var emailMessage = {
                from: 'ianfelton@marchingmountains.org',
                to: AdminFactory.currentSchool.email,
                subject: 'School Status Update for: ' + AdminFactory.currentSchool.school_name,
                text: AdminFactory.currentSchool.school_name + ' status has been set to ' + approvalStatus +
                ' \n\nDo not reply to this e-mail. Mailbox is not monitored.'
            };

            $http.post('/schools/email', emailMessage);
        };
    }]);
})();
