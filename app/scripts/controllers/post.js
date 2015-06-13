'use strict';


angular.module('blogApp.PostCtrl', [])
  .controller('PostCtrl',['$scope', '$http', '$routeParams', function($scope,$http,$routeParams){
    $http.get('data/posts.json').success(function(data){
      $scope.post = data[$routeParams.id];
    });
  }]);
