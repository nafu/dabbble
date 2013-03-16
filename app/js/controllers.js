'use strict';

/* Controllers */


function ShotsListCtrl($scope, $routeParams, $http) {
  var list = $routeParams.list;

  $http.jsonp('http://api.dribbble.com/shots/' + list + '?callback=JSON_CALLBACK').then(function (data) {
    $scope.list = data.data;
  });
}
ShotsListCtrl.$inject = ['$scope', '$routeParams', '$http'];

function ShotsCtrl($scope, $routeParams, $http) {
  var id = $routeParams.id;

  $http.jsonp('http://api.dribbble.com/shots/' + id + '?callback=JSON_CALLBACK').then(function (data) {
    $scope.shot = data.data;
    console.log(data);
  });
}
ShotsCtrl.$inject = ['$scope', '$routeParams', '$http'];
