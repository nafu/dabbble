'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  factory('dribbble', function($http) {
    function load(path, params) {
      return $http.jsonp('http://api.dribbble.com' + path + '?callback=JSON_CALLBACK');
    }

    return {
      list: function (type) {
        return load("/shots/" + type);
      },
      shot: function (id) {
        return load("/shots/" + id);
      }
    };
  });
