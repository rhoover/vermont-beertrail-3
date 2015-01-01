(function () {
    'use strict';

    angular
        .module('vtbt3')
        .directive('loadingSpinner', loadingSpinner);

    function loadingSpinner () {

        var directiveOptions = {
            controller: controller,
            link: link,
            restrict: 'A'
            // scope: '@loading-spinner'
        };
        return directiveOptions;

        ////////////////

        function controller($scope, $attrs, spinnerFactory){
            // spinnerFactory.notSpinning($scope.spk.show);
            // $scope.spinner = function () {
                // $scope.spk.show = spinnerFactory.spinning();
            // };
        }

        function link(scope, element, attrs) {
            scope.spk.show = 'hide';
            console.log(scope.spk.show);
            // scope.spinner = function () {
                // scope.spk.show = 'show';
                // $timeout(function () {
                //     scope.spk.show = spinnerFactory.spinning();
                // }, 250);
            // };
        }
    }
})();