myApp.factory('InstrumentsFactory', ['$http', function($http) {
  var instruments = {};
  var factoryStatesList = {};

  var getInstrumentsList = function() {
    var promise = $http.get('/instruments').then(function(response) {
      instruments.list = response.data;
    });
    return promise;
  };

  var factoryGetStates = function() {
    var promise = $http.get('/states').then(function(response) {
      factoryStatesList.list = response.data;
    });
    return promise;
  };

  var factoryPutInstrument = function(instrument) {
    var instrumentID = instrument.instrument_id;
    var promise = $http.put('/instruments/' + instrumentID, instrument).then(function(response) {
      getInstrumentsList();
    });
    return promise;
  };

  var factoryPostInstrument = function(instrument) {
    var instrument = {'instrument': instrument};
    var promise = $http.post('/instruments', instrument).then(function(response) {
      getInstrumentsList();
    });
    return promise;
  };

  var factoryDeleteInstrument = function(instrumentID) {
    var promise = $http.delete('/instruments/' + instrumentID).then(function(response) {
      getInstrumentsList();
    });
    return promise;
  };

  var publicFunctions = {
    factoryGetInstrumentsList: function() {
      return getInstrumentsList();
    },
    getStates: function() {
      return factoryGetStates();
    },
    putInstrument: function(instrument) {
      return factoryPutInstrument(instrument);
    },
    postInstrument: function(instrument) {
      return factoryPostInstrument(instrument);
    },
    deleteInstrument: function(instrumentID) {
      return factoryDeleteInstrument(instrumentID);
    },
    instruments: instruments,
    statesList: factoryStatesList,
    currentInstruments: []
  };

  return publicFunctions;
}]);
