(function () {
    'use strict';

    angular
        .module('vtbt3')
        .factory('brewerFactory', brewerFactory);

    function brewerFactory($http, spinnerFactory) {

        var serviceInterface = {
            fetchBrewerData: fetchBrewerData
        };
        return serviceInterface;

        ////////////////

        function fetchBrewerData() {
            return $http.get('data/vtbrewers.json', {cache: false})
                .then(function (result) {
                    return result.data;
                });
        }
    }
})();