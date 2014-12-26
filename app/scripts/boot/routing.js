(function () {
    'use strict';
    angular
        .module('vtbt3.routing', [])
        .config(routing);

        function routing($routeProvider) {

            var brewers = function (resolveBrewers) {
                return resolveBrewers.brewers();
            };

            $routeProvider
                .when('/', {
                    templateUrl: 'views/home.html'
                })
                .when('/brewerlist', {
                    templateUrl: 'views/brewer-list.html',
                    controller: 'ListBrewerCtrl',
                    controllerAs: 'lbC',
                    resolve: {
                        brewers: brewers
                    }
                })
                .when('/brewermap', {
                    templateUrl: 'views/brewer-statewide-map.html',
                    controller: 'BrewerStatewideMapCtrl',
                    controllerAs: 'bsmC',
                    // resolve: {
                    //     brewers: brewers
                    // }
                })
                .when('/:selector', {
                    templateUrl: 'views/brewer-detail.html',
                    controller: 'BrewerDetailCtrl',
                    controllerAs: 'bdC',
                    resolve: {
                        brewers: brewers
                    }
                })
                .when('/:selector/location', {
                    templateUrl: 'views/brewer-detail-map.html',
                    controller: 'BrewerMapCtrl',
                    controllerAs: 'bmC',
                    resolve: {
                        brewers: brewers
                    }
                })
                .when('/:selector/weather', {
                    templateUrl: 'views/weather.html',
                    controller: 'WeatherCtrl',
                    controllerAs: 'wC',
                    // resolve: {
                    //     weather: weather
                    // }
                })
                .when('/:selector/dininglist', {
                    templateUrl: 'views/dining-list.html',
                    controller: 'ListDiningCtrl',
                    controllerAs: 'ldC',
                    // resolve: {
                    //     dining: dining
                    // }
                })
                .when('/:selector/dininglist/:id', {
                    templateUrl: 'views/dining-map.html',
                    controller: 'DiningMapCtrl',
                    controllerAs: 'dmC',
                    resolve: {
                        brewers: brewers
                    }
                })
                .when('/:selector/shoppinglist', {
                    templateUrl: 'views/shopping-list.html',
                    controller: 'ListShoppingCtrl',
                    controllerAs: 'lsC',
                    // resolve: {
                    //     shopping: shopping
                    // }
                })
                .when('/:selector/shoppinglist/:id', {
                    templateUrl: 'views/shopping-map.html',
                    controller: 'ShoppingMapCtrl',
                    controllerAs: 'smC',
                    resolve: {
                        brewers: brewers
                    }
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
})();