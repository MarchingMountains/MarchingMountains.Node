describe('Testing: My Schools Controller', function() {

    var scope;
    var ctrl;

    beforeEach(module('myApp'));

    beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('MySchoolsController', {$scope: scope});
        }
    ));

    it('should have a value of "test"', function(){
        console.log(scope.test);
        expect(scope.test).toEqual('test');
    });
});