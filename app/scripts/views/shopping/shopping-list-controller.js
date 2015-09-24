(function () {
  'use strict';

  angular
    .module('vtbt3')
    .controller('ListShoppingCtrl', ListShoppingCtrl);

  function ListShoppingCtrl($routeParams, storageFactory, sortDataFilter, findDataFilter, shoppingCacheKey, brewerCacheKey) {

    var spk = this;

    goForthAndBind();

    ////////////////

    function goForthAndBind() {

        spk.shoppingList = sortDataFilter.businessSort(storageFactory.getData($routeParams.selector + '-' + shoppingCacheKey).businesses);
        spk.brewer = findDataFilter.brewerFind(storageFactory.getData(brewerCacheKey), $routeParams.selector);
    }
  }
})();