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
        },
        goVideos: function() {
          return client
           .click('div.col-lg-6:nth-child(2) > p:nth-child(4) > a:nth-child(2)')
            .waitForElementVisible('body', 10000)
            .assert.containsText('h1', 'Marching Mountains Musical Instrument Distributions in Appalachia');
        },
        goSuccessStories: function() {
          return client
          .click('div.col-lg-6:nth-child(1) > p:nth-child(6) > a:nth-child(2)')
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Sucess Stories');
        },
        goAnnualReports: function() {
          return client
           .click('div.col-lg-6:nth-child(2) > p:nth-child(8) > a:nth-child(2)')
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Marching Mountains Annual Reports and Needs Assessment');
        },
        goVolunteer: function() {
          return client
           .click('div.col-lg-6:nth-child(2) > p:nth-child(6) > a:nth-child(2)')
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Volunteer with Marching Mountains');
        },
        goNewsOne: function() {
          return client
          .click('.footer > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)')
          .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Donating Musical Instruments Changes Children’s Lives for the Better');
        },
        goNewsTwo: function() {
          return client
          .click('.footer > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)')
          .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'School Kids in Distressed Appalachian Counties Receive Donated Band Instruments');
        }
    };
}