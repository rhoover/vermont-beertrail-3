(function () {
    'use strict';

    angular
        .module('vtbt3')
        .directive('singleMarkerMap', singleMarkerMap);

    function singleMarkerMap (loadMapAPI, mapInit) {

        var directiveOptions = {
            link: link,
            restrict: 'A',
            scope: {
                lat: '@lat',
                lon: '@lon',
                ilat: '@ilat',
                ilon: '@ilon'
            }
        };
        return directiveOptions;

        ////////////////

        function link(scope, element, attrs) {

            scope.initialize = function () {

                var myMapOptions, map, marker, circle, dynamicCircle;
                var div = element[0];

                myMapOptions = mapInit.mapOptions(14, attrs.lat, attrs.lon);
                map = mapInit.mapCreator(div, myMapOptions);
                marker = mapInit.mapMarker(map, attrs.lat, attrs.lon);
                circle = mapInit.gpsCircle(map, attrs.ilat, attrs.ilon);
                dynamicCircle = mapInit.dynamicCircle(map, circle);
            };

            loadMapAPI.then(function () {

                //promise succeeded
                scope.initialize();
            }, function () {

                //promise failed
                /* jshint validthis: true */
                alert('Google maps is clearly not co-operating');
                /* jshint validthis: true */
            });
        }
    }
})();