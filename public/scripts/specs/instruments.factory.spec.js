describe('Test for instruments factory', function() {

    beforeEach(function() {
        module('myApp');

        //Use bard to inject the adminFactory and a mock $http service
        bard.inject(
            '$rootScope',
            '$httpBackend',
            'InstrumentsFactory'
        );
    });

  it('should return instruments', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/views/templates/home.html').respond({});
    $httpBackend.when('GET', '/instruments').respond({'instruments':[{'instrument1':'flute'}]});
    //call the method we are testing
    InstrumentsFactory.factoryGetInstrumentsList();
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(InstrumentsFactory.instruments.list).to.not.be.undefined;
    //call done on the test
    done();
  });

   it('should post instruments', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/views/templates/home.html').respond({});
    $httpBackend.when('GET', '/instruments').respond({'instruments':[{'instrument1':'flute'}]});
    $httpBackend.when('POST', '/instruments').respond({'instruments':[{'instrument1':'flute'}]});
    //call the method we are testing
    InstrumentsFactory.postInstrument({instrument_id:1});
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(InstrumentsFactory.instruments.list).to.not.be.undefined;
    //call done on the test
    done();
  });

  it('should put instruments', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/views/templates/home.html').respond({});
    $httpBackend.when('GET', '/instruments').respond({'instruments':[{'instrument1':'flute'}]});
    $httpBackend.when('PUT', '/instruments/1').respond({'instruments':[{'instrument1':'flute'}]});
    //call the method we are testing
    InstrumentsFactory.putInstrument({instrument_id:1});
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(InstrumentsFactory.instruments.list).to.not.be.undefined;
    //call done on the test
    done();
  });

  it('should delete instruments', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/views/templates/home.html').respond({});
    $httpBackend.when('GET', '/instruments').respond({'instruments':[{'instrument1':'flute'}]});
    $httpBackend.when('DELETE', '/instruments/1').respond({'instruments':[{'instrument1':'flute'}]});
    //call the method we are testing
    InstrumentsFactory.deleteInstrument(1);
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(InstrumentsFactory.instruments.list).to.not.be.undefined;
    //call done on the test
    done();
  });

  it('should return states', function (done) {
    //object to store result of our call
    //Setup $http backend to return mock results
    $httpBackend.when('GET', '/views/templates/home.html').respond({});
    $httpBackend.when('GET', '/states').respond({'states':[{'state1':'wv'}]});
    //call the method we are testing
    InstrumentsFactory.getStates();
    //http://www.sitepoint.com/understanding-angulars-apply-digest/
    $rootScope.$apply();
    //flush the response from the fake http server
    $httpBackend.flush();
    expect(InstrumentsFactory.statesList.list).to.not.be.undefined;
    //call done on the test
    done();
  });

  afterEach(function() {
  });
});
