var Page = require('../constants');

module.exports = function (client) {
    return {
  		setBase: function(url) {
  			Page.setBaseUrl(url);
  			return client;
  		},
        goLogin: function () {
        	return client
        	.setValue('input["emailAddress"]', Page.User.email)
        	.setValue('input["password"]', Page.User.password);
        }
    }
};