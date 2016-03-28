myApp.controller('MySchoolsController', ['$scope', '$mdDialog', '$mdMedia', 'SchoolsFactory', function($scope, $mdDialog, $mdMedia, SchoolsFactory, AddSchoolController) {
	$scope.schools = [];

	var getSchools = function () {
		SchoolsFactory.getDirectorSchools().then(function() {
			$scope.schools = SchoolsFactory.schoolsList();
		});
	};

	$scope.addSchool = function(ev) {
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

	//$scope.editSchool = function(ev) {
	//	var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
	//	$mdDialog.show({
	//		templateUrl: '../views/modals/add-school.html',
	//		controller: 'AddSchoolController',
	//		parent: angular.element(document.body),
	//		targetEvent: ev,
	//		clickOutsideToClose: true,
	//		fullscreen: useFullScreen
	//	});
	//};

	getSchools();
}]);