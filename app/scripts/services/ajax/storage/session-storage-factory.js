(function() {
    'use strict';

    angular
        .module('vtbt3')
        .factory('storageFactory', storageFactory);

    function storageFactory() {

        var serviceInterface = {
            storeData: storeData,
            getData: getData
        };
        return serviceInterface;

        ////////////////

        function storeData(key, data) {
            sessionStorage.setItem(key, angular.toJson(data));
        }

        function getData(key) {
            return angular.fromJson(sessionStorage.getItem(key));
        }
    }
})();