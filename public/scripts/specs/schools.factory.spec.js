describe('Test for schools factory', function() {

    beforeEach(function() {
        module('myApp');

        //Use bard to inject the adminFactory and a mock $http service
        bard.inject(
            '$rootScope',
            '$httpBackend',
            'SchoolsFactory'
        );
    });

  it('should return schools', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/views/templates/home.html').respond({});
    $httpBackend.when('GET', '/schools/instruments/1').respond({'instruments':[{'instrument1':'flute'}]});
    //call the method we are testing
    SchoolsFactory.factoryGetSchoolsList({instrument_id:1});
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(SchoolsFactory.schoolSearchResults.list).to.not.be.undefined;
    expect(SchoolsFactory.selectedInstrument.list).to.not.be.undefined;
    //call done on the test
    done();
  });

  it('should return director schools', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/views/templates/home.html').respond({});
    $httpBackend.when('GET', '/schools/1').respond({'instruments':[{'instrument1':'flute'}]});
    SchoolsFactory.userID = 1;
    //call the method we are testing
    SchoolsFactory.getDirectorSchools();
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(SchoolsFactory.directorSchools.list).to.not.be.undefined;
    //call done on the test
    done();
  });

    afterEach(function() {
    });
});
