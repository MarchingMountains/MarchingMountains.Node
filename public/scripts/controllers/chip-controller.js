myApp.controller('ChipController', ['InstrumentsFactory', 'SchoolsFactory', function(InstrumentsFactory, SchoolsFactory) {
    var instrumentsList = InstrumentsFactory.instruments.list;
    //var factoryCurrentSchool = SchoolsFactory.currentSchool.school_name;
    var self = this;

    self.readonly = false;
    //self.selectedItem = undefined;
    //self.searchText = undefined;
    self.querySearch = querySearch;
    self.instruments = loadInstruments();
    self.selectedInstruments = [];
    self.autocompleteDemoRequireMatch = true;
    self.transformChip = transformChip;

    //if(factoryCurrentSchool != undefined) {
    //    self.selectedInstruments = SchoolsFactory.currentSchool.instrument_id;
    //}

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
            //console.log('search: ', musicMaker._lowername.indexOf(lowercaseQuery));
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
