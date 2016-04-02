describe('Test for donor-controller', function() {

  var scope;
  var ctrl;

  beforeEach(module('myApp'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('DonorsController', {$scope: scope});
  }));

  it('Should equal a number', function() {
      console.log(scope.currentUser);
      expect(scope.currentUser).toEqual(jasmine.any(Number));
  });

});
