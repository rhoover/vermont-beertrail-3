(function () {
    'use strict';

    angular
        .module('vtbt3')
        .factory('shoppingFactory', shoppingFactory);

    function shoppingFactory($http, $route, yelpKey) {

        var serviceInterface = {
            yelpShoppingInfo: yelpShoppingInfo
        };
        return serviceInterface;

        ////////////////

        function yelpShoppingInfo(lat, lon) {

            return $http.jsonp('https://api.yelp.com/business_review_search?' + 'limit=20' + '&category=shopping+arts+active+localservices+localflavor+food+tours+auto' + '&lat=' + lat + '&long=' + lon + '&ywsid=' + yelpKey + '&callback=JSON_CALLBACK', {cache: false})
            .then(function (result) {
                return result.data;
            });
        }
    }
})();