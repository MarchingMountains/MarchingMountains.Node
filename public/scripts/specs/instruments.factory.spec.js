describe('Test for instruments factory', function() {

    var sut;
    var mockBackend;

    beforeEach(module('myApp'));

    beforeEach(inject(function($rootScope, InstrumentsFactory, $httpBackend) {
      scope = $rootScope.$new();

      mockBackend = $httpBackend;

      sut = InstrumentsFactory;

      mockBackend.expectGET('/instruments')
        .respond({instrument_id: 5, instrument: 'Clarinet'});

      mockBackend.expectGET('/views/templates/home.html')
        .respond('asds');
    }));

    it('should retrieve a instruments from the server', function() {
    // when the controller first loads, this variable is undefined
    console.log(sut.instruments);
    expect(sut.instruments).toEqual({});

    // we simulate a server response
    mockBackend.flush();

    // we check that our response is that same as that which we mocked
    expect(sut.instruments.list).toEqual({instrument_id: jasmine.any(Number),
      instrument: jasmine.any(String)});

  });
  // actions that will performed after each test
  afterEach(function() {
    // ensure all expects set on the backend were actually called
    mockBackend.verifyNoOutstandingExpectation();

    // ensure all requests to the server have responded
    mockBackend.verifyNoOutstandingRequest();
  });

});
