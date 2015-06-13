'use strict';


angular.module('blogApp.BlogCtrl', [])
  .controller('BlogCtrl',['$scope', '$http', function($scope, $http){
    $http.get('data/posts.json')
      .success(function(data){
        $scope.posts = data;
      })
      .error(function(data){
        console.log('poopy ' + data);
      });
  }]);
