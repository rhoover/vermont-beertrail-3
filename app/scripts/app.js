(function() {
    'use strict';

    angular
        .module('vtbt3App', ['ngAnimate', 'ngTouch', 'ngRoute'])
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html'
            })
    };
})();