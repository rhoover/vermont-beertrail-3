(function () {
    'use strict';
    angular
        .module('vtbt3')
        .directive('buttonBack', buttonBack);

    function buttonBack() {

        var directiveOptions = {
            restrict: 'A',
            scope: {},
            link: link
        };
        return directiveOptions;

        function link(scope, element, attrs) {
            element.on('click', function () {
                scope.$apply(function () {
                    history.back();
                });
            });
        }


    }
})();