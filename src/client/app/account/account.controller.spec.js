/* jshint -W117, -W030 */
describe('Account Controller', function () {
	'use strict';

	var controller;

	beforeEach(function () {
		bard.appModule('app.account');
		bard.inject('$controller', '$rootScope');

		controller = $controller('AccountController');
		$rootScope.$apply();
	});

	bard.verifyNoOutstandingHttpRequests();

	describe('Account controller', function () {
		it('should be created successfully', function () {
			expect(controller).to.not.be.undefined;
		});
	});
});