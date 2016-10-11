'use strict'

angular.module('homesApp')
  .controller('HousesCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.houses = [];

    $http.get('/api/houses')
      .success(function (response) {
        $scope.houses = response;
      })
      .error(function (err) {
        console.log(err);
      });
  }])
  .controller('ShowCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.house = {};
    $http.get('/api/houses/' + $routeParams.id)
      .success(function (response) {
        $scope.house = response;
      })
      .error(function (err) {
        console.log(err);
      });
  }])
  .controller('AddCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.house = {};

    $scope.addHouse = function () {
      $http.post('/api/houses', $scope.house)
        .success(function (response) {
          $location.path('/');
        })
        .error(function (err) {
          console.log(err);
        });
    }
  }]);
