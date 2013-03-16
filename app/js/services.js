'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  factory('dribbble', function($http) {
    return {
      list: function (type) {
        return $http.jsonp('http://api.dribbble.com/shots/' + type + '?callback=JSON_CALLBACK');
      }
    };
  });
