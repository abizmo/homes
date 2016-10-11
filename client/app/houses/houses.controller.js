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
  .controller('ShowCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
    $scope.house = {};
    $scope.edit = false;
    var houseInfo = {};

    $http.get('/api/houses/' + $routeParams.id)
      .success(function (response) {
        $scope.house = response;
      })
      .error(function (err) {
        console.log(err);
      });

    $scope.delete = function (id) {
      console.log(id);
      $http.delete('/api/houses/' + id)
        .success(function (response) {
          $location.path('/');
        })
        .error(function (err) {
          console.log(err);
        });
    };

    $scope.editHouse = function () {
      $scope.edit = true;
      houseInfo = Object.assign({}, $scope.house);
    };

    $scope.cancelEditHouse = function () {
      $scope.house = Object.assign({}, houseInfo);
      $scope.edit = false;
    };

    $scope.saveEditHouse = function (house) {
      $http.put('/api/houses/' + house._id, house)
        .success(function (response) {
          $scope.edit = false;
          houseInfo = '';
        })
        .error(function (err) {
          $scope.edit = false;
          $scope.house = Object.assign({}, houseInfo);
        });
    };
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
