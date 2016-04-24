myApp.controller('DonationReceivedController', ['$scope', '$http', '$mdDialog', '$mdMedia',
'SchoolsFactory', 'DonationsFactory', function($scope, $http, $mdDialog, $mdMedia,
  SchoolsFactory, DonationsFactory) {

 $scope.confirmReceived = function(ev) {

   var donationReceived = {
    donation_id: DonationsFactory.currentDonation.donation_id,
    donation_received: true,
   };

   var emailMessage = {
     from: 'mail@marchingmountains.org',
     to: DonationsFactory.currentDonation.donor_email,
     subject: DonationsFactory.currentDonation.school_name + 'has received the ' +
      DonationsFactory.currentDonation.instrument + '!',
     text: $scope.donorNote + '\n\nDo not reply to this e-mail. Mailbox is not monitored.'
   };

    DonationsFactory.factorySetDonationReceived(DonationsFactory.currentDonation).then(function() {
      SchoolsFactory.getDirectorSchools().then(function() {
      $http.post('/donations/email', emailMessage);
      $mdDialog.hide();
      });
    });

    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Success!')
        .textContent('Your message has been sent to the donor!')
        .ariaLabel('Alert success')
        .ok('OK')
        .targetEvent(ev)
    );
  };

  $scope.cancelReceived = function() {
    $mdDialog.hide();
  };
}]);
