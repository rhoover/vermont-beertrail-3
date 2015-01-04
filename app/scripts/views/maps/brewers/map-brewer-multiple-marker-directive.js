(function () {
    'use strict';

    angular
        .module('vtbt3')
        .directive('multipleMarkerMap', multipleMarkerMap);

    function multipleMarkerMap (loadMapAPI, mapInit) {

        var directiveOptions = {
            link: link,
            restrict: 'A'
        };
        return directiveOptions;

        ////////////////

        function link(scope, element, attrs) {

            scope.initialize = function () {

                var myMapOptions, map, marker, infoContent, infowindow;
                var div = element[0];
                myMapOptions = mapInit.mapOptions(7, 44.0407, -72.7093);
                map = mapInit.mapCreator(div, myMapOptions);

                for (var i = 0; i < scope.brewers.length; i++) {
                    marker = mapInit.mapMarker(map, scope.brewers[i].latitude, scope.brewers[i].longitude);
                    infoContent = '<p class="info-window-text">'+scope.brewers[i].name+'</br>'+
                    scope.brewers[i].address+'</br>'+
                    scope.brewers[i].city+'</p>'+
                    '<a href="#!/'+scope.brewers[i].selector+' ">Go To Listing</a>';
                    infowindow = mapInit.infoWindowCreator(infoContent);
                    mapInit.infoWindowsClick(map, marker, infowindow, infoContent);
                }

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