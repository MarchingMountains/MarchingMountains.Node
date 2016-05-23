'use strict';
describe('Marching Mountains account test', function() {

    before(function(client, done) {
      done();
    });

    after(function(client, done) {
      client.end(function() {
        done();
      });
    });

    afterEach(function(client, done) {
      done();
    });

    beforeEach(function(client, done) {
      done();
    });

    it('Test 1 - As a user, I can login', function (browser) {
       browser.page.account()
       .setBase(browser.launch_url)
       .page.account().login();
     });
});