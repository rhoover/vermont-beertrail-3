(function () {
    'use strict';

    angular
        .module('vtbt3')
        .directive('homeMobile', homeMobile);

    homeMobile.$inject = ['$location', '$timeout'];

    function homeMobile ($location, $timeout) {

        var directiveOptions = {
            link: link,
            restrict: 'A',
            scope: {}
        };
        return directiveOptions;

        function link(scope, element, attrs) {
            var bodyResult = getComputedStyle(element[0], ':after').content;
            bodyResult = bodyResult.replace(/"/g,''); //Because Firefox keeps quotes from content

            switch (bodyResult) {
                case 'phone' :
                    scope.$on('$locationChangeSuccess', function () {
                        if ($location.path() === '/') {
                            $timeout(function(){
                                element.addClass('body-small-home');
                            }, 500);
                        } else {
                            $timeout(function(){
                                element.removeClass('body-small-home');
                            }, 500);
                        }
                    });
                break;
            }
        }
    }
})();