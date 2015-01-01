(function () {
    'use strict';

    angular
        .module('vtbt3')
        .factory('spinnerFactory', spinnerFactory);

    function spinnerFactory() {

        var ajaxCalls = {};

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
            ajaxCalls['start'] = obj;
        }

        function unRegister(obj) {
            console.log('register ' +obj);
            ajaxCalls['finished'] = obj;
        }

        function spinning() {
            console.log(ajaxCalls.start);
            return ajaxCalls.start;
        }

        function notSpinning() {
            console.log(ajaxCalls.finished);
            return ajaxCalls.finished;
        }

    }
})();