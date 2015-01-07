(function () {
    'use strict';

    angular
        .module('vtbt3')
        .directive('loadingSpinner', loadingSpinner);

    function loadingSpinner($rootScope) {

        var directiveOptions = {
            link: link,
            restrict: 'A',
            scope: '@'
        };
        return directiveOptions;

        ////////////////

        function link(scope, element, attrs) {

            var updateFromRoot = function () {
                element.addClass('spinner-show');
            };


            $rootScope.$on('requesting', updateFromRoot);
            scope.$on('destroy', $rootScope.$on('requesting'));
        }
    }
})();