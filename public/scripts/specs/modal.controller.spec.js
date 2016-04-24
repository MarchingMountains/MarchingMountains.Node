// Descrçibe out test: we are testing the SimpleController
describe('Controller: ModalController', function() {
    // Get an instance of our angular module before each test
    beforeEach(module('myApp'));
    var cut;
    var scope;


    beforeEach(inject(function($controller, $rootScope, _$modal_) {
        scope = $rootScope.$new();
        cut = $controller('ModalController', {
            $scope: scope,
            $modal: _$modal_
        });
        it('should open a modal when login button is pressed', function() {
            expect(scope.open());
            console.log("inside modal test");
        }
        )
    }));




});
//
//    var cut; // short for Controller Under Test
//
//    // Access the angular $controller service before each test
//    beforeEach(inject(function($controller) {
//        // injecting this service allows us to create an instance of our controller
//        cut = $controller('ModalController');
//    }));
//
//    // our first test
//    it('should have test data available on load', function() {
//        expect(cut.testData).toEqual([
//            {message: 'I love unit testing', status: true},
//            {message: 'I will use this info for evil', status: false}
//        ]);
//    });
//
//    // our second test
//    it('should always return 8 when useless method is called', function() {
//        expect(cut.uselessMethod()).toEqual(8);
//    });
//});
//
//// Testing our service
//describe('Service: GenericService', function(){
//    beforeEach(module('basicApp'));
//
//    var sut;
//
//    // we need to inject our service to test it
//    beforeEach(inject(function(GenericService){
//        sut = GenericService;
//    }));
//
//    it('should return an interesting message', function() {
//        expect(sut.message()).toEqual('Look at me, I\'m a service');
//    });
//})
//
//// Testing our AJAX request
//describe('SimpleController Server Call', function() {
//    beforeEach(module('basicApp'));
//
//    var cut; // will represent our controller
//    var mockBackend; // will represent/mock our backend that returns our data
//    // the $httpBackend service is provided by angular-mocks
//    beforeEach(inject(function($controller, $httpBackend) {
//        mockBackend = $httpBackend;
//        // we expect a get call on this route
//        // and we can mock a response that looks similar to a response we would actually expect
//        mockBackend.expectGET('/datRoute')
//            .respond({id: 3000, name: 'Gina'});
//
//        cut = $controller('SimpleController');
//    }));
//    // our only test
//    it('should retrieve a user from the server', function() {
//        // when the controller first loads, this variable is undefined
//        expect(cut.data).toBeUndefined();
//
//        // we simulate a server response
//        mockBackend.flush();
//
//        // we check that our response is that same as that which we mocked
//        expect(cut.data).toEqual({id: 3000, name: 'Gina'});
//
//    });
//    // actions that will performed after each test
//    afterEach(function() {
//        // ensure all expects set on the backend were actually called
//        mockBackend.verifyNoOutstandingExpectation();
//
//        // ensure all requests to the server have responded
//        mockBackend.verifyNoOutstandingRequest();
//    });
//});