(function () {
    'use strict';

    angular
        .module('vtbt3')
        .filter('sortData', sortData);

        function sortData () {

            var filterInterface = {
                brewerSort: brewerSort,
                businessSort: businessSort
            };
            return filterInterface;

            ////////////////

            function brewerSort(brewerInput) {
                var sortedBrewers = [];
                sortedBrewers = brewerInput.sort(function (a, b) {
                    return (a.selector < b.selector) ? -1 : 1;
                });
                return sortedBrewers;
            }

            function businessSort(businessInput) {
                var sortedBusinesses = [];
                sortedBusinesses = businessInput.sort(function (a, b) {
                    return (a.name < b.name) ? -1 : 1;
                });
                return sortedBusinesses;
            }
    }
})();