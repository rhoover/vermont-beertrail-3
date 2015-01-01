(function () {
    'use strict';

    angular
        .module('vtbt3.routing', [])
        .config(routing);

        function routing($routeProvider) {

            var brewers = function (resolveBrewers) {
                return resolveBrewers.brewers();
            };
            var dining = function (resolveDining) {
                return resolveDining.dining();
            };

            $routeProvider
                .when('/', {
                    templateUrl: 'partials/home.html'
                })
                .when('/brewerlist', {
                    templateUrl: 'partials/brewers/brewer-list.html',
                    controller: 'ListBrewerCtrl',
                    controllerAs: 'spk',
                    resolve: {
                        brewers: brewers
                    }
                })
                .when('/brewermap', {
                    templateUrl: 'partials/brewers/brewer-statewide-map.html',
                    controller: 'BrewerStatewideMapCtrl',
                    controllerAs: 'spk',
                    resolve: {
                        brewers: brewers
                    }
                })
                .when('/:selector', {
                    templateUrl: 'partials/brewers/brewer-detail.html',
                    controller: 'BrewerDetailCtrl',
                    controllerAs: 'spk',
                    resolve: {
                        brewers: brewers
                    }
                })
                .when('/:selector/location', {
                    templateUrl: 'partials/brewers/brewer-detail-map.html',
                    controller: 'BrewerMapCtrl',
                    controllerAs: 'spk',
                    resolve: {
                        brewers: brewers
                    }
                })
                .when('/:selector/weather', {
                    templateUrl: 'partials/weather/weather.html',
                    controller: 'WeatherCtrl',
                    controllerAs: 'spk',
                    // resolve: {
                    //     weather: weather
                    // }
                })
                .when('/:selector/dininglist', {
                    templateUrl: 'partials/dining/dining-list.html',
                    controller: 'ListDiningCtrl',
                    controllerAs: 'spk',
                    resolve: {
                        dining: dining
                    }
                })
                .when('/:selector/dininglist/:id', {
                    templateUrl: 'partials/dining/dining-map.html',
                    controller: 'DiningMapCtrl',
                    controllerAs: 'spk',
                    resolve: {
                        brewers: brewers
                    }
                })
                .when('/:selector/shoppinglist', {
                    templateUrl: 'partials/shopping/shopping-list.html',
                    controller: 'ListShoppingCtrl',
                    controllerAs: 'spk',
                    // resolve: {
                    //     shopping: shopping
                    // }
                })
                .when('/:selector/shoppinglist/:id', {
                    templateUrl: 'partials/shopping/shopping-map.html',
                    controller: 'ShoppingMapCtrl',
                    controllerAs: 'spk',
                    resolve: {
                        brewers: brewers
                    }
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
})();