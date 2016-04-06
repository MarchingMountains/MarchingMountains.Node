myApp.controller('ChipController', ['InstrumentsFactory', 'SchoolsFactory', function(InstrumentsFactory, SchoolsFactory) {
    var instrumentsList = InstrumentsFactory.instruments.list;
    var self = this;

    self.readonly = false;
    self.querySearch = querySearch;
    self.instruments = loadInstruments();
    self.selectedInstruments = [];
    self.autocompleteDemoRequireMatch = true;
    self.transformChip = transformChip;

    function transformChip(chip) {
        InstrumentsFactory.currentInstruments = self.selectedInstruments;
        if (angular.isObject(chip)) {
            return chip;
        }
    }

    function querySearch (query) {
        var results = query ? self.instruments.filter(createFilterFor(query)) : [];
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
        return instrument.map(function (musicThing) {
            musicThing._lowername = musicThing.instrument.toLowerCase();
            return musicThing;
        });
    }
}]);
