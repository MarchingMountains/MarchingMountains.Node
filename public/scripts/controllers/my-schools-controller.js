myApp.controller('MySchoolsController',
	['$scope', '$mdDialog', '$mdMedia', 'SchoolsFactory', 'InstrumentsFactory',
	'DonationsFactory', 'UserService', function($scope, $mdDialog, $mdMedia,
		SchoolsFactory, InstrumentsFactory,DonationsFactory, UserService, AddSchoolController, tel) {

	$scope.schools = [];
	$scope.donations = [];

	SchoolsFactory.userID = UserService.askForCurrentUser().factoryUserId;

	var getInstruments = function() {
		InstrumentsFactory.factoryGetInstrumentsList().then(function() {});
	};

	var getStates = function() {
		InstrumentsFactory.getStates().then(function() {});
	};

	var getSchools = function () {
		SchoolsFactory.getDirectorSchools().then(function() {
			$scope.schools = SchoolsFactory.directorSchools;
			$scope.donations = SchoolsFactory.directorDonations;
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

	$scope.donationReceived = function(ev, donation) {
		var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
		$mdDialog.show({
			templateUrl: '../views/modals/donate-received-modal.html',
			controller: 'DonationReceivedController',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose: true,
			fullscreen: useFullScreen
		});
		DonationsFactory.currentDonation = donation;
	};

	getSchools();
	getInstruments();
	getStates();
}]);
