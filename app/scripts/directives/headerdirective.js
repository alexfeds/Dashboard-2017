'use strict';

/**
 * @ngdoc directive
 * @name dashboard2017App.directive:headerdirective
 * @description
 * # headerdirective
 */
angular.module('dashboard2017App')
  .directive('headerdirective', function() {
    return {
      templateUrl: 'views/partials/header.html',
      controller: 'MenucontrollerCtrl'



    };
  });
