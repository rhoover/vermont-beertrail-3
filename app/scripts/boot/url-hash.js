(function () {
    'use strict';
    angular
        .module('vtbt3.urlHashing', [])
        .config(hashing);

        function hashing($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
})();