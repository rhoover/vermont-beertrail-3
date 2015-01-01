(function() {
    'use strict';

    angular
        .module('vtbt3')
        .factory('diningFactory', diningFactory);

    function diningFactory($http, $route, yelpKey) {

        var serviceInterface = {
            yelpDiningInfo: yelpDiningInfo
        };
        return serviceInterface;

        ////////////////

        function yelpDiningInfo(lat, lon) {

            return $http.jsonp('https://api.yelp.com/business_review_search?' + 'limit=20' + '&category=restaurants' + '&lat=' + lat + '&long=' + lon + '&ywsid=' + yelpKey + '&callback=JSON_CALLBACK', {cache: false})
            .then(function (result) {
                return result.data;
            });
        }
    }
})();