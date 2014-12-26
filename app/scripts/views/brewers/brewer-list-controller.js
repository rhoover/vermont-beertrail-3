(function () {
    'use strict';

    angular
        .module('vtbt3')
        .controller('ListBrewerCtrl', ListBrewerCtrl);

    function ListBrewerCtrl(storageFactory, brewerCacheKey) {

        var lbC = this;

        activate();

        ////////////////

        function activate() {

            lbC.brewerList = storageFactory.getData(brewerCacheKey);
        }
    }
})();