'use strict';

angular.module('homesApp', [
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/houses'
    });

    $locationProvider.html5Mode(true);
  });
