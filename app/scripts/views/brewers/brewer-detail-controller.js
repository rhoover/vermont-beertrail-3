(function () {
    'use strict';

    angular
        .module('vtbt3')
        .controller('BrewerDetailCtrl', BrewerDetailCtrl);

    function BrewerDetailCtrl($scope, $routeParams, $timeout, storageFactory, findDataFilter, brewerCacheKey) {

        var spk = this;

        goForthAndBind();

        ////////////////

        function goForthAndBind() {

            spk.brewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $routeParams.selector);
            $scope.brewer = spk.brewer; //because res-img directive needs scope object information
        }
    }
})();