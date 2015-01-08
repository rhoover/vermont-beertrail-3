(function () {
    'use strict';

    angular
        .module('vtbt3')
        .controller('ListBrewerCtrl', ListBrewerCtrl);

    function ListBrewerCtrl(storageFactory, brewerCacheKey) {

        var spk = this;
        spk.brewerList = [];

        goForthAndBind();

        ////////////////

        function goForthAndBind() {

            spk.brewerList = storageFactory.getData(brewerCacheKey);
        }
    }
})();