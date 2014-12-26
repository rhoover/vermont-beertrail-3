(function () {
    'use strict';

    angular
        .module('vtbt3')
        .controller('BrewerDetailCtrl', BrewerDetailCtrl);

    function BrewerDetailCtrl($scope, $routeParams, storageFactory, findDataFilter, brewerCacheKey) {

        var bdC = this;

        goForthAndBind();

        ////////////////

        function goForthAndBind() {

            bdC.brewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $routeParams.selector);
            $scope.brewer = bdC.brewer; //because res-img directive needs scope information
        }
    }
})();