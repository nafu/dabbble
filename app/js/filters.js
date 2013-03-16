'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]).
  filter('dabbbleDate', function($filter) {
    return function(value, format) {
      if (value) {
        value = Date.parse(value);
      }
      return $filter('date')(value, format);
    }
  });
