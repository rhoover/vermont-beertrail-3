(function () {
    'use strict';

    angular
        .module('vtbt3')
        .controller('BrewerDetailCtrl', BrewerDetailCtrl);

    function BrewerDetailCtrl($scope, $routeParams, $timeout, storageFactory, findDataFilter, spinnerFactory, brewerCacheKey) {

        var spk = this;

        goForthAndBind();

        ////////////////

        function goForthAndBind() {

            spk.brewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $routeParams.selector);
            $scope.brewer = spk.brewer; //because res-img directive needs scope information
            // $scope.spinner = function () {
            //     spk.show = 'show';
            // };
            $scope.spinner = function () {
                $timeout(function () {
                    spk.show = spinnerFactory.spinning();
                    console.log('look here');
                }, 250);
            };
        }
    }
})();