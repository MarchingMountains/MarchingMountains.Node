myApp.controller('MySchoolsController',
	['$scope', '$mdDialog', '$mdMedia', 'SchoolsFactory', 'InstrumentsFactory', 'UserService',
		function($scope, $mdDialog, $mdMedia, SchoolsFactory, InstrumentsFactory, UserService, AddSchoolController) {
	$scope.schools = [];
	$scope.test = 'test';
			var user = UserService.askForCurrentUser();
			//user = user.factoryUserId;
			console.log('user::', user);

	var getInstruments = function() {
		InstrumentsFactory.factoryGetInstrumentsList().then(function() {});
	};

	var getStates = function() {
		InstrumentsFactory.getStates().then(function() {});
	};


	var getSchools = function () {
		SchoolsFactory.getDirectorSchools().then(function() {
			$scope.schools = SchoolsFactory.directorSchools;
		});
	};

	$scope.addSchool = function(ev) {
		SchoolsFactory.currentSchool = {};
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

	$scope.editSchool = function(ev, school) {
		var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
		$mdDialog.show({
			templateUrl: '../views/modals/add-school.html',
			controller: 'AddSchoolController',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose: true,
			fullscreen: useFullScreen
		});
		SchoolsFactory.currentSchool = school;
	};

	getSchools();
	getInstruments();
	getStates();
}]);