'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/shots/:id', {templateUrl: 'partials/shot.html', controller: ShotsCtrl});
    $routeProvider.when('/:list', {templateUrl: 'partials/shots_list.html', controller: ShotsListCtrl});
    $routeProvider.otherwise({redirectTo: '/popular'});
  }]);
