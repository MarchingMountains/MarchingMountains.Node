var pageObjects = require('./test-constants');

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
        .url(client.launch_url)
        .expect.element('body').to.be.present.before(1000);
    });
    it('uses BDD to run the project simple test', function(client) {
      client
        .url(client.launch_url+pageObjects.PROJECT.path)
        .expect.element('body').to.be.present.before(1000);
    });
    it('uses BDD to run the faq simple test', function(client) {
      client
        .url(client.launch_url+pageObjects.FAQ.path)
        .expect.element('body').to.be.present.before(1000);
    });
    it('uses BDD to run the donate instruments simple test', function(client) {
      client
        .url(client.launch_url+pageObjects.DONATE_INSTRUMENTS.path)
        .expect.element('body').to.be.present.before(1000);
    });
    it('uses BDD to run the contact simple test', function(client) {
      client
        .url(client.launch_url+pageObjects.CONTACT.path)
        .expect.element('body').to.be.present.before(1000);
    });
    it('uses BDD to run the band directors simple test', function(client) {
      client
        .url(client.launch_url+pageObjects.BAND_DIRECTORS.path)
        .expect.element('body').to.be.present.before(1000);
    });
  });
});