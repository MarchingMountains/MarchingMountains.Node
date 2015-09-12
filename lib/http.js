var Http = (function () {
  var self = {
  };
  
  self.host = '';
  
  self.WebApi = (function () {
    var WebApi = {
    };
    WebApi.Routes = (function () {
      var t = {};
      t.BASE_API = self.host + '/api';
      t.ORGANIZATION = t.BASE_API + '/organization/';
      return t;
    }());
    WebApi.Types = (function () {
      return {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        DELETE: 'DELETE'
      }
    }());
    
    WebApi.request = {};
    
    var requestResult = (function () {
      request = WebApi.request;
      
      var result = $.ajax({
        url: request.url,
        type: request.type === null || request.type === undefined ? 'GET' : request.type,
        contentType: request.contentType === null || request.contentType === undefined ? 'application/json' : request.contentType,
        headers: request.headers,
        data: request.data,
        dataType: request.dataType === null || request.dataType === undefined ? 'json' : request.dataType,
        success: function (n) {
          request.successCallback && request.successCallback(n)
        },
        failure: function (n) {
          request.errorCallback && request.errorCallback(n)
        },
        statusCode: {
          200: function (n) {
            request.status200Callback && request.status200Callback(n)
          },
          201: function (n) {
            request.status201Callback && request.status201Callback(n)
          },
          202: function (n) {
            request.status202Callback && request.status202Callback(n)
          },
          400: function (n) {
            request.status400Callback && request.status400Callback(n)
          },
          401: function () {
            window.location.replace(n + '/login')
          },
          402: function (n) {
            request.status402Callback && request.status402Callback(n)
          },
          404: function (n) {
            request.status404Callback && request.status404Callback(n)
          },
          500: function (n) {
            request.status500Callback && request.status500Callback(n)
          }
        }
      });
      result.done(function (n) {
        request.finishedCallback && request.finishedCallback(n)
      });
      return result;
    }());
    return WebApi;
  }());
  return self;
}());