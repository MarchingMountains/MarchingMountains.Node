(function() {
'use strict';

angular.module('myApp').factory('InstrumentsFactory', ['$http', function($http) {
    var instruments = {};
    var factoryStatesList = {};

    var getInstrumentsList = function() {
        var promise = $http.get('/api/instruments').then(function(response) {
            instruments.list = response.data;
        });
        return promise;
    };

    var factoryGetStates = function() {
        var promise = $http.get('/api/states').then(function(response) {
            factoryStatesList.list = response.data;
        });
        return promise;
    };

    var factoryPutInstrument = function(instrument) {
        var instrumentID = instrument.instrument_id;
        var promise = $http.put('/api/instruments/' + instrumentID, instrument).then(function() {
            getInstrumentsList();
        });
        return promise;
    };

    var factoryPostInstrument = function(instrument) {
        var mapInstrument = {'instrument': instrument};
        var promise = $http.post('/api/instruments', mapInstrument).then(function() {
            getInstrumentsList();
        });
        return promise;
    };

    var factoryDeleteInstrument = function(instrumentID) {
        var promise = $http.delete('/api/instruments/' + instrumentID).then(function() {
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
})();
