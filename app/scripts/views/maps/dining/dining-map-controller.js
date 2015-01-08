(function () {
    'use strict';

    angular
        .module('vtbt3')
        .controller('DiningMapCtrl', DiningMapCtrl);

    function DiningMapCtrl($routeParams, storageFactory, findDataFilter, diningCacheKey) {

        var spk = this;

        goForthAndBind();

        ////////////////

        function goForthAndBind() {

            var findTheBusiness = findDataFilter.businessFind(storageFactory.getData($routeParams.selector + '-' + diningCacheKey).businesses, $routeParams.id);
            spk.dining = findTheBusiness;
        }
    }
})();