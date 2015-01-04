(function () {
    'use strict';

    angular
        .module('vtbt3')
        .controller('BrewerMapCtrl', BrewerMapCtrl);

    function BrewerMapCtrl($scope, $routeParams, $window, storageFactory, findDataFilter, brewerCacheKey) {
        /*jshint validthis: true */
        var spk = this;

        goForthAndBind();

        ////////////////

        function goForthAndBind() {
            spk.brewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $routeParams.selector);
        }
    }
})();