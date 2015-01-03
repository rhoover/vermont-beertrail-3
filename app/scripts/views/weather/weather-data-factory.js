(function () {
    'use strict';

    angular
        .module('vtbt3')
        .factory('weatherFactory', weatherFactory);

    function weatherFactory($http, $route, weatherKey) {

        var serviceInterface = {
            weatherData: weatherData
        };
        return serviceInterface;

        ////////////////

        function weatherData(lat, lon) {

                return $http.jsonp('https://api.forecast.io/forecast/' + weatherKey + '/' + lat + ',' + lon + '?callback=JSON_CALLBACK', {cache: false})
                    .then(function (result) {
                        return result.data;
                    });
        }
    }
})();