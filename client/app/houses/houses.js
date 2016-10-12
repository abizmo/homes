(function(){
  'use strict';

  angular.module('homesApp')
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/houses', {
          templateUrl: 'views/houses/houses.template.html',
          controller: 'HousesCtrl'
        })
        .when('/houses/:id', {
          templateUrl: 'views/houses/houses.show.template.html',
          controller: 'ShowCtrl'
        })
        .when('/addhouse', {
          templateUrl: 'views/houses/houses.add.template.html',
          controller: 'AddCtrl'
        });
    }]);
})();
