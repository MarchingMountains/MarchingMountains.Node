(function() {
'use strict';

angular.module('myApp').controller('ChipController', ['InstrumentsFactory', function(InstrumentsFactory) {
    var instrumentsList = InstrumentsFactory.instruments.list;
    var _this = this;

    _this.readonly = false;
    _this.querySearch = querySearch;
    _this.instruments = loadInstruments();
    _this.selectedInstruments = [];
    _this.autocompleteDemoRequireMatch = true;
    _this.transformChip = transformChip;

    function transformChip(chip) {
        InstrumentsFactory.currentInstruments = _this.selectedInstruments;
        if (angular.isObject(chip)) {
            return chip;
        }
    }

    function querySearch(query) {
        var results = query ? _this.instruments.filter(createFilterFor(query)) : [];
        return results;
    }

    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(musicMaker) {
            return (musicMaker._lowername.indexOf(lowercaseQuery) >= 0);
        };
    }

    function loadInstruments() {
        var instrument = instrumentsList;
        return instrument.map(function(musicThing) {
            musicThing._lowername = musicThing.instrument.toLowerCase();
            return musicThing;
        });
    }
}]);
})();
