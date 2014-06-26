'use strict';

angular.module('stevieApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.search = function(text) {
      $http.get('/api/search/videos?query=' + text).success(function(data) {
        $scope.data = data;
      });
    };
  });
