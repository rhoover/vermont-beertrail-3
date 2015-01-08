(function () {
    'use strict';

    angular
        .module('vtbt3')
        .controller('ShoppingMapCtrl', ShoppingMapCtrl);

    function ShoppingMapCtrl($routeParams, $location, storageFactory, findDataFilter, shoppingCacheKey) {

        var spk = this;

        goForthAndBind();

        ////////////////

        function goForthAndBind() {

            var findTheBusiness = findDataFilter.businessFind(storageFactory.getData($routeParams.selector + '-' + shoppingCacheKey).businesses, $routeParams.id);
            spk.shopping = findTheBusiness;
        }
    }
})();