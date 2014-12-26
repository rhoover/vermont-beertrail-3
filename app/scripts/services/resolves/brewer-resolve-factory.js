(function() {
    'use strict';

    angular
        .module('vtbt3')
        .factory('resolveBrewers', resolveBrewers);

    function resolveBrewers(brewerFactory, storageFactory, sortDataFilter, brewerCacheKey) {

        var serviceInterface = {
            brewers: brewers
        };
        return serviceInterface;

        ////////////////

        function brewers() {

            if ( storageFactory.getData(brewerCacheKey) !== null) {
                return;
            } else {
                var brewerDataReturn = brewerFactory.fetchBrewerData()
                    .then(function success(data) {
                        // storageFactory.storeData(brewerCacheKey, data); //store sorted data
                        storageFactory.storeData(brewerCacheKey, sortDataFilter.brewerSort(data)); //store sorted data
                    }, function failure() {
                        alert('Looks like someone mis-poured a beer, and now we are all paying the price.');
                    });
                    return brewerDataReturn;
            }
        }
    }
})();