(function () {
    'use strict';

    angular
        .module('vtbt3')
        .controller('TitleCtrl', TitleCtrl);

    function TitleCtrl($scope, $routeParams, storageFactory, findDataFilter, brewerCacheKey) {

        var spk = this;

        goForthAndBind();

        ////////////////

        function goForthAndBind() {

            $scope.$on('$routeChangeSuccess', function (event, data) {

                var brewerData = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $routeParams.selector);
                var switchExpr = data.title;

                switch(switchExpr) {
                    case 'brewer':
                        $scope.title = brewerData.name;
                        break;
                    case 'brewer-map':
                        $scope.title = brewerData.name + ' | ' + 'Map Location';
                        break;
                    case 'brewers-map':
                        $scope.title = 'Statewide Brewers Map';
                        break;
                    case 'weather':
                        $scope.title = brewerData.name + ' | ' + 'Local Weather';
                        break;
                    case 'dining-list':
                        $scope.title = brewerData.name + ' | ' + 'Local Dining Options';
                        break;
                    case 'dining-map':
                        $scope.title = brewerData.name + ' | ' + 'Local Dining Options' + 'Map Location';
                        break;
                    case 'shopping-list':
                        $scope.title = brewerData.name + ' | ' + 'Local Shopping Options';
                        break;
                    case 'shopping-map':
                        $scope.title = brewerData.name + ' | ' + 'Local Shopping Options' + 'Map Location';
                        break;
                    default:
                        $scope.title = data.title;
                }
            });
        }
    }
})();