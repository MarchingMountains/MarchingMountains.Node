describe('testing the Account controller', function() {

    var deferred;
    var promise;   
    var mockUserService;
    
    beforeEach(function() {
        //'$scope', '$http',  'UserService'
        module('myApp');

        //Use bard to inject the adminFactory and a mock $http service
        //'$scope', 'DonationsFactory', 'UserService',
        bard.inject(
          'UserService',
          '$rootScope',
          '$httpBackend',
          '$controller',
          '$q'
        );

        $scope = $rootScope.$new();
        $httpBackend.when('GET', '/views/templates/home.html').respond({});
        
         //setup $q for testing promise in controller
        deferred = $q.defer();
        //get a promise instance
        promise = deferred.promise;

        mockUserService = 
         {
            watchCurrentUser : function() {
                return {
                    factoryUserId:1
                };
            }
        };
    });

    it('should retrieve a user from the server', function(done) {
        $httpBackend.when('GET', '/account/1').respond([{state_id:'2'}]);
        $httpBackend.when('GET', '/states/').respond({state:'state'});

         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AccountController', { $scope: $scope, UserService:mockUserService });
        //apply scope to resolve all the promises
        $rootScope.$apply();
        $httpBackend.flush();
        expect($scope.states).to.not.be.undefined;
        expect($scope.states.state).to.equal('state');
        expect($scope.user.state_id).to.equal('2');
        expect($scope.selectedState).to.equal('2');
        done();
    });
   
    it('should do nothing when calls fail', function(done) {
        $httpBackend.when('GET', '/account/1').respond(null);
        $httpBackend.when('GET', '/states/').respond(null);
        

         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AccountController', { $scope: $scope, UserService:mockUserService });
        //apply scope to resolve all the promises
        $rootScope.$apply();
        $httpBackend.flush();
        expect($scope.states).to.not.be.undefined;
        expect($scope.states).to.be.empty;
        expect($scope.user).to.be.undefined;
        expect($scope.selectedState).to.equal('');
        done();
    });

     it('should flip switches', function(done) {
        $httpBackend.when('GET', '/account/1').respond([{state_id:'2'}]);
        $httpBackend.when('GET', '/states/').respond({state:'state'});
         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AccountController', { $scope: $scope, UserService:mockUserService });
        $rootScope.$apply();
        $httpBackend.flush();
        $scope.changePassword();
        expect($scope.showChangePassword).to.equal(true);
        expect($scope.showForm).to.equal(false);
        expect($scope.showList).to.equal(false);

        $scope.accountList();
        expect($scope.showChangePassword).to.equal(false);
        expect($scope.showForm).to.equal(false);
        expect($scope.showList).to.equal(true);

        $scope.accountToForm();
        expect($scope.edited ).to.equal(false);
        expect($scope.showForm).to.equal(true);
        expect($scope.showList).to.equal(false);

        done();
     });

     it('should submit password form', function(done) {
       $httpBackend.when('GET', '/account/1').respond([{state_id:'2'}]);
        $httpBackend.when('GET', '/states/').respond({state:'state'});
        $httpBackend.when('PUT', '/account/password/1').respond({});
        

         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AccountController', { $scope: $scope, UserService:mockUserService });
        //apply scope to resolve all the promises
        
        $scope.password = '123';
        $scope.submitPasswordForm(true);
        $rootScope.$apply();
        $httpBackend.flush();
        expect($scope.editedPassword).to.equal(true);
        done();
    });

     it('should not show as edited when submit password form fails', function(done) {
       $httpBackend.when('GET', '/account/1').respond([{state_id:'2'}]);
        $httpBackend.when('GET', '/states/').respond({state:'state'});
        $httpBackend.when('PUT', '/account/password/1').respond(null);
        

         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AccountController', { $scope: $scope, UserService:mockUserService });
        //apply scope to resolve all the promises
        
        $scope.password = '123';
        $scope.submitPasswordForm(true);
        $rootScope.$apply();
        $httpBackend.flush();
        expect($scope.editedPassword).to.equal(false);
        done();
    });

          it('should do nothin if not valid', function(done) {
       $httpBackend.when('GET', '/account/1').respond([{state_id:'2'}]);
        $httpBackend.when('GET', '/states/').respond({state:'state'});
        $httpBackend.when('PUT', '/account/password/1').respond(null);
        

         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AccountController', { $scope: $scope, UserService:mockUserService });
        //apply scope to resolve all the promises
        
        $scope.password = '123';
        $scope.submitPasswordForm(false);
        $rootScope.$apply();
        $httpBackend.flush();
        expect($scope.editedPassword).to.equal(false);
        done();
    });















    it('should submit account form', function(done) {
       $httpBackend.when('GET', '/account/1').respond([{state_id:'2'}]);
        $httpBackend.when('GET', '/states/').respond({state:'state'});
        $httpBackend.when('PUT', '/account/1').respond({});
        

         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AccountController', { $scope: $scope, UserService:mockUserService });
        //apply scope to resolve all the promises
        $scope.user = {};
        $scope.user.email = 'email',
        $scope.user.password='password';
        $scope.user.first_name='first_name';
        $scope.user.last_name='last_name';
        $scope.user.address_line1 = 'address_line1';
        $scope.user.address_line2 = 'address_line2';
        $scope.user.city='city';
        $scope.selectedState='state';
        $scope.user.zip='zip';
        $scope.user.phone='phone';

        $scope.submitAccountForm (true);
        $rootScope.$apply();
        $httpBackend.flush();
        expect($scope.edited ).to.equal(true);
        done();
    });

     it('should not show as edited when submit account form fails', function(done) {
       $httpBackend.when('GET', '/account/1').respond([{state_id:'2'}]);
        $httpBackend.when('GET', '/states/').respond({state:'state'});
        $httpBackend.when('PUT', '/account/1').respond(null);
        

         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AccountController', { $scope: $scope, UserService:mockUserService });
        //apply scope to resolve all the promises
        $scope.user = {};
        $scope.user.email = 'email',
        $scope.user.password='password';
        $scope.user.first_name='first_name';
        $scope.user.last_name='last_name';
        $scope.user.address_line1 = 'address_line1';
        $scope.user.address_line2 = 'address_line2';
        $scope.user.city='city';
        $scope.selectedState='state';
        $scope.user.zip='zip';
        $scope.user.phone='phone';
        $scope.submitAccountForm (true);
        $rootScope.$apply();
        $httpBackend.flush();
        expect($scope.edited).to.equal(false);
        done();
    });

    it('should do nothin if account form not valid', function(done) {
       $httpBackend.when('GET', '/account/1').respond([{state_id:'2'}]);
        $httpBackend.when('GET', '/states/').respond({state:'state'});
        $httpBackend.when('PUT', '/account/1').respond(null);

         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AccountController', { $scope: $scope, UserService:mockUserService });
        //apply scope to resolve all the promises
        
        $scope.submitAccountForm (false);
        $rootScope.$apply();
        $httpBackend.flush();
        expect($scope.edited).to.be.undefined;
        done();
    });
});