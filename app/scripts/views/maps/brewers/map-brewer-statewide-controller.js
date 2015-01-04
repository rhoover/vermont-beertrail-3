(function () {
    'use strict';

    angular
        .module('vtbt3')
        .controller('BrewerStatewideMapCtrl', BrewerStatewideMapCtrl);

    function BrewerStatewideMapCtrl($scope, storageFactory, brewerCacheKey) {

        var spk = this;

        goForthAndBind();

        ////////////////

        function goForthAndBind() {

            spk.brewers = storageFactory.getData(brewerCacheKey);
            $scope.brewers = spk.brewers;
        }
    }
})();