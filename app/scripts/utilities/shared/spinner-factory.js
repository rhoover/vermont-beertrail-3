(function () {
    'use strict';

    angular
        .module('vtbt3')
        .factory('spinnerFactory', spinnerFactory);

    function spinnerFactory() {

        var cache = {};

        var serviceInterface = {
            register: register,
            unRegister: unRegister,
            spinning: spinning,
            notSpinning: notSpinning
        };
        return serviceInterface;

        ////////////////

        function register(obj) {
            console.log('register ' +obj);
            cache['start'] = obj;
        }

        function unRegister(obj) {
            console.log('register ' +obj);
            cache['finished'] = obj;
        }

        function spinning() {
            console.log(cache.start);
            return cache.start;
        }

        function notSpinning() {
            console.log(cache.finished);
            return cache.finished;
        }

    }
})();