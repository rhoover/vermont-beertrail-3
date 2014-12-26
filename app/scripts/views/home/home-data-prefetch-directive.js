(function() {
    'use strict';

    angular
        .module('vtbt3')
        .directive('homeDataPrefetch', homeDataPrefetch);

    function homeDataPrefetch ($timeout, resolveBrewers) {

        var directiveOptions = {
            link: link,
            restrict: 'A',
            scope: {}
        };
        return directiveOptions;

        ////////////////

        function link(scope, element, attrs) {
            $timeout(function(){
                resolveBrewers.brewers();
            }, 3000);
        }
    }
})();