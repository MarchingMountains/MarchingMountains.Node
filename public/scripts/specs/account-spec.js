describe('testing the Account controller', function() {

    var scope;
    var ctrl; //our controller

    beforeEach(module('myApp'));

    beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('AccountController', {$scope: scope});
        }
    ));

    it('showForm should be true', function(){
        console.log(scope.showForm);
        expect(scope.showForm).toBe(true);
    });
});

// Testing our AJAX request
describe('AccountController getStates should reach the server', function() {
    beforeEach(module('myApp'));

    var ctrl;
    var mockBackend;

    // the $httpBackend service is provided by angular-mocks
    beforeEach(inject(function($controller, $httpBackend) {
        mockBackend = $httpBackend;
        // we expect a get call on this route
        // and we can mock a response that looks similar to a response we would actually expect
        mockBackend.expectGET('/states/')
            .respond({state_id: 1, state: 'AL'});
        mockBackend.expectGET('/views/templates/home.html')
            .respond('Hi');

        ctrl = $controller('AccountController');
    }));

    it('should retrieve a state from the server', function() {
        // when the controller first loads, this variable is undefined
        expect(ctrl.data).toBeUndefined();

        // we simulate a server response
        mockBackend.flush();

        // we check that our response is that same as that which we mocked
        expect(ctrl.data).toEqual({state_id: 1, state: 'AL'});

    });

    afterEach(function() {
        // ensure all expects set on the backend were actually called
        mockBackend.verifyNoOutstandingExpectation();

        // ensure all requests to the server have responded
        mockBackend.verifyNoOutstandingRequest();
    });
});
