myApp.controller('DonateNowController', ['$scope', '$http', '$mdDialog', '$mdMedia',
'SchoolsFactory', 'DonationsFactory', 'UserService', function($scope, $http, $mdDialog, $mdMedia,
  SchoolsFactory, DonationsFactory, UserService) {

  $scope.SchoolsFactory = SchoolsFactory;
  $scope.DonationsFactory = DonationsFactory;
  $scope.UserService = UserService;

  $scope.selectedSchoolInfo = $scope.SchoolsFactory.selectedSchoolInfo.list;
  $scope.selectedInstrument = $scope.SchoolsFactory.selectedInstrument.list;

  DonationsFactory.userID = UserService.askForCurrentUser().factoryUserId;
  $scope.currentUser = DonationsFactory.userID;

 $scope.donateNow = function(ev) {

   var instrumentDonation = {
    date: 'today',
    donation_received: false,
    instrument_id: $scope.selectedInstrument.instrument_id,
    user_id: $scope.currentUser,
    school_id: $scope.selectedSchoolInfo.school_id,
   };

  var emailMessage = {
    from: 'mail@marchingmountains.org',
    to: $scope.selectedSchoolInfo.email,
    subject: 'New ' + $scope.selectedInstrument.instrument + ' donation for ' +
    $scope.selectedSchoolInfo.school_name,
    text: $scope.donorNote + '\n\nDo not reply to this e-mail. Mailbox is not monitored.'
  };

  $scope.DonationsFactory.factorySubmitDonation(instrumentDonation).then(function() {
    $scope.currentUserDonations = DonationsFactory.currentUserDonations;
  });

  $http.post('/donations/email', emailMessage);
  $mdDialog.hide();

    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Success!')
        .textContent('Your donation message has been sent! The band director will update ' +
        'the status of the donation once it has been received.')
        .ariaLabel('Alert success')
        .ok('OK')
        .targetEvent(ev)
    );
  };

  $scope.cancelDonation = function() {
    $mdDialog.hide();
  };

}]);
