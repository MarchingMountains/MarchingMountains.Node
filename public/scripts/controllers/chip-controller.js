(function () {
    'use strict';
    myApp.controller('ChipController', DemoCtrl, ['InstrumentsFactory', '$mdDialog', '$mdMedia']);

    function DemoCtrl ($timeout, $q, InstrumentsFactory, $mdDialog, $mdMedia) {
        var self = this;
        //$scope.instrumentsList = [];
        //
        InstrumentsFactory.factoryGetInstrumentsList().then(function() {
            self.instruments = InstrumentsFactory.instruments.list;
        });

        self.readonly = false;
        self.selectedItem = null;
        self.searchText = null;
        self.querySearch = querySearch;
        self.selectedInstruments = [];
        self.numberChips = [];
        self.numberChips2 = [];
        self.numberBuffer = '';
        self.autocompleteDemoRequireMatch = true;
        self.transformChip = transformChip;

        /**
         * Return the proper object when the append is called.
         */
        function transformChip(chip) {
            // If it is an object, it's already a known chip
            if (angular.isObject(chip)) {
                return chip;
            }

            // Otherwise, create a new one
            return { name: chip, type: 'new' }
        }

        /**
         * Search for vegetables.
         */
        function querySearch (query) {
            var results = query ? self.instruments.filter(createFilterFor(query)) : [];
            return results;
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(instrument) {
                return (instrument._lowername.indexOf(lowercaseQuery) === 0) ||
                    (instrument._lowertype.indexOf(lowercaseQuery) === 0);
            };

        }
    }
})();