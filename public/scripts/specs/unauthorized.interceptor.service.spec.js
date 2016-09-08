/*globals describe, beforeEach, afterEach, inject, it, expect, sinon, $compile, $timeout, $rootScope, bard, UnauthorizedInterceptor, $location, $mdDialog, $httpBackend, $q, logger, $window  */
/* jshint -W030 */
describe('AuthenticationService', function () {
	'use strict';

	// app.core module is required to get access to the template cache.
	beforeEach(function () {
		module('myApp');
		bard.inject(
			'UnauthorizedInterceptor',
			'$location',
			'$timeout',
			'$httpBackend'
		);
	});

	describe('API', function () {
		it('has a responseError function', function () {
			expect(UnauthorizedInterceptor.responseError).to.be.a('function');
		});

		it('responseError redirects to / on 401', function () {
			$httpBackend.when('GET', '/views/templates/home.html').respond({});
			$location.path('/some-crazy-path');
			var rejection = {status: 401};
			UnauthorizedInterceptor.responseError(rejection);
			$timeout.flush();
			expect($location.path()).to.equal('/');
		});

		it('responseError ignores 200 response', function () {
			$location.path('/some-crazy-path');
			var rejection = {status: 200};
			UnauthorizedInterceptor.responseError(rejection);
			expect($location.path()).to.equal('/some-crazy-path');
		});

		it('responseError does not redirect on 409', function () {
			$location.path('/some-crazy-path');
			var rejection = {status: 409};
			UnauthorizedInterceptor.responseError(rejection);
			expect($location.path()).to.equal('/some-crazy-path');
		});

		it('responseError does no-op for login related response errors', function () {
			$location.path('/some-path');
			var rejection = {status: 500,config:{data:{path:'login'}}};
			UnauthorizedInterceptor.responseError(rejection);
		});
	});
})
;
