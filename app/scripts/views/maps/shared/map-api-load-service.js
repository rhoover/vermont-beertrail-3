(function () {
    'use strict';

    angular
        .module('vtbt3')
        .service('loadMapAPI', loadMapAPI);

    function loadMapAPI($window, $q) {

        var deferred = $q.defer();

        function writeScript() {
            var scriptTag = document.createElement('script');
            scriptTag.id = 'gMapsAPI';
            // scriptTag.src = '//maps.googleapis.com/maps/api/js?true=false&language=en&callback=initMap';
            scriptTag.src = '//maps.googleapis.com/maps/api/js?sensor=true&language=en&callback=initMap';
            angular.element(document.body).append(scriptTag);
        }

        $window.initMap = function () {
            deferred.resolve();
        };

        writeScript();

        return deferred.promise;
    }
})();