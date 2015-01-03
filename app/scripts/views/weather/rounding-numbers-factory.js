(function () {
    'use strict';

    angular
        .module('vtbt3')
        .factory('roundingNumbers', roundingNumbers);

    function roundingNumbers() {

        var serviceInterface = {
            roundNumber: roundNumber
        };
        return serviceInterface;

        ////////////////

        function roundNumber(number) {

                var rounded = Math.round(number);
                return rounded;
        }
    }
})();