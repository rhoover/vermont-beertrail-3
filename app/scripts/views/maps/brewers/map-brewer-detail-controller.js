(function () {
    'use strict';

    angular
        .module('vtbt3')
        .controller('BrewerMapCtrl', BrewerMapCtrl);

    function BrewerMapCtrl($scope, $routeParams, $window, storageFactory, findDataFilter, brewerCacheKey) {

        var spk = this;

        goForthAndBind();

        ////////////////

        function goForthAndBind() {
            spk.brewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $routeParams.selector);
            $window.navigator.geolocation.watchPosition(function (position) {
                $scope.$apply(function () {
                    $scope.ilat = position.coords.latitude;
                    $scope.ilon = position.coords.longitude;
                });
            });
        }
    }
})();