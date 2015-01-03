(function () {
    'use strict';

    angular
        .module('vtbt3')
        .directive('weatherSkycons', weatherSkycons);

    function weatherSkycons (skyconConvert) {

        var directiveOptions = {
            link: link,
            restrict: 'E',
            replace: true,
            scope: '@',
            template: '<canvas></canvas>'
        };
        return directiveOptions;

        ////////////////

        function link(scope, element, attrs) {
            var skycons = new Skycons({color:'grey', resizeClear:true});
            skycons.set(element[0], skyconConvert.skyconIcon(attrs.skycon));
            skycons.play();
        }
    }
})();