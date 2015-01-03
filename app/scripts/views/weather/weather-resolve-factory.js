(function () {
    'use strict';

    angular
        .module('vtbt3')
        .factory('resolveWeather', resolveWeather);

    function resolveWeather($route, weatherFactory, storageFactory, brewerFactory, findDataFilter, brewerCacheKey, weatherCacheKey) {

        var serviceInterface = {
            weather: weather
        };
        return serviceInterface;

        ////////////////

        function weather() {

                if (storageFactory.getData(brewerCacheKey) === null) {

                    var weatherFromZeroDataStart = brewerFactory.getBrewerData()
                        .then(function success(data) {
                            storageFactory.storeData(brewerCacheKey, data);
                            var singleBrewer = findDataFilter.brewerFind(data, $route.current.params.selector);
                            return weatherFactory.weatherData(singleBrewer.latitude, singleBrewer.longitude);
                        })
                        .then(function success(data) {
                            storageFactory.storeData($route.current.params.selector + '-' + weatherCacheKey, data);
                        });
                    return weatherFromZeroDataStart;

                } else {

                    var singleBrewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $route.current.params.selector);
                    var weatherFromBrewerDataStart = weatherFactory.weatherData(singleBrewer.latitude, singleBrewer.longitude)
                        .then(function success(data) {
                            storageFactory.storeData($route.current.params.selector + '-' + weatherCacheKey, data);
                        });
                    return weatherFromBrewerDataStart;
                }
        }
    }
})();