(function () {
    'use strict';

    angular
        .module('vtbt3')
        .factory('userLocation', userLocation);

    function userLocation($q, $window) {

        var serviceInterface = {
            gpsCoords: gpsCoords
        };
        return serviceInterface;

        ////////////////

        function gpsCoords() {
            var deferred = $q.defer();

            $window.navigator.geolocation.getCurrentPosition(function (position) {
                deferred.resolve(position);
            });

            return deferred.promise;
        }
    }
})();