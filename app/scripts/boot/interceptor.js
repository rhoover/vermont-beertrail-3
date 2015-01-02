//Not bieng used but kepy her for historical and reference purposes

(function () {
    'use strict';

    angular
        .module('vtbt3.interceptor', [])
        .config(requesting);
        // .config();
        // .run(requesting);

        function requesting($httpProvider) {
            $httpProvider.interceptors.push('interceptorFactory');
        }
})();