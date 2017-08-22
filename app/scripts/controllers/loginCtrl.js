'use strict';

/**
 * @ngdoc function
 * @name dashboard2017App.controller:LogincontrollerCtrl
 * @description
 * # LogincontrollerCtrl
 * Controller of the dashboard2017App
 */
angular.module('dashboard2017App')
  .controller('LogincontrollerCtrl', ['$scope', '$firebaseAuth', '$mdDialog', '$state', '$rootScope', function($scope, $firebaseAuth, $mdDialog, $state, $rootScope) {




    //////////SINGIN//////////////

    $scope.SignIn = function() {
      var email = $scope.user.email;
      var password = $scope.user.password;




      $scope.authObj.$signInWithEmailAndPassword(email, password)
        .then(function(authData) {

          $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Logged in successfully')
            .ok('Ok')
            .targetEvent(authData)
          );


          $state.go('carRecord');
          $scope.$root.loggedinshow = true;
          $scope.$root.loggeinhide = false;

        }).catch(function(error) {

          $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Username or password is incorrect!')
            .ok('Ok')
            .targetEvent(error)

          );


        });


    };




    $scope.name = '';
    $scope.message = false;


    var ref = firebase.database().ref();
    $scope.authObj = $firebaseAuth();


    $scope.$root.loggedinshow = false;
    $scope.$root.loggeinhide = true;




    //////////////////STATE CHANGE//////////

    $scope.authObj.$onAuthStateChanged(function(firebaseUser) {

      if (firebaseUser) {
        console.log("Signed in as:", firebaseUser.uid);
        $rootScope.UserSpecialID = firebaseUser.uid;
        console.log("I AM SIGNED IN!!!!!");
        $scope.$root.loggedinshow = true;
        $scope.$root.loggeinhide = false;
      } else {
        console.log("Signed out");
        $scope.$root.loggedinshow = false;
        $scope.$root.loggeinhide = true;


      }
    });




    ///////SIGNOUT////////////////////

    $scope.SignOut = function() {
      $scope.authObj.$signOut();
    }







  }]);
