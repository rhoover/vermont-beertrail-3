(function () {
  'use strict';

  angular
      .module('vtbt3')
      .factory('resolveShopping', resolveShopping);

  function resolveShopping($route, storageFactory, brewerFactory, findDataFilter, sortDataFilter, yelpFactory, brewerCacheKey, shoppingCacheKey) {

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
                return yelpFactory.yelpInfo(singleBrewer.latitude, singleBrewer.longitude, 'shopping');
            })
            .then(function success(data) {
                storageFactory.storeData($route.current.params.selector + '-' + shoppingCacheKey, data);
            });
        return shoppingFromZeroDataStart;

      } else {

        var singleBrewer1 = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $route.current.params.selector);
        var yelpShoppingData = storageFactory.getData($route.current.params.selector + '-' + shoppingCacheKey);
        if (yelpShoppingData === null) {
          var shoppingFromBrewerDataStart = yelpFactory.yelpInfo(singleBrewer1.latitude, singleBrewer1.longitude, 'shopping')
            .then(function success(data) {
              storageFactory.storeData($route.current.params.selector + '-' + shoppingCacheKey, data);
            });
          return shoppingFromBrewerDataStart;
        } else {
          return yelpShoppingData;
        }
      }
    }
  }
})();