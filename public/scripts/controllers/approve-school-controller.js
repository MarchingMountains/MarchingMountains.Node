myApp.controller('ApproveSchoolController', ['$scope', '$http', '$mdDialog', '$mdMedia',
    'AdminFactory', function($scope, $http, $mdDialog, $mdMedia, AdminFactory) {

    var schoolID = AdminFactory.currentSchool.school_id;

    $scope.verifySchool = function(status) {
        var schoolStatus = {approved: status};
        AdminFactory.verifySchool(schoolID, schoolStatus).then(function() {
            console.log('verifySchool', schoolID, schoolStatus);
        });
        $mdDialog.hide();
    };
}]);
