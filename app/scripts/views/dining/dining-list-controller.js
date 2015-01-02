(function() {
    'use strict';

    angular
        .module('vtbt3')
        .controller('ListDiningCtrl', ListDiningCtrl);

    function ListDiningCtrl($routeParams, storageFactory, sortDataFilter, findDataFilter, diningCacheKey, brewerCacheKey) {

        var spk = this;

        goForthAndBind();

        ////////////////

        function goForthAndBind() {

            spk.diningList = sortDataFilter.businessSort(storageFactory.getData($routeParams.selector + '-' + diningCacheKey).businesses);
            spk.brewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $routeParams.selector);
        }
    }
})();