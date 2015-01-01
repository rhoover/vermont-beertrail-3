(function () {
    'use strict';

    angular
        .module('vtbt3')
        .directive('loadingSpinner', loadingSpinner);

    function loadingSpinner(spinnerFactory) {

        var directiveOptions = {
            link: link,
            restrict: 'A'
        };
        return directiveOptions;

        ////////////////

        function link(scope, element, attrs) {
            scope.spk.show = 'hide';
            scope.showSpinner = function () {
                scope.spk.show = 'show';
                element.children().addClass('spinner-progress');
            };
        }
    }
})();