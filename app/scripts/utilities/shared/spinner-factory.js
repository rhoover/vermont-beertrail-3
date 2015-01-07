(function () {
    'use strict';

    angular
        .module('vtbt3')
        .factory('spinnerFactory', spinnerFactory);

    function spinnerFactory($rootScope) {

        var serviceInterface = {
            register: register
        };
        return serviceInterface;

        ////////////////

        function register(name) {
            $rootScope.$emit(name);
        }
    }
})();