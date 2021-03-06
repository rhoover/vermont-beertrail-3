(function() {
    'use strict';

    angular
        .module('vtbt3')
        .directive('homeBrewerPrefetch', homeBrewerPrefetch);

    function homeBrewerPrefetch ($timeout, resolveBrewers) {

        var directiveOptions = {
            link: link,
            restrict: 'A',
            scope: {}
        };
        return directiveOptions;

        ////////////////

        function link(scope, element, attrs) {
            angular.element(document).ready(function () {
                resolveBrewers.brewers();
            });
        }
    }
})();