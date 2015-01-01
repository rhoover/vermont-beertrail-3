(function () {
    'use strict';

    angular
        .module('vtbt3')
        .factory('interceptorFactory', interceptorFactory);

    function interceptorFactory(spinnerFactory) {

        return {
            request: function (config) {
                // if (config.cache === false) {
                if (config.method === 'JSONP') {
                    spinnerFactory.register('show');
                }
                return config;
            },
            response: function (result) {
                if (typeof result.data === 'object') {
                    spinnerFactory.unRegister('hide');
                }
                return result;
            }
        };
    }
})();