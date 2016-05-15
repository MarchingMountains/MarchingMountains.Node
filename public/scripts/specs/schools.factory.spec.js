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

    it('should do nothing if no  director schools', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/views/templates/home.html').respond({});
    $httpBackend.when('GET', '/schools/1').respond(null);
    SchoolsFactory.userID = 1;
    //call the method we are testing
    SchoolsFactory.getDirectorSchools();
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(SchoolsFactory.directorSchools.list).to.be.undefined;
    //call done on the test
    done();
  });

  it('should set selected school', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/views/templates/home.html').respond({});
    //$httpBackend.when('GET', '/schools/1').respond({'instruments':[{'instrument1':'flute'}]});
    //SchoolsFactory.userID = 1;
    //call the method we are testing
    SchoolsFactory.factorySetSelectedSchoolInfo({'name':'testSchool'});
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(SchoolsFactory.selectedSchoolInfo.list.name).to.equal('testSchool');
    //call done on the test
    done();
  });

    it('should return school list', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/views/templates/home.html').respond({});
    $httpBackend.when('GET', '/schools/1').respond({'instruments':[{'instrument1':'flute'}]});
    //call the method we are testing
    SchoolsFactory.userID = 1;
    SchoolsFactory.getDirectorSchools();
    
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();

    //flush the response from the fake http server
    $httpBackend.flush();
    var schools = SchoolsFactory.schoolsList();
    expect(schools).to.not.be.undefined;
    //call done on the test
    done();
  });


    it('should post a school', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/views/templates/home.html').respond({});
    $httpBackend.when('POST', '/schools/1').respond({'name':'testSchool', 'instruments':[{'instrument1':'flute'}]});
    $httpBackend.when('GET', '/schools/1').respond([{'school_name':'testSchool', 'instruments':[{'instrument1':'flute'}], 
        'donations':[
        {'instrument':'instrument', 'date': 'date', 'donation_id': 'donation_id', 'donation_received': 'donation_received', 'user_email':'user_email' }
        ]}]);
    //call the method we are testing
    SchoolsFactory.userID = 1;
    SchoolsFactory.postDirectorSchool({'name':'testSchool'});
    
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();

    //flush the response from the fake http server
    $httpBackend.flush();
    expect(SchoolsFactory.directorSchools.list).to.not.be.undefined;
    expect(SchoolsFactory.directorSchools.list[0].school_name).to.equal('testSchool');
    //call done on the test
    done();
  });

        it('should put a school', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/views/templates/home.html').respond({});
    $httpBackend.when('PUT', '/schools/1').respond({'name':'testSchool', 'instruments':[{'instrument1':'flute'}]});
    $httpBackend.when('GET', '/schools/1').respond([{'school_name':'testSchool', 'instruments':[{'instrument1':'flute'}], 
        'donations':[
        {'instrument':'instrument', 'date': 'date', 'donation_id': 'donation_id', 'donation_received': 'donation_received', 'user_email':'user_email' }
        ]}]);
    //call the method we are testing
    SchoolsFactory.userID = 1;
    SchoolsFactory.putDirectorSchool({'name':'testSchool'});
    
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();

    //flush the response from the fake http server
    $httpBackend.flush();
    expect(SchoolsFactory.directorSchools.list).to.not.be.undefined;
    expect(SchoolsFactory.directorSchools.list[0].school_name).to.equal('testSchool');
    //call done on the test
    done();
  });


    it('should not post a school', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/views/templates/home.html').respond({});
    $httpBackend.when('POST', '/schools/1').respond(null);
    //call the method we are testing
    SchoolsFactory.userID = 1;
    SchoolsFactory.postDirectorSchool({'name':'testSchool'});
    
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();

    //flush the response from the fake http server
    $httpBackend.flush();
    expect(SchoolsFactory.directorSchools.list).to.be.undefined;
    //call done on the test
    done();
  });

        it('should not put a school', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/views/templates/home.html').respond({});
    $httpBackend.when('PUT', '/schools/1').respond(null);
    //call the method we are testing
    SchoolsFactory.userID = 1;
    SchoolsFactory.putDirectorSchool({'name':'testSchool'});
    
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();

    //flush the response from the fake http server
    $httpBackend.flush();
    expect(SchoolsFactory.directorSchools.list).to.be.undefined;
    //call done on the test
    done();
  });

        it('should put a school but not have donations', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/views/templates/home.html').respond({});
    $httpBackend.when('PUT', '/schools/1').respond({'name':'testSchool', 'instruments':[{'instrument1':'flute'}]});
    $httpBackend.when('GET', '/schools/1').respond([{'school_name':'testSchool', 'instruments':[{'instrument1':'flute'}]}]);
    //call the method we are testing
    SchoolsFactory.userID = 1;
    SchoolsFactory.putDirectorSchool({'name':'testSchool'});
    
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();

    //flush the response from the fake http server
    $httpBackend.flush();
    expect(SchoolsFactory.directorSchools.list).to.not.be.undefined;
    expect(SchoolsFactory.directorSchools.list[0].donations).to.be.undefined;
    //call done on the test
    done();
  });

    afterEach(function() {
    });
});
