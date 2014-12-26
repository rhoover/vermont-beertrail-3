(function () {
    'use strict';

    angular
        .module('vtbt3')
        .directive('resImg', resImg);

    function resImg () {

        var directiveOptions = {
            template: '<img class="brewerdetail-image"/>',
            link: link,
            restrict: 'E',
            replace: true,
        };
        return directiveOptions;

        ////////////////

        function link(scope, element, attrs) {
            var pseudoResult = getComputedStyle(element[0], ':after').content;
            pseudoResult = pseudoResult.replace(/"/g,''); //Because Firefox keeps quotes from content
            switch (pseudoResult) {
                case 'phone' :
                    element.attr('src', 'images/brewer100/' + scope.brewer.selector + '.png');
                break;
                case 'tablet' :
                    element.attr('src', 'images/brewer200/' + scope.brewer.selector + '.png');
                break;
                case 'computer' :
                    element.attr('src', 'images/brewer200/' + scope.brewer.selector + '.png');
                break;
            }
        }
    }
})();