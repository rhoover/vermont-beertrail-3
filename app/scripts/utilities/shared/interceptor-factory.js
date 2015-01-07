//Not bieng used but kepy her for historical and reference purposes

(function () {
    'use strict';

    angular
        .module('vtbt3')
        .factory('interceptorFactory', interceptorFactory);

    function interceptorFactory(spinnerFactory) {

        return {
            request: function (config) {
                if (config.method === 'JSONP') {
                    spinnerFactory.register('requesting');
                }
                return config;
            }
            // response: function (result) {
            //     if (typeof result.data === 'object') {
            //         spinnerFactory.cleaning('hide');
            //     }
            //     return result;
            // }
        };
    }
})();