'use strict';

angular.module('homesApp')
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/houses', {
        templateUrl: 'app/houses/houses.template.html',
        controller: 'HousesCtrl'
      })
      .when('/houses/:id', {
        templateUrl: 'app/houses/houses.show.template.html',
        controller: 'ShowCtrl'
      })
      .when('/addhouse', {
        templateUrl: 'app/houses/houses.add.template.html',
        controller: 'AddCtrl'
      });
  });
