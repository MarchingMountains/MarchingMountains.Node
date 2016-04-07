describe('Test for donor-controller', function() {

  var scope;
  var ctrl;

  // beforeEach(module('myApp'));

  beforeEach(angular.mock.module('myApp'));

  beforeEach(angular.mock.inject(function(_$controller_) {
    // scope = $rootScope.$new();
    // ctrl = $controller('DonorsController', {$scope: scope});
    $controller = _$controller_;
  }));

  it('Should equal a number', function() {
    var $scope = {};
    var controller = $controller('DonorsController', { $scope: $scope });
    expect($scope.currentUser).toEqual(jasmine.any(Number));
  });
});
