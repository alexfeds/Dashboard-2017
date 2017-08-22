'use strict';

/**
 * @ngdoc function
 * @name dashboard2017App.controller:MenucontrollerCtrl
 * @description
 * # MenucontrollerCtrl
 * Controller of the dashboard2017App
 */
angular.module('dashboard2017App')
  .controller('MenucontrollerCtrl', function($scope) {


    // $(function() {
    //       $('.toggle-nav').click(function() {
    //           // Calling a function in case you want to expand upon this.
    //           toggleNav();
    //           console.log("Hey");
    //       });
    //   });


    $scope.Mainclick = function() {


      toggleNav();
    }

    $("li").click(function(e) {
      e.stopPropagation();

      e.preventDefault();
      $('#site-wrapper').removeClass('show-nav');
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


  });
