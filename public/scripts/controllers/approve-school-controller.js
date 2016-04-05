myApp.controller('ApproveSchoolController', ['$scope', '$http', '$mdDialog', '$mdMedia',
    'SchoolsFactory', function($scope, $http, $mdDialog, $mdMedia, SchoolsFactory) {

    var schoolID = SchoolsFactory.currentSchool.school_id;

    $scope.verifySchool = function(status) {
        var schoolStatus = {approved: status};
        SchoolsFactory.verifySchool(schoolID, schoolStatus).then(function() {
            console.log('verifySchool', schoolID, schoolStatus);
        });
        $mdDialog.hide();
    };
}]);
