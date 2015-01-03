(function () {
    'use strict';

    angular
        .module('vtbt3')
        .factory('skyconConvert', skyconConvert);

    function skyconConvert() {

        var serviceInterface = {
            skyconIcon: skyconIcon
        };
        return serviceInterface;

        ////////////////

        function skyconIcon(icon) {

                switch(icon) {
                    case 'clear-day':
                        return Skycons.CLEAR_DAY;
                    case 'clear-night':
                        return Skycons.CLEAR_NIGHT;
                    case 'partly-cloudy-day':
                        return Skycons.PARTLY_CLOUDY_DAY;
                    case 'partly-cloudy-night':
                        return Skycons.PARTLY_CLOUDY_NIGHT;
                    case 'cloudy':
                        return Skycons.CLOUDY;
                    case 'rain':
                        return Skycons.RAIN;
                    case 'sleet':
                        return Skycons.SLEET;
                    case 'snow':
                        return Skycons.SNOW;
                    case 'wind':
                        return Skycons.WIND;
                    case 'fog':
                        return Skycons.FOG;
                }
        }
    }
})();