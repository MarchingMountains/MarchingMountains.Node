//describe("An AngularJS test suite", function() {
//
//    beforeEach(module('NgResource', function($provide, $controller) {
//        var cut = $controller("loginController");
//        $provide.value('fooValue', 5);
//    }));
//
//    it('should have tests', function() {
//        expect(true).toBe(true);
//    });
//
//    it('should inject dependencies', inject(function ($resource, fooValue) {
//        expect($resource).toBeDefined();
//        expect(fooValue).toBe(5);
//    }));
//
//    it("should provide controllers", inject(function ($rootScope, $controllers) {
//        var $scope = $rootScope.new();
//        ctr = $controller('loginController', {$scope: $scope});
//        expect()
//
//    }))
//});
//
//describe("TestApp", function() {
//    var $httpBackend;
//
//    beforeEach(module("myApp");
//
//    beforeEach(inject(function($_httpBackend_) {
//        $httpBackend = $_httpBackend_;
//
//    }));
//
//    afterEach(function() {
//        $httpBackend.verifyNoOutstandingHttpRequests();
//        $httpBackend.verifyNoOutstandingExpectations();
//    });
//
//});