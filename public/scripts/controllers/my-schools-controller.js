myApp.controller('MySchoolsController', ['$scope', '$mdDialog', '$mdMedia', 'SchoolsFactory', function($scope, $mdDialog, $mdMedia, SchoolsFactory, AddSchoolController) {
	console.log('Hello World');
	var schools = {};

	$scope.addSchool = function(ev) {
		console.log('Schools');
		var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
		$mdDialog.show({
			templateUrl: '../views/modals/add-school.html',
			controller: 'AddSchoolController',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose: true,
			fullscreen: useFullScreen
		});
	};

	var getSchools = function () {
		SchoolsFactory.getDirectorSchools().then(function() {
			console.log('schools received');
			//$scope.schools = dataFactory.schoolsList();
		});
	};

	getSchools();
	//$scope.directorSchools = SchoolsFactory.getDirectorSchools(directorID);
	//});
}]);