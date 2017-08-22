'use strict';

/**
 * @ngdoc function
 * @name dashboard2017App.controller:UserprofilectrlCtrl
 * @description
 * # UserprofilectrlCtrl
 * Controller of the dashboard2017App
 */
angular.module('dashboard2017App')
  .controller('UserprofilectrlCtrl', ['$scope', '$firebaseAuth', 'userInfoService', '$state', '$window', function($scope, $firebaseAuth,
    userInfoService, $state, $window) {


    $scope.UID = userInfoService.getUserInfo().uid,
      $scope.FistName = {
        name: userInfoService.getUserInfo().displayName
      },
      $scope.Email = {
        name: userInfoService.getUserInfo().email
      },
      $scope.photoURL = userInfoService.getUserInfo().photoURL,
      $scope.signId = userInfoService.getUserInfo().providerId;



    $scope.updateUserinfo = function() {
      var user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: $scope.FistName.name,
        photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(function(success) {

        alert("Updated successfully");
        $window.location.reload();
        // Update successful.
      }, function(error) {
        // An error happened.
      });

    }


  }]);
