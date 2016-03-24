describe('Marching Mountains account test', function() {
  describe('with Nightwatch', function() {

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
       browser
       .page.home().setBase(browser.launch_url)
       .page.account().login()
     });
  });
});