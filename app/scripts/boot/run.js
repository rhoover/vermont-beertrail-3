    (function () {
    'use strict';

    angular
        .module('vtbt3.runFunctions', [])
        .run(running);

        function running ($rootScope, $timeout, $window, $location) {
            $rootScope.$on('$routeChangeSuccess', function () {
                ga('send', 'pageview', $location.path());
                $timeout(function () {
                    $window.scrollTo(0,0);
                }, 500);
            });
        }
})();