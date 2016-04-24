describe('Factory: donationsFactory', function () {

  beforeEach(function() {
    module('myApp');

    //Use bard to inject the adminFactory and a mock $http service
    //'$http', '$window', '$localStorage', 
    bard.inject(
      'DonationsFactory', 
      '$rootScope',
      '$httpBackend',
      '$window',
      '$localStorage'
    );

    $httpBackend.when('GET', '/views/templates/home.html').respond({});
  });

  it('should return donations for school', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/donations/school/1').respond({donations:[]});
    //call the method we are testing
    DonationsFactory.factoryGetSelectedSchoolDonations(1);
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(DonationsFactory.selectedSchoolDonations.list).to.not.be.undefined;
    //call done on the test
    done();
  });

  it('should be undefined when no donations for school', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/donations/school/1').respond(null);
    //call the method we are testing
    DonationsFactory.factoryGetSelectedSchoolDonations(1);
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(DonationsFactory.selectedSchoolDonations.list).to.be.undefined;
    //call done on the test
    done();
  });

  it('should return donations for user', function (done) {
    //set userId on factory
    DonationsFactory.userID = 1;
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/donations/user/1').respond({donations:[]});
    //call the method we are testing
    DonationsFactory.factoryGetCurrentUserDonations();
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(DonationsFactory.currentUserDonations.list).to.not.be.undefined;
    //call done on the test
    done();
  });

  it('should be undefined when no donations for user', function (done) {
    //set userId on factory
    DonationsFactory.userID = 1;
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/donations/user/1').respond(null);
    //call the method we are testing
    DonationsFactory.factoryGetCurrentUserDonations();
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(DonationsFactory.currentUserDonations.list).to.be.undefined;
    //call done on the test
    done();
  });

  it('should return donations after submitting', function (done) {
    //set userId on factory
    DonationsFactory.userID = 1;
    var mockdonationInfo = { school_id : 1};
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('POST', '/donations/school/1').respond({donations:[]});
    $httpBackend.when('GET', '/donations/user/1').respond({donations:[]});
    //call the method we are testing with the mock object we need in the factory method as a parmater
    DonationsFactory.factorySubmitDonation(mockdonationInfo);
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(DonationsFactory.currentUserDonations.list).to.not.be.undefined;
    //call done on the test
    done();
  });

  it('should return promise after putting a donation', function (done) {
    //set userId on factory
    DonationsFactory.userID = 1;
    var mockdonationInfo = { donation_id : 1};
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('PUT', '/donations/received/1').respond({donations:[]});
    //call the method we are testing with the mock object we need in the factory method as a parmater
    var promise = DonationsFactory.factorySetDonationReceived(mockdonationInfo);
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(promise).to.not.be.undefined;
    //call done on the test
    done();
  });


});