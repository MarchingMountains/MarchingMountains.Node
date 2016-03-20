var Page = require('../constants');

module.exports = function (client) {
    return {
  		setBase: function(url) {
  			Page.setBaseUrl(url);
  			return client;
  		},
        goHome: function () {
            return client
            .url(Page.Urls.home())
      			.waitForElementVisible('body', 1000)
      			.assert.containsText('h1', 'Helping band programs in Appalachia and Minnesota');
        },
        goDonate: function() {
        	return client
			       .url(Page.Urls.donate())
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Donate Musical Instruments');
        },
        goFaq: function() {
        	return client
        	 .url(Page.Urls.faq())
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'FAQ');
        },
        goProject: function() {
          return client
           .url(Page.Urls.about())
            .waitForElementVisible('body', 1000)
            .assert.containsText('h2', 'Vision');
        },
        goContact: function() {
          return client
           .url(Page.Urls.contact())
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Contact');
        },
        goDirectors: function() {
          return client
           .url(Page.Urls.directors())
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Welcome Band Directors');
        }
    };
}