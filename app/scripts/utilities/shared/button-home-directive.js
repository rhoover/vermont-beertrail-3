(function () {
    'use strict';

    angular
        .module('vtbt3')
        .directive('buttonHome', buttonHome);

    function buttonHome($location) {

        var directiveOptions = {
            restrict: 'A',
            scope: {},
            link: link
        };
        return directiveOptions;

        ////////////////

        function link(scope, element, attrs) {
            element.on('click', function () {
                scope.$apply(function () {
                    $location.path('/');
                });
            });
        }
    }
})();