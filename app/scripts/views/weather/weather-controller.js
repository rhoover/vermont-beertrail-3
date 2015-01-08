(function () {
    'use strict';

    angular
        .module('vtbt3')
        .controller('WeatherCtrl', WeatherCtrl);

    function WeatherCtrl($routeParams, storageFactory,  findDataFilter, roundingNumbers, brewerCacheKey, weatherCacheKey) {

        var spk = this;

        goForthAndBind();

        ////////////////

        function goForthAndBind() {

            var weatherData = storageFactory.getData($routeParams.selector + '-' + weatherCacheKey);
            spk.brewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $routeParams.selector);
            spk.weather = weatherData;
            spk.temp = roundingNumbers.roundNumber(weatherData.currently.temperature);
            spk.maxTemp = roundingNumbers.roundNumber(weatherData.daily.data[2].temperatureMax);

        }
    }
})();