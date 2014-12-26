(function() {
    'use strict';

    angular
        .module('vtbt3')
        .controller('ListDiningCtrl', ListDiningCtrl);

    function ListDiningCtrl($routeParams, storageFactory, sortDataFilter, findDataFilter, diningCacheKey, brewerCacheKey) {

        var ldC = this;

        goForthAndBind();

        ////////////////

        function goForthAndBind() {

            ldC.diningList = sortDataFilter.businessSort(storageFactory.getData($routeParams.selector + '-' + diningCacheKey).businesses);
            ldC.brewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $routeParams.selector);
        }
    }
})();