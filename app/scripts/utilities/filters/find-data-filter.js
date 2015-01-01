(function () {
    'use strict';

    angular
        .module('vtbt3')
        .filter('findData', findData);

        function findData () {

            var filterInterface = {
                brewerFind: brewerFind,
                businessFind: businessFind
            };
            return filterInterface;

            ////////////////

            function brewerFind(brewerInput, brewerArg) {//input is the json file, arg is the selector property
                var foundBrewer = [];
                angular.forEach(brewerInput, function (brewerObject) {
                    if (brewerObject.selector === brewerArg) {
                        this.push(brewerObject);
                    }
                }, foundBrewer);
                return foundBrewer.shift(); //pulls object out of array
            }

            function businessFind(businessInput, businessArg) {
                var foundBusiness = [];
                angular.forEach(businessInput, function (businessObject) {
                    if (businessObject.id === businessArg) {
                        this.push(businessObject);
                    }
                }, foundBusiness);
                return foundBusiness.shift();
            }
    }
})();