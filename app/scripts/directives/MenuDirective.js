'use strict';

/**
 * @ngdoc directive
 * @name dashboard2017App.directive:headerdirective
 * @description
 * # headerdirective
 */
angular.module('dashboard2017App')
  .directive('menudirective', function () {
    return {
      templateUrl: 'views/partials/menu.html',
      controller: 'MenucontrollerCtrl'



   };
  });
