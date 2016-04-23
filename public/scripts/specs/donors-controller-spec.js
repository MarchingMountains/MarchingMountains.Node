describe('Test for donor-controller', function() {

beforeEach(function() {
    module('myApp');

    //Use bard to inject the adminFactory and a mock $http service
    //'$scope', 'DonationsFactory', 'UserService',
    bard.inject(
      'DonationsFactory', 
      'UserService',
      '$rootScope',
      '$httpBackend',
      '$controller'
    );
    $scope = $rootScope.$new();
});

  it('Should equal a number', function() {
    var mockUserService = {
      askForCurrentUser: function() {
        return {email: 'hi@here.com', first_name: 'Bob', user_id: '1', factoryUserId:10 };
      }
    }
    var mockDonationsFactory = {
      factoryGetCurrentUserDonations : function() {
        return; 
      }
    }
    var controller = $controller('DonorsController', { $scope: $scope, UserService:mockUserService });
    expect($scope.currentUser).to.not.be.undefined;
    expect($scope.currentUser).to.equal(10);
  });
});


//SOLID programming
