(function () {
  'use strict';

  angular
    .module('vtbt3')
    .factory('yelpFactory', yelpFactory);

  function yelpFactory($http, $route, $window) {

    var serviceInterface = {
      yelpInfo: yelpInfo
    };
    return serviceInterface;

    ////////////////

    function yelpInfo(lat, lon, term) {

      // yelpapi v1:
      // return $http.jsonp('https://api.yelp.com/business_review_search?' + 'limit=20' + '&category=shopping+arts+active+localservices+localflavor+food+tours+auto' + '&lat=' + lat + '&long=' + lon + '&ywsid=' + yelpKey + '&callback=JSON_CALLBACK', {cache: false})

      // Courtesy: http://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript
      function randomString(length, chars) {
        var randomNonce = '';
        for (var i = length; i > 0; --i) randomNonce += chars[Math.round(Math.random() * (chars.length - 1))];
        return randomNonce;
      }

      var rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
      var method = 'GET';
      var url = 'https://api.yelp.com/v2/search';
      var countMe = String($window.angular.callbacks.counter);
      // I'm very aware, this really shouldn't be here, but not being at all fluent with php, I just couldn't get Yelp's
      // php library to work: https://github.com/Yelp/yelp-api/tree/master/v2/php
      var params = {
        oauth_consumer_key: 'S9zce7TcI65-FAZT5YTljw',
        oauth_token: 'qio9N1uymGwtlj4D20X9B36CXIYSsGsd',
        oauth_signature_method: 'HMAC-SHA1',
        oauth_timestamp: new Date().getTime(),
        oauth_nonce: rString,
        ll: lat + ',' + lon,
        term: term,
        callback: 'angular.callbacks._' + countMe
      }
      var consumerSecret = 'eQfDXbMnsTD8UANdCWs11gJnCY0';
      var tokenSecret = 'v8kTDKELFJhXB_FwcqdRYDI85uE';
      var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret);

      params.oauth_signature = signature;

      return $http.jsonp(url, {params:params,cache:false})
      .then(function (result) {
        return result.data;
      }, function (result) {
        console.log(result)
      });
    }
  }
})();