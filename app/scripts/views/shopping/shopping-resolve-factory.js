(function () {
    'use strict';

    angular
        .module('vtbt3')
        .factory('resolveShopping', resolveShopping);

    function resolveShopping($route, storageFactory, brewerFactory, findDataFilter, sortDataFilter, shoppingFactory, brewerCacheKey, shoppingCacheKey) {

        var serviceInterface = {
            shopping: shopping
        };
        return serviceInterface;

        ////////////////

        function shopping() {

            if (storageFactory.getData(brewerCacheKey) === null) {

                var shoppingFromZeroDataStart = brewerFactory.fetchBrewerData()
                    .then(function success(data) {
                        var singleBrewer = findDataFilter.brewerFind(sortDataFilter.brewerSort(data), $route.current.params.selector);
                        storageFactory.storeData(brewerCacheKey, sortDataFilter.brewerSort(data));
                        return shoppingFactory.yelpShoppingInfo(singleBrewer.latitude, singleBrewer.longitude);
                    })
                    .then(function success(data) {
                        storageFactory.storeData($route.current.params.selector + '-' + shoppingCacheKey, data);
                    });
                return shoppingFromZeroDataStart;

            } else {

                var singleBrewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $route.current.params.selector);
                var shoppingFromBrewerDataStart = shoppingFactory.yelpShoppingInfo(singleBrewer.latitude, singleBrewer.longitude)
                    .then(function success(data) {
                        storageFactory.storeData($route.current.params.selector + '-' + shoppingCacheKey, data);
                    });
                return shoppingFromBrewerDataStart;

            }
        }
    }
})();