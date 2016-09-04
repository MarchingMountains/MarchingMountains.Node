describe('Test for donor-controller', function() {

beforeEach(function() {
    module('myApp');

    //Use bard to inject the adminFactory and a mock $http service
    //'$scope', 'DonationsFactory', 'UserService',
    bard.inject(
      'DonationsFactory', 
      '$rootScope',
      '$httpBackend',
      '$controller',
      '$q',
      '$sessionStorage'
    );
    $scope = $rootScope.$new();
    $httpBackend.when('GET', '/views/templates/home.html').respond({});
    session = $sessionStorage;
    session.CurrentUser = {email: 'hi@here.com', first_name: 'Bob', user_id: '1', factoryUserId:10 };
});

  it('Current donations should equal donation factory values', function() {
    //setup $q for testing promise in controller
    var deferred = $q.defer();
    //get a promise instance
    var promise = deferred.promise;

    //Set up mock user service, just put in whatever you want the user service to return for current user
    session.CurrentUser= {email: 'hi@here.com', first_name: 'Bob', user_id: '1', factoryUserId:10 };

    //set up mock donations factory with the promise we want it to resolve and a value for current user donations
    var mockDonationsFactory = {
      factoryGetCurrentUserDonations : function() {
        return promise; 
      },
      currentUserDonations: {donations: [{id:1}]}
    };
    //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
    var controller = $controller('DonorsController', { $scope: $scope, $sessionStorage:session, DonationsFactory:mockDonationsFactory });
    // Propagate promise resolution to 'then' functions using $apply().
    deferred.resolve();
    //apply scope to resolve all the promises
    $rootScope.$apply();

    expect($scope.currentUser).to.not.be.undefined;
    expect($scope.currentUser.factoryUserId).to.equal(10);
    //this should equal what we set up in the mock donations factory
    expect($scope.currentUserDonations.donations[0].id).to.equal(1);
  });

  it('Current donations should equal null when no user', function() {
    //Set up mock user service to return undefined
    session.CurrentUser = undefined; 
    //set up mock donations factory
    var mockDonationsFactory = {
    }
    //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
    var controller = $controller('DonorsController', { $scope: $scope, $sessionStorage:session, DonationsFactory:mockDonationsFactory });
    //apply scope to resolve all the promises
    $rootScope.$apply();

    expect($scope.currentUser).to.be.undefined;
    //this should equal what we set up in the mock donations factory
    expect($scope.currentUserDonations).to.equal(null);
  });

});