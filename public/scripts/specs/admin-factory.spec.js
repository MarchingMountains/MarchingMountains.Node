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
      '$localStorage'
    );
  });

  afterEach(function () {
    //Clear local storage after each test
    $window.localStorage.clear();
  });


  describe('When making admin requests', function() {
    beforeEach(function() {
    });

  });

  it('should return value from mock http request', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/views/templates/home.html').respond({});
    $httpBackend.when('GET', '/admin/schools').respond({schools:[]});
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


});