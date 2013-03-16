'use strict';

/* Controllers */


function ShotsListCtrl($scope, $routeParams, dribbble) {
  var list = $routeParams.list;

  dribbble.list(list).then(function (data) {
    $scope.list = data.data;
  })

  $scope.loadNextPage = function () {
    dribbble.list(list, {page: $scope.list.page + 1}).then(function (data){
      $scope.list.page = data.data.page;
      $scope.list.shots = $scope.list.shots.concat(data.data.shots);
    });
  }
}
ShotsListCtrl.$inject = ['$scope', '$routeParams', 'dribbble'];

function ShotsCtrl($scope, $routeParams, dribbble) {
  var id = $routeParams.id;

  dribbble.shot(id).then(function (data) {
    $scope.shot = data.data;
  })
}
ShotsCtrl.$inject = ['$scope', '$routeParams', 'dribbble'];
