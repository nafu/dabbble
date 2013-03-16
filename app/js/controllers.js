'use strict';

/* Controllers */


function ShotsListCtrl($scope, $routeParams, dribbble) {
  var list = $routeParams.list;

  dribbble.list(list).then(function (data) {
    $scope.list = data.data;
  })
}
ShotsListCtrl.$inject = ['$scope', '$routeParams', 'dribbble'];

function ShotsCtrl($scope, $routeParams, dribbble) {
  var id = $routeParams.id;

  dribbble.shot(id).then(function (data) {
    $scope.shot = data.data;
  })
}
ShotsCtrl.$inject = ['$scope', '$routeParams', 'dribbble'];
