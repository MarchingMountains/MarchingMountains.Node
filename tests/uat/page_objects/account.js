'use strict';
var Page = require('../constants');

module.exports = function (client) {
    var _this = this;
    _this.elements = {
      login : {
        'selector':'#loginBtn'
      },
      emailLogin : {
        'selector':'#emailLogin'
      },
      passwordLogin : {
        'selector':'#passwordLogin'
      },
      loginModalBtn : {
        'selector':'#loginModalBtn'
      },
      welcomeBtn: {
        'selector':'#welcomeBtn'
      }
    };

    return {
  		setBase: function(url) {
  			Page.setBaseUrl(url);
  			return client;
  		},
        login: function () {
        	return client
          .url(Page.Urls.home())
          .waitForElementVisible('body', 1000)
          .waitForElementVisible(_this.elements.login.selector, 1000)
          .click(_this.elements.login.selector)
          .waitForElementVisible(_this.elements.emailLogin.selector, 1000)
        	.setValue(_this.elements.emailLogin.selector, Page.User.email)
        	.setValue(_this.elements.passwordLogin.selector, Page.User.password)
          .click(_this.elements.loginModalBtn.selector)
          .waitForElementVisible(_this.elements.welcomeBtn.selector, 1000)
          .assert.containsText(_this.elements.welcomeBtn.selector, 'Welcome');
        }
    };
};