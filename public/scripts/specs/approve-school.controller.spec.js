describe('testing the approve-school controller', function() {

    var deferred;
    var promise;   
    var mockAdminFactory;
    
    beforeEach(function() {
        //'$scope', '$http',  'UserService'
        module('myApp');

        //Use bard to inject the adminFactory and a mock $http service
        //$scope, $http, $mdDialog, $mdMedia, AdminFactory
        bard.inject(
          'AdminFactory',
          '$rootScope',
          '$httpBackend',
          '$controller',
          '$q',
          '$mdMedia',
          '$mdDialog'
        );

        $scope = $rootScope.$new();
        $httpBackend.when('GET', '/views/templates/home.html').respond({});
        $httpBackend.when('POST', '/schools/email').respond({});
        
         //setup $q for testing promise in controller
        deferred = $q.defer();
        //get a promise instance
        promise = deferred.promise;

        mockAdminFactory = 
         {
         	allDonations :  {
                  list:[{donations:'donations'}]
            },
            allSchools :  {
                  list:[{schools:'schools'}]
            },
            allUsers :  {
                  list:[{users:'users'}]
            },
            currentSchool: {
              school_name: 'school name'
            },
            getAllDonations : function() {
                return promise;
            },
            getAllSchools : function() {
                return promise;
            },
            getAllUsers : function() {
                return promise;
            },
            currentSchool : function() {
                return {};
            },
            verifySchool : function() {
                return promise;
            }
        };
    });

    it('should verify Schools', function(done) {
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('ApproveSchoolController', { $scope: $scope, AdminFactory:mockAdminFactory });
        $scope.verifySchool(true);
        //apply scope to resolve all the promises
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
      done();
    });
     it('should verify Schools as denied', function(done) {
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('ApproveSchoolController', { $scope: $scope, AdminFactory:mockAdminFactory });
        $scope.verifySchool(false);
        //apply scope to resolve all the promises
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
      done();
    });
});

