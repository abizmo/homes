(function(){
  'use strict';

  angular.module('homesApp', [
    'ngRoute'
  ])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $routeProvider.otherwise({
        redirectTo: '/houses'
      });

      $locationProvider.html5Mode(true);
    }]);
})();
