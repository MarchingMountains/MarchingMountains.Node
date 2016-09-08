describe('Factory: adminFactory', function () {

  beforeEach(function() {
    module('myApp');

    //Use bard to inject the adminFactory and a mock $http service
    //'$http', '$window', '$localStorage', '$mdDialog'
    bard.inject(
      'AdminFactory', 
      '$rootScope',
      '$httpBackend',
      '$window',
      '$localStorage',
      '$mdDialog'
    );

    $httpBackend.when('GET', '/views/templates/home.html').respond({});
  });

  it('should return schools', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/api/admin/schools').respond({schools:[]});
    //call the method we are testing
    AdminFactory.getAllSchools();
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(AdminFactory.allSchools.list).to.not.be.undefined;
    //call done on the test
    done();
  });

    it('should not have schools on fail', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/api/admin/schools').respond(null);
    //call the method we are testing
    AdminFactory.getAllSchools();
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(AdminFactory.allSchools.list).to.be.undefined;
    //call done on the test
    done();
  });

it('should set to verify the school', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/api/admin/schools').respond({schools:[]});
    $httpBackend.when('PUT', '/api/admin/verify-school/1').respond({something:[]});
    //call the method we are testing
    AdminFactory.verifySchool(1,{});
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(AdminFactory.allSchools.list).to.not.be.undefined;
    //call done on the test
    done();
  });

it('should not set school on fail', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/api/admin/schools').respond(null);
    $httpBackend.when('PUT', '/api/admin/verify-school/1').respond(null);
    //call the method we are testing
    AdminFactory.verifySchool(1,{});
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(AdminFactory.allSchools.list).to.be.undefined;
    //call done on the test
    done();
  });

it('should get all donation', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/api/admin/donations').respond({something:[]});
    //call the method we are testing
    AdminFactory.getAllDonations();
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(AdminFactory.allDonations.list).to.not.be.undefined;
    //call done on the test
    done();
  });

it('should not set donations on fail', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/api/admin/donations').respond(null);
    //call the method we are testing
    AdminFactory.getAllDonations();
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(AdminFactory.allDonations.list).to.be.undefined;
    //call done on the test
    done();
  });

it('should get all Users', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/api/admin/users').respond({something:[]});
    //call the method we are testing
    AdminFactory.getAllUsers();
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(AdminFactory.allUsers.list).to.not.be.undefined;
    //call done on the test
    done();
  });

it('should not set users on fail', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/api/admin/users').respond(null);
    //call the method we are testing
    AdminFactory.getAllUsers();
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(AdminFactory.allUsers.list).to.be.undefined;
    //call done on the test
    done();
  });

});