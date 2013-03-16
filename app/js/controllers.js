'use strict';

/* Controllers */


function ShotsListCtrl($scope, $routeParams, $http, dribbble) {
  var list = $routeParams.list;

  dribbble.list(list).then(function (data) {
    $scope.list = data.data;
  })
}
ShotsListCtrl.$inject = ['$scope', '$routeParams', '$http', 'dribbble'];

function ShotsCtrl($scope, $routeParams, $http) {
  var id = $routeParams.id;

  $http.jsonp('http://api.dribbble.com/shots/' + id + '?callback=JSON_CALLBACK').then(function (data) {
    $scope.shot = data.data;
    console.log(data);
  });
}
ShotsCtrl.$inject = ['$scope', '$routeParams', '$http'];
