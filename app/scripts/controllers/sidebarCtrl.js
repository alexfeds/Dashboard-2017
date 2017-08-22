'use strict';

/**
 * @ngdoc function
 * @name dashboard2017App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dashboard2017App
 */
angular.module('dashboard2017App')
  .controller('ClickedCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
$(function() {
  $('.toggle-nav').click(function() {
    // Calling a function in case you want to expand upon this.
    toggleNav();
  });
});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleNav() {
if ($('#site-wrapper').hasClass('show-nav')) {
  // Do things on Nav Close
  $('#site-wrapper').removeClass('show-nav');
} else {
  // Do things on Nav Open
  $('#site-wrapper').addClass('show-nav');
}

//$('#site-wrapper').toggleClass('show-nav');
}

}]);
