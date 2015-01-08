(function () {
    'use strict';

    angular
        .module('vtbt3')
        .controller('BrewerMapCtrl', BrewerMapCtrl);

    function BrewerMapCtrl($routeParams, $window, storageFactory, findDataFilter, brewerCacheKey) {

        var spk = this;

        goForthAndBind();

        ////////////////

        function goForthAndBind() {
            spk.brewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $routeParams.selector);
        }
    }
})();