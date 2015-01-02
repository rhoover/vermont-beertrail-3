(function () {
    'use strict';

    angular
        .module('vtbt3')
        .factory('resolveDining', resolveDining);

    function resolveDining($route, storageFactory, brewerFactory, findDataFilter, sortDataFilter, diningFactory, brewerCacheKey, diningCacheKey) {

        var serviceInterface = {
            dining: dining
        };
        return serviceInterface;

        ////////////////

        function dining() {

            if (storageFactory.getData(brewerCacheKey) === null) {

                var diningFromZeroDataStart = brewerFactory.fetchBrewerData()
                    .then(function success(data) {
                        var singleBrewer = findDataFilter.brewerFind(sortDataFilter.brewerSort(data), $route.current.params.selector);
                        storageFactory.storeData(brewerCacheKey, sortDataFilter.brewerSort(data));
                        return diningFactory.yelpDiningInfo(singleBrewer.latitude, singleBrewer.longitude);
                    })
                    .then(function success(data) {
                        storageFactory.storeData($route.current.params.selector + '-' + diningCacheKey, data);
                    });
                return diningFromZeroDataStart;

            } else {

                var singleBrewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $route.current.params.selector);
                var diningFromBrewerDataStart = diningFactory.yelpDiningInfo(singleBrewer.latitude, singleBrewer.longitude)
                    .then(function success(data) {
                        storageFactory.storeData($route.current.params.selector + '-' + diningCacheKey, data);
                    });
                return diningFromBrewerDataStart;

            }
        }
    }
})();