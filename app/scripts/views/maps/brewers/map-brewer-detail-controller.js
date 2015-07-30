(function () {
    'use strict';

    angular
        .module('vtbt3')
        .controller('BrewerMapCtrl', BrewerMapCtrl);

    function BrewerMapCtrl($scope, $routeParams, $window, userLocation, storageFactory, findDataFilter, brewerCacheKey) {

        var spk = this;

        goForthAndBind();

        ////////////////

        function goForthAndBind() {
            spk.brewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $routeParams.selector);
            userLocation.gpsCoords().then(function(position) {
                console.log(position);
                $scope.ilat = position.coords.latitude;
                $scope.ilon = position.coords.longitude;
            });
            //Leaving this here for historical and reference purposes
            // $window.navigator.geolocation.watchPosition(function (position) {
            //     console.log(position);
            //     $scope.$apply(function () {
            //         $scope.ilat = position.coords.latitude;
            //         $scope.ilon = position.coords.longitude;
            //     });
            // });
        }
    }
})();