var constants = require('./test-constants');

describe('Marching Mountains homepage test for Mocha', function() {
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

    it('uses BDD to run the homepage simple test', function(client) {
      client
        .url(constants.HOST)
        .expect.element('body').to.be.present.before(1000);
    });
  });
});