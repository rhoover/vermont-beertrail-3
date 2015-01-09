(function () {
    'use strict';

    angular
        .module('vtbt3.httpInterceptor', [])
        .config(requesting);

        function requesting($httpProvider) {
            $httpProvider.interceptors.push('interceptorFactory');
        }
})();