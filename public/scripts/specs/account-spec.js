describe('testing the Account controller', function() {

    var scope;
    var ctrl; //our controller

    beforeEach(module('myApp'));

    beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('AccountController', {$scope: scope});
            //console.log('ctrl: ', ctrl);
        }
    ));

    it('showForm should be true', function(){
        console.log('scope.showForm ', scope.showForm);
        expect(scope.showForm).toBe(true);
    });

    it('showStates should return states', function(){
        //ctrl.getStates();
        console.log('scope.states: ', scope.states);
        //expect(scope.states).toContain(true);
        //expect(scope.states).toContain(jasmine.objectContaining({state: 'AZ' }));
    });


});

// Testing our AJAX request
describe('Account Server Call', function() {


    var cut; // will represent our controller
    var mockBackend; // will represent/mock our backend that returns our data


    beforeEach(module('myApp'));

    // the $httpBackend service is provided by angular-mocks
    beforeEach(inject(function($rootScope, $controller, $httpBackend) {

        scope = $rootScope.$new();
        cut = $controller('AccountController', {
            $scope: scope,
            $http: {
                get: function() {
                    console.log('hello');
                    return {
                        then: function () {
                            console.log('inside then of fake promise');
                }}
            }}
        });

        //console.log('before mockBackend');
        mockBackend = $httpBackend;
        // we expect a get call on this route
        // and we can mock a response that looks similar to a response we would actually expect
        mockBackend.expectGET('/states/')
            .respond({state_id: 1, state: 'AL'});
        mockBackend.expectGET('/views/templates/home.html')
            .respond('Hi');

    }));

    // our only test
    it('should retrieve a user from the server', function() {
        // when the controller first loads, this variable is undefined

        expect(cut.data).toBeUndefined();

        // we simulate a server response
        mockBackend.flush();

        // we check that our response is that same as that which we mocked
        expect(cut.data).toEqual({id: 3000, name: 'Gina'});

    });
    // actions that will performed after each test
    afterEach(function() {
        // ensure all expects set on the backend were actually called
        mockBackend.verifyNoOutstandingExpectation();

        // ensure all requests to the server have responded
        mockBackend.verifyNoOutstandingRequest();
    });
});

// Testing our AJAX request
//describe('AccountController getStates should reach the server', function() {
//    beforeEach(module('myApp'));
//
//    var ctrl;
//    var mockBackend;
//    var scope;
//    var UserService;
//
//    // the $httpBackend service is provided by angular-mocks
//    beforeEach(inject(function($controller, $httpBackend, _UserService_) {
//        mockBackend = $httpBackend;
//        UserService = _UserService_;
//        // we expect a get call on this route
//        // and we can mock a response that looks similar to a response we would actually expect
//        mockBackend.expectGET('/states')
//            .respond({state_id: 1, state: 'AL'});
//
//        ctrl = $controller('AccountController', {$scope: scope, UserService: UserService});
//    }));
//
//    it('should retrieve a state from the server', function() {
//        // when the controller first loads, this variable is undefined
//        //ctrl.getStates();
//        expect(ctrl.data).toBeUndefined();
//
//        // we simulate a server response
//        mockBackend.flush();
//
//        // we check that our response is that same as that which we mocked
//        expect(ctrl.data).toEqual({state_id: 1, state: 'AL'});
//
//    });
//
//    afterEach(function() {
//        // ensure all expects set on the backend were actually called
//        mockBackend.verifyNoOutstandingExpectation();
//
//        // ensure all requests to the server have responded
//        mockBackend.verifyNoOutstandingRequest();
//    });
//});
