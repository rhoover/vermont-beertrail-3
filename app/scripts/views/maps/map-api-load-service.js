(function () {
    'use strict';

    angular
        .module('vtbt3')
        .service('loadMapAPI', loadMapAPI);

    function loadMapAPI($window, $q) {

        var deferred = $q.defer();

        function loadScript() {
            var scriptTag = document.createElement('script');
            scriptTag.src = '//maps.googleapis.com/maps/api/js?true=false&language=en&callback=initMap';
            angular.element(document.body).append(scriptTag);
        }

        $window.initMap = function () {
            deferred.resolve();
        };

        loadScript();

        return deferred.promise;
    }
})();