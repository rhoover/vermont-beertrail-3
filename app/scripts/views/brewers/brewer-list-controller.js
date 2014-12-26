(function () {
    'use strict';

    angular
        .module('vtbt3')
        .controller('ListBrewerCtrl', ListBrewerCtrl);

    function ListBrewerCtrl(storageFactory, brewerCacheKey) {

        var lbC = this;

        goForthAndBind();

        ////////////////

        function goForthAndBind() {

            lbC.brewerList = storageFactory.getData(brewerCacheKey);
        }
    }
})();